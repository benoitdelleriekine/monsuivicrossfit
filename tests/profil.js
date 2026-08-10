const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
global.document={addEventListener(){},getElementById:i=>nodes[i]||mk(),activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={};
let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
const R=new Function(code+"\n;return {S,save,load,payload,applyRemote};")();
const {S,save,load,payload}=R;

// 1. Aller-retour local du profil
S.profile={sex:'m',age:36,bw:80,name:'Benoît'};
S.sessions=[{id:'a',date:'2026-08-04',feel:4,note:'',entries:[],metcons:[]}];
save();
const brut=JSON.parse(store['cf-progres']);
console.log('  profil présent dans le stockage : '+(brut.profile?JSON.stringify(brut.profile):'ABSENT'));
S.profile=null;load();
console.log('  profil relu après rechargement  : '+(S.profile?JSON.stringify(S.profile):'PERDU'));

// 2. Ce qui part vers le cloud
console.log('  profil dans la charge cloud     : '+(payload().profile?'oui':'ABSENT'));

// 3. Reprise d'une ancienne clé (migration)
store={};
store['cf-progres-v7']=JSON.stringify({sessions:[{id:'x',date:'2026-07-01',entries:[]}],
 profile:{sex:'m',age:36,bw:80,name:'Benoît'},bar:15});
S.profile=null;S.sessions=[];load();
console.log('  migration ancienne clé, profil  : '+(S.profile?'conservé':'PERDU'));

// 4. Scénario cloud : ligne distante sans profil
store={};
S.profile={sex:'m',age:36,bw:80,name:'Benoît'};S.sessions=[{id:'a',date:'2026-08-04',entries:[]}];save();
R.applyRemote({sessions:[{id:'b',date:'2026-08-01',entries:[]}],updatedAt:Date.now()+1000});
console.log('  après synchro d\'une ligne sans profil : '+(S.profile?'conservé':'ÉCRASÉ  <-- cause probable'));

// 5. Cas inverse : appareil neuf, profil présent côté cloud
store={};S.profile=null;S.custom=[];S.sessions=[];
R.applyRemote({sessions:[{id:'c',date:'2026-08-02',entries:[]}],
 profile:{sex:'f',age:30,bw:60,name:'Fanny'},custom:[{id:'c-1',n:'Test',k:'gym',g:'Mes mouvements',u:'reps'}],updatedAt:Date.now()});
console.log('  appareil neuf, profil adopté    : '+(S.profile&&S.profile.name==='Fanny'?'oui':'NON'));
console.log('  mouvements perso récupérés      : '+(S.custom.length===1?'oui':'NON'));

// 6. Fusion des mouvements perso des deux côtés
S.custom=[{id:'c-2',n:'Local',k:'gym',g:'Mes mouvements',u:'reps'}];
R.applyRemote({sessions:[],custom:[{id:'c-1',n:'Distant',k:'gym',g:'Mes mouvements',u:'reps'}],updatedAt:Date.now()});
console.log('  fusion des mouvements perso     : '+S.custom.map(c=>c.n).join(' + '));
