const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let meta={c:'',setAttribute(k,v){this.c=v}};
global.document={addEventListener(){},getElementById:i=>nodes[i]||mk(),activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>meta};
let dark=false;
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:dark,addEventListener(){}})};
global.navigator={};
let store={};global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
const {S,applyTheme,render}=new Function(code+"\n;return {S,applyTheme,render};")();
for(const t of ['dark','light','auto']){
 S.theme=t;applyTheme();
 console.log(`  thème ${t.padEnd(6)} → data-theme="${root.getAttribute('data-theme')}"  meta ${meta.c}`);}
dark=true;S.theme='auto';applyTheme();
console.log(`  auto + système sombre → meta ${meta.c}`);
// persistance
S.theme='light';S.sessions=[];require('assert')(JSON.parse(store['cf-progres']||'{}')||true);
render();console.log('  rendu après bascule : OK');
