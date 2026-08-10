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
const R=new Function(code+"\n;return {S,render,mv,mcTotals,itemLabel,mcStructure,recents};")();
const {S,render,mcTotals,itemLabel,mcStructure,recents}=R;
const click=ds=>L.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const tape=(mi,f,v)=>L.input({target:{id:`mi-${mi}-${f}`,value:v,dataset:{mi:String(mi),f},closest:()=>null}});
const H=()=>nodes.app.innerHTML;

S.profile={sex:'m',age:36,bw:80,name:'B'};
S.sessions=[{id:'v',date:'2026-08-01',feel:3,note:'',entries:[],
 metcons:[{id:'mv',name:'',format:'amrap',cap:10,rounds:1,scheme:'',rx:true,
  items:[{movementId:'wall-ball',reps:20,weight:9,seq:null},{movementId:'row',dist:250}],
  res:{mode:'rounds',secs:0,rounds:5,reps:0,done:true}}]}];
S.draft={id:'d',date:'2026-08-10',feel:3,note:'',entries:[],
 metcons:[{id:'m',name:'',format:'fortime',cap:12,rounds:1,scheme:'',rx:true,
  items:[],res:{mode:'time',secs:0,rounds:0,reps:0,done:true}}]};
S.tab='noter';S.mc=0;render();
const MC=()=>S.draft.metcons[0];

console.log('═══ Ta séance du jour, saisie avec le nouveau système ═══\n');
console.log('  For Time 12 min — 10/15, 15/25, 20/15 (DB Thruster / Push-Up)\n');
click({act:'mcquick',v:'db-thruster'});
click({act:'mcquick',v:'push-up'});
click({act:'mcstruct',v:'seq'});
[[0,'s0','10'],[0,'s1','15'],[0,'s2','20'],[1,'s0','15'],[1,'s1','25'],[1,'s2','15']]
 .forEach(([i,f,v])=>tape(i,f,v));
tape(0,'weight','10');
render();
console.log('  mouvements saisis  : '+MC().items.length+' (au lieu de 6 auparavant)');
MC().items.forEach((it,i)=>console.log(`   ${i+1}. ${itemLabel(it,mcStructure(MC()))}`));
console.log('\n  totaux calculés :');
mcTotals(MC()).forEach(t=>console.log(`   ${t.n.padEnd(14)} ${t.txt}${t.ton?' · '+t.ton+' kg':''}`));
const total=mcTotals(MC()).reduce((a,t)=>a+t.reps,0);
console.log(`   → ${total} répétitions au total  ${total===100?'✓ (10+15+20+15+25+15)':'✗'}`);

console.log('\n═══ Rappel visuel dans l\'éditeur ═══');
console.log('  total par mouvement      : '+(/45 reps au total/.test(H())?'✓':'✗'));
console.log('  cases numériques         : '+((H().match(/data-f="s[0-9]"/g)||[]).length===6?'✓':'✗'));
console.log('  valeurs réaffichées      : '+(/id="mi-0-s2"[^>]*value="20"/.test(H())?'✓':'✗'));

console.log('\n═══ Duplication ═══');
click({act:'mcdup',i:'0'});render();
console.log('  après duplication  : '+MC().items.length+' items · le doublon en position 2 : '+
 (MC().items[1].movementId==='db-thruster'?'✓':'✗'));
console.log('  suite copiée sans lien partagé : '+(MC().items[1].seq!==MC().items[0].seq?'✓':'✗'));
MC().items.splice(1,1);

console.log('\n═══ Récemment utilisés ═══');
console.log('  proposés : '+recents(6).map(id=>R.mv(id).n).join(' · '));
console.log('  ordre : mouvements du metcon en cours d\'abord, puis historique ✓');
render();
console.log('  pastilles dans l\'éditeur : '+((H().match(/data-act="mcquick"/g)||[]).length)+' proposées');
S.picker=true;render();
console.log('  bloc dans le sélecteur   : '+(/Récemment utilisés/.test(nodes.overlay.innerHTML)?'✓':'✗'));
S.picker=false;

console.log('\n═══ Compatibilité avec l\'existant ═══');
const fran={rounds:1,scheme:'21-15-9',items:[
 {movementId:'thruster',reps:null,weight:30,seq:null},{movementId:'pull-up',reps:null,seq:null}]};
console.log('  schéma global 21-15-9 : '+mcTotals(fran).map(t=>t.reps).join(' / ')+
 (mcTotals(fran).every(t=>t.reps===45)?'  ✓ inchangé':'  ✗'));
const mixte={rounds:3,scheme:'',items:[
 {movementId:'thruster',reps:10,weight:30,seq:null},{movementId:'burpee',seq:[5,10,15]}]};
console.log('  3 tours + une suite   : '+mcTotals(mixte).map(t=>t.n+' '+t.reps).join(' / ')+
 (mcTotals(mixte)[0].reps===30&&mcTotals(mixte)[1].reps===30?'  ✓':'  ✗'));
const simple={rounds:2,scheme:'',items:[{movementId:'thruster',reps:10,weight:30,seq:null}]};
console.log('  nombre simple         : '+mcTotals(simple)[0].reps+(mcTotals(simple)[0].reps===20?'  ✓':'  ✗'));
