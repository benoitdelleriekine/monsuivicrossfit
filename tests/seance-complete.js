const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];

const trace=[];
const ctx={fillStyle:'',strokeStyle:'',lineWidth:0,font:'',lineJoin:'',lineCap:'',textBaseline:'',
 clearRect(){},fillRect(){},drawImage(){},
 fillText(t,x,y){trace.push({t,x,y})},measureText:t=>({width:String(t).length*15}),
 beginPath(){},moveTo(){},lineTo(){},arcTo(){},arc(){},closePath(){},stroke(){},fill(){},
 createLinearGradient:()=>({addColorStop(){}})};
const cv={width:0,height:0,style:{},getContext:()=>ctx,toBlob:cb=>cb({size:1,type:'image/png'})};
const mk=id=>({id,innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0,height:80})});
const nodes={app:mk('app'),tabs:mk('tabs'),overlay:mk('overlay'),spacer:mk('spacer'),shcv:cv};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
global.document={addEventListener:(t,f)=>{(L[t]=L[t]||[]).push(f)},getElementById:i=>nodes[i]||null,
 activeElement:null,createElement:()=>mk('x'),documentElement:root,querySelector:()=>null,
 fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,shareData,paintShare,itemLabel};")();
const {S,render,shareData,paintShare}=R;
const click=ds=>(L.click||[]).forEach(f=>f({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}}));

let ko=0;const T=(n,c)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}`)};

S.profile={sex:'m',age:36,bw:80,name:'B'};
S.sessions=[{id:'s1',date:'2026-08-10',feel:1,note:'',
 entries:[{id:'e1',movementId:'front-squat',sets:[
  {weight:20,reps:8,diff:'facile',level:null},{weight:50,reps:8,diff:'juste',level:null},
  {weight:53,reps:8,diff:'juste',level:null},{weight:55,reps:8,diff:'fond',level:null},
  {weight:58,reps:8,diff:'fond',level:null}]}],
 metcons:[{id:'m1',name:'',format:'fortime',cap:12,rounds:3,scheme:'',mode:'seq',rx:false,
  items:[{movementId:'db-thruster',reps:null,weight:10,seq:[10,15,20]},
         {movementId:'push-up',reps:null,weight:null,seq:[15,25,15]}],
  res:{mode:'time',secs:0,rounds:0,reps:0,done:true}}]}];
 /* Note : pour un format « For Time », l'interface ne propose aucune bascule
    Terminé/Non terminé (elle n'existe que pour EMOM) — un temps à zéro
    veut dire « pas encore chronométré », pas « abandonné ». */

console.log('═══ Doublon du bouton « Partager le mois » ═══\n');
S.tab='progres';S.hv='mois';render();
const cnt=(nodes.app.innerHTML.match(/Partager le mois/g)||[]).length;
T('un seul bouton affiché (une seule fois dans le code source)', cnt===1);

console.log('\n═══ Détail complet de la séance (le bug signalé) ═══\n');
S.share={t:'seance',id:'s1',fmt:'45',bg:'sombre',col:'aqua',logo:true};
const D=shareData();
T('les 5 séries de Front Squat sont présentes (pas seulement la meilleure)',
  D.mov[0].sets.split('·').length===5);
T('aucun plafond à 6 lignes : le metcon est décrit en détail, pas juste le score',
  D.mcs[0].items.length===2);
T('le poids du DB Thruster apparaît dans le détail du metcon',
  D.mcs[0].items[0].includes('10 kg'));
T('le statut Rx/Adapté est capturé', D.mcs[0].rx===false);
T('le résultat "pas de temps" est capturé (aucun temps saisi)', D.mcs[0].res==='pas de temps');

trace.length=0;
paintShare().then(()=>{
 const textes=trace.map(x=>x.t);
 T('la charge du DB Thruster est bien dessinée sur le calque',
   textes.some(t=>t.includes('10 kg')));
 T('le statut ADAPTÉ est dessiné', textes.some(t=>t==='FOR TIME · 12\'   ·   ADAPTÉ'));
 T('les deux mouvements du metcon sont dessinés',
   textes.some(t=>t.includes('DB Thruster'))&&textes.some(t=>t.includes('Push-Up')));

 console.log('\n═══ Aucun chevauchement titre / date (positions relatives) ═══\n');
 const tag=trace.find(x=>x.t==='LUNDI 10 AOÛT');
 const titre=trace.find(x=>x.t==='Séance');
 T('la date (tag) est dessinée au-dessus du titre, avec un écart net',
   tag&&titre&&(titre.y-tag.y)>=95);

 console.log('\n═══ Cas limite : au-delà du plafond de troncature ═══\n');
 S.sessions[0].entries=Array.from({length:12},(_,i)=>({id:'e'+i,movementId:'front-squat',
  sets:[{weight:40+i,reps:5,diff:'juste',level:null}]}));
 const D2=shareData();
 T('au-delà de 8 mouvements, un compteur "+N" prend le relais',
   D2.mov.length===8&&D2.movExtra===4);

 S.sessions[0].metcons[0].items=Array.from({length:9},(_,i)=>({movementId:'burpee',reps:5+i,weight:null,seq:null}));
 const D3=shareData();
 T('au-delà de 5 mouvements dans un metcon, un compteur "+N" prend le relais',
   D3.mcs[0].items.length===6&&D3.mcs[0].items[5].startsWith('+ 4'));

 console.log(`\n  ${ko?'✗ '+ko+' problème(s)':'✓ tout est conforme'}`);
 process.exit(ko?1:0);
});
