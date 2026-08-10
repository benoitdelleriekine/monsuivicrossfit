const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]}};
global.document={addEventListener(){},getElementById:i=>nodes[i]||mk(),activeElement:null,createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={};
let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
const {S,render}=new Function(code+"\n;return {S,render};")();
S.profile={sex:'f',age:32,bw:58,name:'Fanny'};
S.sessions=[{id:'a',date:'2026-08-04',feel:4,note:'',metcons:[],
 entries:[{id:'e',movementId:'front-squat',sets:[{weight:60,reps:6,diff:'fond',level:null}]}]}];
['progres','noter','historique','profil'].forEach(t=>{S.tab=t;render();
 const inApp=/data-act="tab"/.test(nodes.app.innerHTML);
 const inNav=/data-act="tab"/.test(nodes.tabs.innerHTML);
 console.log(`  ${t.padEnd(11)} nav dans #tabs: ${inNav?'oui':'NON'}   nav polluant #app: ${inApp?'OUI (bug)':'non'}`);});
S.tab='noter';S.picker=true;render();
console.log('  feuille rendue dans #overlay : '+(/data-act="add"/.test(nodes.overlay.innerHTML)?'oui':'NON'));
S.picker=false;render();
console.log('  #overlay vidé à la fermeture : '+(nodes.overlay.innerHTML===''?'oui':'NON'));
