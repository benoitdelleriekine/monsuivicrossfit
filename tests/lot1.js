/* Lot 1 : effacement complet propagé, relecture du compte au retour au premier plan
   et au retour du réseau, export par la feuille « Partager » sur téléphone. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,extra)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${extra!=null?'  ('+extra+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const sess=(id,date,at)=>({id,date,updatedAt:at,feel:3,note:'',metcons:[],
 entries:[{id:'e'+id,movementId:'back-squat',sets:[{weight:80,reps:5,diff:'juste',level:null}]}]});
const prog=(id,at)=>({id,kind:'muscu',name:'Prog '+id,start:'2026-10-12',createdAt:at,updatedAt:at,blocks:[],sessions:[],logs:{}});
const T0=Date.parse('2026-11-01T10:00:00Z');

/* Un appareil avec des données, déjà synchronisé avec le compte */
function device(extra){const R=boot({});
 R.S.profile={sex:'m',age:36,bw:81,name:'B'};
 R.S.sessions=[sess('a','2026-10-20',T0),sess('b','2026-10-27',T0)];
 R.S.custom=[{id:'c1',n:'Perso',k:'gym',g:'Autre',u:'reps'}];
 R.S.planif={programs:[prog('p1',T0)],deleted:[]};
 R.S.pain={zones:['coude'],zt:T0,log:{'2026-10-30|coude|matin':{v:3,t:T0}}};
 R.S.tests={'back-squat':[{d:'2026-10-01',v:1}]};R.S.pin=['back-squat'];
 if(extra)extra(R);return R}

console.log('═══ « Tout effacer » sur l\'appareil A ═══\n');
let serveur;
{const A=device();A.wipeAll();const p=A.payload();
 T('séances, programmes, douleur, mouvements perso, tests vidés',
  !p.sessions.length&&!p.planif.programs.length&&!Object.keys(p.pain.log).length&&!p.custom.length&&!Object.keys(p.tests).length&&!p.pin.length);
 T('date d\'effacement posée',p.wipedAt>0);
 T('programme supprimé mémorisé (trace de suppression)',p.planif.deleted.some(z=>z.id==='p1'));
 T('copie complète gardée dans les sauvegardes de l\'appareil',
  (()=>{const b=JSON.parse(A.store['cf-backups']||'[]');return b[0]&&b[0].ver==='avant effacement'&&b[0].data.sessions.length===2})());
 T('profil effacé (il sera redemandé)',A.S.profile===null);
 /* A reçoit l'ancienne ligne du compte (conflit de verrou) : elle ne doit rien ramener */
 A.applyRemote({payload:device().payload(),serverUpdatedAt:new Date(T0).toISOString()});
 T('A relit l\'ancienne ligne du compte : rien ne revient',!A.S.sessions.length&&!A.S.planif.programs.length&&!A.S.custom.length);
 serveur=clone(A.payload());}

console.log('\n═══ L\'appareil B se synchronise ensuite ═══\n');
{const B=device(R=>{/* séance notée sur B après l'effacement de A */
  R.S.sessions.push(sess('apres','2026-11-06',serveur.wipedAt+60000))});
 B.applyRemote({payload:serveur,serverUpdatedAt:new Date().toISOString()});
 const p=B.payload();
 T('séances antérieures effacées sur B',!p.sessions.some(s=>s.id==='a'||s.id==='b'));
 T('séance notée sur B après l\'effacement : gardée',p.sessions.length===1&&p.sessions[0].id==='apres');
 T('mouvement perso inutilisé retiré, programme et douleur retirés',!p.custom.length&&!p.planif.programs.length&&!Object.keys(p.pain.log).length);
 T('B adopte la date d\'effacement',p.wipedAt===serveur.wipedAt);
 T('profil redemandé sur B',B.S.profile===null&&B.S.tab==='profil');
 /* B renvoie ensuite au compte : l'effacement tient */
 const A2=boot({});A2.S.wipedAt=serveur.wipedAt;
 A2.applyRemote({payload:clone(p),serverUpdatedAt:new Date().toISOString()});
 T('retour vers A : seule la séance d\'après l\'effacement apparaît',A2.S.sessions.length===1&&A2.S.sessions[0].id==='apres');}

