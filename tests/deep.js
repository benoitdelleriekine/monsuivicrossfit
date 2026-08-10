const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const FILE=path.join(__DIR__,'..','index.html');
const code=fs.readFileSync(FILE,'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];

const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const ctx2={fillStyle:'',strokeStyle:'',lineWidth:0,font:'',lineJoin:'',lineCap:'',textBaseline:'',
 clearRect(){},fillRect(){},drawImage(){},fillText(){},measureText:()=>({width:60}),
 beginPath(){},moveTo(){},lineTo(){},arcTo(){},arc(){},closePath(){},stroke(){},fill(){},
 createLinearGradient:()=>({addColorStop(){}})};
const nodes={app:mk(),tabs:mk(),overlay:mk(),spacer:mk(),
 shcv:{width:0,height:0,style:{},getContext:()=>ctx2,toBlob:cb=>cb({size:1,type:'image/png'})}};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let listeners={};
global.document={addEventListener(t,f){listeners[t]=f},getElementById:i=>nodes[i]||mk(),
 activeElement:null,createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}}),fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={vibrate(){}};
let store={},alerts=[],confirms=true;
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=m=>alerts.push(m); global.confirm=()=>confirms;
global.Blob=function(){}; global.URL={createObjectURL:()=>'x',revokeObjectURL(){}};
global.FileReader=function(){this.readAsText=()=>{}};

const R=new Function(code+"\n;return {S,render,seed,payload,save,load,mv,mcTotals,e1rm,stdFor,levelInfo,LVN,volumeSince,milestones,mcStructure,parseScheme,loadout,streak};")();
const {S,render}=R;

// ── Jeu de données couvrant tous les types ──
function dataset(){
 S.profile={sex:'m',age:36,bw:80,name:'Benoît'};
 S.custom=[{id:'c-x',n:'Assault run',k:'gym',g:'Mes mouvements',d:'',u:'reps',lad:null}];
 S.theme='dark';
 S.sessions=[
  {id:'s1',date:'2026-06-02',feel:3,note:'test',
   entries:[{id:'e1',movementId:'front-squat',sets:[{weight:20,reps:12,diff:'facile',level:null},{weight:60,reps:6,diff:'fond',level:null}]},
    {id:'e2',movementId:'pull-up',sets:[{weight:0,reps:6,diff:'juste',level:3}]},
    {id:'e9',movementId:'plank',sets:[{weight:0,reps:60,diff:'juste',level:null}]}],
   metcons:[{id:'m1',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:false,
    items:[{movementId:'thruster',reps:null,weight:30},{movementId:'pull-up',reps:null}],
    res:{mode:'time',secs:600,rounds:0,reps:0,done:true}}]},
  {id:'s2',date:'2026-07-14',feel:5,note:'',
   entries:[{id:'e3',movementId:'front-squat',sets:[{weight:76,reps:5,diff:'fond',level:null}]},
    {id:'e4',movementId:'row',sets:[{dist:500,secs:112}]},
    {id:'e5',movementId:'pull-up',sets:[{weight:0,reps:9,diff:'fond',level:6}]},
    {id:'e7',movementId:'c-x',sets:[{weight:0,reps:20,diff:'juste',level:null}]},
    {id:'e8',movementId:'db-snatch',sets:[{weight:22.5,reps:8,diff:'juste',level:null}]}],
   metcons:[{id:'m2',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:true,
     items:[{movementId:'thruster',reps:null,weight:30},{movementId:'pull-up',reps:null}],
     res:{mode:'time',secs:512,rounds:0,reps:0,done:true}},
    {id:'m3',name:'',format:'amrap',cap:15,rounds:1,scheme:'',rx:true,
     items:[{movementId:'bike',cal:12,dist:null},{movementId:'burpee',reps:10}],
     res:{mode:'rounds',secs:0,rounds:9,reps:4,done:true}}]},
  {id:'s3',date:'2026-08-04',feel:4,note:'',entries:[],
   metcons:[{id:'m4',name:'',format:'emom',cap:12,rounds:1,scheme:'',rx:true,
    items:[{movementId:'clean',reps:3,weight:45}],res:{mode:'done',secs:0,rounds:0,reps:0,done:true}}]}];
 S.draft=null;S.focus=null;S.mc=null;S.picker=false;S.done=null;S.progG=null;S.prog=null;S.open=null;
}
dataset();

// ── Fuzz : déclencher chaque bouton présent dans chaque vue ──
const click=(el)=>{const fn=listeners.click;if(!fn)throw new Error('pas de gestionnaire click');
 fn({target:{closest:(sel)=>sel==='[data-act]'?el:(el.__stop?{}:null)}});};
