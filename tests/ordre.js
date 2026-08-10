const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=id=>({id,innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0,height:80})});
const nodes={app:mk('app'),tabs:mk('tabs'),overlay:mk('overlay'),spacer:mk('spacer')};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
// positions simulées des lignes, pour le glissement
let ROWS={};
global.document={addEventListener:(t,f)=>{(L[t]=L[t]||[]).push(f)},
 getElementById:i=>nodes[i]||null,activeElement:null,createElement:()=>mk('x'),
 documentElement:root,querySelector:sel=>{const m=/data-row="(\d+)"/.exec(sel);
  return m&&ROWS[m[1]]?{getBoundingClientRect:()=>ROWS[m[1]]}:null},
 fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,mcTotals,mcStructure,itemLabel,mv};")();
const {S,render,mcTotals,mcStructure,itemLabel,mv}=R;
const fire=(t,e)=>(L[t]||[]).forEach(f=>f(e));
const click=ds=>fire('click',{target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const input=(id,ds,v)=>fire('input',{target:{id,value:v,dataset:ds,closest:()=>null}});
const H=()=>nodes.app.innerHTML;

S.profile={sex:'m',age:36,bw:80,name:'B'};S.sessions=[];
S.draft={id:'d',date:'2026-08-10',feel:3,note:'',entries:[],
 metcons:[{id:'m',name:'',format:'fortime',cap:12,rounds:1,scheme:'',mode:null,rx:true,
  items:[],res:{mode:'time',secs:0,rounds:0,reps:0,done:true}}]};
S.tab='noter';S.mc=0;render();
const MC=()=>S.draft.metcons[0];
const noms=()=>MC().items.map(x=>mv(x.movementId).n);

console.log('═══ Mode « Par mouvement » — ta séance réelle ═══\n');
click({act:'mcquick',v:'db-thruster'});
click({act:'mcquick',v:'push-up'});
click({act:'mcstruct',v:'seq'});
console.log('  mode activé          : '+(MC().mode==='seq'?'✓':'✗')+' · passages : '+MC().rounds);
click({act:'mcpass',v:'-1'});   // 3 → 2
click({act:'mcpass',v:'1'});    // 2 → 3
console.log('  réglage des passages : '+MC().rounds);
render();
const cases=(H().match(/data-f="s\d"/g)||[]).length;
console.log('  cases numériques     : '+cases+' (2 mouvements × 3 passages) '+(cases===6?'✓':'✗'));
console.log('  clavier numérique    : '+(/id="mi-0-s0"[^>]*inputmode="numeric"/.test(H())||/inputmode="numeric" id="mi-0-s0"/.test(H())?'✓':'✗'));
console.log('  aucun champ à tiret  : '+(!/type="text" inputmode="numeric" id="mi-\d-reps"/.test(H())?'✓':'✗'));

[[0,'s0','10'],[0,'s1','15'],[0,'s2','20'],[1,'s0','15'],[1,'s1','25'],[1,'s2','15']]
 .forEach(([i,f,v])=>input(`mi-${i}-${f}`,{mi:String(i),f},v));
render();
console.log('\n  saisie : '+MC().items.map(x=>mv(x.movementId).n+' '+(x.seq||[]).join('-')).join('  |  '));
const T=mcTotals(MC());
console.log('  totaux : '+T.map(t=>t.n+' '+t.txt).join(' · ')+
 '  → '+T.reduce((a,t)=>a+t.reps,0)+' reps '+(T.reduce((a,t)=>a+t.reps,0)===100?'✓':'✗'));
console.log('  libellé : '+MC().items.map(x=>itemLabel(x,mcStructure(MC()))).join(' · '));

console.log('\n═══ Réorganisation par les flèches ═══\n');
click({act:'mcquick',v:'burpee'});
console.log('  départ      : '+noms().join(' → '));
click({act:'mcmove',i:'2',d:'-1'});
console.log('  burpee ↑    : '+noms().join(' → '));
click({act:'mcmove',i:'0',d:'1'});
console.log('  premier ↓   : '+noms().join(' → '));
click({act:'mcmove',i:'0',d:'-1'});
console.log('  hors limite : '+noms().join(' → ')+'  (inchangé ✓)');
click({act:'mcmove',i:'2',d:'1'});
console.log('  hors limite : '+noms().join(' → ')+'  (inchangé ✓)');

console.log('\n═══ Glissement au doigt ═══\n');
render();
console.log('  poignées présentes : '+((H().match(/data-drag="/g)||[]).length)+' ✓');
ROWS={'0':{top:0,height:80},'1':{top:80,height:80},'2':{top:160,height:80}};
const dep=noms().slice();
fire('pointerdown',{target:{closest:s=>s==='[data-drag]'?{dataset:{drag:'0'}}:null},preventDefault(){}});
console.log('  prise en main      : '+(S.drag?'✓ ligne '+S.drag.i:'✗'));
fire('pointermove',{clientY:130,preventDefault(){}});   // franchit le milieu de la ligne 1
console.log('  après glissement   : '+noms().join(' → '));
fire('pointermove',{clientY:210,preventDefault(){}});   // franchit la ligne 2
console.log('  plus bas           : '+noms().join(' → '));
fire('pointerup',{});
console.log('  relâché            : '+(S.drag===null?'✓':'✗')+' · ordre final : '+noms().join(' → '));
console.log('  ordre bien modifié : '+(noms().join()!==dep.join()?'✓':'✗'));

console.log('\n═══ Retour aux autres modes ═══\n');
click({act:'mcstruct',v:'scheme'});
console.log('  vers schéma : mode='+MC().mode+' · scheme='+MC().scheme+
 ' · seq effacées : '+(MC().items.every(x=>!x.seq)?'✓':'✗')+' · reps reprises : '+MC().items.map(x=>x.reps).join(','));
console.log('  totaux      : '+mcTotals(MC()).map(t=>t.reps).join('/')+' (21-15-9 = 45 chacun ✓)');
click({act:'mcstruct',v:'rounds'});
console.log('  vers tours  : mode='+MC().mode+' · rounds='+MC().rounds);
