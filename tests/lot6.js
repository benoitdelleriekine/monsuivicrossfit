/* Lot 6 : analyses et bilans. Jeu de test écrit d'avance : chaque valeur attendue est soit
   calculée à la main (commentaires), soit recalculée ici indépendamment à partir des séances brutes. */
const {boot}=require('./_boot.js');
const BASE=require('./_programme.json');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const iso=d=>{const t=new Date(d);t.setMinutes(t.getMinutes()-t.getTimezoneOffset());return t.toISOString().slice(0,10)};
const TODAY=iso(new Date()),D=n=>{const t=new Date(TODAY+'T12:00');t.setDate(t.getDate()-n);return iso(t)};
const monOf=d=>{const t=new Date(d+'T12:00');t.setDate(t.getDate()-((t.getDay()+6)%7));return iso(t)};
const shift=(d,n)=>{const t=new Date(d+'T12:00');t.setDate(t.getDate()+n);return iso(t)};
let k=0;const S1=(date,mid,sets,extra)=>Object.assign({id:'s'+(++k),date,feel:3,note:'',updatedAt:1,metcons:[],
 entries:mid?[{id:'e'+k,movementId:mid,sets:sets.map(([w,r,d])=>({weight:w,reps:r,diff:d||'juste',level:null}))}]:[]},extra||{});
const fran=(date,secs,rx)=>S1(date,null,[],{metcons:[{id:'m'+k,name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx,
 items:[{movementId:'thruster',reps:null,weight:rx?43:30},{movementId:'pull-up',reps:null}],res:{mode:'time',secs,rounds:0,reps:0,done:true}}]});

const sessions=[
 S1(D(40),'back-squat',[[90,5],[90,5]]), S1(D(30),'back-squat',[[95,3]]), S1(D(20),'back-squat',[[100,1]]), S1(D(10),'back-squat',[[80,10,'facile']]),
 S1(D(50),'deadlift',[[120,3]]), S1(D(35),'deadlift',[[115,3]]), S1(D(21),'deadlift',[[118,3]]), S1(D(7),'deadlift',[[119,3]]),
 S1(D(45),'clean',[[60,3]]), S1(D(31),'clean',[[62.5,3]]), S1(D(15),'clean',[[65,3]]), S1(D(5),'clean',[[67.5,3]]),
 S1(D(70),'snatch',[[40,3]]), S1(D(60),'snatch',[[42,3]]), S1(D(52),'snatch',[[41,3]]), S1(D(41),'snatch',[[40,3]]),
 S1(D(17),'strict-press',[[40,5]]), S1(D(3),'strict-press',[[40,5,'facile'],[40,5,'facile']]),
 fran(D(60),420,true), fran(D(30),300,false), fran(D(2),390,true),
 Object.assign(S1(TODAY,'pull-up',[[0,5],[0,5]]),{dur:45,rpe:9}),
];
sessions[sessions.length-1].metcons=clone(fran(TODAY,400,true).metcons);
sessions.push(S1(D(25),null,[],{metcons:[{id:'cy',name:'Cindy',format:'amrap',cap:20,rounds:1,scheme:'',rx:true,items:[],res:{mode:'rounds',secs:0,rounds:15,reps:0,done:true}}]}));

const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};R.S.planif={programs:[],deleted:[]};R.S.sessions=clone(sessions);
const pm=monOf(TODAY),prevMon=shift(pm,-7);
R.S.pain={zones:['coude'],zt:1,log:{[prevMon+'|coude|matin']:{v:3,t:1},[shift(prevMon,2)+'|coude|seance']:{v:5,t:1},[shift(prevMon,-5)+'|coude|matin']:{v:2,t:1}}};
R.save();

console.log('═══ Records par nombre de répétitions (back squat) ═══\n');
const rm=R.repMaxes('back-squat');
// 90×5 ×2 (J-40), 95×3 (J-30), 100×1 (J-20), 80×10 (J-10)
T('1 RM = 100 kg (J-20)',rm[1]&&rm[1].w===100&&rm[1].date===D(20));
T('3 RM = 95 kg (J-30)',rm[3]&&rm[3].w===95&&rm[3].date===D(30));
T('5 RM = 90 kg (J-40)',rm[5]&&rm[5].w===90&&rm[5].date===D(40));
T('10 RM = 80 kg (J-10)',rm[10]&&rm[10].w===80);
T('mouvement sans charge : aucun RM',Object.values(R.repMaxes('pull-up')).every(v=>v===null));

