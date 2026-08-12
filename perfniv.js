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
const R=new Function(code+"\n;return {S,render,niveau};")();
const {S,render,niveau}=R;
const MOVS=['back-squat','front-squat','deadlift','power-clean','clean','snatch','push-press',
 'strict-press','thruster','pull-up','t2b','hspu','ring-dip','push-up','box-jump','wall-ball',
 'row','bike','du','burpee','c2b','pistol','rope-climb','bmu','rmu','ghd','kb-swing','ohs'];
function gen(n){
 S.sessions=[];const d=new Date('2023-01-01');
 for(let i=0;i<n;i++){
  const dt=new Date(d);dt.setDate(dt.getDate()+Math.floor(i*2.2));
  const ent=[];
  for(let k=0;k<4;k++){const id=MOVS[(i*4+k)%MOVS.length];
   ent.push({id:'e'+i+k,movementId:id,sets:[
    {weight:i%3?40+(i%50):0,reps:5+(i%6),diff:'juste',level:i%7},
    {weight:i%3?45+(i%50):0,reps:5+(i%5),diff:'fond',level:i%7},
    {weight:i%3?50+(i%50):0,reps:3+(i%4),diff:'fond',level:i%7}]})}
  S.sessions.push({id:'s'+i,date:dt.toISOString().slice(0,10),feel:3,note:'',entries:ent,
   metcons:[{id:'m'+i,name:'',format:'amrap',cap:12,rounds:3,scheme:'',rx:true,
    items:[{movementId:MOVS[i%MOVS.length],reps:10,weight:30,seq:null}],
    res:{mode:'rounds',secs:0,rounds:6,reps:0,done:true}}]});}
}
S.profile={sex:'m',age:36,bw:80,name:'B'};S.tests={};
const chrono=(f,n=5)=>{const t=process.hrtime.bigint();for(let i=0;i<n;i++)f();
 return Number(process.hrtime.bigint()-t)/1e6/n};
console.log('═══ Coût du nouvel écran, selon l\'historique ═══\n');
console.log('  séances │ calcul à froid │ calcul mémorisé │ rendu complet');
console.log('  ────────┼────────────────┼─────────────────┼──────────────');
for(const n of [100,300,700,1200]){
 gen(n);S.tab='niveau';
 let i=0;
 const froid=chrono(()=>{S.updatedAt=++i;niveau()},5);
 S.updatedAt=999999;niveau();
 const chaud=chrono(()=>niveau(),200);
 const rendu=chrono(()=>render(),5);
 console.log(`  ${String(n).padStart(7)} │ ${froid.toFixed(0).padStart(11)} ms │ ${chaud.toFixed(3).padStart(12)} ms │ ${rendu.toFixed(0).padStart(9)} ms`);
}
console.log('\n  Le calcul à froid n\'a lieu qu\'après une modification de données.');
console.log('  Les rendus suivants réutilisent le résultat mémorisé.');
