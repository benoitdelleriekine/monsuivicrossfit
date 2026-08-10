const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
global.document={addEventListener(){},getElementById:i=>nodes[i]||mk(),activeElement:null,createElement:mk,
 documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
const R=new Function(code+"\n;return {S,e1rm,stdFor,levelInfo,LVN,mcTotals,mcStructure,parseScheme,loadout,streak,mmss,volumeSince,milestones,mcScore};")();
const {e1rm,stdFor,levelInfo,LVN,mcTotals,mcStructure,parseScheme,loadout,mmss,mcScore}=R;
let ko=0;const T=(n,a,e)=>{const ok=JSON.stringify(a)===JSON.stringify(e);if(!ok)ko++;
 console.log(`  ${ok?'✓':'✗'} ${n.padEnd(46)} ${ok?'':'obtenu '+JSON.stringify(a)+' au lieu de '+JSON.stringify(e)}`);};

console.log('═══ PASSE 4 — EXACTITUDE DES CALCULS ═══\n');
// Epley sur reps effectives : 80 × (1 + 8/30) = 101.33
T('1RM 8 reps à fond sur 80 kg', +e1rm(80,8,'fond').toFixed(2), 101.33);
T('1RM refusée au-delà de 8 reps effectives', e1rm(80,8,'juste'), null);
T('1RM refusée sans charge', e1rm(0,5,'fond'), null);
T('1RM 5 reps "juste" (5+1=6)', +e1rm(100,5,'juste').toFixed(2), 120);

// Disques : 100 kg sur barre de 20 → 40 par côté = 25+15
T('chargement 100 kg / barre 20', loadout(100,20).plates.map(p=>p.w), [25,15]);
T('chargement 62.5 kg / barre 20', loadout(62.5,20).plates.map(p=>p.w), [20,1.25]);
T('reste signalé si non atteignable', loadout(21,20).left, 0.5);
T('charge sous la barre refusée', loadout(10,20), null);

// Schémas
T('schéma 21-15-9', parseScheme('21-15-9'), [21,15,9]);
T('schéma à un seul nombre ignoré', parseScheme('5'), null);
T('structure 3 tours', mcStructure({rounds:3,scheme:''}).n, 3);
T('structure schéma → 3 tours', mcStructure({rounds:1,scheme:'21-15-9'}).n, 3);

// Volume metcon
const mc={rounds:3,scheme:'',items:[{movementId:'bike',dist:1600},{movementId:'t2b',reps:50},
 {movementId:'thruster',reps:25,weight:25}]};
T('volume 3 tours — bike', mcTotals(mc)[0].dist, 4800);
T('volume 3 tours — thruster reps', mcTotals(mc)[2].reps, 75);
T('tonnage 3 tours — thruster', mcTotals(mc)[2].ton, 1875);
const fran={rounds:1,scheme:'21-15-9',items:[{movementId:'thruster',reps:null,weight:30},{movementId:'pull-up',reps:null}]};
T('volume Fran — 45 reps par mouvement', mcTotals(fran).map(t=>t.reps), [45,45]);

// Barèmes
const p={sex:'m',age:36,bw:80};
const st=stdFor('back-squat',p);
T('barème back squat homme 36 ans 80 kg', st.t.map(x=>Math.round(x)), [57,88,115,153,191]);
T('niveau à 120 kg', levelInfo(120,st.t,LVN.m).label, 'Intermédiaire');
T('niveau sous le premier seuil', levelInfo(40,st.t,LVN.m).label, 'En route');
T('niveau au sommet', levelInfo(250,st.t,LVN.m).next, null);
T('barème inexistant → null', stdFor('burpee',p), null);
T('barème sans profil → null', stdFor('back-squat',null), null);

// Scores
T('temps formaté', mmss(512), '8:32');
T('score For Time : plus bas = mieux', mcScore({res:{mode:'time',secs:512}}).lower, true);
T('score AMRAP : plus haut = mieux', mcScore({res:{mode:'rounds',rounds:9,reps:4}}).lower, false);
T('score absent → null', mcScore({res:{mode:'time',secs:0}}), null);
console.log(`\n  ${ko?'✗ '+ko+' calcul(s) faux':'✓ les 26 calculs sont exacts'}`);