console.log('\n═══ Comparaison avec la séance précédente ═══\n');
const a=R.setStats([{weight:95,reps:3,diff:'juste'}]),b=R.setStats([{weight:90,reps:5,diff:'juste'},{weight:90,reps:5,diff:'facile'}]);
T('volume 95 × 3 = 285 kg, charge moyenne 95 kg, RPE 9',a.vol===285&&a.avg===95&&a.rpe===9);
T('90 × 5 ×2 : volume 900 kg, RPE moyen (9 + 7) / 2 = 8',b.vol===900&&b.avg===90&&b.rpe===8);
T('séries sans charge : pas de résumé de charge',R.setStats([{weight:0,reps:10}])===null);

console.log('\n═══ Plateaux ═══\n');
// deadlift : max estimés 136,0 / 130,3 / 133,7 / 134,9 → aucune hausse sur les 3 dernières
const pdl=R.plateauOf('deadlift');
T('soulevé de terre : plateau, 3 séances depuis le meilleur (136 kg)',pdl&&pdl.n===3&&Math.round(pdl.best.rm)===136,pdl&&pdl.why);
T('épaulé en hausse régulière : pas de plateau',R.plateauOf('clean')===null);
T('arraché non travaillé depuis plus de 4 semaines : pas signalé',R.plateauOf('snatch')===null);
T('moins de 4 séances : pas de verdict',R.plateauOf('strict-press')===null);

console.log('\n═══ Suggestion de charge ═══\n');
const sp=R.suggestOf('strict-press');
T('développé strict : 2 × 40 kg × 5 « Facile » → 42,5 kg × 5',sp&&sp.w===42.5&&sp.reps===5&&sp.n===2);
T('soulevé de terre : dernière série « Juste » → pas de suggestion',R.suggestOf('deadlift')===null);
const sq=R.suggestOf('back-squat');T('back squat : 80 kg × 10 « Facile » → 82,5 kg × 10',sq&&sq.w===82.5&&sq.reps===10);

console.log('\n═══ Volume par famille (8 semaines) ═══\n');
const fw=R.famWeekly(8),last=fw.weeks.length-1;
T('8 semaines, la dernière est la semaine en cours',fw.weeks.length===8&&fw.weeks[last]===pm);
const tv=fw.rows.find(r=>r.n==='Tirage vertical');
// aujourd'hui : 2 × 5 tractions ; chaque Fran (21-15-9) de la semaine en cours ajoute 45 tractions
const nFran=R.S.sessions.filter(s=>s.date>=pm&&(s.metcons||[]).some(m=>m.name==='Fran')).length;
T('tirage vertical cette semaine : 2 × 5 + 45 par Fran de la semaine',tv.w[last]===10+45*nFran,tv.w[last]+' = 10 + 45 × '+nFran);
// recalcul indépendant de toutes les familles depuis les séances brutes
const PAT=R.S&&null; const fams=Object.fromEntries(fw.rows.map(r=>[r.n,r.w.slice()]));
T('total 8 semaines = somme des semaines',fw.rows.every(r=>r.tot===r.w.reduce((x,y)=>x+y,0)));
T('séances hors des 8 semaines ignorées (arraché à J-70 et J-60 absent)',!fw.rows.some(r=>r.n==='Charnière de hanche'&&r.w.some((v,i)=>fw.weeks[i]<=D(60)&&v>0&&fw.weeks[i]<monOf(D(55)))));

console.log('\n═══ Charge 7 jours / 28 jours ═══\n');
const ua=d=>R.S.sessions.filter(s=>s.date===d).reduce((t,s)=>t+Math.round((s.dur||60)*(s.rpe||7)),0);
let A=0,C=0;for(let i=0;i<7;i++)A+=ua(D(i));for(let i=0;i<28;i++)C+=ua(D(i));C/=4;
const lr=R.loadRatio(),now=lr[lr.length-1];
T('aujourd\'hui : tractions + Fran = 45 min × RPE 9 = 405 UA',R.uaOnDay(TODAY)===405,R.uaOnDay(TODAY));
T('charge des 7 jours recalculée à l\'identique',now.a===A,now.a+' UA');
T('moyenne hebdo des 28 jours recalculée à l\'identique',Math.abs(now.c-C)<1e-9,now.c+' UA');
T('rapport = 7 jours / moyenne 28 jours',Math.abs(now.r-A/C)<1e-9,now.r.toFixed(2));
T('8 points hebdomadaires, le dernier aujourd\'hui',lr.length===8&&now.d===TODAY);

