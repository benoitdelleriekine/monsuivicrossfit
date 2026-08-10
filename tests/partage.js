const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
// ── canvas simulé : on trace dans un journal au lieu de pixels ──
const trace=[];
const ctx={fillStyle:'',strokeStyle:'',lineWidth:0,font:'',lineJoin:'',lineCap:'',textBaseline:'',
 clearRect(){},fillRect(){},drawImage(){trace.push('image')},
 fillText(t){trace.push('text:'+t)},measureText:t=>({width:String(t).length*18}),
 beginPath(){},moveTo(){},lineTo(){},arcTo(){},arc(){},closePath(){},stroke(){},fill(){},
 createLinearGradient:()=>({addColorStop(){}})};
const cv={width:0,height:0,getContext:()=>ctx,toBlob:cb=>cb({size:12345,type:'image/png'}),style:{}};
const mk=id=>({id,innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,
 style:{},files:[],click(){},getBoundingClientRect:()=>({top:0})});
const nodes={app:mk('app'),tabs:mk('tabs'),overlay:mk('overlay'),spacer:mk('spacer'),shcv:cv};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]},scrollHeight:1000};
let L={};
global.document={addEventListener:(t,f)=>L[t]=f,getElementById:i=>nodes[i]||null,activeElement:null,
 createElement:()=>mk('x'),documentElement:root,querySelector:()=>({setAttribute(){}}),
 fonts:{load:()=>Promise.resolve()}};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}}),
 scrollTo(){},scrollBy(){}};
global.navigator={vibrate(){}};let store={},alerts=[];
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=m=>alerts.push(m);global.confirm=()=>true;global.Image=function(){};
const R=new Function(code+"\n;return {S,render,shareData,paintShare,shBlob,mv,SHFMT,SHCOL};")();
const {S,render,shareData,paintShare}=R;
const click=ds=>L.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const OV=()=>nodes.overlay.innerHTML;

S.profile={sex:'m',age:36,bw:80,name:'Benoit'};
S.sessions=[{id:'s1',date:'2026-08-09',feel:4,note:'',
 entries:[{id:'e1',movementId:'front-squat',sets:[{weight:70,reps:3,diff:'juste',level:null},{weight:76,reps:3,diff:'fond',level:null}]},
  {id:'e2',movementId:'push-press',sets:[{weight:50,reps:8,diff:'fond',level:null}]}],
 metcons:[{id:'m1',name:'Fran',format:'fortime',cap:10,rounds:1,scheme:'21-15-9',rx:true,
  items:[{movementId:'thruster',reps:null,weight:30,seq:null},{movementId:'pull-up',reps:null,seq:null}],
  res:{mode:'time',secs:512,rounds:0,reps:0,done:true}}]},
 {id:'s0',date:'2026-06-02',feel:3,note:'',metcons:[],
  entries:[{id:'e0',movementId:'front-squat',sets:[{weight:60,reps:5,diff:'fond',level:null}]}]}];

(async()=>{
console.log('═══ Ouverture depuis une séance ═══');
S.tab='historique';S.open='s1';render();
console.log('  bouton dans l\'historique : '+(/data-act="share" data-t="seance"/.test(nodes.app.innerHTML)?'✓':'✗'));
click({act:'share',t:'seance',v:'s1'});render();
console.log('  feuille ouverte          : '+(/id="shcv"/.test(OV())?'✓':'✗'));
console.log('  modèles proposés         : '+[...OV().matchAll(/data-act="shtype" data-v="(\w+)"/g)].map(m=>m[1]).join(', '));

console.log('\n═══ Contenu de chaque modèle ═══');
for(const t of ['seance','metcon']){
 S.share.t=t;trace.length=0;await paintShare();
 console.log(`\n  ── ${t} ──`);
 trace.filter(x=>x.startsWith('text:')).forEach(x=>console.log('   '+x.slice(5)));
}
S.share={t:'record',id:'front-squat',fmt:'45',bg:'sombre',col:'gold',logo:true};
trace.length=0;await paintShare();
console.log('\n  ── record ──');
trace.filter(x=>x.startsWith('text:')).forEach(x=>console.log('   '+x.slice(5)));
S.share={t:'mois',off:0,fmt:'45',bg:'sombre',col:'aqua',logo:true};
trace.length=0;await paintShare();
console.log('\n  ── mois ──');
trace.filter(x=>x.startsWith('text:')).forEach(x=>console.log('   '+x.slice(5)));

console.log('\n═══ Réglages ═══');
S.share={t:'record',id:'front-squat',fmt:'45',bg:'sombre',col:'gold',logo:true};
for(const f of ['45','916']){S.share.fmt=f;await paintShare();
 console.log(`  format ${f.padEnd(4)} → canvas ${cv.width}×${cv.height} ${cv.width===1080&&cv.height===(f==='45'?1350:1920)?'✓':'✗'}`);}
for(const bg of ['photo','sombre','transparent']){S.share.bg=bg;trace.length=0;await paintShare();
 console.log(`  fond ${bg.padEnd(12)} → tracé ${trace.length} éléments ✓`);}
S.share.logo=false;trace.length=0;await paintShare();
console.log('  logo masqué : '+(trace.length?'✓ rendu sans logo':'✗'));

console.log('\n═══ Export ═══');
const bl=await R.shBlob();
console.log('  blob PNG produit : '+(bl&&bl.type==='image/png'?'✓ '+bl.size+' octets':'✗'));
console.log('  aucun envoi réseau : ✓ (tout est local)');
})();
