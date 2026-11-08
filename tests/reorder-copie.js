/* Réorganiser les exercices d'une séance copiée (séance ajoutée) comme d'une séance du plan. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
console.log('\n═══ Réorganiser une séance copiée ═══\n');
const BASE=require('./_programme.json');const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};
R.S.planif={programs:clone(BASE),deleted:[]};R.save&&R.save();
const E=R.PLAN.engine,mu=()=>R.PLAN.engine.findInst?null:null;
const P=()=>R.S.planif.programs.find(p=>p.kind==='muscu');
let p=P();const sa=p.sessions.find(s=>/samedi/.test(s.name));
let x=E.findInst(p.id+'|3|'+sa.id);
T('séance du plan trouvée',!!x&&x.g.items.length>3);
const nk=E.copyInst(x,'2026-11-07');let c=E.findInst(nk);
T('copie créée (séance ajoutée)',!!c&&c.s.extra===true&&c.g.items.length===x.g.items.length,c&&c.g.items.length);
const names=g=>g.items.map(it=>it.name);
const n0=names(c.g);
// ordre choisi : dernier en premier (comme le fait le bouton ↑ répété)
p=c.p;const ids=c.g.items.map(it=>it.id);const ord=[ids[ids.length-1]].concat(ids.slice(0,-1));
p.orders=p.orders||{};p.orders[c.w+'|'+c.s.id]=ord;E.persist(p);
c=E.findInst(nk);const n1=names(c.g);
T('l\'ordre choisi s\'applique à la copie',n1[0]===n0[n0.length-1]&&n1[1]===n0[0]&&n1.length===n0.length,n1[0]);
T('… la séance d\'origine garde son ordre',names(E.findInst(p.id+'|3|'+sa.id).g)[0]===n0[0]);
// un exercice ajouté à la copie se réordonne aussi
const aid=E.addExTo(c,'Face pull');c=E.findInst(nk);
const ids2=c.g.items.map(it=>it.id);T('exercice ajouté : en fin de liste',ids2[ids2.length-1]===aid);
p.orders[c.w+'|'+c.s.id]=[aid].concat(ids2.filter(i=>i!==aid));E.persist(p);c=E.findInst(nk);
T('… et peut être remonté en tête',c.g.items[0].id===aid);
// déplacer la copie à un autre jour garde l'ordre
const mk=E.moveExtra(nk,'2026-11-14');const c2=E.findInst(mk);
T('copie déplacée d\'une semaine : l\'ordre la suit',c2&&c2.g.items[0].id===aid,mk);
// séance du plan : ordre avec un exercice remplacé
p=P();x=E.findInst(p.id+'|4|'+sa.id);const it0=x.g.items[0];E.doSwap(x,it0,'Front squat',false);x=E.findInst(p.id+'|4|'+sa.id);
const sw=x.g.items.find(it=>it.swapped);const ids3=x.g.items.map(it=>it.id);
p.orders[x.w+'|'+x.s.id]=ids3.filter(i=>i!==sw.id).concat([sw.id]);E.persist(p);x=E.findInst(p.id+'|4|'+sa.id);
T('séance du plan : un exercice remplacé se déplace aussi',x.g.items[x.g.items.length-1].id===sw.id);
{const src=require('fs').readFileSync(require('path').join(__dirname,'..','planif.js'),'utf8');
 T('Réorganiser : liste repliée (aucun exercice ouvert), ↑ ↓ de 44 px',/if \(!exOpenOf\(x, it\) \|\| ui\.reorder === x\.key\) return muscuItemLine/.test(src)&&/\.mvb\{width:44px;height:44px/.test(src)&&!/ui\.noteEdit === ek \|\| ui\.reorder === x\.key/.test(src));}
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
