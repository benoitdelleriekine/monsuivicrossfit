const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=id=>({id,innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0,height:80})});
const nodes={app:mk('app'),tabs:mk('tabs'),overlay:mk('overlay'),spacer:mk('spacer')};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
global.document={addEventListener:(t,f)=>{(L[t]=L[t]||[]).push(f)},getElementById:i=>nodes[i]||null,
 activeElement:null,createElement:()=>mk('x'),documentElement:root,querySelector:()=>({setAttribute(){}}),fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={},prompted=null;
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;global.prompt=()=>prompted;
const R=new Function(code+"\n;return {S,render,createMove,addMove};")();
const {S,render}=R;
const click=ds=>(L.click||[]).forEach(f=>f({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}}));
let ko=0;const T=(n,c,d)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${d&&!c?'  → '+d:''}`)};

S.profile={sex:'m',age:36,bw:80,name:'B'};S.custom=[];S.sessions=[];

function nouvelleSeance(){
 S.draft={id:'d',date:'2026-08-20',feel:3,note:'',entries:[],
  metcons:[{id:'m',name:'',format:'amrap',cap:12,rounds:1,scheme:'',rx:true,mode:null,
   items:[],res:{mode:'rounds',secs:0,rounds:0,reps:0,done:true}}]};
 S.mc=0;S.focus=null;
}

console.log('═══ Le bug signalé : créer un mouvement DEPUIS un metcon ═══\n');
nouvelleSeance();
S.picker=true;S.pickFor='metcon';S.q='Wall Walk perso';
click({act:'create'});
render();
T("le mouvement n'atterrit PAS dans le travail spécifique",
  S.draft.entries.length===0, S.draft.entries.length+' entrée(s) créée(s) à tort');
T('le mouvement rejoint bien les items du metcon',
  MC_items()===1, MC_items()+' item(s) dans le metcon');
T('le sélecteur se referme', S.picker===false);
function MC_items(){return (S.draft.metcons[S.mc].items||[]).length}

console.log('\n═══ Même vérification avec createAsk (invite système) ═══\n');
nouvelleSeance();
S.picker=true;S.pickFor='metcon';prompted='Farmer Carry perso';
click({act:'createAsk'});
render();
T("aucune fuite vers le travail spécifique", S.draft.entries.length===0);
T('un seul item dans le metcon', MC_items()===1, MC_items());

console.log('\n═══ Le chemin normal ne doit pas régresser : créer HORS metcon ═══\n');
nouvelleSeance();
S.picker=true;S.pickFor=null;S.q='Sled Push perso';
click({act:'create'});
render();
T('le mouvement rejoint bien le travail spécifique cette fois',
  S.draft.entries.length===1, S.draft.entries.length);
T("rien n'a été ajouté au metcon", MC_items()===0, MC_items());

console.log('\n═══ Le mouvement créé est bien utilisable ensuite (catalogue) ═══\n');
nouvelleSeance();
S.picker=true;S.pickFor='metcon';S.q='GHD perso';
click({act:'create'});
const idCree=S.draft.metcons[0].items[0].movementId;
T('un identifiant "c-" a bien été attribué', /^c-/.test(idCree), idCree);
T('retrouvable dans S.custom', S.custom.some(c=>c.id===idCree&&c.n==='GHD perso'));

console.log('\n═══ Ajout normal (mouvement déjà catalogué) dans un metcon : témoin ═══\n');
nouvelleSeance();
S.picker=true;S.pickFor='metcon';
click({act:'add',v:'pull-up'});
render();
T('comportement de référence inchangé', S.draft.entries.length===0&&MC_items()===1);

console.log(`\n  ${ko?"✗ "+ko+" échec(s)":"✓ le bug est corrige, rien d'autre n'a bouge"}`);
process.exit(ko?1:0);
