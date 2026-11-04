/* Synchronisation entre deux appareils : séances supprimées, séances modifiées,
   suivi du plan noté des deux côtés. Rejoue la vraie fonction de fusion (applyRemote). */
const {boot}=require('./_boot.js');
const BASE=require('./_programme.json');
const clone=o=>JSON.parse(JSON.stringify(o));
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const S1=(id,u,extra)=>({id,date:'2026-11-0'+(id==='a'?1:2),entries:[],metcons:[],feel:3,...(u!=null?{updatedAt:u}:{}),...(extra||{})});
const prof={sex:'m',age:36,bw:80};
const remote=(o)=>({payload:{profile:prof,custom:[],bar:15,updatedAt:Date.now(),...o},serverUpdatedAt:new Date().toISOString()});
const dev=()=>{const R=boot();R.S.profile=prof;return R};
const ids=R=>R.S.sessions.map(s=>s.id).sort().join(',');

console.log('═══ Séances CrossFit supprimées ═══\n');
{const B=dev();B.S.sessions=[S1('a',100),S1('b',100)];
 B.applyRemote(remote({sessions:[S1('b',100)],delSessions:[{id:'a',at:500}]}));
 T('supprimée sur l\'appareil A : ne revient pas sur l\'appareil B',ids(B)==='b',ids(B));
 T('B garde la trace de la suppression',B.S.delSessions.some(z=>z.id==='a'));}
{const B=dev();B.S.sessions=[S1('a'),S1('b')];
 B.applyRemote(remote({sessions:[S1('b')],delSessions:[{id:'a',at:500}]}));
 T('séance ancienne (sans date de modification) : la suppression s\'applique aussi',ids(B)==='b',ids(B));}
{const A=dev();A.S.sessions=[S1('b',100)];A.S.delSessions=[{id:'a',at:500}];
 A.applyRemote(remote({sessions:[S1('a',100),S1('b',100)]}));
 T('supprimée hors ligne puis synchro avant l\'envoi : ne revient pas',ids(A)==='b',ids(A));}
{const B=dev();B.S.sessions=[S1('b',100)];
 B.applyRemote(remote({sessions:[S1('a',900),S1('b',100)],delSessions:[{id:'a',at:500}]}));
 T('séance re-modifiée après la suppression (restauration) : elle est gardée',ids(B)==='a,b',ids(B));}
{const A=dev();A.S.sessions=[S1('a',100),S1('b',100)];
 A.applyRemote(remote({sessions:[S1('a',100),S1('b',100)]}));
 T('sans suppression : rien ne disparaît',ids(A)==='a,b');}

console.log('\n═══ Séances CrossFit modifiées ═══\n');
{const A=dev();A.S.sessions=[S1('a',200,{note:'corrigée sur ce téléphone'})];
 A.applyRemote(remote({sessions:[S1('a',100,{note:'ancienne version'})]}));
 T('la version modifiée le plus récemment l\'emporte (locale)',A.S.sessions[0].note==='corrigée sur ce téléphone');}
{const A=dev();A.S.sessions=[S1('a',100,{note:'ancienne'})];
 A.applyRemote(remote({sessions:[S1('a',300,{note:'modifiée sur l\'ordinateur'})]}));
 T('la version modifiée le plus récemment l\'emporte (compte)',A.S.sessions[0].note==='modifiée sur l\'ordinateur');}
{const A=dev();A.S.sessions=[S1('a',null,{note:'locale'})];
 A.applyRemote(remote({sessions:[S1('a',null,{note:'compte'})]}));
 T('anciennes séances sans date : le compte l\'emporte, comme avant',A.S.sessions[0].note==='compte');}

