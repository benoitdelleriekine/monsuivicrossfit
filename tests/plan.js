/* Module Plan : génération des séances, ajustement du 1RM de travail, liens avec le
   suivi CrossFit, douleur, test de max, historique, bibliothèque de mouvements et
   fusion des programmes. Programme de référence : tests/_programme.json. */
const {boot}=require('./_boot.js');
const BASE=require('./_programme.json');
const clone=o=>JSON.parse(JSON.stringify(o));
let ko=0;const T=(n,c,extra)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${extra!=null?'  ('+extra+')':''}`)};

function app(mod,store){const R=boot(store);const progs=clone(BASE);if(mod)mod(progs.find(p=>p.kind==='muscu'));
 R.S.planif={programs:progs,deleted:[]};R.S.profile={sex:'m',age:36,bw:81,name:'B'};return R}
const E=R=>R.PLAN.engine;
const mus=R=>R.S.planif.programs.find(p=>p.kind==='muscu');
const sess=(p,id)=>p.sessions.find(s=>s.id===id);
const item=(R,sid,w,exId)=>{const p=mus(R);const g=E(R).gen(p,sess(p,sid),w);return g&&g.items.find(i=>i.id===exId)};
const f=(R,exId,w)=>E(R).tmTrace(mus(R),E(R).findEx(mus(R),exId),w).f;
const sets=(kg,reps,rpe,n)=>Array.from({length:n||4},()=>({kg,reps,rpe}));

console.log('═══ Génération des séances (semaine 1) ═══\n');
{const R=app();
 T('strict press S1 : 4×10 à 27,5 kg',(i=>i.sets===4&&i.reps===10&&i.loadNum===27.5)(item(R,'sessmar',1,'msp')));
 T('soulevé de terre S1 : 4×6 à 85 kg (reps limitées à 6)',(i=>i.sets===4&&i.reps===6&&i.loadNum===85)(item(R,'sessmar',1,'mdl')));
 T('back squat S1 : 4×10 à 65 kg',(i=>i.reps===10&&i.loadNum===65)(item(R,'sesssam',1,'ssq')));
 T('semaine 4 = décharge',E(R).muscuSpec(mus(R),4).deload===true);
 T('semaine 9 = test 1RM',E(R).muscuSpec(mus(R),9).test===true);
 T('aucune séance générée avant le début du cycle',E(R).muscuSpec(mus(R),0)===null);}

console.log('\n═══ 1RM de travail ═══\n');
{const R=app(p=>{p.logs={'1|sessmar':{done:true,ex:{msp:{sets:sets(30,10,7)}}}}});
 const v=f(R,'msp',2);T('30 kg × 10 à RPE 7 au lieu de 27,5 kg : environ +4,5 %',v>1.04&&v<1.05,((v-1)*100).toFixed(1)+' %');}
{const R=app(p=>{p.logs={'1|sessmar':{done:true,ex:{msp:{sets:sets(27.5,10,7),plan:1}}}}});
 T('« Comme prévu » ne change pas le 1RM',f(R,'msp',2)===1);}
{const R=app(p=>{p.logs={'1|sessmar':{done:true,ex:{msp:{sets:sets(60,10,6)}}}}});
 T('écart énorme plafonné à +5 % par séance',Math.abs(f(R,'msp',2)-1.05)<1e-9);}
{const R=app(p=>{p.logs={'1|sessmar':{done:true,ex:{msp:{sets:[{kg:27.5,reps:10,rpe:5},{kg:27.5,reps:10,rpe:6},{kg:27.5,reps:10,rpe:7},{kg:27.5,reps:10,rpe:7}]}}}}});
 T('la série la plus dure est retenue (RPE 7 de la dernière série, pas le 5 de la première)',Math.abs(f(R,'msp',2)-1)<0.002);}
{const R=app(p=>{p.logs={'1|sessmar':{done:true,ex:{msp:{sets:sets(30,10,7)}}}};p.logs['1|sessmar'].ex.msp.noAdj=true});
 T('« Ne pas en tenir compte » neutralise la séance',f(R,'msp',2)===1);}
{const R=app(p=>{p.extras=[{id:'xa',extra:true,kind:'muscu',date:'2026-11-03',name:'Test',dur:20,rpe:7,exercises:[{id:'msp',ref:'msp',name:'Strict press'}]}];
  p.logs={'0|xa':{done:true,ex:{msp:{sets:sets(32.5,5,6)}}}}});
 T('séance ajoutée avant le cycle avec RPE 6 : ignorée (RPE non fiable)',f(R,'msp',1)===1);}
{const R=app(p=>{p.extras=[{id:'xa',extra:true,kind:'muscu',date:'2026-11-03',name:'Test',dur:20,rpe:7,exercises:[{id:'msp',ref:'msp',name:'Strict press'}]}];
  p.logs={'0|xa':{done:true,ex:{msp:{sets:sets(35,5,8)}}}}});
 T('séance ajoutée avant le cycle, 35 kg × 5 à RPE 8 : 1RM en hausse',f(R,'msp',1)>1.02,((f(R,'msp',1)-1)*100).toFixed(1)+' %');}
{const R=app(p=>{p.logs={'4|sessmar':{done:true,ex:{msp:{sets:sets(25,10,6)}}}}});
 T('décharge notée à RPE 6 : sans effet sur le 1RM',f(R,'msp',5)===1);}

console.log('\n═══ Liens avec le suivi CrossFit ═══\n');
{const R=app(p=>{p.createdAt=Date.parse('2026-11-01')});
 R.S.sessions=[{id:'c1',date:'2026-11-13',entries:[{id:'e',movementId:'back-squat',sets:Array.from({length:5},()=>({weight:90,reps:5,diff:'juste',level:null}))}],metcons:[],feel:2,dur:60,rpe:9}];
 const v=f(R,'ssq',2);T('back squat noté au CrossFit en S1 : 1RM de travail du squat en hausse',v>1.01,((v-1)*100).toFixed(1)+' %');
 const st=E(R).weekStats(E(R).parseISO('2026-11-09'),true);
 T('la séance CrossFit compte dans la charge de la semaine (60 min × RPE 9)',(st.byProg.__cf||0)===540,st.byProg.__cf);}
{const R=app(p=>{p.createdAt=Date.parse('2026-11-20')});
 R.S.sessions=[{id:'c1',date:'2026-11-13',entries:[{id:'e',movementId:'back-squat',sets:[{weight:90,reps:5,diff:'juste',level:null}]}],metcons:[]}];
 T('séance CrossFit antérieure au programme : ignorée pour le 1RM',f(R,'ssq',3)===1);}
{const R=app(p=>{p.logs={'1|sessmar':{done:true,ex:{mdl:{sets:sets(85,6,7)},mtr:{sets:[{kg:0,reps:2,rpe:8}]}}}}});
 const L=R.PLAN.liftSets(),ids=L.flatMap(s=>s.entries.map(e=>e.movementId));
 T('séries du plan transmises aux fiches CrossFit (soulevé de terre, tractions)',ids.includes('deadlift')&&ids.includes('pull-up'));
 const H=R.PLAN.historyList();T('la séance du plan apparaît dans l\'historique',H.length===1&&H[0].date==='2026-11-10');}

console.log('\n═══ Douleur, test de max ═══\n');
{const R=app();R.S.pain={zones:['coude'],log:{'2026-11-10|coude|matin':{v:5,t:1}}};
 T('douleur au coude à 5/10 le matin : tractions allégées d\'une série',item(R,'sessmar',1,'mtr').sets===5);
 T('le soulevé de terre n\'est pas touché',item(R,'sessmar',1,'mdl').sets===4);}
{const R=app(p=>{sess(p,'sesssam').exercises.find(e=>e.id==='str').testMax=1});
 const it=item(R,'sesssam',9,'str');T('semaine test : tractions du samedi en 1 série au max',it.testMax===true&&it.reps==='Max'&&it.sets===1);
 T('tractions du mardi en semaine test : pas de max',!item(R,'sessmar',9,'mtr').testMax);}

console.log('\n═══ Bibliothèque de mouvements ═══\n');
{const R=app();const L=E(R).LIB;
 const ids=L.map(l=>l[0]);T('aucun identifiant en double ('+ids.length+' mouvements)',new Set(ids).size===ids.length);
 const nk=t=>t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'');
 const names=L.flatMap(l=>l[1].split('|').map(nk));T('aucun nom en double',new Set(names).size===names.length);
 const ex=BASE.flatMap(p=>(p.sessions||[]).flatMap(s=>s.exercises.map(e=>e.name)));
 const miss=ex.filter(n=>!E(R).libFind(n));T('tous les exercices du programme sont reconnus',!miss.length,miss.join(', ')||null);
 const reg=R.HOST?true:false;T('l\'app hôte expose ses séances au module',reg);}

console.log('\n═══ Fusion des programmes entre appareils ═══\n');
{const R=app();const a={programs:[{id:'p1',updatedAt:10,v:'a'}],deleted:[]},b={programs:[{id:'p1',updatedAt:20,v:'b'}],deleted:[]};
 T('la version la plus récente d\'un programme l\'emporte',R.mergePlanif(a,b).programs[0].v==='b');
 const c={programs:[{id:'p1',updatedAt:10}],deleted:[]},d={programs:[],deleted:[{id:'p1',at:30}]};
 T('un programme supprimé ne revient pas',R.mergePlanif(c,d).programs.length===0);}

console.log(`\n  ${ko?'✗ '+ko+' problème(s)':'✓ tout est conforme'}`);
process.exit(ko?1:0);
