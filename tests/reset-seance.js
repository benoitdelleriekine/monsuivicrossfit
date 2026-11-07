/* Séance ouverte en mode séance puis quittée sans rien noter : reste « à venir ». Remettre à zéro. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const BASE=require('./_programme.json');
console.log('\n═══ Séance ouverte puis quittée, remise à zéro ═══\n');
const progs=clone(BASE),mu=progs.find(p=>p.kind==='muscu'),sa=mu.sessions.find(s=>/samedi/.test(s.name)),key=mu.id+'|3|'+sa.id;
const st={'cf-progres':JSON.stringify({sessions:[],profile:{sex:'m',age:36,bw:81,name:'B'},updatedAt:1,planif:{programs:progs,deleted:[]}}),
 'planif-run':JSON.stringify({key,exI:0,t0:Date.now()-3*3600000,open:false})};
const R=boot(st);const E=R.PLAN.engine,pg=()=>{const x=E.findInst(key);return R.PLAN.dayList(E.iso(x.date)).find(z=>z.key===key).pg};
T('mode séance ouvert puis quitté sans rien noter : « à venir », pas « en cours »',pg().state==='avenir',pg().state);
T('… et pas de temps écoulé affiché',pg().t0===null);
const click=(a,k)=>{const btn={getAttribute:n=>n==='data-a'?a:n==='data-key'?k:null,closest:()=>btn,dataset:{a,key:k}},t0={closest:s=>s==='[data-a]'?btn:null};R.fire('click',{composedPath:()=>[t0],target:t0})};
// une série notée, un exercice « pas fait », RPE, note
let x=E.findInst(key),p=x.p;p.logs=p.logs||{};
p.logs['3|'+sa.id]={done:true,rpe:7,dur:40,note:'genou ok',ex:{[x.g.items[0].id]:{sets:[{kg:60,reps:5}]},[x.g.items[1].id]:{skipped:true}}};E.persist(p);
T('une série notée : « en cours »',pg().state==='encours');
click('reset',key);T('premier appui : demande de confirmation, rien n\'est effacé',!!E.findInst(key).log.ex);
click('reset-yes',key);x=E.findInst(key);
T('confirmé : séries, « pas fait », RPE et durée effacés',!x.log||(!x.log.ex&&!x.log.rpe&&!x.log.dur&&!x.log.done));
T('… la note est gardée',x.log&&x.log.note==='genou ok');
T('… la séance redevient « à venir »',pg().state==='avenir');
T('… le mode séance mis de côté est oublié',!R.store['planif-run']||JSON.parse(R.store['planif-run']).key!==key);
T('… l\'effacement est daté pour la synchro (autres appareils)',Object.keys(x.p.ts||{}).some(k=>/^logs\|3\|/.test(k)));
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
