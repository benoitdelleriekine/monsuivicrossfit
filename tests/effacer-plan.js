/* « Tout effacer » du Plan : copie de secours sur l'appareil et « Récupérer », y compris face à la synchro. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>JSON.parse(JSON.stringify(o));
const BASE=require('./_programme.json');
console.log('\n═══ Effacer puis récupérer les programmes ═══\n');
const R=boot({});R.S.profile={sex:'m',age:36,bw:81,name:'B'};R.S.planif={programs:clone(BASE),deleted:[]};R.save();
const click=a=>{const btn={getAttribute:k=>k==='data-a'?a:null,closest:()=>btn,dataset:{a}},t0={closest:s=>s==='[data-a]'?btn:null};R.fire('click',{composedPath:()=>[t0],target:t0})};
const n0=R.S.planif.programs.length;
click('wipe');global.window.prompt=()=>'non';click('wipe-yes');
T('mauvais mot tapé : rien n\'est effacé',R.S.planif.programs.length===n0);
click('wipe');global.window.prompt=()=>'effacer';click('wipe-yes');
T('« EFFACER » tapé : programmes effacés et effacement daté (pour les autres appareils)',R.S.planif.programs.length===0&&R.S.planif.deleted.length===n0);
const bak=JSON.parse(R.store['planif-avant-effacement']||'null');
T('copie de secours gardée sur l\'appareil',bak&&bak.programs.length===n0);
// le compte (autre appareil) a reçu l'effacement
const remote=clone(R.S.planif);
click('wipe-undo');
T('« Récupérer » : programmes revenus',R.S.planif.programs.length===n0&&R.S.planif.deleted.length===0);
T('… copie de secours retirée',!R.store['planif-avant-effacement']);
const m=R.mergePlanif(R.S.planif,remote);
T('synchro avec un appareil qui a l\'effacement : la récupération l\'emporte',m.programs.length===n0);
T('… les séances notées sont revenues aussi',JSON.stringify(m.programs.map(p=>Object.keys(p.logs||{}).length))===JSON.stringify(BASE.map(p=>Object.keys(p.logs||{}).length)));
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
