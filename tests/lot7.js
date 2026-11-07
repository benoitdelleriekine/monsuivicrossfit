/* Lot 7 : stockage IndexedDB (migration douce), supersets du Plan, vue deux colonnes. */
const {boot}=require('./_boot.js');
let ko=0;const T=(n,c,x)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}${x!=null?'  ('+x+')':''}`)};
const clone=o=>o===undefined?undefined:JSON.parse(JSON.stringify(o));
const fakeIdb=(init,fail)=>{const m=clone(init)||{};return{m,get:k=>fail?Promise.reject(new Error('x')):Promise.resolve(clone(m[k])),put:(k,v)=>fail?Promise.reject(new Error('x')):(m[k]=clone(v),Promise.resolve())}};
const ses=(n,d)=>Array.from({length:n},(_,i)=>({id:'s'+i,date:d||'2026-10-0'+(i+1),feel:3,note:'',updatedAt:1,metcons:[],entries:[]}));
const st=(n,at)=>JSON.stringify({sessions:ses(n),profile:{sex:'m',age:36,bw:81,name:'B'},updatedAt:at,planif:{programs:[],deleted:[]}});
(async()=>{
console.log('\n═══ IndexedDB : migration douce ═══\n');
{const store={'cf-progres':st(2,100),'cf-install-hide':'5','planif-ui':'{}'},keys0=Object.keys(store).sort().join();
 const idb=fakeIdb();const R=boot(store,{idb});const r=await R.idbReady;
 T('premier lancement : copie IndexedDB créée à partir de localStorage',r==='ls'&&idb.m.state&&JSON.parse(idb.m.state.v).sessions.length===2&&idb.m.state.at===100);
 T('localStorage gardé tel quel, aucune clé supprimée',Object.keys(store).filter(k=>keys0.split(',').includes(k)).length===keys0.split(',').length&&store['cf-progres']===st(2,100));
 R.S.sessions.push(ses(1,'2026-10-20')[0]);R.save();await R.idbFlush();
 const a=JSON.parse(store['cf-progres']),b=JSON.parse(idb.m.state.v);
 T('chaque enregistrement écrit les deux copies, identiques',a.sessions.length===3&&b.sessions.length===3&&idb.m.state.at===R.S.updatedAt&&store['cf-progres']===idb.m.state.v);
 // retour arrière : une version sans IndexedDB relit localStorage
 const old=boot(clone(store),{});await old.idbReady;
 T('retour arrière : une version sans IndexedDB retrouve tout dans localStorage',old.S.sessions.length===3);}
{const store={'cf-progres':st(1,100)},idb=fakeIdb({state:{v:st(4,200),at:200,ver:'msc-v77'}});
 const R=boot(store,{idb});const r=await R.idbReady;
 T('copie IndexedDB plus récente : elle est reprise',r==='idb'&&R.S.sessions.length===4&&R.S.updatedAt===200);
 T('… et recopiée dans localStorage',JSON.parse(store['cf-progres']).sessions.length===4);}
{const store={'cf-progres':st(5,300)},idb=fakeIdb({state:{v:st(2,200),at:200}});
 const R=boot(store,{idb});await R.idbReady;
 T('localStorage plus récent : il est gardé et la copie IndexedDB mise à jour',R.S.sessions.length===5&&idb.m.state.at===300);}
{const store={},idb=fakeIdb({state:{v:st(6,400),at:400}});
 const R=boot(store,{idb});await R.idbReady;
 T('localStorage vidé par le système : tout revient depuis IndexedDB',R.S.sessions.length===6&&R.S.profile&&R.S.profile.bw===81);
 T('… sans rester sur l\'écran de création de profil',R.S.tab!=='profil');}
{const store={'cf-progres':st(2,100)},idb=fakeIdb();let alerts=0;
 const R=boot(store,{idb,lsFull:true});global.alert=()=>alerts++;await R.idbReady;
 R.S.sessions.push(ses(1,'2026-10-21')[0]);R.save();await R.idbFlush();
 T('localStorage plein : la séance est gardée dans IndexedDB, sans alerte',JSON.parse(idb.m.state.v).sessions.length===3&&alerts===0&&R.storeInfo().lsFail===true);
 T('… localStorage garde sa dernière version valide',JSON.parse(store['cf-progres']).sessions.length===2);
 R.snapshotOnUpdate&&0;}
{const store={'cf-progres':st(2,100)},idb=fakeIdb(null,true);let alerts=0;
 const R=boot(store,{idb});global.alert=()=>alerts++;const r=await R.idbReady;
 R.S.sessions.push(ses(1,'2026-10-22')[0]);R.save();await R.idbFlush();
 T('IndexedDB indisponible : l\'app continue sur localStorage, sans alerte',r==='err'&&R.storeInfo().idb==='err'&&JSON.parse(store['cf-progres']).sessions.length===3&&alerts===0);}
{const store={'cf-progres':st(2,100)},idb=fakeIdb(null,true);let alerts=0;
 const R=boot(store,{idb,lsFull:true});global.alert=()=>alerts++;await R.idbReady;
 R.save();await R.idbFlush();
 T('les deux pleins ou bloqués : alerte comme avant',alerts>=1);}
{const store={'cf-progres':st(2,100),'cf-version':'msc-v70'},idb=fakeIdb();
 const R=boot(store,{idb,lsFull:true});await R.idbReady;
 T('copie avant mise à jour gardée dans IndexedDB même si localStorage est plein',Array.isArray(idb.m.backups)&&idb.m.backups.length===1&&R.backups().length===1);}
{const store={'cf-progres':st(2,100)},idb=fakeIdb();const R=boot(store,{idb});await R.idbReady;
 const t0=Date.now();for(let i=0;i<30;i++)R.save();await R.idbFlush();
 T('30 enregistrements rapprochés : la dernière version gagne',idb.m.state.at===R.S.updatedAt,Date.now()-t0+' ms');}

console.log('\n═══ Supersets A1 / A2 dans le Plan ═══\n');
{const BASE=require('./_programme.json');const R=boot({});const progs=clone(BASE),mu=progs.find(p=>p.kind==='muscu');
 const sa=mu.sessions.find(s=>/samedi/.test(s.name)),ix=n=>sa.exercises.findIndex(e=>e.name===n);
 const iBs=ix('Développé couché'),iRow=ix('Rowing poitrine appuyée (haltères)'),iMil=ix('Développé militaire haltères');
 sa.exercises[iBs].ss=1;sa.exercises[iRow].ss=1;  // DC → rowing → militaire : un trio A
 const iCr=ix('Crunch décliné');sa.exercises[iCr].ss=1;  // crunch → hyperextension : B
 R.S.planif={programs:progs,deleted:[]};R.S.profile={sex:'m',age:36,bw:81,name:'B'};
 const E=R.PLAN.engine,g=E.gen(mu,sa,2),by=n=>g.items.find(it=>it.name===n);
 T('trio : Développé couché A1, Rowing A2, Développé militaire A3',by('Développé couché').grp==='A'&&by('Développé couché').gi===1&&by('Rowing poitrine appuyée (haltères)').gi===2&&by('Développé militaire haltères').gi===3&&by('Développé militaire haltères').gn===3);
 T('deuxième groupe : B1 Crunch, B2 Hyperextension',by('Crunch décliné').grp==='B'&&by('Hyperextension lombaire').gi===2);
 T('pas de repos dans le groupe, repos après le dernier',by('Développé couché').chain===true&&by('Rowing poitrine appuyée (haltères)').chain===true&&by('Développé militaire haltères').chain===false);
 T('exercices hors groupe inchangés',!by('Back squat').grp&&!by('Leg curl allongé unilatéral').grp);
 // réordonné : le groupe suit l'ordre affiché
 const ids=g.items.map(it=>it.id),k1=ids.indexOf(by('Rowing poitrine appuyée (haltères)').id),k0=ids.indexOf(by('Développé couché').id);
 const ord=ids.slice();ord.splice(k1,1);ord.push(by('Rowing poitrine appuyée (haltères)').id);mu.orders={['2|'+sa.id]:ord};
 const g2=E.gen(mu,sa,2),b2=n=>g2.items.find(it=>it.name===n);
 T('séance réordonnée : le groupe se recalcule sur l\'ordre affiché',b2('Développé couché').grp==='A'&&b2('Développé militaire haltères').gi===2&&b2('Rowing poitrine appuyée (haltères)').grp===undefined);
 delete mu.orders;
 // fusion (synchro) : le champ suit la version la plus récente du programme
 const older=clone(mu);older.updatedAt=1;older.sessions.find(s=>s.id===sa.id).exercises.forEach(e=>delete e.ss);mu.updatedAt=5;
 const m=R.mergePlanif({programs:[older],deleted:[]},{programs:[clone(mu)],deleted:[]}).programs.find(p=>p.id===mu.id);
 T('synchro : le superset ajouté sur un appareil est gardé à la fusion',m.sessions.find(s=>s.id===sa.id).exercises[iBs].ss===1);
 const m2=R.mergePlanif({programs:[clone(mu)],deleted:[]},{programs:[older],deleted:[]}).programs.find(p=>p.id===mu.id);
 T('… dans les deux sens',m2.sessions.find(s=>s.id===sa.id).exercises[iBs].ss===1);
 // ancien programme sans le champ : rien ne change
 const g0=E.gen(BASE.find(p=>p.kind==='muscu'),clone(BASE.find(p=>p.kind==='muscu')).sessions.find(s=>s.id===sa.id),2);
 T('programme sans superset : aucun groupe',g0.items.every(it=>!it.grp));
 // déroulé en séance
 const A=g.items.map((it,i)=>i),iA1=g.items.indexOf(by('Développé couché')),iA2=iA1+1,iA3=iA1+2;
 const x={g,log:{ex:{}}};const set=(i,n)=>{x.log.ex[g.items[i].id]={sets:Array.from({length:n},()=>({kg:40,reps:8}))}};
 set(iA1,1);let st=E.ssStep(x,iA1);T('après une série de A1 : A2, sans repos',st&&st.j===iA2&&st.rest===false);
 set(iA2,1);st=E.ssStep(x,iA2);T('après A2 : A3, sans repos',st&&st.j===iA3&&!st.rest);
 set(iA3,1);st=E.ssStep(x,iA3);T('après A3 : retour à A1, avec le repos',st&&st.j===iA1&&st.rest===true);
 const n2=+g.items[iA2].sets;set(iA2,n2);set(iA1,1);st=E.ssStep(x,iA1);T('A2 terminé : A1 enchaîne sur A3',st&&st.j===iA3&&!st.rest);
 set(iA1,+g.items[iA1].sets);set(iA2,n2);set(iA3,+g.items[iA3].sets);T('groupe terminé : on sort du superset',E.ssStep(x,iA3)===null);
 x.log.ex[g.items[iA2].id]={skipped:true};set(iA1,1);set(iA3,1);st=E.ssStep(x,iA1);T('exercice du groupe « pas fait » : sauté',st&&st.j===iA3);}

console.log('\n═══ Ordinateur et transitions ═══\n');
{const fs=require('fs'),path=require('path'),app=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
 T('deux colonnes seulement à partir de 1 000 px',/@media\(min-width:1000px\)\{[^@]*\.split\{display:grid/.test(app)&&/matchMedia\("\(min-width:1000px\)"\)/.test(app));
 T('Suivi, Mes mouvements et fiche en deux colonnes',/if\(W2\)h=splitWrap\(/.test(app)&&/vFiche\(S\.fiche,true\)/.test(app));
 T('transitions courtes : 200 ms pour l\'écran, 150 ms pour le détail',/#app\.v-in\{animation:fadein \.2s/.test(app)&&/\.split-r\.d-in\{animation:fadein \.15s/.test(app));
 T('fondu seul, sans transform (les éléments fixes restent accrochés)',/@keyframes fadein\{from\{opacity:0\}to\{opacity:1\}\}/.test(app));
 T('une seule animation de célébration, sur la première étape franchie',/class="ms-card\$\{i===0\?" ms-pop":""\}/.test(app)&&/\.ms-pop\{animation:mspop \.32s/.test(app));
 T('coupées si « réduire les animations »',/prefers-reduced-motion:reduce\)\{\*\{animation:none!important;transition:none!important\}\}/.test(app)&&app.indexOf('@keyframes fadein')<app.indexOf('prefers-reduced-motion:reduce){*{animation:none'));
 // téléphone : rendu de Suivi inchangé (pas de colonne)
 const R=boot({'cf-progres':st(3,100)},{});R.S.tab='historique';R.render();const h=R.doc.getElementById('app').innerHTML;
 T('téléphone : Suivi sur une colonne, comme avant',!/class="split"/.test(h)&&/data-act="open"/.test(h));
 R.S.open='s1';R.render();T('téléphone : la séance s\'ouvre dans la liste',/data-act="edit" data-id="s1"/.test(R.doc.getElementById('app').innerHTML));}
process.exitCode=ko?1:0;console.log(ko?`\n${ko} échec(s)`:'\nAucune erreur.');
})();
