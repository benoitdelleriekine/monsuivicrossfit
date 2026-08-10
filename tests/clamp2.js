const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];

const VIEWPORT=800;
let scrollY=0, spacerH=0;
// ── état RÉELLEMENT peint, ne change qu'à l'écriture de innerHTML ──
let DOM={cat:'Haltéro',vue:'mois'},ETAT=null;
const PARCAT={'Haltéro':3,'Force':2,'Gymnastique':1,'Cardio':1};
const hCal=()=>DOM.vue==='mois'?430:DOM.vue==='semaines'?200:210;
const calTop=()=>380;
const movTop=()=>380+hCal()+300;
const hDoc=()=>movTop()+120+(PARCAT[DOM.cat]||1)*62+150+spacerH;
const maxScroll=()=>Math.max(0,hDoc()-VIEWPORT);
const setScroll=v=>{scrollY=Math.min(Math.max(0,v),maxScroll())};
const topDe=id=>(id==='calblock'?calTop():movTop())-scrollY;

const mk=id=>({id,_h:'',get innerHTML(){return this._h},
 set innerHTML(v){this._h=v;if(id==='app'&&ETAT){DOM={cat:ETAT.progG||'Haltéro',vue:ETAT.hv||'mois'};setScroll(scrollY)}},
 focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){},
 getBoundingClientRect:()=>({top:topDe(id)})});
const nodes={app:mk('app'),tabs:mk('tabs'),overlay:mk('overlay')};
const spacer={id:'spacer',style:{get height(){return spacerH+'px'},
 set height(v){spacerH=parseFloat(v)||0;setScroll(scrollY)}}};
const blocs={calblock:mk('calblock'),movblock:mk('movblock'),spacer};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},
 get scrollHeight(){return hDoc()}};
let L={};
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||blocs[i]||null,
 activeElement:null,createElement:()=>mk('x'),documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo:a=>setScroll(typeof a==='object'?a.top:a),scrollBy:(x,y)=>setScroll(scrollY+y)};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const {S,render}=new Function(code+"\n;return {S,render};")();
ETAT=S;
const click=ds=>L.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});

S.profile={sex:'m',age:36,bw:80,name:'B'};
S.sessions=[{id:'a',date:'2026-08-06',feel:4,note:'',metcons:[],
 entries:[{id:'e1',movementId:'push-press',sets:[{weight:40,reps:8,diff:'fond',level:null}]},
  {id:'e2',movementId:'thruster',sets:[{weight:40,reps:8,diff:'fond',level:null}]},
  {id:'e5',movementId:'power-clean',sets:[{weight:50,reps:5,diff:'fond',level:null}]},
  {id:'e3',movementId:'front-squat',sets:[{weight:70,reps:3,diff:'fond',level:null}]},
  {id:'e6',movementId:'deadlift',sets:[{weight:100,reps:5,diff:'juste',level:null}]},
  {id:'e4',movementId:'pull-up',sets:[{weight:0,reps:8,diff:'fond',level:5}]},
  {id:'e7',movementId:'row',sets:[{dist:500,secs:100}]}]}];

function test(vue){
 S.tab='progres';S.hv=vue;S.progG='Haltéro';spacerH=0;render();
 setScroll(maxScroll());
 console.log(`\n── vue « ${vue} » — utilisateur tout en bas (${Math.round(scrollY)} px) ──`);
 let ko=0;
 for(const g of ['Force','Gymnastique','Cardio','Haltéro','Force']){
  const avant=topDe('movblock');
  click({act:'progg',v:g});
  const apres=topDe('movblock');
  const ecart=Math.round(apres-avant);
  if(Math.abs(ecart)>1)ko++;
  console.log(`  → ${g.padEnd(12)}${PARCAT[g]} mvt · cale ${String(Math.round(spacerH)).padStart(3)} px · `+
   (Math.abs(ecart)<=1?'✓ stable':`✗ décalé de ${ecart} px`));
 }
 return ko;
}
let total=0;
console.log('═══ Défilement borné, comme dans un vrai navigateur ═══');
['mois','semaines','annee'].forEach(v=>total+=test(v));

console.log('\n═══ Bascule de vue du calendrier, en bas de page ═══');
S.hv='mois';S.progG='Gymnastique';spacerH=0;render();setScroll(maxScroll());
for(const v of ['semaines','annee','mois']){
 const avant=topDe('calblock');
 click({act:'hv',v});
 const e=Math.round(topDe('calblock')-avant);
 if(Math.abs(e)>1)total++;
 console.log(`  → ${v.padEnd(9)} cale ${String(Math.round(spacerH)).padStart(3)} px · `+(Math.abs(e)<=1?'✓ stable':`✗ décalé de ${e} px`));
}
console.log('\n═══ La cale disparaît en changeant d\'écran ═══');
click({act:'tab',v:'historique'});
console.log('  cale après changement d\'onglet : '+Math.round(spacerH)+' px '+(spacerH===0?'✓':'✗'));
console.log(`\n${total?'✗ '+total+' décalage(s)':'✓ aucun décalage'}`);
