const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];

// DOM avec de vrais noeuds input adressables par id
const inputs={};
function node(id,type){return inputs[id]={id,type:type||'number',tagName:'INPUT',value:'',dataset:{},
 focus(){DOC.activeElement=this},setSelectionRange(){},closest:()=>null,style:{}};}
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let listeners={};
const DOC={addEventListener:(t,f)=>listeners[t]=f,
 getElementById:i=>nodes[i]||inputs[i]||null,activeElement:null,createElement:mk,
 documentElement:root,querySelector:()=>({setAttribute(){}})};
global.document=DOC;
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,seed};")();
const {S,render,seed}=R;

// Simule une frappe : le champ porte la valeur tapée, puis l'évènement input
function tape(el,txt,ds){
 el.value=txt; Object.assign(el.dataset,ds||{}); DOC.activeElement=el;
 listeners.input({target:el});
 return el.value;   // valeur du champ APRÈS le re-rendu
}

S.profile={sex:'m',age:36,bw:80,name:'B'};S.sessions=[];
S.draft={id:'d',date:'2026-08-05',feel:3,note:'',metcons:[],
 entries:[{id:'x1',movementId:'back-squat',sets:[]}]};
S.tab='noter';S.focus='x1';seed('back-squat');render();

console.log('═══ Effacement complet d\'un champ ═══\n');
const cas=[
 ['charge (stepper)', node('in-w'), {k:'w'}],
 ['répétitions',      node('in-reps'), {k:'reps'}],
 ['âge',              node('in-age'), {k:'age'}],
 ['poids de corps',   node('in-bw'), {k:'bw'}],
];
for(const [nom,el,ds] of cas){
 tape(el,'60',ds);
 const vide=tape(el,'',ds);
 console.log(`  ${nom.padEnd(18)} champ vidé → "${vide}" ${vide===''?'✓ reste vide':'✗ se remplit tout seul'}`);
 const puis=tape(el,'8',ds);
 console.log(`  ${''.padEnd(18)} on tape 8 → "${puis}" ${puis==='8'?'✓':'✗'}  · modèle = ${S.d[ds.k]}`);
}

// Champ de metcon
S.draft.metcons=[{id:'m',name:'',format:'amrap',cap:12,rounds:1,scheme:'',rx:false,
 items:[{movementId:'thruster',reps:10,weight:30}],res:{mode:'rounds',secs:0,rounds:0,reps:0,done:true}}];
S.mc=0;S.focus=null;render();
const cap=node('mccap');
tape(cap,'12',{}); const capVide=tape(cap,'',{});
console.log(`\n  time cap           champ vidé → "${capVide}" ${capVide===''?'✓':'✗'}`);
const rd=node('mcrounds');
tape(rd,'3',{}); const rdVide=tape(rd,'',{});
console.log(`  nombre de tours    champ vidé → "${rdVide}" ${rdVide===''?'✓':'✗'}`);
const mi=node('mi-0-reps');
tape(mi,'10',{mi:'0',f:'reps'}); const miVide=tape(mi,'',{mi:'0',f:'reps'});
console.log(`  reps d'un item     champ vidé → "${miVide}" ${miVide===''?'✓':'✗'}`);

// Le champ date ne doit pas être touché
const dt=node('dt','date'); dt.value='2026-08-01'; DOC.activeElement=dt;
listeners.input({target:dt});
console.log(`\n  champ date         préservé → "${dt.value}" ${dt.value==='2026-08-01'?'✓':'✗'}`);
console.log(`  date enregistrée   → ${S.draft.date} ${S.draft.date==='2026-08-01'?'✓':'✗'}`);

// Après un clic ailleurs, la valeur du modèle reprend la main
DOC.activeElement=null;render();
console.log(`\n  hors saisie, le modèle reprend la main ✓`);
