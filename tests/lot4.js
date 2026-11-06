/* Lot 4 : unité visuelle. Les mesures à l'écran (zones tactiles, contraste, tailles réelles)
   se font dans un navigateur ; ici, les règles du code qui ne doivent pas régresser. */
const fs=require('fs'),path=require('path');
const R=f=>fs.readFileSync(path.join(__dirname,'..',f),'utf8');
const app=R('index.html'),plan=R('planif.js'),sw=R('sw.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};

console.log('═══ Polices et zoom ═══\n');
T('plus aucun appel à Google Fonts',!/fonts\.googleapis|fonts\.gstatic/.test(app));
const ff=[...app.matchAll(/url\(fonts\/([^)]+\.woff2)\)/g)].map(m=>m[1]);
T('8 fichiers de police déclarés et présents',ff.length===8&&ff.every(f=>fs.existsSync(path.join(__dirname,'..','fonts',f))),ff.length);
T('polices mises en cache pour le hors ligne',ff.every(f=>sw.includes('./fonts/'+f)));
T('licence de la police fournie',fs.existsSync(path.join(__dirname,'..','fonts','OFL-Barlow.txt')));
T('zoom autorisé (plus de maximum-scale ni user-scalable=no)',!/maximum-scale|user-scalable=no/.test(app));
T('chiffres à chasse fixe dans l\'app et dans le Plan',/tabular-nums/.test(app)&&/tabular-nums/.test(plan));

console.log('\n═══ Texte ═══\n');
const sizes=src=>[...src.matchAll(/font-size:\s*([\d.]+)px/g)].map(m=>+m[1]);
const all=sizes(app).concat(sizes(plan));
T('aucun texte sous 12 px',all.every(v=>v>=12),Math.min(...all));
const used=[...new Set(all.filter(v=>v<36))].sort((a,b)=>a-b);
T('échelle de texte resserrée (au plus 8 tailles sous 36 px)',used.length<=8,used.join(' / '));
T('aucun texte SVG sous 12 px',[...app.matchAll(/font-size="([\d.]+)"/g)].every(m=>+m[1]>=12));
T('champ de recherche à 16 px (pas de zoom automatique sur iPhone)',/id="mq"[^>]*font-size:16px/.test(app));

console.log('\n═══ Icônes et couleurs ═══\n');
const emo=/[\u{1F300}-\u{1FAFF}]/u;
T('aucun emoji dans l\'interface (icônes dessinées à la place)',!emo.test(app)&&!emo.test(plan));
T('zones tactiles : règle 44 px présente dans l\'app et le Plan',/\.btn,\.btn\.sm,\.seg button[^{]*\{min-height:44px\}/.test(app)&&/\.btn\{min-width:44px\}/.test(plan));
T('jour courant du Plan lisible en thème clair (plus de fond sombre codé en dur)',!/\.dcol\.today\{background:#151A1F/.test(plan));
T('chiffres sombres sur les cases claires de l\'échelle RPE',/\.rpe1 button\[style\*="background:#B5BE5E"\] span/.test(app)&&/\.rpe button\[style\*=\\"background:#B5BE5E\\"\] span/.test(plan));

console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');process.exitCode=ko?1:0;
