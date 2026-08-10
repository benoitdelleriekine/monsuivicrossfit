const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0})});
const nodes={app:mk(),tabs:mk(),overlay:mk(),spacer:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||null,activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,milestones,statsRange,mv,volumeSince,curveFor,histFor};")();
const {S,render,milestones,statsRange}=R;

// ── Génération d'un historique réaliste ──
const MOVS=['back-squat','front-squat','deadlift','power-clean','clean-jerk','snatch','push-press',
 'strict-press','thruster','pull-up','t2b','hspu','ring-dip','push-up','box-jump','wall-ball','row','bike','du','burpee'];
function generer(n){
 S.sessions=[];const d=new Date('2024-01-01');
 for(let i=0;i<n;i++){
  const dt=new Date(d);dt.setDate(dt.getDate()+Math.floor(i*2.2));
  const iso=dt.toISOString().slice(0,10);
  const ent=[],mc=[];
  for(let k=0;k<3;k++){const id=MOVS[(i*3+k)%MOVS.length];
   ent.push({id:'e'+i+k,movementId:id,sets:[
    {weight:40+(i%40),reps:5,diff:'juste',level:null},
    {weight:45+(i%40),reps:3,diff:'fond',level:null},
    {weight:50+(i%40),reps:2,diff:'fond',level:null}]})}
  mc.push({id:'m'+i,name:i%5?'':'Fran',format:'amrap',cap:15,rounds:3,scheme:'',rx:true,
   items:[{movementId:MOVS[i%MOVS.length],reps:10,weight:40},{movementId:'burpee',reps:10}],
   res:{mode:'rounds',secs:0,rounds:8,reps:3,done:true}});
  S.sessions.push({id:'s'+i,date:iso,feel:3,note:'',entries:ent,metcons:mc});}
}
S.profile={sex:'m',age:36,bw:80,name:'B'};

const chrono=(f,n=5)=>{const t=process.hrtime.bigint();for(let i=0;i<n;i++)f();
 return Number(process.hrtime.bigint()-t)/1e6/n};

console.log('═══ Temps de rendu, par nombre de séances ═══\n');
console.log('  séances │ accueil "mois" │ accueil "année" │  Suivi  │ milestones seul');
console.log('  ────────┼────────────────┼─────────────────┼─────────┼────────────────');
for(const n of [50,200,500,1000]){
 generer(n);
 S.tab='progres';S.hv='mois';S.fiche=null;
 const m=chrono(()=>render());
 S.hv='annee';
 const a=chrono(()=>render());
 S.hv='mois';S.tab='historique';
 const hh=chrono(()=>render());
 const ms=chrono(()=>milestones(S.sessions));
 console.log(`  ${String(n).padStart(7)} │ ${m.toFixed(0).padStart(11)} ms │ ${a.toFixed(0).padStart(12)} ms │ ${hh.toFixed(0).padStart(4)} ms │ ${ms.toFixed(0).padStart(11)} ms`);
}

console.log('\n═══ Combien de fois milestones() est-il appelé par rendu ? ═══\n');
generer(500);
let appels=0;
const vrai=R.milestones;
// on instrumente via statsRange qui l'appelle en interne
const t0=process.hrtime.bigint();
S.tab='progres';S.hv='annee';render();
const dt=Number(process.hrtime.bigint()-t0)/1e6;
const unSeul=chrono(()=>milestones(S.sessions),3);
console.log(`  rendu "année" complet          : ${dt.toFixed(0)} ms`);
console.log(`  un seul appel à milestones()   : ${unSeul.toFixed(1)} ms`);
console.log(`  ratio                          : ~${Math.round(dt/unSeul)} appels équivalents`);
console.log('\n  (statsRange() appelle milestones(toutes les séances) ;');
console.log('   la vue "année" appelle statsRange() douze fois.)');
