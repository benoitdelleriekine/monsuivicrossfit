const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
let store={};
function boot(){
 const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
 const nodes={app:mk(),tabs:mk(),overlay:mk()};
 const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
 let L={};
 global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||mk(),activeElement:null,
  createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
 global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
 global.navigator={vibrate(){}};
 global.localStorage={getItem:k=>store[k]===undefined?null:store[k],setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
 global.alert=()=>{};global.confirm=()=>true;
 const R=new Function(code+"\n;return {S,render,load,save,payload,applyRemote,cloudSync,openProfil,seedProfil};")();
 return {...R,nodes,L};
}
const P={sex:'m',age:36,bw:80,name:'Benoit'};
const F=a=>`${a.S.psex} ${a.S.d.age}a ${a.S.d.bw}kg`;
const PR=a=>a.S.profile?`${a.S.profile.sex} ${a.S.profile.age}a ${a.S.profile.bw}kg`:'ABSENT';
const SESS=[{id:'s',date:'2026-08-04',entries:[],metcons:[]}];
let ko=0;const V=(n,c)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}`)};

(async()=>{
console.log('═══ Démarrages à froid, six configurations ═══\n');

// 1. local intact, pas de cloud
store={};let a=boot();a.S.profile={...P};a.S.sessions=SESS;a.save();
a=boot();global.window.CLOUD={enabled:false};a.load();if(!a.S.profile)a.openProfil();
V('local intact, hors ligne — formulaire '+F(a), a.S.psex==='m'&&a.S.d.age===36&&a.S.d.bw===80);

// 2. local vidé, cloud avec profil
store={};a=boot();
global.window.CLOUD={enabled:true,user:{email:'x'},pull:async()=>({sessions:SESS,profile:{...P},custom:[],bar:15,updatedAt:Date.now()}),push:async()=>{},signOut(){},wipe:async()=>{}};
a.load();if(!a.S.profile)a.openProfil();a.S.cloud.user={email:'x'};await a.cloudSync();
V('local vidé, cloud avec profil — formulaire '+F(a), a.S.psex==='m'&&a.S.d.age===36&&a.S.d.bw===80);

// 3. local intact, cloud SANS profil et plus récent
store={};a=boot();a.S.profile={...P};a.S.sessions=SESS;a.save();
a=boot();
global.window.CLOUD={enabled:true,user:{email:'x'},pull:async()=>({sessions:SESS,custom:[],bar:15,updatedAt:Date.now()+9e5}),push:async()=>{},signOut(){},wipe:async()=>{}};
a.load();if(!a.S.profile)a.openProfil();a.S.cloud.user={email:'x'};await a.cloudSync();
V('cloud sans profil ne l\'écrase pas — formulaire '+F(a), a.S.psex==='m'&&a.S.d.age===36&&a.S.d.bw===80);

// 4. rien nulle part
store={};a=boot();
global.window.CLOUD={enabled:true,user:null,pull:async()=>null,push:async()=>{},signOut(){},wipe:async()=>{}};
a.load();if(!a.S.profile)a.openProfil();
V('aucune donnée — valeurs par défaut proposées '+F(a), a.S.psex==='f'&&a.S.d.age===30&&a.S.d.bw===60);

// 5. profil corrompu en local, cloud sain
store={};store['cf-progres']=JSON.stringify({sessions:SESS,profile:{sex:'m',age:null,bw:undefined,name:'B'},bar:15});
a=boot();
global.window.CLOUD={enabled:true,user:{email:'x'},pull:async()=>({sessions:SESS,profile:{...P},custom:[],bar:15,updatedAt:Date.now()}),push:async()=>{},signOut(){},wipe:async()=>{}};
a.load();if(!a.S.profile)a.openProfil();a.S.cloud.user={email:'x'};await a.cloudSync();
V('profil corrompu réparé par le cloud — '+F(a), a.S.psex==='m'&&a.S.d.age===36&&a.S.d.bw===80);

// 6. après ouverture d'un mouvement (le bug historique)
store={};a=boot();a.S.profile={...P};a.S.sessions=SESS;a.save();
a=boot();global.window.CLOUD={enabled:false};a.load();
a.S.draft={id:'d',date:'2026-08-05',feel:3,note:'',metcons:[],entries:[{id:'e',movementId:'front-squat',sets:[]}]};
const R2=new Function('S','seed','S.draft&&seed("front-squat")');
a.S.tab='noter';a.render();
V('après navigation dans une séance — '+F(a), a.S.d.age===36&&a.S.d.bw===80);

console.log(`\n  ${ko?'✗ '+ko+' configuration(s) en échec':'✓ les six configurations sont correctes'}`);
})();
