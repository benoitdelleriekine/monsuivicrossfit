/* Plan sur téléphone : la semaine en liste (programmes de la semaine, séances jour par jour, séance ouverte en un bloc). */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const now=new Date();now.setHours(12);const mon=new Date(now);mon.setDate(mon.getDate()-((mon.getDay()+6)%7));const k=(now.getDay()+6)%7;
const mu=JSON.parse(JSON.stringify(require('./_programme.json').find(q=>q.kind==='muscu')));mu.id='mu';mu.start=iso(mon);mu.logs={};mu.overrides={};
mu.sessions=mu.sessions.slice(0,2);mu.sessions[0].day=k;mu.sessions[1].day=(k+1)%7;
const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};R.S.planif={programs:[mu],deleted:[]};
const E=R.PLAN.engine,html=()=>R.PLAN.html?R.PLAN.html():'';
const src=require('fs').readFileSync(require('path').join(__dirname,'..','planif.js'),'utf8');
console.log('\n═══ Plan : la semaine en liste ═══\n');
const key='mu|1|'+mu.sessions[0].id;
let h=E.weekHtml?E.weekHtml():null;
if(h==null){T('vue Semaine accessible aux tests',false)}else{
T('plus de bande de jours ni de chiffres sur la semaine en cours',!/class="strip"/.test(h)&&!/class="kline"/.test(h));
T('bloc « programmes de la semaine » avec avancement S1/n',/class="card pgs"/.test(h)&&/S1\//.test(h));
T('7 jours listés, aujourd\'hui repéré',(h.match(/class="dname/g)||[]).length===7&&/Aujourd’hui<\/span>/.test(h));
T('séance du jour : bandeau plein avec rond Démarrer, rien d\'ouvert d\'office',/class="sess band fill"/.test(h)&&/class="bgo" data-a="run-open"/.test(h)&&!/id="psel"/.test(h));
T('jours sans séance : « repos » sur la ligne du jour',/· repos/.test(h));
R.PLAN.open(key);h=E.weekHtml();
T('séance ouverte : un seul bloc (titre, 3 chiffres, Démarrer, exercices)',/id="psel"/.test(h)&&/class="dtiles"/.test(h)&&/Démarrer la séance/.test(h)&&/class="items"/.test(h)&&!/tonnage prévu[\s\S]*Durée estimée d’après/.test(h));
T('actions secondaires repliées derrière « ··· »',/data-a="more"/.test(h)&&!/data-a="move-open"/.test(h)&&!/data-a="cp-open"/.test(h));
E.ui().more=key;h=E.weekHtml();
T('« ··· » ouvert : déplacer, copier, réorganiser, tout ouvrir',/data-a="move-open"/.test(h)&&/data-a="cp-open"/.test(h)&&/data-a="reorder"/.test(h)&&/data-a="ex-all"/.test(h));
E.ui().weekStart=iso(new Date(mon.getTime()+7*864e5));E.ui().sel=null;h=E.weekHtml();
T('autre semaine : résumé « Prévu : … » et retour à cette semaine',/class="wksum small">Prévu : /.test(h)&&/Revenir à cette semaine/.test(h));}
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
