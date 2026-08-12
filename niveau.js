const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=id=>({id,innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0,height:80})});
const nodes={app:mk('app'),tabs:mk('tabs'),overlay:mk('overlay'),spacer:mk('spacer')};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
global.document={addEventListener:(t,f)=>{(L[t]=L[t]||[]).push(f)},getElementById:i=>nodes[i]||null,
 activeElement:null,createElement:()=>mk('x'),documentElement:root,querySelector:()=>({setAttribute(){}}),
 fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,niveau,MONROE,CHAINS,PALIERS,CATZ,mv,stepState,monroeScore,bestSetAt,render,vNiveau};")();
const {S,niveau,MONROE,CHAINS,monroeScore,stepState}=R;
let ko=0;const T=(n,c,d)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${d&&!c?'  → '+d:''}`)};

S.profile={sex:'m',age:36,bw:80,name:'Benoit'};
S.tests={};S.sessions=[];

console.log('═══ Intégrité des tables ═══');
T('36 mouvements dans la table de Monroe', MONROE.length===36, MONROE.length);
T('9 par palier', [1,2,3,4].every(p=>MONROE.filter(m=>m.p===p).length===9));
T('8 chaînes définies', CHAINS.length===8, CHAINS.length);
T('chaque compartiment déclaré existe dans CATZ',
  MONROE.every(m=>R.CATZ[m.c]&&R.CATZ[m.c].includes(m.e)),
  MONROE.filter(m=>!R.CATZ[m.c]||!R.CATZ[m.c].includes(m.e)).map(m=>m.c+'/'+m.e).join(','));
T('seuils strictement croissants', MONROE.every(m=>m.t[0]<m.t[1]&&m.t[1]<m.t[2]),
  MONROE.filter(m=>!(m.t[0]<m.t[1]&&m.t[1]<m.t[2])).map(m=>m.n).join(','));

console.log('\n═══ Barème en escalier — aucune zone morte ═══');
const t=[1,11,25];
[[0,0],[1,1],[10,1],[11,2],[24,2],[25,3],[100,3]].forEach(([v,exp])=>
 T(`valeur ${v} → score ${exp}`, monroeScore(v,t)===exp, monroeScore(v,t)));
T('donnée absente → null, pas 0', monroeScore(null,t)===null);

console.log('\n═══ Règle des 3 séries ═══');
const seance=(date,sets)=>({id:'s'+date,date,feel:3,note:'',metcons:[],
 entries:[{id:'e',movementId:'pull-up',sets}]});
const st={n:'Traction stricte',mv:'pull-up',lv:6,s:3,r:5};

S.sessions=[seance('2026-08-01',[{weight:0,reps:5,diff:'fond',level:6},{weight:0,reps:5,diff:'fond',level:6}])];
T('2 séries de 5 → pas encore acquis', !stepState(st).ok);
S.sessions=[seance('2026-08-01',[{weight:0,reps:5,diff:'fond',level:6},{weight:0,reps:5,diff:'fond',level:6},
 {weight:0,reps:5,diff:'fond',level:6}])];
T('3 séries de 5 dans la même séance → acquis', stepState(st).ok);
S.sessions=[seance('2026-08-01',[{weight:0,reps:5,diff:'fond',level:6},{weight:0,reps:5,diff:'fond',level:6}]),
            seance('2026-08-03',[{weight:0,reps:5,diff:'fond',level:6}])];
T('2 + 1 séries sur deux séances → refusé (même séance exigée)', !stepState(st).ok);
S.sessions=[seance('2026-08-01',[{weight:0,reps:12,diff:'fond',level:6}])];
T('une seule grosse série → refusé', !stepState(st).ok);
S.sessions=[seance('2026-08-01',[{weight:0,reps:5,diff:'fond',level:5},{weight:0,reps:5,diff:'fond',level:5},
 {weight:0,reps:5,diff:'fond',level:5}])];
T('3×5 en kipping ne valide pas la stricte', !stepState(st).ok);
const stk={n:'kipping',mv:'pull-up',lv:5,s:3,r:5};
S.sessions=[seance('2026-08-01',[{weight:0,reps:5,diff:'fond',level:6},{weight:0,reps:5,diff:'fond',level:6},
 {weight:0,reps:5,diff:'fond',level:6}])];
T('3×5 en stricte valide aussi le kipping (niveau supérieur)', stepState(stk).ok);
S.sessions=[seance('2026-08-01',[{weight:40,reps:5,diff:'fond',level:6},{weight:40,reps:5,diff:'fond',level:6},
 {weight:40,reps:5,diff:'fond',level:6}])];
T('séries lestées ignorées pour un critère au poids de corps', !stepState(st).ok);

console.log('\n═══ Règle « strict / 2× kipping » de Monroe ═══');
S.sessions=[seance('2026-08-01',[{weight:0,reps:10,diff:'fond',level:5}])];
T('10 kipping comptent pour 5', R.bestSetAt('pull-up',6)===5, R.bestSetAt('pull-up',6));
S.sessions=[seance('2026-08-01',[{weight:0,reps:10,diff:'fond',level:6}])];
T('10 strictes comptent pour 10', R.bestSetAt('pull-up',6)===10, R.bestSetAt('pull-up',6));

console.log('\n═══ Verrouillage en cascade ═══');
S.sessions=[];S.tests={};
let n=niveau();
const ch=n.chains.find(c=>c.id==='tirage');
T('première étape en cours, pas verrouillée', ch.steps[0].etat==='encours', ch.steps[0].etat);
T('les suivantes sont verrouillées', ch.steps.slice(1).every(x=>x.etat==='verrou'));
S.sessions=[seance('2026-08-01',[{weight:0,reps:8,diff:'juste',level:0},{weight:0,reps:8,diff:'juste',level:0},
 {weight:0,reps:8,diff:'juste',level:0}])];
S.updatedAt=Date.now();n=niveau();
const ch2=n.chains.find(c=>c.id==='tirage');
T('Ring Row acquis débloque la stricte', ch2.steps[0].etat==='acquis'&&ch2.steps[1].etat==='encours',
  ch2.steps.map(x=>x.etat).join(','));

console.log('\n═══ Mémoïsation ═══');
S.updatedAt=12345;
const a=niveau(), b=niveau();
T('même clé → même objet réutilisé', a===b);
S.updatedAt=12346;
T('changement de données → recalcul', niveau()!==a);
S.updatedAt=12346;S.profile={...S.profile,bw:90};
T('changement de poids de corps → recalcul', niveau()!==b);




const {render}=R;
const click=ds=>(L.click||[]).forEach(f=>f({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}}));
const input=(id,ds,v)=>(L.input||[]).forEach(f=>f({target:{id,value:v,dataset:ds,closest:()=>null}}));
const H=()=>nodes.app.innerHTML;

console.log('\n═══ Écran Niveau ═══');
S.profile={sex:'m',age:36,bw:80,name:'Benoit'};S.tests={};S.updatedAt=1;
S.sessions=[{id:'a',date:'2026-08-04',feel:4,note:'',metcons:[],
 entries:[{id:'e1',movementId:'front-squat',sets:[{weight:88,reps:1,diff:'fond',level:null}]},
  {id:'e2',movementId:'pull-up',sets:[{weight:0,reps:8,diff:'fond',level:6},
   {weight:0,reps:8,diff:'fond',level:6},{weight:0,reps:8,diff:'fond',level:6}]},
  {id:'e3',movementId:'deadlift',sets:[{weight:100,reps:12,diff:'juste',level:null}]}]}];
S.tab='niveau';render();
T('écran rendu', H().length>2000, H().length+' car');
T('titre du palier affiché', /Palier \d/.test(H()));
T('les 4 paliers listés', ['Fondations','Structuration','Performance','Rx'].every(x=>H().includes(x)));
T('catégories affichées', H().includes('Gymnastique')&&H().includes('Force'));
T('« Charnière » a bien disparu', !H().includes('Charnière'));
T('les 8 chaînes listées', (H().match(/data-act="nchain"/g)||[]).length===8,
  (H().match(/data-act="nchain"/g)||[]).length);
T('aucune valeur invalide affichée', !/undefined|NaN|\[object/.test(H()),
  (H().match(/undefined|NaN/g)||[]).slice(0,3).join(','));

console.log('\n═══ Ouverture d\'une chaîne ═══');
click({act:'nchain',v:'tirage'});render();
T('chaîne dépliée', H().includes('Traction stricte'));
T('étape acquise détectée depuis les séances', H().includes('Ring Row'));
T('source citée', H().includes('BTWB'));
T('mention « ordre conseillé »', H().includes('ordre conseillé'));
click({act:'nchain',v:'tirage'});render();
T('second tap referme', !H().includes('Traction stricte'));

console.log('\n═══ Tests déclaratifs ═══');
render();
T('champ de saisie proposé', /data-tst="burpee"/.test(H()));
input('tst-burpee',{tst:'burpee'},'15');
T('valeur enregistrée', S.tests.burpee===15, JSON.stringify(S.tests));
S.updatedAt=2;
T('score recalculé (15 reps/min → palier 2)', niveau().mv36.find(m=>m.id==='burpee').sc===2,
  niveau().mv36.find(m=>m.id==='burpee').sc);
input('tst-burpee',{tst:'burpee'},'');
T('valeur vidée → déclaration effacée', S.tests.burpee===undefined);
input('tst-burpee',{tst:'burpee'},'-5');
T('valeur négative refusée', S.tests.burpee===undefined);

console.log('\n═══ Profil incomplet ═══');
S.profile=null;S.updatedAt=3;render();
T('message clair sans poids de corps', H().includes('poids de corps'));
T('aucun plantage', H().length>200);

console.log(`\n  ${ko?'✗ '+ko+' échec(s)':'✓ tout est conforme'}`);
process.exit(ko?1:0);
