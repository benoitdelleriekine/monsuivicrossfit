const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let L={},scrolls=[];
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||mk(),activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo:(a)=>scrolls.push(typeof a==='object'?a.top:a)};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const {S,render}=new Function(code+"\n;return {S,render};")();
const click=ds=>L.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const input=(id,v)=>L.input({target:{id,value:v,dataset:{},closest:()=>null}});

S.profile={sex:'m',age:36,bw:80,name:'Benoit'};
S.sessions=[{id:'a',date:'2026-08-06',feel:4,note:'',
 entries:[{id:'e',movementId:'push-press',sets:[{weight:40,reps:8,diff:'fond',level:null}]}],
 metcons:[{id:'m',name:'',format:'intervals',cap:12,rounds:3,scheme:'',rx:true,
  items:[{movementId:'power-clean',reps:10,weight:40}],res:{mode:'rounds',secs:0,rounds:3,reps:0,done:true}}]},
 {id:'b',date:'2026-08-04',feel:3,note:'',metcons:[],
  entries:[{id:'e2',movementId:'front-squat',sets:[{weight:70,reps:3,diff:'fond',level:null}]}]}];

console.log('═══ Imbrication des conteneurs ═══');
S.tab='progres';render();
const h=nodes.app.innerHTML;
// profondeur maximale de .pane imbriqués
let prof=0,max=0;
for(const m of h.matchAll(/<div class="pane"|<\/div>/g)){
 if(m[0].startsWith('<div')){prof++;max=Math.max(max,prof)}else prof=Math.max(0,prof-1)}
const panes=(h.match(/<div class="pane"/g)||[]).length;
console.log('  conteneurs .pane   : '+panes);
console.log('  imbrication max    : '+max+' '+(max<=1?'✓ aucun emboîtement':'✗ '+max+' niveaux → marges cumulées'));

console.log('\n═══ Retour en haut de page ═══');
scrolls.length=0;
click({act:'fiche',v:'push-press'});render();
console.log('  ouverture d\'une fiche      : '+(scrolls.length?'✓ remonté':'✗ reste en place'));
scrolls.length=0;render();
console.log('  re-rendu sans changement   : '+(scrolls.length===0?'✓ position conservée':'✗ remonte à tort'));
scrolls.length=0;click({act:'fclose'});render();
console.log('  retour aux progrès         : '+(scrolls.length?'✓':'✗'));
scrolls.length=0;click({act:'tab',v:'historique'});render();
console.log('  changement d\'onglet        : '+(scrolls.length?'✓':'✗'));
scrolls.length=0;S.tab='noter';S.draft={id:'d',date:'2026-08-06',feel:3,note:'',metcons:[],
 entries:[{id:'x',movementId:'back-squat',sets:[]}]};render();
scrolls.length=0;click({act:'focus',id:'x'});render();
console.log('  ouverture d\'un mouvement   : '+(scrolls.length?'✓':'✗'));
scrolls.length=0;input('nt','note en cours de frappe');render();
console.log('  saisie de texte            : '+(scrolls.length===0?'✓ ne saute pas':'✗ saute'));
