# Progrès — mise en ligne

Application de suivi CrossFit, utilisable hors connexion, avec synchronisation
optionnelle entre appareils.

## Ce que contient le dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application entière |
| `manifest.webmanifest` | Permet l'installation sur l'écran d'accueil |
| `sw.js` | Service worker : fonctionnement hors connexion |
| `icon-192.png`, `icon-512.png` | Icônes de l'application |
| `supabase.sql` | Le schéma de base à exécuter une fois |

---

## Étape 1 — Créer la base (10 minutes)

1. Créer un compte sur **supabase.com**, puis un nouveau projet.
   Noter la région la plus proche (Europe West pour la France).
2. Aller dans **SQL Editor**, coller le contenu de `supabase.sql`, cliquer sur **Run**.
3. Aller dans **Project Settings → API** et relever deux valeurs :
   - **Project URL** (`https://xxxxx.supabase.co`)
   - **anon public** (une longue clé)
4. Ouvrir `index.html`, chercher `REMPLACE-MOI` (deux occurrences, tout en bas)
   et y coller ces deux valeurs.

La clé `anon` est **publique par conception** : elle est visible dans le code source
de n'importe quel site utilisant Supabase. La protection vient des règles RLS du
fichier SQL, qui empêchent un utilisateur de lire la ligne d'un autre. Ne jamais
mettre la clé `service_role` dans le fichier : celle-là contourne toutes les règles.

## Étape 2 — Déployer (5 minutes)

1. Créer un dépôt GitHub et y déposer les cinq fichiers **à la racine**.
2. Sur **vercel.com** : *Add New → Project*, importer le dépôt, **Deploy**.
   Aucune configuration : c'est un site statique.
3. Vercel donne une adresse du type `progres-crossfit.vercel.app`.

## Étape 3 — Autoriser la connexion par lien

Dans Supabase → **Authentication → URL Configuration** :

- **Site URL** : l'adresse Vercel (`https://progres-crossfit.vercel.app`)
- **Redirect URLs** : ajouter la même adresse

Sans cette étape, le lien reçu par mail renvoie vers `localhost` et la connexion échoue.
C'est la cause d'erreur la plus fréquente.

## Étape 4 — Installer sur le téléphone

Ouvrir l'adresse dans **Safari** (iOS) ou **Chrome** (Android), puis
*Partager → Sur l'écran d'accueil*. L'application s'ouvre alors en plein écran,
et reste utilisable sans réseau.

---

## Comment fonctionne la synchronisation

Le stockage local reste la référence immédiate : tout est écrit d'abord sur l'appareil,
puis envoyé au cloud dans la seconde qui suit. Conséquences :

- L'application fonctionne **hors connexion** ; les modifications partent au retour du réseau.
- Sans compte, elle reste purement locale — c'est le mode par défaut.
- Chaque utilisateur possède **une ligne** contenant l'ensemble de ses données.

**Limite à connaître** : la résolution de conflit est un « dernier écrit gagne ».
Si la même personne modifie ses données sur deux appareils sans connexion entre les deux,
la version la plus récente écrase l'autre. À la première connexion sur un appareil,
l'application détecte le cas et demande quoi garder plutôt que d'écraser en silence.

Ce modèle convient à un usage personnel sur deux ou trois appareils. Pour de l'édition
simultanée réelle, il faudrait normaliser le schéma (une table par séance) et fusionner
au niveau de l'enregistrement — beaucoup plus lourd, sans bénéfice ici.

## Coût

Gratuit à cette échelle. Le palier gratuit de Supabase couvre 500 Mo de base et
50 000 utilisateurs actifs par mois ; une année de séances pèse quelques centaines de
kilo-octets par personne. Vercel est gratuit pour un site statique personnel.
Un projet Supabase inactif pendant plusieurs jours est mis en pause : il suffit de le
relancer depuis le tableau de bord.

## Rester en local

Si tu ne veux pas de compte, ne touche pas aux `REMPLACE-MOI` : l'application détecte
l'absence de configuration et masque toute la partie compte. Elle reste installable
et fonctionne exactement comme la version fichier.

---

## Sécurité et données personnelles

### Ce qui a été vérifié

- **Aucun secret dans le code.** Seule la clé `anon` y figure, publique par conception.
  La clé `service_role` contourne toutes les règles : elle ne doit jamais entrer ici.
- **Isolation des données.** Les règles RLS restreignent lecture, écriture et suppression
  à la ligne de l'utilisateur connecté. Une requête sans filtre ne renvoie que sa propre ligne.
- **Content-Security-Policy** restrictive : seules les origines nécessaires sont autorisées
  (Supabase, esm.sh, Google Fonts). L'inclusion du site dans une iframe est bloquée.
- **Échappement systématique** des textes saisis (prénom, nom de metcon, mouvements
  personnalisés, notes) avant insertion dans la page.
- **Le service worker ne met jamais en cache les appels au cloud** : uniquement les
  fichiers de l'application.
- **La page n'est pas indexée** par les moteurs de recherche.

### Données collectées

Prénom, sexe, âge, poids de corps, séances d'entraînement, et l'adresse mail si un
compte est créé. Rien d'autre : pas de traceur, pas de mesure d'audience, pas de publicité.

L'onglet Profil affiche cette mention et propose un bouton **Tout effacer**, qui supprime
les données locales et la ligne en base après double confirmation.

### Si tu diffuses l'application au-delà de tes proches

Tu deviens responsable de traitement au sens du RGPD, avec les obligations qui vont avec :
information des personnes, base légale (le consentement ici), droit d'accès, de rectification
et d'effacement. L'export et le bouton d'effacement couvrent l'essentiel côté technique,
mais une page mentionnant qui traite les données et comment te contacter devient nécessaire.

Ta qualité de professionnel de santé appelle une vigilance supplémentaire : si l'outil était
un jour utilisé auprès de patients, ces données deviendraient des données de santé, ce qui
imposerait un hébergement certifié HDS. Supabase ne l'est pas. Tant que l'usage reste
personnel ou sportif, hors relation de soin, la question ne se pose pas.

### Suppression complète d'un compte

Le bouton efface les données. La suppression du compte lui-même (l'entrée dans
`auth.users`) se fait depuis le tableau de bord Supabase, section *Authentication → Users*.
La contrainte `on delete cascade` supprime alors automatiquement les données associées.
