const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let L={};
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||mk(),activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={vibrate(){}};let store={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=()=>{};global.confirm=()=>true;
const R=new Function(code+"\n;return {S,render,mv,milestones,movStat};")();
const {S,render,mv,milestones}=R;
const click=ds=>L.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const input=(id,v)=>L.input({target:{id,value:v,dataset:{},closest:()=>null}});
const H=()=>nodes.app.innerHTML;

// ── Simulation d'un usage de plusieurs mois ──
const OLY=['snatch','power-snatch','hang-snatch','snatch-pull','ohs','clean','power-clean','hang-clean',
 'clean-pull','clean-jerk','jerk','push-jerk','split-jerk','push-press','strict-press','thruster','snatch-balance'];
const GYM=['pull-up','c2b','ring-row','bmu','hspu','t2b','k2e','ring-dip','push-up','air-squat','lunge',
 'pistol','sit-up','ghd','hollow','plank','rope-climb','du','box-jump','burpee','wall-ball'];
S.profile={sex:'m',age:36,bw:80,name:'Benoit'};
S.sessions=[];
let d=new Date('2026-02-01');
[...OLY,...GYM].forEach((id,i)=>{
 const dt=new Date(d);dt.setDate(dt.getDate()+i*4);
 const iso=dt.toISOString().slice(0,10);
 for(let k=0;k<(i%4)+1;k++){
  const dd=new Date(dt);dd.setDate(dd.getDate()+k*9);
  S.sessions.push({id:'s'+i+'-'+k,date:dd.toISOString().slice(0,10),feel:3,note:'',metcons:[],
   entries:[{id:'e'+i+'-'+k,movementId:id,sets:[{weight:mv(id).k==='barbell'?40+i:0,reps:5,diff:'juste',level:null}]}]});}});

console.log('═══ Passage à l\'échelle ═══');
console.log('  séances simulées   : '+S.sessions.length);
console.log('  mouvements suivis  : '+new Set(S.sessions.flatMap(s=>s.entries.map(e=>e.movementId))).size);

S.tab='progres';S.progG='Haltéro';render();
let h=H();
const lignes=(h.match(/data-act="fiche" data-v=/g)||[]).length;
console.log('\n  catégorie Haltéro  : '+lignes+' lignes de liste');
console.log('  champ de filtre    : '+(/id="mq"/.test(h)?'✓ proposé (liste longue)':'✗'));
console.log('  options de tri     : '+(h.match(/data-act="msort"/g)||[]).length);
console.log('  taille du bloc     : '+h.length+' caractères');

console.log('\n═══ Tri ═══');
const noms=x=>[...x.matchAll(/font-weight:600;font-size:14\.5px;overflow:hidden[^>]*>([^<]+)</g)].map(m=>m[1]);
for(const t of ['recent','freq','alpha']){
 click({act:'msort',v:t});render();
 console.log(`  ${t.padEnd(7)} → ${noms(H()).slice(0,4).join(' · ')}`);
}

console.log('\n═══ Filtre ═══');
input('mq','clean');
console.log('  « clean »          → '+noms(H()).join(' · '));
input('mq','zzz');
console.log('  sans résultat      → '+(/Aucun mouvement ne correspond/.test(H())?'✓ message':'✗'));
input('mq','');
click({act:'progg',v:'Gymnastique'});render();
console.log('  filtre remis à zéro au changement de catégorie : '+(S.mq===''?'✓':'✗'));
console.log('  catégorie Gym      : '+(H().match(/data-act="fiche" data-v=/g)||[]).length+' lignes');

console.log('\n═══ Premières fois cliquables ═══');
const ms=milestones(S.sessions);
console.log('  jalons avec identifiant : '+ms.filter(x=>x.id).length+'/'+ms.length);
S.progG=null;render();
console.log('  cartes cliquables  : '+(/class="ms-card"[^>]*data-act="fiche"/.test(H())?'✓':'✗'));
const cible=ms[0];
click({act:'fiche',v:cible.id});render();
console.log('  ouvre la fiche de « '+mv(cible.id).n+' » : '+(H().includes(mv(cible.id).n)?'✓':'✗'));
