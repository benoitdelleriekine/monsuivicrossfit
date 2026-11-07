/* Course à pied : mesures de la sortie (durée, distance, FC, D+) et liste pour les courbes. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const fs=require('fs'),path=require('path');
const st=JSON.parse(fs.readFileSync(path.join(__dirname,'_course.json'),'utf8'));
console.log('\n═══ Mesures d\'une sortie ═══\n');
const R=boot(clone(st));function clone(o){return JSON.parse(JSON.stringify(o))}
const E=R.PLAN.engine,c=R.S.planif.programs.find(p=>p.kind==='course'),key=c.id+'|3|rdim';
/* La saisie (champ par champ, virgule, bornes) est vérifiée dans le navigateur ; ici, le calcul. */
let x=E.findInst(key);T('sortie notée : durée, distance, FC moyenne lues',x.log.dur===40&&x.log.km===6.7&&x.log.fcm===144);
const src=fs.readFileSync(path.join(__dirname,'..','planif.js'),'utf8');
T('bornes de saisie : FC 30–230 / 30–240 bpm, distance 0,1–500 km',/fcm: \[30, 230,/.test(src)&&/fcx: \[30, 240,/.test(src)&&/km: \[0\.1, 500,/.test(src));
T('virgule acceptée, champ vide = mesure retirée',/replace\(',', '\.'\)/.test(src)&&/if \(raw === ''\) pt\[rf\] = null;/.test(src));
const L=R.PLAN.runLog(),z=L.find(r=>r.key===key);
T('liste des sorties : allure calculée (durée / distance)',z&&Math.abs(z.pace-40/6.7)<1e-9,z&&z.pace.toFixed(2)+' min/km');
T('… triée par date',L.every((r,i)=>!i||L[i-1].date<=r.date));
T('… seulement les sorties faites',L.every(r=>E.findInst(r.key).log.done));
T('séance de muscu : pas de champs de course',!R.PLAN.runLog().some(r=>/Muscu/.test(r.prog)));
T('durée réelle prise pour la charge (UA) de la semaine',E.findInst(key).g.dur===40&&E.findInst(key).g.durReal===true);
// page de progrès
R.S.tab='progres';R.S.ps='course';R.render();const h=R.doc.getElementById('app').innerHTML;
T('page Course à pied : kilomètres, allure, FC et dernières sorties',/Kilomètres par semaine/.test(h)&&/Allure par sortie/.test(h)&&/FC moyenne par sortie/.test(h)&&/6,70 km|6,7 km/.test(h));
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
