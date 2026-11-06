/* Lot 3 : mode séance en salle. Le rendu complet du mode séance se vérifie dans un navigateur
   (captures du lot) ; ici, on garde les règles qui ne doivent pas régresser. */
const fs=require('fs'),path=require('path');
const plan=fs.readFileSync(path.join(__dirname,'..','planif.js'),'utf8');
const app=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
let ko=0;const T=(n,c)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}`)};

console.log('═══ Mode séance ═══\n');
T('« Série faite » collé en bas de l\'écran, même avec le repos affiché',/\.runfoot\{[^}]*position:sticky;bottom:0/.test(plan));
T('marge de sécurité iPhone sous le pied de page',/\.runfoot\{[^}]*env\(safe-area-inset-bottom\)/.test(plan));
T('fin de repos : le bandeau change d\'aspect',/\.runrest\.end\{/.test(plan)&&/classList\.toggle\('end', left <= 0\)/.test(plan));
T('animation coupée si « réduire les animations » est activé',/prefers-reduced-motion:reduce\)\{\.runrest\.end\{animation:none\}/.test(plan));
T('« La dernière fois » montre l\'écart avec la charge du jour',/aujourd’hui ' \+ \(dk > 0 \? '\+' : '−'\)/.test(plan)&&/même charge qu’aujourd’hui/.test(plan));
T('série suivante préremplie avec la précédente (répéter = 1 geste)',/var last = ss\[i - 1\];/.test(plan));

console.log('\n═══ Saisie CrossFit ═══\n');
T('repos lancé après « Ajouter cette série »',/restAfterSet\(m\)\}/.test(app)&&/PLAN\.timer\(/.test(app));

console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');process.exitCode=ko?1:0;
