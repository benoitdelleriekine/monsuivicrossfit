/* Sauvegarde complète (export / import) et copie automatique avant mise à jour. */
const {boot}=require('./_boot.js');
const BASE=require('./_programme.json');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const seed=R=>{R.S.profile={sex:'m',age:36,bw:81,name:'B'};
 R.S.sessions=[{id:'s1',date:'2026-11-02',entries:[{id:'e',movementId:'deadlift',sets:[{weight:100,reps:5,diff:'juste',level:null}]}],metcons:[],feel:3,dur:60,rpe:8}];
 R.S.custom=[{id:'c-1',n:'Mon mouvement',k:'db',g:'Mes mouvements',d:'',u:'reps',lad:null}];
 R.S.planif={programs:JSON.parse(JSON.stringify(BASE)).map(p=>({...p,updatedAt:5})),deleted:[]};
 R.S.pain={zones:['coude'],log:{'2026-11-03|coude|matin':{v:2,t:1}},zt:1};R.S.tabsOff=['niveau'];R.S.pin=['deadlift']};

console.log('═══ Export complet ═══\n');
{const R=boot();seed(R);const d=R.backupData();
 ['sessions','custom','profile','planif','pain','tests','decl','pin','tabsOff'].forEach(k=>T('le fichier contient « '+k+' »',d[k]!==undefined));
 T('format v2, version de l\'app indiquée',d.v===2&&d.app===R.APP_VERSION);
 T('le brouillon en cours n\'est pas exporté',d.draft===undefined);}

console.log('\n═══ Import ═══\n');
{const A=boot();seed(A);const file=JSON.parse(JSON.stringify(A.backupData()));
 const B=boot();B.S.profile={sex:'f',age:30,bw:60};B.restoreData(file);
 T('séances restaurées',B.S.sessions.length===1&&B.S.sessions[0].id==='s1');
 T('programmes du plan restaurés',B.S.planif.programs.length===BASE.length);
 T('douleur et onglets restaurés',B.S.pain.zones[0]==='coude'&&B.S.tabsOff[0]==='niveau');
 T('programmes restaurés datés de maintenant (ils priment sur une version plus ancienne du compte)',B.S.planif.programs.every(p=>p.updatedAt>Date.now()-60000));
 const m=B.mergePlanif(B.S.planif,{programs:[{...BASE[0],updatedAt:999,name:'ancienne version du compte'}],deleted:[]});
 T('après restauration, la synchro garde la version restaurée',m.programs.find(p=>p.id===BASE[0].id).name!=='ancienne version du compte');}
{const B=boot();B.S.planif={programs:[{id:'garde',kind:'muscu',updatedAt:1}],deleted:[]};
 B.restoreData({v:1,sessions:[{id:'x',date:'2026-10-01'}],custom:[]});
 T('ancien fichier v1 : séances importées, plan existant conservé',B.S.sessions[0].id==='x'&&B.S.sessions[0].entries.length===0&&B.S.planif.programs[0].id==='garde');}
{const B=boot();let err=false;try{B.restoreData({v:2})}catch(e){err=true}
 T('fichier sans séances refusé',err);}

console.log('\n═══ Copie automatique avant mise à jour ═══\n');
{const store={};const R=boot(store);seed(R);
 store['cf-version']='msc-v13';R.snapshotOnUpdate();
 let b=R.backups();T('nouvelle version : une copie des données est gardée',b.length===1&&b[0].ver==='msc-v13'&&b[0].data.sessions.length===1);
 T('la version courante est notée',store['cf-version']===R.APP_VERSION);
 R.snapshotOnUpdate();T('même version : pas de nouvelle copie',R.backups().length===1);
 ['a','b','c','d'].forEach(v=>{store['cf-version']=v;R.snapshotOnUpdate()});
 T('3 copies au plus, les plus récentes d\'abord',R.backups().length===3&&R.backups()[0].ver==='d');}
{const store={};const R=boot(store);R.S.sessions=[];R.S.planif={programs:[],deleted:[]};store['cf-version']='old';R.snapshotOnUpdate();
 T('aucune copie si l\'app est vide',R.backups().length===0);}

console.log(`\n  ${ko?'✗ '+ko+' problème(s)':'✓ tout est conforme'}`);
process.exit(ko?1:0);
