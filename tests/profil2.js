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
let store={};global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
const R=new Function(code+"\n;return {S,seed,save,load,render,vProfil,openProfil,applyRemote};")();
const {S,seed,save,load,render,vProfil,openProfil}=R;
const val=(h,id)=>{const m=h.match(new RegExp('id="'+id+'"[^>]*value="([^"]*)"'));return m?m[1]:'ABSENT'};

console.log('── Scénario complet ──');
S.profile={sex:'m',age:36,bw:80,name:'Benoit'};openProfil();save();
S.draft={id:'d',date:'2026-08-05',feel:3,note:'',metcons:[],entries:[]};
seed('front-squat');seed('pull-up');seed('row');
console.log('  après 3 mouvements ouverts   : age='+S.d.age+' bw='+S.d.bw);
let h=vProfil();
console.log('  champs affichés              : ans="'+val(h,'in-age')+'" kg="'+val(h,'in-bw')+'"');
save();load();
console.log('  profil après redémarrage     : '+JSON.stringify(S.profile));

console.log('── Champs vidés à la main ──');
S.d.age=undefined;S.d.bw=NaN;
h=vProfil();
console.log('  réamorcés depuis le profil   : ans="'+val(h,'in-age')+'" kg="'+val(h,'in-bw')+'"');

console.log('── Validation ──');
[['',''],[10,80],[36,10],[200,80],[36,80]].forEach(([a,b])=>{
 S.d.age=a;S.d.bw=b;
 const A=Number(a),B=Number(b);
 const ok=Number.isFinite(A)&&Number.isFinite(B)&&A>=14&&A<=100&&B>=30&&B<=250;
 console.log(`  age=${String(a).padEnd(4)} poids=${String(b).padEnd(4)} → ${ok?'accepté':'refusé'}`);});

console.log('── Réparation d\'un profil corrompu ──');
store['cf-progres']=JSON.stringify({sessions:[{id:'a',date:'2026-08-01',entries:[],metcons:[]}],
 profile:{sex:'m',age:null,bw:undefined,name:'Benoit'},bar:15});
S.profile={};load();
console.log('  profil null détecté          : '+(S.profile===null?'réinitialisé, saisie redemandée':'CONSERVÉ CORROMPU'));
console.log('  séances préservées           : '+S.sessions.length);
