const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0})});
const nodes={app:mk(),tabs:mk(),overlay:mk(),spacer:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||null,activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,mv,mcTotals,itemLabel,mcStructure,mcSummary,volumeSince,histFor};")();
const {S,render,mcStructure,mcSummary}=R;
const H=()=>nodes.app.innerHTML;
const txt=h=>h.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();

const MC={id:'m',name:'',format:'fortime',cap:12,rounds:1,scheme:'',rx:true,
 items:[{movementId:'db-thruster',reps:null,weight:10,seq:[10,15,20]},
        {movementId:'push-up',reps:null,seq:[15,25,15]}],
 res:{mode:'time',secs:0,rounds:0,reps:0,done:true}};
S.profile={sex:'m',age:36,bw:80,name:'B'};
S.sessions=[];
S.draft={id:'d',date:'2026-08-10',feel:3,note:'',entries:[],metcons:[JSON.parse(JSON.stringify(MC))]};
S.tab='noter';S.mc=0;render();
const h=H();

console.log('═══ Éditeur ═══\n');
const entete=(h.match(/eyebrow" style="letter-spacing:.06em;color:var\(--ink\)">([^<]*)</)||[])[1];
console.log('  en-tête de la carte  : "'+(entete||'aucun')+'"');
console.log('  bloc des totaux      : '+(/Volume total/i.test(txt(h).split('Ajouter un mouvement')[1]||'')?'✓ affiché':'✗ ABSENT'));
const apres=txt(h).split('Ajouter un mouvement')[1]||'';
console.log('  contenu après le bouton : "'+apres.slice(0,120).trim()+'"');

console.log('\n═══ Résumé de la séance (onglet Noter, liste) ═══\n');
S.mc=null;render();
const res=txt(H());
const i=res.indexOf('For Time');
console.log('  "'+res.slice(i-30,i+150).trim()+'"');

console.log('\n═══ Historique (onglet Suivi) ═══\n');
S.sessions=[{...JSON.parse(JSON.stringify(S.draft)),id:'s1'}];
S.draft=null;S.tab='historique';S.open='s1';render();
const hh=txt(H());
const j=hh.indexOf('For Time');
console.log('  "'+hh.slice(j-20,j+220).trim()+'"');

console.log('\n═══ Largeur du champ de saisie ═══\n');
// .sin : largeur 100% d'une colonne flex:1 ; on estime le rendu sur iPhone
const LARGEURS={'iPhone SE (375)':375,'iPhone 14 (390)':390};
for(const [nom,w] of Object.entries(LARGEURS)){
 const dispo=(w-44-32-2*8-2*34)/2;   // page, carte, gouttières, unités
 console.log(`  ${nom} : ~${Math.round(dispo)} px par champ · "10-15-20" à 16px ≈ 72 px  ${dispo>80?'✓':'⚠'}`);
}