const errs=[];
function trigger(html,ctx){
 const btns=[...html.matchAll(/data-act="([a-zA-Z]+)"((?:\s+data-[a-z]+="[^"]*")*)/g)];
 for(const m of btns){
  const ds={act:m[1]};
  for(const a of m[2].matchAll(/data-([a-z]+)="([^"]*)"/g)) ds[a[1]]=a[2];
  const before=JSON.stringify({t:S.tab});
  try{ click({dataset:ds}); }
  catch(e){ errs.push(`${ctx} → action "${ds.act}" : ${e.message}`); }
 }
}

const KEYS=['sessions','custom','profile','theme','draft','focus','mc','picker','done','progG','prog','open','tab','d','psex','pname','bar','pat'];
const snap=()=>{const c=JSON.parse(JSON.stringify(KEYS.reduce((o,k)=>(o[k]=S[k],o),{})));
 return ()=>KEYS.forEach(k=>S[k]=JSON.parse(JSON.stringify(c[k]??null)));};
global.prompt=()=>'Mouvement test';
const views=[];
for(const tab of ['progres','noter','historique','profil']){
 dataset(); S.tab=tab; render(); views.push([tab,nodes.app.innerHTML,snap()]);
}
// vues profondes
dataset(); S.tab='noter'; S.draft={id:'d',date:'2026-08-05',feel:3,note:'',metcons:[],
 entries:[{id:'x1',movementId:'back-squat',sets:[{weight:50,reps:5,diff:'juste',level:null}]},
  {id:'x2',movementId:'pull-up',sets:[]},{id:'x3',movementId:'run',sets:[]},
  {id:'x4',movementId:'hollow',sets:[]},{id:'x5',movementId:'db-snatch',sets:[]},{id:'x6',movementId:'c-x',sets:[]}]};
render(); views.push(['noter/liste',nodes.app.innerHTML,snap()]);
for(const id of ['x1','x2','x3','x4','x5','x6']){
 S.focus=id; R.seed(S.draft.entries.find(e=>e.id===id).movementId); render();
 views.push([`détail ${id}`,nodes.app.innerHTML,snap()]);
}
S.focus=null;
S.draft.metcons=[{id:'mm',name:'',format:'amrap',cap:12,rounds:1,scheme:'',rx:false,items:[],
 res:{mode:'rounds',secs:0,rounds:0,reps:0,done:true}}]; S.mc=0;
for(const f of ['amrap','fortime','emom','intervals','chipper','tabata']){
 S.draft.metcons[0].format=f; S.draft.metcons[0].res.mode=({amrap:'rounds',fortime:'time',emom:'done',intervalles:'rounds',chipper:'time',tabata:'reps'})[f];
 S.draft.metcons[0].items=[{movementId:'row',dist:500,cal:null},{movementId:'thruster',reps:10,weight:30}];
 render(); views.push([`metcon ${f}`,nodes.app.innerHTML,snap()]);
}
S.draft.metcons[0].format='fortime';S.draft.metcons[0].scheme='21-15-9';render();
views.push(['metcon schéma',nodes.app.innerHTML,snap()]);
S.mc=null;S.picker=true;render();views.push(['sélecteur',nodes.overlay.innerHTML,snap()]);
S.picker=false;S.done=[{date:'2026-08-05',t:'Record',v:'Front squat — 90 kg'}];render();
views.push(['bilan',nodes.overlay.innerHTML,snap()]);
S.done=null;

// identifiants dupliqués dans un même rendu
console.log('═══ PASSE 2 — RENDU DE CHAQUE VUE ═══\n');
let dupTotal=0;
for(const [name,html] of views){
 const ids=[...html.matchAll(/(?:^|[\s"])id="([^"]+)"/g)].map(m=>m[1]);
 const dup=[...new Set(ids.filter(i=>ids.filter(x=>x===i).length>1))];
 const undef=(html.match(/undefined|NaN|\[object Object\]/g)||[]).length;
 if(dup.length||undef) dupTotal++;
 console.log(`  ${name.padEnd(16)} ${String(html.length).padStart(6)} car · ids dupliqués: ${dup.length?dup.join(','):'—'} · valeurs invalides: ${undef||'—'}`);
}
console.log(`\n  ${dupTotal?'⚠ '+dupTotal+' vue(s) à examiner':'✓ aucune vue problématique'}`);

console.log('\n═══ PASSE 3 — DÉCLENCHEMENT DE CHAQUE BOUTON ═══\n');
for(const [name,html,restore] of views){ if(restore)restore(); trigger(html,name); }
console.log(errs.length? '  ✗ '+errs.length+' erreur(s) :\n   - '+errs.join('\n   - ') : '  ✓ aucune exception sur l\'ensemble des boutons');
console.log(`  alertes déclenchées (attendu sur saisies vides) : ${alerts.length}`);
