/* Chargement de l'app et du module Plan dans Node, sans navigateur.
   Fichier utilitaire : préfixé « _ », il n'est pas lancé seul par run.sh. */
const path=require('path'),fs=require('fs');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const host=html.match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const planif=fs.readFileSync(path.join(__dirname,'..','planif.js'),'utf8');
function el(){const o={innerHTML:'',textContent:'',style:{},dataset:{},children:[],value:'',files:[],
 addEventListener(){},removeEventListener(){},setAttribute(){},getAttribute(){return null},appendChild(c){this.children.push(c);return c},
 querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},closest(){return null},contains(){return false},
 focus(){},blur(){},click(){},scrollIntoView(){},setSelectionRange(){},getBoundingClientRect(){return{top:0,height:0,width:0}},
 attachShadow(){const r=el();r.host=this;return r}};return o}
function boot(store){
 store=store||{};
 const nodes={};
 global.document={addEventListener(){},removeEventListener(){},getElementById:i=>nodes[i]||(nodes[i]=el()),createElement:()=>el(),
  documentElement:Object.assign(el(),{scrollHeight:1000}),head:el(),body:el(),querySelector:()=>null,querySelectorAll:()=>[],activeElement:null,
  fonts:{load:()=>Promise.resolve()},visibilityState:'visible'};
 global.window={addEventListener(){},removeEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
  scrollTo(){},scrollBy(){},innerWidth:390};
 global.navigator={vibrate(){}};
 global.localStorage={getItem:k=>store[k]===undefined?null:store[k],setItem:(k,v)=>{store[k]=String(v)},removeItem:k=>{delete store[k]}};
 global.alert=()=>{};global.confirm=()=>true;global.prompt=()=>null;
 global.Blob=function(){};global.URL={createObjectURL:()=>'',revokeObjectURL(){}};
 const R=new Function(host+'\n;'+planif+'\n;return {S,render,save,load,payload,applyRemote,backupData,restoreData,snapshotOnUpdate,backups,mergePlanif,normPlanif,APP_VERSION,PLAN:window.PLAN,HOST:window.PLAN_HOST};')();
 R.store=store;return R}
module.exports={boot};