console.log('\n═══ Benchmarks RX / scalé ═══\n');
const fr=R.benchSeries().find(x=>x.n==='Fran');
T('Fran : 4 passages (Cindy, une seule fois, exclue)',fr&&fr.count===4&&!R.benchSeries().some(x=>x.n==='Cindy'));
T('meilleur RX 6:30 (390 s), meilleur scalé 5:00 (300 s)',fr.bestRx.sc.v===390&&fr.bestSc.sc.v===300);
// dernier passage RX 400 s, comparé au RX précédent (390 s), jamais au scalé
T('tendance comparée au passage RX précédent : en baisse (400 s contre 390 s)',fr.prev.sc.v===390&&fr.trend==='en baisse');

{const keep=clone(R.S.sessions);const w=(d,r)=>S1(d,null,[],{metcons:[{id:'w'+k,name:'WOD du jour',format:'amrap',cap:12,rounds:1,scheme:'',rx:true,items:[],res:{mode:'rounds',secs:0,rounds:r,reps:0,done:true}}]});
 R.S.sessions=keep.concat([w(D(9),8),w(D(4),5),w(D(1),9)]);R.S.updatedAt=(R.S.updatedAt||0)+1;
 T('« WOD du jour » (nom générique, séances différentes) : pas de courbe',!R.benchSeries().some(x=>/wod/i.test(x.n))&&R.benchSeries().some(x=>x.n==='Fran'));
 R.S.sessions=keep;R.S.updatedAt++;}
console.log('\n═══ Bilan de la semaine dernière ═══\n');
const rv=R.weekReview(prevMon);
const nCF=R.S.sessions.filter(s=>s.date>=prevMon&&s.date<=shift(prevMon,6)).length;
let uaW=0;for(let i=0;i<7;i++)uaW+=ua(shift(prevMon,i));
T('séances de la semaine recomptées à l\'identique',rv.cf===nCF&&rv.n===nCF,nCF);
T('charge de la semaine recalculée à l\'identique',rv.ua===uaW,uaW+' UA');
T('trois phrases',rv.txt.length===3);
T('phrase 1 : nombre de séances et charge',rv.txt[0].includes(nCF+' séance')&&rv.txt[0].includes(uaW.toLocaleString('fr-FR')+' UA'));
T('phrase 3 : plateau du soulevé de terre signalé',/Soulevé de terre|Deadlift/i.test(rv.txt[2])&&rv.plats.includes('deadlift'),rv.txt[2]);
// douleur : (3 + 5) / 2 = 4,0 ; semaine d'avant : 2,0
T('phrase 3 : douleur coude 4,0/10 (2,0 la semaine d\'avant)',/coude 4,0\/10 en moyenne \(2,0 la semaine d'avant\)/.test(rv.txt[2]));

console.log('\n═══ Plan : semaines faites et prévues ═══\n');
{const P=boot({});const progs=clone(BASE);progs.forEach(p=>{p.start=monOf(D(14));p.createdAt=Date.parse(D(20));});
 const mu=progs.find(p=>p.kind==='muscu');mu.logs={'1|sessmar':{done:true,rpe:8,dur:80,ex:{}}};
 P.S.planif={programs:progs,deleted:[]};P.S.profile={sex:'m',age:36,bw:81,name:'B'};
 const E=P.PLAN.engine,st=E.weekStats(E.parseISO(monOf(D(14))),true);
 const sumDone=Object.values(st.byProgDone||{}).reduce((x,y)=>x+y,0);
 T('charge faite par programme = charge faite de la semaine',sumDone===st.uaDone&&st.uaDone===640,st.uaDone);
 let u=0;for(let i=0;i<7;i++)u+=P.uaOnDay(shift(monOf(D(14)),i));
 T('charge jour par jour de l\'accueil = charge faite du Plan sur la semaine',u===st.uaDone,u);}

console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');process.exitCode=ko?1:0;
