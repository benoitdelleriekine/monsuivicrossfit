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

## Connexion par code (application installée)

Une web app installée sur l'écran d'accueil iOS vit dans un espace de stockage
séparé de Safari. Le lien magique reçu par mail s'ouvre dans Safari : c'est donc
Safari qui se connecte, pas l'application. L'app utilise pour cette raison un
**code à 6 chiffres** saisi directement dans l'écran Compte.

**Configuration obligatoire dans Supabase** (sinon le mail ne contient pas le code) :

1. **Authentication → Emails** (Email Templates), modèle **Magic Link**.
2. Remplacer le corps par un texte contenant la variable `{{ .Token }}`, par exemple :

```html
<h2>Connexion à Mon Suivi CrossFit</h2>
<p>Ton code de connexion :</p>
<h1 style="letter-spacing:6px">{{ .Token }}</h1>
<p>Il expire dans une heure. Si tu n'es pas à l'origine de cette demande, ignore ce message.</p>
```

3. Enregistrer. Le lien `{{ .ConfirmationURL }}` peut être retiré du modèle :
   dans l'application installée, il induit en erreur.

À savoir : Supabase limite l'envoi à un mail par minute et par adresse, et le
service intégré est réservé au test. Avant de partager l'application, brancher
un SMTP (Resend, Brevo…) dans **Authentication → SMTP Settings**.
