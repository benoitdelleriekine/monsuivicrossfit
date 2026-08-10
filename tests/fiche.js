const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let listeners={};
global.document={addEventListener:(t,f)=>listeners[t]=f,getElementById:i=>nodes[i]||mk(),
 activeElement:null,createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,mv,histFor,curveFor,vFiche};")();
const {S,render,mv,histFor,curveFor}=R;
const click=ds=>listeners.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});

S.profile={sex:'m',age:36,bw:80,name:'Benoît'};
S.sessions=[
 {id:'a',date:'2026-06-02',feel:3,note:'',metcons:[],
  entries:[{id:'e1',movementId:'front-squat',sets:[
   {weight:60,reps:5,diff:'facile',level:null},{weight:70,reps:5,diff:'juste',level:null}]}]},
 {id:'b',date:'2026-07-01',feel:4,note:'',metcons:[],
  entries:[{id:'e2',movementId:'front-squat',sets:[
   {weight:75,reps:3,diff:'juste',level:null},{weight:80,reps:2,diff:'fond',level:null}]}]},
 {id:'c',date:'2026-08-04',feel:5,note:'',
  entries:[{id:'e3',movementId:'front-squat',sets:[{weight:76,reps:5,diff:'fond',level:null}]}],
  metcons:[{id:'m1',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:true,
   items:[{movementId:'thruster',reps:null,weight:30},{movementId:'pull-up',reps:null}],
   res:{mode:'time',secs:512,rounds:0,reps:0,done:true}}]}];

console.log('═══ Noms en anglais ═══');
['power-clean','clean-jerk','deadlift','pull-up','push-up','strict-press','db-snatch','row','plank']
 .forEach(id=>console.log(`  ${id.padEnd(14)} → ${mv(id).n}`));

console.log('\n═══ Historique du Front Squat ═══');
const h=histFor('front-squat');
h.forEach(r=>console.log(`  ${r.date}  ${r.sets.length} série(s)  e1RM ${r.rm?r.rm.toFixed(1):'—'}${r.pr?'  ← RECORD':''}`));
console.log('\n  courbe : '+curveFor('front-squat').map(c=>c.label+' '+c.rm).join(' · '));

console.log('\n═══ Historique du Pull-Up (metcon uniquement) ═══');
histFor('pull-up').forEach(r=>console.log(`  ${r.date}  séries:${r.sets.length}  metcons:${r.mcs.map(x=>x.name+' '+x.txt).join(', ')}`));

console.log('\n═══ Navigation ═══');
S.tab='progres';render();
console.log('  bouton d\'accès présent : '+(/data-act="fiche"/.test(nodes.app.innerHTML)?'✓':'✗'));
click({act:'fiche',v:'front-squat'});render();
const H=nodes.app.innerHTML;
console.log('  fiche ouverte          : '+(/Front Squat/.test(H)?'✓':'✗'));
console.log('  courbe tracée          : '+(/<svg/.test(H)?'✓':'✗'));
console.log('  historique listé       : '+((H.match(/kg est\.|Record/g)||[]).length+' repères'));
console.log('  séries détaillées      : '+((H.match(/style="flex:0 0 20px/g)||[]).length+' lignes de série'));
console.log('  passage en metcon      : vérifié plus bas sur le Pull-Up');
click({act:'fclose'});render();
console.log('  retour aux progrès     : '+(/data-act="progg"/.test(nodes.app.innerHTML)?'✓':'✗'));
click({act:'fiche',v:'front-squat'});click({act:'tab',v:'noter'});render();
console.log('  changement d\'onglet referme la fiche : '+(S.fiche===null?'✓':'✗'));

console.log('\n═══ Fiche d\'un mouvement vu uniquement en metcon ═══');
S.fiche='pull-up';S.tab='progres';render();
const P=nodes.app.innerHTML;
console.log('  fiche Pull-Up ouverte  : '+(/Pull-Up/.test(P)?'✓':'✗'));
console.log('  passage en metcon listé: '+(/En metcon · Fran/.test(P)?'✓':'✗'));
console.log('  message courbe absente : '+(/deux séances pour tracer/i.test(P)?'✓':'✗'));
console.log('  échelle gymnique       : '+(/Où tu en es|Débutant|palier/i.test(P)?'✓ présente':'—'));

console.log('\n═══ Cas limites ═══');
S.fiche='deadlift';render();
console.log('  mouvement sans donnée  : '+(/Aucune séance enregistrée/.test(nodes.app.innerHTML)?'✓ message clair':'✗'));
S.fiche='row';S.sessions.push({id:'d',date:'2026-08-05',feel:3,note:'',metcons:[],
 entries:[{id:'e9',movementId:'row',sets:[{dist:500,secs:112}]}]});render();
console.log('  mouvement cardio       : '+(/Meilleure allure/.test(nodes.app.innerHTML)?'✓':'✗'));
S.fiche='c-inexistant';
try{render();console.log('  identifiant inconnu    : ✓ pas de plantage');}
catch(e){console.log('  identifiant inconnu    : ✗ '+e.message);}
