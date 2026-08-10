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
 activeElement:null,createElement:()=>mk('x'),documentElement:root,querySelector:()=>null,fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,itemLabel,mcTotals,mcStructure,mcSummary};")();
const {S,render,itemLabel,mcTotals,mcStructure,mcSummary}=R;
const fire=(t,e)=>(L[t]||[]).forEach(f=>f(e));
const click=ds=>fire('click',{target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const input=(id,ds,v)=>fire('input',{target:{id,value:v,dataset:ds,closest:()=>null}});

// ── Reconstitution exacte de la séance du 10 août montrée à l'écran ──
S.profile={sex:'m',age:36,bw:80,name:'B'};S.sessions=[];
S.draft={id:'d',date:'2026-08-10',feel:1,note:'Trop dur sur les Thrusters et push-up avec gros volume fatigue',
 entries:[{id:'e0',movementId:'front-squat',sets:[
  {weight:20,reps:8,diff:'facile',level:null},{weight:50,reps:8,diff:'juste',level:null},
  {weight:53,reps:8,diff:'juste',level:null},{weight:55,reps:8,diff:'fond',level:null},
  {weight:58,reps:8,diff:'fond',level:null}]}],
 metcons:[{id:'m',name:'',format:'fortime',cap:12,rounds:3,scheme:'',mode:'seq',rx:false,
  items:[{movementId:'db-thruster',reps:null,weight:null,seq:null},
         {movementId:'push-up',reps:null,weight:null,seq:null}],
  res:{mode:'time',secs:0,rounds:0,reps:0,done:false}}]};
S.tab='noter';S.mc=0;render();

// L'utilisateur saisit exactement ce que montre la capture
[[0,'s0','10'],[0,'s1','15'],[0,'s2','20'],[1,'s0','15'],[1,'s1','25'],[1,'s2','15']]
 .forEach(([i,f,v])=>input(`mi-${i}-${f}`,{mi:String(i),f},v));
input('mi-0-weight',{mi:'0',f:'weight'},'10');   // le poids de l'haltère, DB Thruster uniquement

const MC=S.draft.metcons[0];
console.log('═══ Ce qui a été saisi ═══');
console.log('  DB Thruster : seq='+MC.items[0].seq+'  weight='+MC.items[0].weight+' kg');
console.log('  Push-Up     : seq='+MC.items[1].seq+'  weight='+MC.items[1].weight);

console.log('\n═══ AVANT correction (ce que montrait la capture) ═══');
console.log('  "10-15-20 DB Thruster · 15-25-15 Push-Up"  ← poids invisible, c\'est le bug signalé');

console.log('\n═══ APRÈS correction ═══');
const st=mcStructure(MC);
console.log('  libellé DB Thruster : "'+itemLabel(MC.items[0],st)+'"');
console.log('  libellé Push-Up     : "'+itemLabel(MC.items[1],st)+'"');
console.log('  → poids affiché : '+(itemLabel(MC.items[0],st).includes('@ 10 kg')?'✓':'✗'));
console.log('  → Push-Up sans charge (mouvement au poids de corps) : '+
 (!itemLabel(MC.items[1],st).includes('@')?'✓ correct, rien à afficher':'✗'));

console.log('\n═══ Le calcul du tonnage, lui, était-il déjà bon ? ═══');
const T=mcTotals(MC);
const dbt=T.find(t=>t.n==='DB Thruster');
console.log('  reps DB Thruster : '+dbt.reps+' (10+15+20=45 attendu)  '+(dbt.reps===45?'✓':'✗'));
console.log('  tonnage calculé  : '+dbt.ton+' kg (45×10=450 attendu)  '+(dbt.ton===450?'✓ le calcul était déjà correct':'✗'));
console.log("  -> confirme : c'etait un bug d'affichage uniquement, pas un bug de calcul.");

console.log('\n═══ Résumé compact (liste des séances) ═══');
console.log('  "'+mcSummary(MC)+'"');
console.log('  charge visible dans le résumé aussi : '+(mcSummary(MC).includes('@ 10 kg')?'✓':'✗'));

console.log('\n═══ Historique (vue Suivi, comme sur la capture) ═══');
S.sessions=[{...JSON.parse(JSON.stringify(S.draft)),id:'s1'}];
S.draft=null;S.tab='historique';S.open='s1';render();
const h=nodes.app.innerHTML.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
const i=h.indexOf('3 passages');
console.log('  "'+h.slice(i,i+90).trim()+'"');
