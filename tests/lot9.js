/* Lot 9 : durée estimée, avancement d'une séance, lignes d'exercice, liste des séries. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const BASE=require('./_programme.json');const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};
R.S.planif={programs:clone(BASE),deleted:[]};const E=R.PLAN.engine,P=()=>R.S.planif.programs.find(p=>p.kind==='muscu');
const pl=R.PLAN;
console.log('\n═══ Durée estimée ═══\n');
{const p=P(),sa=p.sessions.find(s=>/samedi/.test(s.name)),key=p.id+'|3|'+sa.id,x=E.findInst(key);
 const g=pl.dayList(E.iso(x.date)).find(z=>z.key===key).pg;
 // recalcul indépendant
 const rs=r=>{r=String(r||'').toLowerCase().replace(',','.');let m=r.match(/(\d+(?:\.\d+)?)\s*(?:[-–à]\s*(\d+(?:\.\d+)?))?\s*(min|s\b)?/);if(!m)return 90;const v=(+m[1]+(m[2]?+m[2]:+m[1]))/2;return m[3]==='s'||(!m[3]&&v>10)?v:v*60};
 let tot=0;x.g.items.forEach(it=>{if(['pct','kg','reps'].indexOf(it.mode)<0){const mm=String(it.scheme||'').match(/(\d+)\s*min/);tot+=mm?+mm[1]*60:240;return}
  const n=Math.max(1,parseInt(it.sets,10)||1),rp=parseInt(it.reps,10)||8,w=it.unit==='s'?rp:Math.max(20,rp*4);tot+=45+n*(w+(it.chain?15:rs(it.rest)))});
 const exp=Math.max(5,Math.round(tot/300)*5);
 T('durée estimée = séries × (travail + repos) + mise en place, arrondie à 5 min',g.est===exp,g.est+' min');
 T('séance pas commencée : « à venir », 0 %',g.state==='avenir'&&g.pct===0&&g.done===0);
 T('total = exercices notables',g.tot===x.g.items.filter(it=>['pct','kg','reps'].indexOf(it.mode)>=0).length,g.tot);
 console.log('\n═══ Avancement ═══\n');
 const it0=x.g.items[0],it1=x.g.items[1];
 const sets=(it,k)=>Array.from({length:k},()=>({kg:it.loadNum||null,reps:it.repsPlan||8,rpe:7}));
 p.logs=p.logs||{};p.logs['3|'+sa.id]={done:true,ex:{[it0.id]:{sets:sets(it0,+it0.sets)},[it1.id]:{sets:sets(it1,1)}}};E.persist(p);
 let q=pl.dayList(E.iso(x.date)).find(z=>z.key===key).pg;
 T('une série notée : « en cours » (et non « faite »)',q.state==='encours');
 T('1 exercice fait + 1 commencé : compte demi pour le % ',q.done===1&&q.part===1&&q.pct===Math.round(1.5/q.tot*100),q.pct+' %');
 T('temps restant < durée estimée',q.left<q.est,q.left+' / '+q.est);
 p.logs['3|'+sa.id].ex[x.g.items[2].id]={skipped:true};E.persist(p);q=pl.dayList(E.iso(x.date)).find(z=>z.key===key).pg;
 T('« Pas fait » sort du total',q.tot===g.tot-1);
 p.logs['3|'+sa.id].fin=Date.now();p.logs['3|'+sa.id].rpe=7;E.persist(p);q=pl.dayList(E.iso(x.date)).find(z=>z.key===key).pg;
 T('« Terminer » : séance terminée, avec l\'heure et le RPE',q.state==='finie'&&q.fin>0&&q.rpe===7);
 T('séance terminée : le % ne compte plus les exercices commencés',q.pct===Math.round(1/q.tot*100),q.pct+' %');
 // séance d'un jour passé déjà notée (ancienne version, sans heure de fin) : terminée
 p.start=E.iso(E.addDays(new Date(),-21));E.persist(p);const k2=p.id+'|1|'+sa.id,x2=E.findInst(k2);p.logs['1|'+sa.id]={done:true,rpe:6,ex:{[x2.g.items[0].id]:{sets:sets(x2.g.items[0],1)}}};E.persist(p);
 const q2=pl.dayList(E.iso(x2.date)).find(z=>z.key===k2).pg;
 T('jour passé déjà noté (sans heure de fin) : terminée',q2.state==='finie',E.iso(x2.date));
 // « Marquer comme faite » sans séries : terminée
 const k3=p.id+'|2|'+sa.id,x3=E.findInst(k3);p.logs['2|'+sa.id]={done:true};E.persist(p);
 T('« Marquer comme faite » sans séries : terminée',pl.dayList(E.iso(x3.date)).find(z=>z.key===k3).pg.state==='finie');}
console.log('\n═══ Écran ═══\n');
{const fs=require('fs'),path=require('path'),src=fs.readFileSync(path.join(__dirname,'..','planif.js'),'utf8');
 T('rond à cocher 44 px, même action que « Comme prévu »',/\.ckc\{flex:none;width:44px;height:44px/.test(src)&&/'<button class="ckc" data-a="lg-plan"/.test(src));
 T('rond plein ou partiel : ouvre l\'exercice (pas d\'annulation par erreur)',/class="ckc on" data-a="ex-tog"/.test(src)&&/class="ckc part" data-a="ex-tog"/.test(src));
 T('rond coché « comme prévu » : décochable ; séries notées une à une : s\'ouvrent pour corriger',/ss\.length >= nS && raw\.plan \? '<button class="ckc on" data-a="lg-unplan"/.test(src)&&/case 'lg-unplan':[\s\S]{0,200}ru\.plan/.test(src));
 T('rond dessiné en 28 px dans une zone tactile de 44 px',/\.ckc::before\{[^}]*width:28px;height:28px/.test(src));
 T('pastille de charge et numéro',/class="ldpill"/.test(src)&&/class="exnum"/.test(src));
 T('liste des séries : Extra, écart à la cible, ajouter une série',/>Extra</.test(src)&&/var dTag = function/.test(src)&&/data-a="run-more">' \+ ICON\.plus \+ 'Ajouter une série/.test(src));}
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
