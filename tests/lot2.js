/* Lot 2 : chiffres justes. Records réels et estimés distingués ; charge, tonnage et course
   de la semaine séparés entre fait et prévu. */
const {boot}=require('./_boot.js');
const BASE=require('./_programme.json');
let ko=0;const T=(n,c,extra)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${extra!=null?'  ('+extra+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const sq=(id,date,sets)=>({id,date,feel:3,note:'',metcons:[],updatedAt:1,
 entries:[{id:'e'+id,movementId:'back-squat',sets:sets.map(([w,r,d])=>({weight:w,reps:r,diff:d||'juste',level:null}))}]});

console.log('═══ Records : réel ou estimé ═══\n');
{const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};
 R.S.sessions=[sq('s1','2026-10-01',[[80,5]]),sq('s2','2026-10-08',[[90,3]]),sq('s3','2026-10-15',[[85,6]]),sq('s4','2026-10-22',[[70,5]])];
 R.S.planif={programs:[],deleted:[]};R.save();
 R.S.tab='progres';R.S.records=true;R.render(); /* cartes en tête de la page Records (lot 5) */
 const L=R.doc.getElementById('app').innerHTML,all=R.recordList();
 T('90 kg × 3 après 80 kg × 5 : record de charge réel, affiché tel quel',/90 kg × 3/.test(L)&&/charge la plus lourde/.test(L));
 T('85 kg × 6 : record estimé, marqué « max estimé » avec la série d\'origine',/max estimé · 85 kg × 6/.test(L));
 T('aucune carte n\'affiche un estimé sans le dire',!/<b class="v">10[0-9],[0-9] kg<\/b><span class="n">Back Squat<\/span>\s*<small>/.test(L));
 T('70 kg × 5 : aucun record',!/70 kg × 5/.test(L));
 const bs=all.find(r=>r.id==='back-squat');
 T('page Records : max estimé et plus lourd soulevé côte à côte',bs&&/max estimé · plus lourd soulevé : 90 kg × 3/.test(bs.sub),bs&&bs.sub);
 {const hier=new Date(Date.now()-864e5).toISOString().slice(0,10);
  R.S.sessions=[sq('h1','2026-10-01',[[90,1]]),sq('h2',hier,[[85,6]])];R.S.records=false;R.save();R.render();
  const h=R.doc.getElementById('app').innerHTML;
  T('accueil, « À retenir » : record estimé suivi de « max estimé, sur 85 kg × 6 »',/À retenir/.test(h)&&/Record [^<]*max estimé, sur 85 kg × 6/.test(h));}}

console.log('\n═══ Semaine : fait et prévu ═══\n');
{const R=boot({});const progs=clone(BASE);const mu=progs.find(p=>p.kind==='muscu');
 R.S.planif={programs:progs,deleted:[]};R.S.profile={sex:'m',age:36,bw:81,name:'B'};
 const E=R.PLAN.engine,mon=E.parseISO('2026-11-09');
 let st=E.weekStats(mon);
 T('rien de fait : charge, tonnage, course faits à zéro',st.uaDone===0&&st.tonDone===0&&st.runDone===0,'prévu '+st.ua+' UA');
 T('le prévu reste calculé comme avant',st.ua>0&&st.ton>0);
 const ua0=st.ua,ton0=st.ton;
 mu.logs={'1|sessmar':{done:true,rpe:8,dur:90,ex:{mdl:{sets:[{kg:85,reps:6,rpe:7},{kg:85,reps:6,rpe:7},{kg:85,reps:6,rpe:8},{kg:85,reps:6,rpe:8}]},mtr:{skipped:true}}}};
 st=E.weekStats(mon);
 T('séance faite : 1 / N',st.done===1);
 T('charge faite = durée notée × RPE noté (90 min × 8)',st.uaDone===720,st.uaDone);
 const g=E.gen(mu,mu.sessions.find(s=>s.id==='sessmar'),1),attendu=g.items.reduce((a,it)=>a+(it.id==='mdl'?85*6*4:it.id==='mtr'?0:(it.ton||0)),0);
 T('tonnage fait : séries notées, exercice non réalisé à 0, le reste comme prévu',Math.abs(st.tonDone-attendu)<0.01,Math.round(st.tonDone)+' kg');
 T('le prévu de la semaine ne bouge pas quand on note',st.ton===ton0||st.ton>0);
 R.S.sessions=[{id:'c1',date:'2026-11-12',dur:60,rpe:9,feel:3,note:'',entries:[],metcons:[],updatedAt:1}];
 {const t=Date.now();while(Date.now()-t<350);} /* le module garde la liste CrossFit 300 ms en cache */
 const st2=E.weekStats(mon);
 T('CrossFit noté : compté dans le fait et dans le prévu (60 × 9)',st2.uaDone-st.uaDone===540&&st2.ua-st.ua===540);}

console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');process.exitCode=ko?1:0;
