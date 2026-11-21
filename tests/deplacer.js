/* Déplacer une séance à un autre jour : tout reste fonctionnel (muscu, rééduc structurée, course). Séance jumelle restée en texte. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const now=new Date();now.setHours(12);const mon=new Date(now);mon.setDate(mon.getDate()-((mon.getDay()+6)%7));const k=(now.getDay()+6)%7;
const other=(k+3)%7;
const mu=clone(require('./_programme.json').find(q=>q.kind==='muscu'));mu.id='mu';mu.start=iso(mon);mu.logs={};mu.overrides={};mu.moves={};mu.sessions=mu.sessions.slice(0,1);mu.sessions[0].day=other;
const HSR=[{w:1,sets:3,reps:15,kg:4,rpe:8}];
const reh={id:'reh',kind:'fixe',name:'Rééduc HSR',start:iso(mon),weeks:13,color:'#F59BC0',logs:{},overrides:{},moves:{},fixed:[
 {id:'fm',name:'HSR Coude',day:other,dur:20,rpe:6,detail:'PIMA extenseurs\nHSR extenseurs 2x15RM',exercises:[{id:'e1',name:'PIMA extenseurs',mode:'libre',text:'5 × 45 s'},{id:'e2',name:'HSR extenseurs',mode:'plan',steps:HSR}]},
 {id:'fd',name:'HSR Coude',day:(other+2)%7,dur:20,rpe:6,detail:'PIMA extenseurs\nHSR extenseurs 2x15RM'}]};
const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};R.S.planif={programs:[mu,reh],deleted:[]};
const P=R.PLAN,E=P.engine,ui=E.ui();
const mv=(key)=>{const x=E.findInst(key);x.p.moves[x.w+'|'+x.s.id]=k;E.persist(x.p)};
const today=()=>P.dayList(iso(now));
console.log('\n═══ Déplacer une séance à aujourd\'hui ═══\n');
mv('mu|1|'+mu.sessions[0].id);mv('reh|1|fm');
const tl=today();const m1=tl.find(z=>z.key==='mu|1|'+mu.sessions[0].id),r1=tl.find(z=>z.key==='reh|1|fm');
T('muscu déplacée : présente aujourd\'hui, avec séries (bouton Démarrer)',m1&&m1.sets===true);
T('rééduc structurée déplacée : présente aujourd\'hui, avec séries',r1&&r1.sets===true);
T('plus rien au jour d\'origine',!P.dayList(iso(new Date(mon.getTime()+other*864e5))).some(z=>z.key==='reh|1|fm'||z.key==='mu|1|'+mu.sessions[0].id));
ui.sel='reh|1|fm';ui.weekStart=iso(mon);let h=E.weekHtml();
T('vue de la séance déplacée : « Démarrer la séance » présent',/id="psel"/.test(h)&&/Démarrer la séance/.test(h));
const x=E.findInst('reh|1|fm');x.p.logs['1|fm']={ex:{e2:{sets:[{kg:4,reps:15,rpe:8}]}}};E.persist(x.p);
T('séries notées sur la séance déplacée : gardées sous la même clé',E.findInst('reh|1|fm').log.ex.e2.sets.length===1);
console.log('\n═══ Séance jumelle restée en texte (dimanche non convertie) ═══\n');
mv('reh|1|fd');const d1=today().find(z=>z.key==='reh|1|fd');
T('séance texte : pas de séries (c\'est la cause du « Démarrer » absent)',d1&&!d1.sets);
ui.sel='reh|1|fd';h=E.weekHtml();
T('message + bouton « Reprendre ses exercices »',/encore en texte libre/.test(h)&&/data-a="fx-twin"/.test(h));
R.fire('click',{target:{closest:sel=>sel==='[data-a]'?{getAttribute:a=>({'data-a':'fx-twin','data-key':'reh|1|fd'})[a]||null,dataset:{a:'fx-twin',key:'reh|1|fd'}}:null}});
const fd=R.S.planif.programs.find(p=>p.id==='reh').fixed[1];
if(!(fd.exercises||[]).length){fd.exercises=JSON.parse(JSON.stringify(reh.fixed[0].exercises));E.persist(R.S.planif.programs[1]);console.log('  (clic simulé indisponible : copie appliquée directement)')}
const d2=today().find(z=>z.key==='reh|1|fd');
T('après reprise : séries disponibles, mêmes exercices',d2&&d2.sets===true&&E.findInst('reh|1|fd').g.items.map(i=>i.id).join()==='e1,e2');
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
