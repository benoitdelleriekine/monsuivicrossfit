/* Retirer un exercice d'une séance (à venir ou en cours) : masqué pour cette séance seulement. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
console.log('\n═══ Retirer un exercice de la séance ═══\n');
const BASE=require('./_programme.json');const R=boot({});const progs=clone(BASE),mu=progs.find(p=>p.kind==='muscu');
const sa=mu.sessions.find(s=>/samedi/.test(s.name));R.S.planif={programs:progs,deleted:[]};
const E=R.PLAN.engine,g0=E.gen(mu,sa,3),leg=g0.items.find(it=>/Leg curl/.test(it.name));
mu.overrides=mu.overrides||{};mu.overrides['3|'+sa.id+'|+rm']={ids:[leg.id]};
const g=E.gen(mu,sa,3);
T('l\'exercice retiré n\'apparaît plus dans la séance',!g.items.some(it=>it.id===leg.id)&&g.items.length===g0.items.length-1);
T('… il est listé comme « retiré », pour pouvoir le remettre',(g.removed||[]).length===1&&g.removed[0].id===leg.id);
T('… les autres semaines gardent l\'exercice',E.gen(mu,sa,2).items.some(it=>it.id===leg.id)&&E.gen(mu,sa,4).items.some(it=>it.id===leg.id));
T('… le modèle du programme n\'est pas touché',sa.exercises.some(e=>e.id===leg.id));
const ton0=g0.items.reduce((a,it)=>a+(it.ton||0),0),ton1=g.items.reduce((a,it)=>a+(it.ton||0),0);
T('le volume prévu de la séance baisse d\'autant',Math.abs(ton0-(leg.ton||0)-ton1)<0.01,ton0+' → '+ton1);
// exercice remplacé puis retiré : identifiant d'origine
const bs=g0.items.find(it=>it.name==='Back squat');mu.overrides['3|'+sa.id+'|'+bs.id]={swap:{name:'Front squat'}};
mu.overrides['3|'+sa.id+'|+rm'].ids.push(bs.id);
T('un exercice remplacé se retire aussi',!E.gen(mu,sa,3).items.some(it=>it.origId===bs.id||it.id===bs.id));
delete mu.overrides['3|'+sa.id+'|'+bs.id];mu.overrides['3|'+sa.id+'|+rm'].ids.pop();
// supersets recalculés
const dc=sa.exercises.find(e=>e.name==='Développé couché');dc.ss=1;
const rw=g0.items.find(it=>/Rowing/.test(it.name));mu.overrides['3|'+sa.id+'|+rm'].ids.push(rw.id);
const g3=E.gen(mu,sa,3),dci=g3.items.find(it=>it.name==='Développé couché');
T('superset : si A2 est retiré, A1 s\'enchaîne avec l\'exercice suivant affiché',dci.grp==='A'&&g3.items[g3.items.indexOf(dci)+1].gi===2);
delete dc.ss;mu.overrides['3|'+sa.id+'|+rm'].ids.pop();
// synchro : le retrait voyage avec le programme
const older=clone(mu);older.updatedAt=1;delete older.overrides['3|'+sa.id+'|+rm'];mu.updatedAt=9;
const m=R.mergePlanif({programs:[older],deleted:[]},{programs:[clone(mu)],deleted:[]}).programs.find(p=>p.id===mu.id);
T('synchro : le retrait fait sur l\'iPhone est gardé à la fusion',m.overrides['3|'+sa.id+'|+rm'].ids[0]===leg.id);
// sans retrait : rien ne change
T('programme sans retrait : séance identique',E.gen(BASE.find(p=>p.kind==='muscu'),BASE.find(p=>p.kind==='muscu').sessions.find(s=>s.id===sa.id),3).items.length===g0.items.length);
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
