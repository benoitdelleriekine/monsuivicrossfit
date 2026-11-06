/* Lot 5 : accueil court, sous-pages de Progrès, recherche dans Suivi, aide à l'installation,
   détail de séance du Plan compact. */
const {boot}=require('./_boot.js');
const fs=require('fs'),path=require('path');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const sess=(id,date,mid,metcon)=>({id,date,feel:3,note:'',updatedAt:1,
 entries:[{id:'e'+id,movementId:mid,sets:[{weight:80,reps:5,diff:'juste',level:null}]}],
 metcons:metcon?[{id:'m'+id,name:metcon,format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:false,items:[{movementId:'thruster',reps:null,weight:30}],res:{mode:'time',secs:400,rounds:0,reps:0,done:true}}]:[]});

console.log('═══ Accueil court ═══\n');
const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};R.S.planif={programs:[],deleted:[]};
R.S.sessions=[sess('a','2026-10-01','back-squat','Fran'),sess('b','2026-10-08','deadlift','Fran'),sess('c','2026-10-15','back-squat','Cindy')];
R.S.tab='progres';R.render();
const app=()=>R.doc.getElementById('app').innerHTML;
let h=app();
T('« Mes mouvements » n\'est plus sur l\'accueil',!/id="movblock"/.test(h));
T('rubrique Explorer avec un accès par analyse',/Explorer/.test(h)&&/data-act="psub" data-v="mouvements"/.test(h)&&/data-act="records"/.test(h));
T('metcons refaits accessibles',/data-v="metcons"/.test(h));
const click=(act,v)=>{const b={dataset:{act,v},closest(){return this},getAttribute(k){return k==='data-act'?act:k==='data-v'?v:null}};return b};
R.S.ps='mouvements';R.render();h=app();
T('page « Mes mouvements » : liste, recherche et retour',/id="movblock"/.test(h)&&/id="mq"/.test(h)&&/data-act="psclose"/.test(h));
R.S.ps='metcons';R.render();T('page « Metcons refaits »',/Fran/.test(app()));
R.S.ps=null;R.S.records=true;R.render();T('page Records : bandeau des records et premières fois en tête',/class="ms2"/.test(app()));
R.S.records=false;

console.log('\n═══ Recherche dans Suivi ═══\n');
R.S.sessions=R.S.sessions.concat([sess('d','2026-10-22','clean'),sess('e','2026-10-29','snatch')]);
R.S.tab='historique';R.S.hq='';R.render();
const nb=()=>(app().match(/class="card hcard"/g)||[]).length;
T('champ de recherche affiché',/id="hq"/.test(app()));
T('sans recherche : toutes les séances',nb()===5,nb());
R.S.hq='fran';R.render();T('« fran » : les 2 séances avec Fran',nb()===2,nb());
R.S.hq='SQUAT';R.render();T('insensible à la casse : « SQUAT » → back squat',nb()===2,nb());
R.S.hq='zzz';R.render();T('aucun résultat : message clair',nb()===0&&/Aucune séance ne correspond/.test(app()));
R.S.hq='';

console.log('\n═══ Installation et raccourcis ═══\n');
R.S.tab='progres';R.render();T('pas de carte d\'installation hors téléphone',!/Installe l'app/.test(app()));
const P=boot({},{coarse:true});P.S.profile={sex:'m',age:36,bw:81,name:'B'};P.S.planif={programs:[],deleted:[]};P.S.sessions=[sess('p','2026-10-01','back-squat')];P.S.tab='progres';P.render();
T('sur téléphone, dans le navigateur : carte d\'installation',/Installe l'app sur ton écran d'accueil/.test(P.doc.getElementById('app').innerHTML));
const man=JSON.parse(fs.readFileSync(path.join(__dirname,'..','manifest.webmanifest'),'utf8'));
T('manifeste : identifiant et raccourcis Noter et Plan',man.id&&man.shortcuts&&man.shortcuts.map(s=>s.url).join()==='./?tab=noter,./?tab=plan');
const src=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
T('l\'app lit ?tab= au lancement',/URLSearchParams\(location\.search\)\.get\("tab"\)/.test(src));

console.log('\n═══ Détail de séance du Plan ═══\n');
const plan=fs.readFileSync(path.join(__dirname,'..','planif.js'),'utf8');
T('exercice replié sur une ligne avec « Comme prévu » à portée',/var muscuItemLine/.test(plan)&&/data-a="ex-tog"/.test(plan));
T('« Tout ouvrir » et ouverture forcée en cours de saisie',/data-a="ex-all"/.test(plan)&&/ui\.realEdit === ek/.test(plan));

console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');process.exitCode=ko?1:0;