console.log('\n═══ Suivi du plan noté sur deux appareils ═══\n');
const withProg=R=>{R.S.planif={programs:clone(BASE).map(p=>({...p,updatedAt:1})),deleted:[]};return R};
const mus=R=>R.S.planif.programs.find(p=>p.kind==='muscu');
const note=(R,key,val)=>{const E=R.PLAN.engine;E.editBegin();const p=mus(R);p.logs=Object.assign({},p.logs,{[key]:val});E.persist(p)};
{const A=withProg(dev()),B=withProg(dev());
 note(A,'1|sessmar',{done:true,rpe:8});
 note(B,'1|sesssam',{done:true,rpe:7});
 const m1=A.mergePlanif(A.S.planif,B.S.planif),m2=B.mergePlanif(B.S.planif,A.S.planif);
 const L1=Object.keys(m1.programs.find(p=>p.kind==='muscu').logs).sort().join(','),L2=Object.keys(m2.programs.find(p=>p.kind==='muscu').logs).sort().join(',');
 T('mardi noté sur le téléphone, samedi sur l\'ordinateur : les deux sont gardés',L1==='1|sessmar,1|sesssam',L1);
 T('même résultat quel que soit l\'appareil qui fusionne',L1===L2);
 A.applyRemote(remote({sessions:[],planif:B.S.planif}));
 T('après synchro réelle sur le téléphone : les deux séances notées',Object.keys(mus(A).logs).length===2);}
{const A=withProg(dev()),B=withProg(dev());
 const pa=mus(A),pb=mus(B);pa.logs={'1|sessmar':{done:true,rpe:6}};pa.ts={'logs|1|sessmar':100};pa.updatedAt=900;
 pb.logs={'1|sessmar':{done:true,rpe:9}};pb.ts={'logs|1|sessmar':200};pb.updatedAt=150;
 const m=A.mergePlanif(A.S.planif,B.S.planif).programs.find(p=>p.kind==='muscu');
 T('même séance notée des deux côtés : la saisie la plus récente gagne, même si l\'autre programme est plus récent',m.logs['1|sessmar'].rpe===9);}
{const A=withProg(dev()),B=withProg(dev());
 const pa=mus(A),pb=mus(B);pa.logs={};pa.ts={'logs|1|sessmar':300};pb.logs={'1|sessmar':{done:true}};pb.ts={'logs|1|sessmar':100};
 const m=A.mergePlanif(A.S.planif,B.S.planif).programs.find(p=>p.kind==='muscu');
 T('saisie effacée après coup : reste effacée',!m.logs['1|sessmar']);}
{const A=withProg(dev()),B=withProg(dev());
 const xa={id:'xa',extra:true,kind:'muscu',date:'2026-11-11',name:'A',exercises:[]},xb={id:'xb',extra:true,kind:'course',date:'2026-11-12',name:'B',exercises:[]};
 const E=A.PLAN.engine;E.editBegin();mus(A).extras=[xa];E.persist(mus(A));
 const F=B.PLAN.engine;F.editBegin();mus(B).extras=[xb];F.persist(mus(B));
 const m=A.mergePlanif(A.S.planif,B.S.planif).programs.find(p=>p.kind==='muscu');
 T('séance ajoutée sur chaque appareil : les deux sont gardées',(m.extras||[]).map(x=>x.id).sort().join(',')==='xa,xb');}
{const A=withProg(dev()),B=withProg(dev());
 mus(B).updatedAt=50;mus(B).name='renommé sur l\'ordinateur';mus(B).ts={};
 note(A,'1|sessmar',{done:true});mus(A).updatedAt=40;
 const m=A.mergePlanif(A.S.planif,B.S.planif).programs.find(p=>p.kind==='muscu');
 T('structure du programme : la version la plus récente l\'emporte, le suivi de l\'autre est gardé',m.name==='renommé sur l\'ordinateur'&&!!m.logs['1|sessmar']);}
{const A=withProg(dev());const before=JSON.stringify(mus(A).logs||{});
 const m=A.mergePlanif(A.S.planif,{programs:clone(BASE).map(p=>({...p,updatedAt:1})),deleted:[]});
 T('programmes sans dates (ancienne version) : fusion identique à avant',JSON.stringify(m.programs.find(p=>p.kind==='muscu').logs||{})===before);}

console.log('\n═══ Convergence ═══\n');
{const A=withProg(dev()),B=withProg(dev());
 A.S.sessions=[S1('a',100),S1('b',100)];B.S.sessions=[S1('a',100),S1('b',100)];
 A.S.sessions=A.S.sessions.filter(s=>s.id!=='a');A.S.delSessions=[{id:'a',at:500}];
 note(A,'1|sessmar',{done:true});note(B,'1|sesssam',{done:true});
 const pa=A.payload(),pb=B.payload();
 A.applyRemote(remote(pb));B.applyRemote(remote(pa));
 const j=R=>JSON.stringify({s:ids(R),l:Object.keys(mus(R).logs).sort()});
 T('après échange dans les deux sens, les deux appareils ont les mêmes données',j(A)===j(B),j(A));}

console.log(`\n  ${ko?'✗ '+ko+' problème(s)':'✓ tout est conforme'}`);
process.exit(ko?1:0);
