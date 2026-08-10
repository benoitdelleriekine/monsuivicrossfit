const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
  .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];

// ── DOM minimal
const root={setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]}};
let store={};
const el={innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},files:[],click(){},
  closest(){return null},appendChild(){},style:{}};
global.document={addEventListener(){},getElementById(){return el},activeElement:null,
  createElement(){return {...el,style:{}}},body:el,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v};
global.navigator={vibrate(){}};
global.alert=m=>{throw new Error('ALERT: '+m)};
global.confirm=()=>true;
global.Blob=function(){};global.URL={createObjectURL(){return'x'},revokeObjectURL(){}};
global.FileReader=function(){};

const run=new Function(code+"\n;return {S,render,seed,blankMetcon,FORMATS,bestOf,lvlOf,levelValue,streak,milestones,benchCard,volumeSince,weekLoad,patternCard,patternShare,backupNudge};");
const {S,render,seed,blankMetcon,FORMATS,bestOf,lvlOf,levelValue,streak,milestones,benchCard,volumeSince,weekLoad,patternCard,patternShare,backupNudge}=run();

const errs=[],warns=[];
function T(name,fn){try{fn()}catch(e){errs.push(name+' → '+e.message)}}

// ═══ Jeu de données réaliste ═══
S.profile={sex:'f',age:32,bw:58,name:'Fanny'};
S.custom=[{id:'c-x',n:'Assault run',k:'gym',g:'Mes mouvements',d:'',u:'reps',lad:null}];
S.sessions=[
 {id:'s1',date:'2026-06-02',feel:3,note:'ok',
  entries:[{id:'e1',movementId:'front-squat',sets:[
    {weight:20,reps:12,diff:'facile',level:null},
    {weight:40,reps:8,diff:'juste',level:null},
    {weight:60,reps:8,diff:'fond',level:null}]},
   {id:'e2',movementId:'pull-up',sets:[{weight:0,reps:6,diff:'juste',level:3}]}],
  metcons:[{id:'m1',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:false,
    items:[{movementId:'thruster',reps:null,weight:25},{movementId:'pull-up',reps:null}],
    res:{mode:'time',secs:600,rounds:0,reps:0,done:true}}]},
 {id:'s2',date:'2026-07-14',feel:4,note:'',
  entries:[{id:'e3',movementId:'front-squat',sets:[{weight:70,reps:5,diff:'fond',level:null}]},
   {id:'e4',movementId:'row',sets:[{dist:500,secs:118}]},
   {id:'e5',movementId:'pull-up',sets:[{weight:0,reps:9,diff:'fond',level:6}]},
   {id:'e6',movementId:'plank',sets:[{weight:0,reps:90,diff:'juste',level:null}]},
   {id:'e7',movementId:'c-x',sets:[{weight:0,reps:20,diff:'juste',level:null}]}],
  metcons:[{id:'m2',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:true,
    items:[{movementId:'thruster',reps:null,weight:30},{movementId:'pull-up',reps:null}],
    res:{mode:'time',secs:512,rounds:0,reps:0,done:true}},
   {id:'m3',name:'',format:'amrap',cap:15,rounds:1,scheme:'',rx:true,
    items:[{movementId:'bike',cal:12},{movementId:'burpee',reps:10}],
    res:{mode:'rounds',secs:0,rounds:9,reps:4,done:true}}]},
 {id:'s3',date:'2026-08-04',feel:5,note:'',entries:[],
  metcons:[{id:'m4',name:'',format:'emom',cap:12,rounds:1,scheme:'',rx:true,
    items:[{movementId:'clean',reps:3,weight:45}],res:{mode:'done',secs:0,rounds:0,reps:0,done:true}}]}
];

// ═══ 1. Les trois onglets, profil rempli ═══
['progres','noter','historique','profil'].forEach(t=>T('render tab '+t,()=>{S.tab=t;render()}));

// ═══ 2. Progrès sur chaque type de mouvement ═══
['front-squat','pull-up','row','plank','c-x'].forEach(id=>
 T('progrès '+id,()=>{S.tab='progres';S.prog=id;render()}));

// ═══ 3. Séance vierge / profil absent ═══
T('aucune séance',()=>{const b=S.sessions;S.sessions=[];['progres','noter','historique'].forEach(t=>{S.tab=t;render()});S.sessions=b});
T('profil absent',()=>{const p=S.profile;S.profile=null;S.tab='progres';S.prog='front-squat';render();S.profile=p});

