/* Supprimer une séance prévue : garder la suite comme prévu, ou décaler la suite d'une semaine. Rétablir. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const now=new Date();now.setHours(12);const mon=new Date(now);mon.setDate(mon.getDate()-((mon.getDay()+6)%7));
const start=new Date(mon);start.setDate(start.getDate()-14);   // semaine en cours = S3
const fan=clone(require('./_fanny.json'));const F0=(fan.programs||[fan])[0];F0.id='fa';F0.start=iso(start);F0.logs={};F0.overrides={};
const run={id:'ru',kind:'course',name:'Course',start:iso(start),weeks:10,deloadEvery:4,deloadPct:25,logs:{},runs:[{id:'r1',name:'Course continue',day:6,type:'continu',startMin:20,mode:'min',inc:3}]};
const reh={id:'re',kind:'fixe',name:'Rééduc',start:iso(start),weeks:8,logs:{},fixed:[{id:'f1',name:'HSR',day:2,dur:20,rpe:6,exercises:[{id:'e1',name:'HSR ext',mode:'plan',steps:[{w:1,sets:3,reps:15,kg:4},{w:2,sets:3,reps:12,kg:5},{w:3,sets:4,reps:10,kg:6},{w:4,sets:4,reps:8,kg:7},{w:5,sets:4,reps:6,kg:8}]}]}]};
const R=boot({});R.S.profile={sex:'f',age:35,bw:60,name:'F'};R.S.planif={programs:[F0,run,reh],deleted:[]};
const P=R.PLAN,E=P.engine,ui=E.ui();
const click=(a,key)=>R.fire('click',{target:{closest:sel=>sel==='[data-a]'?{getAttribute:n=>({'data-a':a,'data-key':key})[n]||null,dataset:{a,key}}:null}});
const sid=F0.sessions[0].id,key=w=>'fa|'+w+'|'+sid,it=(w,i)=>E.findInst(key(w)).g.items[i||0];
const sig=w=>{const g=E.findInst(key(w)).g;return g.items.slice(0,3).map(z=>z.scheme+'@'+z.loadNum).join(' ')};
const base={3:sig(3),4:sig(4),5:sig(5)},len0=E.findInst(key(3))?null:null;
console.log('\n═══ Supprimer une séance de muscu ═══\n');
ui.weekStart=iso(mon);ui.sel=key(3);ui.cancelAsk=key(3);let h=E.weekHtml();
T('choix proposés : garder la suite, décaler d\'une semaine, déplacer, annuler',/data-a="cancel-keep"/.test(h)&&/data-a="cancel-shift"/.test(h)&&/Plutôt la déplacer/.test(h)&&/data-a="cancel-no"/.test(h));
T('fin du programme annoncée (une semaine plus tard)',/Fin du programme le .* au lieu du /.test(h));
click('cancel-keep',key(3));
T('« garder la suite » : la séance disparaît du jour',!P.dayList(iso(E.findInst(key(3))?E.findInst(key(3)).date:mon)).some(z=>z.key===key(3)));
T('… la suite est inchangée',sig(4)===base[4]&&sig(5)===base[5]);
h=E.weekHtml();T('ligne « Supprimée » + Rétablir dans la semaine',/class="arow cxr"/.test(h)&&/data-a="restore"/.test(h));
click('restore',key(3));T('Rétablir : la séance revient',P.dayList(iso(E.findInst(key(3)).date)).some(z=>z.key===key(3)));
console.log('\n═══ Décaler la suite d\'une semaine ═══\n');
const n0=P.engine.findInst(key(3)).g?require('vm')&&0:0;
const lenBefore=(()=>{let w=1;while(E.findInst(key(w+1)))w++;return w})();
click('cancel-shift',key(3));
T('S4 reprend le contenu prévu en S3, S5 celui de S4',sig(4)===base[3]&&sig(5)===base[4],sig(4)+' | '+base[3]);
const lenAfter=(()=>{let w=1;while(E.findInst(key(w+1)))w++;return w})();
T('le programme dure une semaine de plus',lenAfter===lenBefore+1,lenBefore+' → '+lenAfter);
T('séance S3 supprimée, ligne « suite décalée »',/suite décalée d’une semaine/.test(E.weekHtml()));
ui.cancelAsk=null;
// une autre séance de la même semaine : pas de double décalage
const sid2=F0.sessions[1]&&F0.sessions[1].id;
if(sid2){ui.sel='fa|3|'+sid2;ui.cancelAsk='fa|3|'+sid2;h=E.weekHtml();T('2e séance de la même semaine : « déjà décalée », pas de 2e décalage proposé',/déjà décalée/.test(h)&&!/data-a="cancel-shift"/.test(h));ui.cancelAsk=null}
click('restore',key(3));
T('Rétablir la seule séance supprimée : le décalage est retiré',sig(4)===base[4]&&(()=>{let w=1;while(E.findInst(key(w+1)))w++;return w})()===lenBefore);
console.log('\n═══ Course et rééduc ═══\n');
const rk=w=>'ru|'+w+'|r1',rs=w=>E.findInst(rk(w)).g.title;const r4=rs(4),r3=rs(3);
E.ui().cancelAsk=null;click('cancel-shift',rk(3));
T('course : S4 reprend la sortie prévue en S3',rs(4)===r3&&r3!==r4,rs(4));
const hk=w=>'re|'+w+'|f1',hs=w=>E.findInst(hk(w)).g.items[0].scheme;const h3=hs(3);
click('cancel-shift',hk(3));
T('rééduc par paliers : S4 reprend le palier de S3 (4×10)',hs(4)===h3&&h3==='4×10',hs(4));
T('séance supprimée exclue des chiffres de la semaine',!P.dayList(iso(addD(start,14+2))).some(z=>z.key===hk(3)));
function addD(d,n){const x=new Date(d);x.setDate(x.getDate()+n);return x}
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