async function vide(){
 console.log('\n═══ Ligne du compte vidée : pas d\'écrasement par un appareil plein ═══\n');
 const B=device();let pushed=null;
 global.window.CLOUD={enabled:true,user:{id:'u'},pull:async()=>({payload:clone(serveur),serverUpdatedAt:'2026-11-06T10:00:00Z'}),
  push:async(pl)=>{pushed=pl;return{ok:true,serverUpdatedAt:'2026-11-06T10:00:01Z'}}};
 B.S.cloud.user={id:'u'};await B.cloudSync();
 T('B applique l\'effacement au lieu de pousser ses anciennes données',!B.S.sessions.length&&(pushed==null||!pushed.sessions.length));
 const C=device();let p2=null;
 global.window.CLOUD={enabled:true,user:{id:'u'},pull:async()=>null,push:async(pl)=>{p2=pl;return{ok:true}}};
 C.S.cloud.user={id:'u'};await C.cloudSync();
 T('sans effacement, une ligne vide reçoit les données de l\'appareil (inchangé)',!!p2&&p2.sessions.length===2);}
vide().then(next);

function next(){
 setTimeout(async()=>{
  console.log('\n═══ Relecture du compte au retour au premier plan ═══\n');
  const R=device();let pulls=0;
  global.window.CLOUD={enabled:true,user:{id:'u'},pull:async()=>{pulls++;return{payload:R.payload(),serverUpdatedAt:'2026-11-06T10:00:00Z'}},push:async()=>({ok:true})};
  R.S.cloud.user={id:'u'};
  R.doc.visibilityState='visible';R.fire('visibilitychange');await new Promise(r=>setTimeout(r,20));
  T('retour au premier plan : le compte est relu',pulls===1);
  R.fire('visibilitychange');await new Promise(r=>setTimeout(r,20));
  T('deuxième retour dans la minute : pas de relecture inutile',pulls===1);
  R.fire('online');await new Promise(r=>setTimeout(r,20));
  T('retour du réseau : relecture immédiate',pulls===2);
  R.S.cloud.user=null;R.fire('online');await new Promise(r=>setTimeout(r,20));
  T('déconnecté : aucune relecture',pulls===2);

  console.log('\n═══ Export de la sauvegarde ═══\n');
  let shared=null;
  const P=boot({},{coarse:true,navigator:{canShare:()=>true,share:f=>{shared=f;return Promise.resolve()}}});
  global.Blob=require('buffer').Blob;
  T('téléphone : feuille « Partager » avec le fichier',P.downloadJSON({a:1},'x.json')==='share'&&shared&&shared.files[0].name==='x.json');
  const D=boot({},{navigator:{canShare:()=>true,share:()=>Promise.resolve()}});
  T('ordinateur : téléchargement classique',D.downloadJSON({a:1},'x.json')==='download');
  const N=boot({},{coarse:true,navigator:{canShare:()=>false,share:()=>Promise.resolve()}});
  T('téléphone sans partage de fichier : téléchargement en secours',N.downloadJSON({a:1},'x.json')==='download');

  console.log('\n═══ Effacement sans compte connecté ═══\n');
  const L=device();L.wipeAll(false);
  T('appareil vidé mais pas de date d\'effacement : le compte n\'est pas touché',!L.S.sessions.length&&!L.S.wipedAt);
  L.applyRemote({payload:device().payload(),serverUpdatedAt:'2026-11-06T10:00:00Z'});
  T('connexion ensuite : les données du compte reviennent (comme avant)',L.S.sessions.length===2);

  console.log('\n═══ Compatibilité ═══\n');
  const O=device();const avant=O.S.sessions.length;
  O.applyRemote({payload:Object.assign(device().payload(),{wipedAt:undefined}),serverUpdatedAt:'2026-11-06T10:00:00Z'});
  T('ligne écrite par l\'ancienne version (sans date d\'effacement) : fusion habituelle',O.S.sessions.length===avant&&O.S.custom.length===1);
  const st=O.stripBefore({sessions:[sess('z','2026-11-01',5)]},10);
  T('stripBefore ne modifie pas l\'objet reçu',st.sessions.length===0);

  console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');process.exitCode=ko?1:0;
 },30);}