// ═══ 4. Saisie : détail mouvement pour chaque famille ═══
S.draft={id:'d',date:'2026-08-05',feel:3,note:'',metcons:[],
 entries:[{id:'x1',movementId:'back-squat',sets:[{weight:50,reps:5,diff:'juste',level:null}]},
  {id:'x2',movementId:'pull-up',sets:[]},{id:'x3',movementId:'run',sets:[]},
  {id:'x4',movementId:'hollow',sets:[]},{id:'x5',movementId:'db-snatch',sets:[]}]};
S.tab='noter';
T('noter (liste)',()=>{S.focus=null;render()});
['x1','x2','x3','x4','x5'].forEach(id=>T('détail '+id,()=>{S.focus=id;seed(S.draft.entries.find(e=>e.id===id).movementId);render()}));

// ═══ 5. Éditeur de metcon, chaque format ═══
S.focus=null;S.draft.metcons=[blankMetcon()];S.mc=0;
FORMATS.forEach(f=>T('metcon '+f.k,()=>{
 const mc=S.draft.metcons[0];mc.format=f.k;mc.res.mode=f.res;
 mc.items=[{movementId:'row',dist:500,cal:null},{movementId:'thruster',reps:10,weight:30}];
 render()}));
T('metcon schéma',()=>{const mc=S.draft.metcons[0];mc.format='fortime';mc.scheme='21-15-9';render()});
T('metcon item hors schéma',()=>{S.draft.metcons[0].items[0].lad=false;render()});
T('metcon vide',()=>{S.draft.metcons[0].items=[];S.draft.metcons[0].scheme='';render()});

// ═══ 6. Sélecteur ═══
T('picker vide',()=>{S.mc=null;S.picker=true;S.q='';render()});
T('picker recherche',()=>{S.q='squat';render()});
T('picker sans résultat',()=>{S.q='zzzz';render()});
S.picker=false;S.q='';

// ═══ 7. Fonctions de calcul ═══
T('bestOf',()=>{if(!bestOf('front-squat'))throw new Error('1RM front squat introuvable')});
T('lvlOf pull-up',()=>{if(lvlOf('pull-up')!==6)throw new Error('palier attendu 6, obtenu '+lvlOf('pull-up'))});
T('levelValue pull-up (palier requis)',()=>{
 const v=levelValue('pull-up');if(v!==9)throw new Error('attendu 9 reps strictes, obtenu '+v)});
T('streak',()=>{streak(S.sessions)});
T('milestones',()=>{if(!milestones(S.sessions).length)throw new Error('aucun jalon')});
T('benchCard Fran',()=>{if(!/progression/.test(benchCard()))throw new Error('progression Fran non détectée')});

console.log(errs.length?'ERREURS ('+errs.length+') :\n - '+errs.join('\n - '):'Aucune erreur d\'exécution sur '+
 '40+ scénarios.');

// ═══ Nouveautés v9 ═══
T('volumeSince',()=>{const v=volumeSince(400);
 if(!v['pull-up'])throw new Error('tractions absentes du volume');
 if(!v['pull-up'].mcReps)throw new Error('volume metcon non agrégé');});
T('weekLoad',()=>{weekLoad()});
T('patternCard',()=>{S.pat=true;patternCard();S.pat=false});
T('patternShare',()=>{const p=patternShare(400);
 if(!p.find(x=>x.n==='Tirage vertical').v)throw new Error('tirage vertical non compté');});
T('vDone',()=>{S.done=[{date:'2026-08-05',t:'Record',v:'Front squat — 90 kg'}];S.tab='progres';render();S.done=null});
T('backupNudge',()=>{S.lastExport=null;backupNudge()});
const V=volumeSince(400);
console.log('— volume tractions : '+V['pull-up'].reps+' reps dont '+V['pull-up'].mcReps+' en metcon');
console.log('— volume thruster  : '+V['thruster'].reps+' reps, '+Math.round(V['thruster'].ton)+' kg');
console.log('— patterns absents : '+patternShare(400).filter(x=>!x.v).map(x=>x.n).join(', '));
console.log(errs.length?'ERREURS ('+errs.length+') :\n - '+errs.join('\n - '):'Audit v9 : aucune erreur.');

