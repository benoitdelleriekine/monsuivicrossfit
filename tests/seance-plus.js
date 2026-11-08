/* Mode séance : modifier une série validée, superset décidé pendant la séance, débriefing des charges. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const R=boot({});R.S.profile={sex:'f',age:35,bw:60,name:'F'};R.S.planif={programs:clone(require('./_fanny.json').programs),deleted:[]};
const E=R.PLAN.engine,P=()=>R.S.planif.programs[0],K=w=>P().id+'|'+w+'|fsam',X=w=>E.findInst(K(w)),it=(w,n)=>X(w).g.items.find(z=>z.name===n);
console.log('\n═══ Modifier une série déjà validée ═══\n');
let x=X(1),bp=it(1,'Développé couché');P().logs['1|fsam']={done:true,ex:{[bp.id]:{sets:[{kg:22,reps:10,rpe:7},{kg:22,reps:10,rpe:7}]}}};E.persist(P());
E.setAt(X(1),it(1,'Développé couché'),0,{kg:24,reps:9,rpe:8});
let ss=X(1).log.ex[bp.id].sets;T('série 1 remplacée, série 2 intacte',ss[0].kg===24&&ss[0].reps===9&&ss[0].rpe===8&&ss[1].kg===22&&ss.length===2);
E.setAt(X(1),it(1,'Développé couché'),0,null);ss=X(1).log.ex[bp.id].sets;T('série supprimée',ss.length===1&&ss[0].kg===22);
console.log('\n═══ Superset décidé pendant la séance ═══\n');
const pd=it(2,'Tirage vertical poulie');P().overrides['2|fsam|+ss']={on:[bp.id],off:[]};E.persist(P());
T('développé couché + tirage vertical : A1 / A2 pour cette séance',it(2,'Développé couché').grp==='A'&&it(2,'Tirage vertical poulie').gi===2);
T('… les autres semaines ne changent pas',!it(3,'Développé couché').grp);
const q=clone(P());q.sessions[0].exercises.find(e=>e.id===bp.id).ss=1;R.S.planif.programs[0]=q;q.overrides['3|fsam|+ss']={on:[],off:[bp.id]};E.persist(q);
T('superset du programme défait pour une séance',!it(3,'Développé couché').grp&&it(4,'Développé couché').grp==='A');
delete q.sessions[0].exercises.find(e=>e.id===bp.id).ss;E.persist(q);
console.log('\n═══ Débriefing ═══\n');
P().logs={};E.persist(P());
const sq=it(1,'Squat');
// squat bien plus fort que prévu (28 kg × 10 @ 7 prévu → 32,5 kg × 10 @ 7)
P().logs['1|fsam']={done:true,ex:{[sq.id]:{sets:[{kg:32.5,reps:10,rpe:7},{kg:32.5,reps:10,rpe:7},{kg:32.5,reps:10,rpe:7},{kg:32.5,reps:10,rpe:7}]},[bp.id]:{plan:1,sets:[{kg:22,reps:10},{kg:22,reps:10},{kg:22,reps:10},{kg:22,reps:10}]}}};E.persist(P());
const db=E.debrief(X(1)),dsq=db.find(o=>o.name==='Squat'),dbp=db.find(o=>o.name==='Développé couché');
T('squat : prochaine séance de squat = S3 (semaines impaires)',dsq&&dsq.nx&&dsq.nx.w===3,dsq&&dsq.nx&&dsq.nx.w);
T('… charge plus lourde grâce à cette séance',dsq.nx.it.loadNum>dsq.nx.no.loadNum,dsq.nx.no.loadNum+' → '+dsq.nx.it.loadNum+' kg');
T('… plafonnée à +5 % du 1RM de travail',dsq.tm.to<=dsq.tm.from*1.05+1e-9&&dsq.tm.to>dsq.tm.from,dsq.tm.from+' → '+dsq.tm.to.toFixed(1));
T('développé couché noté « comme prévu » : pas d\'ajustement',dbp&&dbp.raw.plan&&dbp.nx.it.loadNum===dbp.nx.no.loadNum);
T('exercice sans série notée : absent du débriefing',!db.some(o=>o.name==='Tirage vertical poulie'));
// semaine 3 = dernière de travail du bloc ; S4 décharge → prochaine séance de travail S5
P().logs['3|fsam']={done:true,ex:{[it(3,'Développé couché').id]:{sets:[{kg:24,reps:8,rpe:9}]}}};E.persist(P());
const d3=E.debrief(X(3)).find(o=>o.name==='Développé couché');
T('après la S3, la décharge est sautée : comparaison avec S5',d3.nx.w===5,d3.nx.w);
T('RPE plus dur que prévu : charge revue à la baisse',d3.nx.it.loadNum<=d3.nx.no.loadNum,d3.nx.no.loadNum+' → '+d3.nx.it.loadNum+' kg');
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
