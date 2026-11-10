/* Séances d'activité fixe (rééduc) avec exercices structurés et progression planifiée par paliers. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const HSR=[{w:1,sets:3,reps:15,kg:4,rpe:8},{w:2,sets:3,reps:12,kg:5,rpe:8},{w:4,sets:4,reps:10,kg:6,rpe:8},{w:6,sets:4,reps:8,kg:7,rpe:8},{w:9,sets:4,reps:6,kg:8,rpe:8}];
const prog={id:'reh',kind:'fixe',name:'Rééduc HSR',start:'2026-11-09',weeks:13,color:'#F59BC0',logs:{},overrides:{},
 fixed:[{id:'fc',name:'HSR Coude',day:2,dur:20,rpe:6,detail:'PIMA extenseurs\nHSR extenseurs 2x15RM',exercises:[
  {id:'e1',name:'PIMA extenseurs',mode:'libre',text:'5 × 45 s'},
  {id:'e2',name:'HSR extenseurs',mode:'plan',steps:HSR,note:'Tempo 3 s / 3 s'},
  {id:'e3',name:'Zottman curl',mode:'plan',steps:[{w:1,sets:2,reps:'12-15',kg:0,rpe:7}]}]},
  {id:'fa',name:'Mobilité',day:4,dur:15,rpe:3,detail:'Hanches\nÉpaules'}]};
const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};R.S.planif={programs:[clone(prog)],deleted:[]};
const E=R.PLAN.engine,X=(w,s)=>E.findInst('reh|'+w+'|'+(s||'fc')),it=(w,id)=>X(w).g.items.find(z=>z.id===id);
console.log('\n═══ Exercices structurés dans une séance de rééduc ═══\n');
T('séance avec exercices : séries, reps, charge, RPE',it(1,'e2').sets===3&&it(1,'e2').repsPlan===15&&it(1,'e2').loadNum===4&&it(1,'e2').rpePlan===8&&it(1,'e2').mode==='kg');
T('texte libre gardé tel quel',it(1,'e1').mode==='libre'&&it(1,'e1').scheme==='5 × 45 s');
T('sans charge : au poids du corps, plage de reps',it(1,'e3').mode==='reps'&&it(1,'e3').reps==='12–15'&&it(1,'e3').repsPlan===12);
T('l\'ancienne séance sans exercices reste en texte',X(1,'fa').g.items.length===2&&X(1,'fa').g.items[0].name==='Hanches');
console.log('\n═══ Progression planifiée, semaine par semaine ═══\n');
const sc=w=>it(w,'e2').scheme+' @ '+it(w,'e2').loadNum;
T('S1 3×15 @ 4 kg, S2 et S3 3×12 @ 5, S4–S5 4×10 @ 6, S6–S8 4×8 @ 7, S9 et après 4×6 @ 8',sc(1)==='3×15 @ 4'&&sc(2)==='3×12 @ 5'&&sc(3)==='3×12 @ 5'&&sc(5)==='4×10 @ 6'&&sc(8)==='4×8 @ 7'&&sc(13)==='4×6 @ 8');
T('palier indiqué (ex. « Palier 2/5 · S2–S3 »)',it(3,'e2').info==='Palier 2/5 · S2–S3'&&/S9 et après/.test(it(12,'e2').info),it(3,'e2').info);
console.log('\n═══ Noter et suivre comme une séance de muscu ═══\n');
const x=X(1),p=x.p;p.logs['1|fc']={done:true,ex:{e2:{sets:[{kg:4,reps:15,rpe:8},{kg:4,reps:14,rpe:9}]}}};E.persist(p);
const pg=R.PLAN.dayList(E.iso(x.date)).find(z=>z.key===x.key);
T('la séance a des séries (mode séance, ronds à cocher, avancement)',pg.sets===true&&pg.pg&&pg.pg.state==='encours'&&pg.pg.tot===2,pg.pg&&pg.pg.state);
T('les séries notées sont gardées',X(1).log.ex.e2.sets.length===2);
p.overrides['2|fc|e2']={kg:5.5,reps:12};E.persist(p);
T('« Modifier pour cette semaine » : charge et reps changées pour S2 seulement',it(2,'e2').loadNum===5.5&&it(3,'e2').loadNum===5);
const db=E.debrief(X(1)).find(o=>o.name==='HSR extenseurs');
T('débriefing : prochaine séance S2 selon les paliers prévus',db&&db.nx&&db.nx.w===2&&db.nx.it.plan===true);
// progression planifiée aussi dans un programme de muscu
const mu=clone(require('./_programme.json').find(q=>q.kind==='muscu'));mu.id='mu2';mu.sessions[0].exercises.push({id:'pp',name:'Curl marteau',mode:'plan',steps:[{w:1,sets:3,reps:12,kg:10,rpe:8},{w:3,sets:4,reps:10,kg:12,rpe:8}]});R.S.planif.programs.push(mu);
const gm=w=>E.findInst('mu2|'+w+'|'+mu.sessions[0].id).g.items.find(z=>z.id==='pp');
T('muscu : exercice en progression planifiée (paliers)',gm(1).scheme==='3×12'&&gm(1).loadNum===10&&gm(3).scheme==='4×10'&&gm(4).loadNum===12);
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
