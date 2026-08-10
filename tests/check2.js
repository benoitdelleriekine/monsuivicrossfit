const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]}};
global.document={addEventListener(){},getElementById:i=>nodes[i]||mk(),activeElement:null,createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};global.navigator={};
let store={};global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
const R=new Function(code+"\n;return {S,render,mv,gicon,GICON};")();
const {S,render}=R;
S.profile={sex:'m',age:36,bw:80,name:'Benoît'};
S.sessions=[{id:'a',date:'2026-08-04',feel:4,note:'',
 entries:[{id:'e1',movementId:'front-squat',sets:[{weight:60,reps:6,diff:'fond',level:null}]},
  {id:'e2',movementId:'pull-up',sets:[{weight:0,reps:8,diff:'fond',level:6}]},
  {id:'e3',movementId:'row',sets:[{dist:500,secs:100}]},
  {id:'e4',movementId:'db-snatch',sets:[{weight:22.5,reps:8,diff:'juste',level:null}]},
  {id:'e5',movementId:'deadlift',sets:[{weight:120,reps:5,diff:'fond',level:null}]}],
 metcons:[{id:'m1',name:'',format:'fortime',cap:20,rounds:3,scheme:'',rx:true,
  items:[{movementId:'bike',dist:1600},{movementId:'t2b',reps:50},{movementId:'thruster',reps:25,weight:25}],
  res:{mode:'time',secs:1123,rounds:0,reps:0,done:true}}]}];

S.tab='progres';render();
const html=nodes.app.innerHTML;
const cats=[...html.matchAll(/data-act="progg" data-v="([^"]+)"/g)].map(m=>m[1]);
console.log('  catégories détectées : '+cats.join(' · '));
console.log('  icônes SVG rendues   : '+((html.match(/viewBox="0 0 16 16"/g)||[]).length)+' sur '+cats.length);
const b0=(html.split('id="movblock"')[1]||'');
console.log('  mouvements listés    : '+[...new Set([...b0.matchAll(/data-act="fiche" data-v="([^"]+)"/g)].map(m=>m[1]))].map(id=>R.mv(id).n).join(', '));

// Bascule de catégorie
['Gymnastique','Cardio','Haltères'].forEach(g=>{
 S.progG=g;S.prog=null;render();
 const bloc=(nodes.app.innerHTML.split('id="movblock"')[1]||'');
 const mvs=[...bloc.matchAll(/data-act="fiche" data-v="([^"]+)"/g)].map(m=>m[1]);
 const uniq=[...new Set(mvs)];
 console.log(`  ${g.padEnd(13)} → ${uniq.map(id=>R.mv(id).n).join(', ')}`);});

// Catégorie inexistante : repli propre
S.progG='Inexistante';S.prog=null;render();
console.log('  catégorie invalide   : '+((nodes.app.innerHTML.split('id="movblock"')[1]||'').includes('data-act="fiche"')?'repli OK':'CASSÉ'));
// Taille de la frise
const css=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8');
console.log('  frise limitée à 252px: '+(/\.grid\{[^}]*max-width:252px/.test(css)?'oui':'NON'));
console.log('  libellés de niveau   : '+(css.includes('LVSHORT[i]')?'complets':'tronqués'));
