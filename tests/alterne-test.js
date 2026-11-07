/* Exercices une semaine sur deux, tests 1RM répartis sur deux semaines, remplaçant avec son propre 1RM
   (programme de Fanny comme jeu de test). */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const R=boot({});R.S.profile={sex:'f',age:35,bw:60,name:'F'};R.S.planif={programs:clone(require('./_fanny.json').programs),deleted:[]};
const E=R.PLAN.engine,p=R.S.planif.programs[0],G=w=>E.findInst(p.id+'|'+w+'|fsam').g,has=(w,n)=>G(w).items.some(it=>it.name===n),it=(w,n)=>G(w).items.find(z=>z.name===n);
console.log('\n═══ Une semaine sur deux ═══\n');
T('squat les semaines impaires seulement',[1,3,5,7,9,11,13].every(w=>has(w,'Squat'))&&[2,4,6,8,10,12,14].every(w=>!has(w,'Squat')));
T('soulevé de terre les semaines paires seulement',[2,4,6,8,10,12,14].every(w=>has(w,'Soulevé de terre'))&&[1,3,5].every(w=>!has(w,'Soulevé de terre')));
T('les autres exercices chaque semaine',[1,2,13,14].every(w=>has(w,'Développé couché')&&has(w,'Crunch décliné')));
T('charges au % du bon 1RM : S1 squat 62,5 % de 45 → 28 kg, S2 deadlift 65 % de 65 → 42 kg',it(1,'Squat').loadNum===28&&it(2,'Soulevé de terre').loadNum===42);
console.log('\n═══ Tests répartis sur deux semaines ═══\n');
T('14 semaines : 3 blocs de 4 (dont 1 décharge) + 2 semaines de test',E.findInst(p.id+'|14|fsam')&&!E.findInst(p.id+'|15|fsam')&&/Décharge/.test(G(4).items[1].info||G(4).items[1].note||'')===false);
T('S13 : squat, développé couché et tractions testés',it(13,'Squat').scheme==='1RM'&&it(13,'Développé couché').scheme==='1RM'&&it(13,'Tractions australiennes').testMax===true);
T('S13 : tirage vertical et militaire légers (testés la semaine suivante)',it(13,'Tirage vertical poulie').scheme==='3×3'&&it(13,'Développé militaire assis haltères').scheme==='3×3');
T('S14 : soulevé de terre, tirage vertical et militaire testés',it(14,'Soulevé de terre').scheme==='1RM'&&it(14,'Tirage vertical poulie').scheme==='1RM'&&it(14,'Développé militaire assis haltères').scheme==='1RM');
T('S14 : développé couché léger, tractions non testées',it(14,'Développé couché').scheme==='3×3'&&!it(14,'Tractions australiennes').testMax);
T('programme sans répartition : tout est testé la même semaine (inchangé)',(()=>{const q=clone(p);q.id='q';q.sessions[0].exercises.forEach(e=>{delete e.testOn});R.S.planif.programs.push(q);const g=E.findInst('q|13|fsam').g;return g.items.filter(z=>z.mode==='pct').every(z=>z.scheme==='1RM')})());
console.log('\n═══ Remplaçant prévu (Pendlay row) ═══\n');
for(const w of [1,6]){const x=E.findInst(p.id+'|'+w+'|fsam'),a=x.g.items[1];E.doSwap(x,a,'Pendlay row',false);}
const s1=it(1,'Pendlay row'),s6=it(6,'Pendlay row');
T('S1 : Pendlay row à 62,5 % de son 1RM (45 kg) → 28 kg, mêmes séries',s1&&s1.loadNum===28&&String(s1.sets)==='4'&&+s1.reps===10,s1&&s1.info);
T('S6 : Pendlay row à 77,5 % → 35 kg',s6&&s6.loadNum===35,s6&&s6.info);
T('S1 : squat remplacé, absent de la séance',!has(1,'Squat'));
T('remplacement pour cette semaine seulement',has(3,'Squat'));
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
