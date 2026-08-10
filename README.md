# Tests

Aucune dépendance : Node seul suffit. Depuis ce dossier :

```sh
sh run.sh
```

Chaque fichier simule un DOM minimal, charge le script principal de `../index.html`
et exerce une partie de l'application. Il n'y a ni navigateur, ni installation.

| Suite | Ce qu'elle vérifie |
|---|---|
| `audit` | 40+ scénarios de rendu et de calcul de bout en bout |
| `deep` | Rendu de 21 vues, puis déclenchement de **chaque bouton** dans son contexte |
| `calc` | 26 valeurs numériques comparées à des attendus vérifiés à la main |
| `metcon` | Suites par mouvement, totaux, compatibilité avec les schémas classiques |
| `ordre` | Mode « Par mouvement », flèches, glissement au doigt |
| `partage` | Contenu des quatre calques, formats, fonds, export PNG |
| `affichage` | En-têtes, blocs de totaux, résumés, largeur des champs |
| `clamp2` | Stabilité visuelle avec défilement borné (le bug le plus subtil rencontré) |
| `cold3` | Six configurations de démarrage à froid du profil |
| `struct` | Imbrication des conteneurs, retour en haut de page |
| `champs` | Un champ numérique vidé doit le rester |
| `liste` | Passage à l'échelle : 93 séances, 38 mouvements, tri et filtre |
| `accueil` | Calendrier, trois vues, panneau du jour, navigation entre mois |
| `theme` | Bascule clair / sombre / automatique |
| `fiche` | Fiche mouvement : courbe, historique, records, cas limites |
| `profil`, `profil2` | Persistance et réparation du profil, synchronisation |
| `check`, `check2` | Conteneurs de rendu, catégories et icônes |
| `pwtest` | Parcours de connexion par mot de passe |
| `perf` | Mesure du temps de rendu selon le nombre de séances |

## Avant de livrer une modification

1. `sh run.sh` — toutes les suites doivent passer.
2. Incrémenter `CACHE` dans `sw.js`, sinon le téléphone ressert l'ancienne version.

## Piège rencontré

Plusieurs suites ont un jour pointé sur une copie obsolète du fichier et validaient
donc du code qui n'était plus livré. Les chemins sont désormais **relatifs** à ce
dossier : elles testent toujours le `index.html` voisin.
