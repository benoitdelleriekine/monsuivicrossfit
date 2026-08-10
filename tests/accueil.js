const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let L={};
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||mk(),activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,monthGrid,statsRange,accroche,milestones};")();
const {S,render,monthGrid,accroche}=R;
const click=ds=>L.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const H=()=>nodes.app.innerHTML;
const today=new Date().toISOString().slice(0,10);

S.profile={sex:'m',age:36,bw:80,name:'Benoit'};
S.sessions=[
 {id:'a',date:today,feel:4,note:'',metcons:[],
  entries:[{id:'e',movementId:'front-squat',sets:[{weight:80,reps:3,diff:'fond',level:null}]}]},
 {id:'b',date:'2026-08-04',feel:3,note:'',
  entries:[{id:'e2',movementId:'deadlift',sets:[{weight:120,reps:5,diff:'juste',level:null}]}],
  metcons:[{id:'m',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:true,
   items:[{movementId:'thruster',reps:null,weight:30},{movementId:'pull-up',reps:null}],
   res:{mode:'time',secs:512,rounds:0,reps:0,done:true}}]},
 {id:'c',date:'2026-07-10',feel:5,note:'',entries:[],metcons:[]}];

console.log('═══ Calendrier du mois ═══');
const g=monthGrid(0);
console.log('  mois affiché      : '+g.label);
console.log('  cases générées    : '+g.cells.length+' ('+g.cells.length/7+' lignes)');
console.log('  jours du mois     : '+g.cells.filter(Boolean).length);
console.log('  1er jour aligné   : '+(g.cells.findIndex(Boolean)===((new Date(g.y,g.mo,1).getDay()+6)%7)?'✓':'✗'));

console.log('\n═══ Accroche selon le contexte ═══');
console.log('  séance aujourd\'hui  → "'+accroche().join(' / ')+'"');
S.sessions=S.sessions.filter(x=>x.date!==today);
console.log('  record récent       → "'+accroche().join(' / ')+'"');
S.sessions=[{id:'z',date:'2026-01-05',feel:3,entries:[],metcons:[]}];
console.log('  séance ancienne     → "'+accroche().join(' / ')+'"');
S.sessions=[];
console.log('  aucune séance       → "'+accroche().join(' / ')+'"');

S.sessions=[{id:'a',date:today,feel:4,note:'',metcons:[],
 entries:[{id:'e',movementId:'front-squat',sets:[{weight:80,reps:3,diff:'fond',level:null}]}]},
 {id:'b',date:'2026-08-04',feel:3,note:'',entries:[],metcons:[]}];

console.log('\n═══ Les trois vues ═══');
S.tab='progres';
for(const v of ['mois','semaines','annee']){
 click({act:'hv',v});render();
 const h=H();
 console.log(`  ${v.padEnd(9)} rendu ${String(h.length).padStart(5)} car · ${
  v==='mois'?(h.match(/data-act="day"/g)||[]).length+' jours cliquables'
  :v==='semaines'?'8 barres '+((h.match(/height:\d+px;border-radius:5px/g)||[]).length===8?'✓':'✗')
  :'12 mois '+((h.match(/height:\d+px;border-radius:4px/g)||[]).length===12?'✓':'✗')}`);
}

console.log('\n═══ Interaction sur un jour ═══');
click({act:'hv',v:'mois'});
click({act:'day',v:today});render();
console.log('  panneau ouvert     : '+(/data-act="dayclose"/.test(H())?'✓':'✗'));
console.log('  séance listée      : '+(/data-act="openday"/.test(H())?'✓':'✗'));
console.log('  mouvement affiché  : '+(/Front Squat/.test(H())?'✓':'✗'));
click({act:'day',v:today});render();
console.log('  second tap referme : '+(S.day===null?'✓':'✗'));
click({act:'day',v:'2026-01-01'});render();
console.log('  jour sans séance   : '+(/Aucune séance ce jour/.test(H())?'✓ message':'✗'));
click({act:'day',v:today});click({act:'openday',v:'a'});
console.log('  ouverture du suivi : '+(S.tab==='historique'&&S.open==='a'?'✓':'✗'));

console.log('\n═══ Navigation entre les mois ═══');
S.tab='progres';S.hv='mois';S.moff=0;
click({act:'moff',v:'-1'});console.log('  mois précédent : offset '+S.moff+' → '+monthGrid(S.moff).label);
click({act:'moff',v:'-1'});click({act:'moff',v:'1'});console.log('  retour avant   : offset '+S.moff);
click({act:'moff',v:'1'});click({act:'moff',v:'1'});
console.log('  futur bloqué   : offset '+S.moff+' '+(S.moff===0?'✓':'✗'));
render();
console.log('\n  taille de l\'écran d\'accueil : '+H().length+' caractères');
