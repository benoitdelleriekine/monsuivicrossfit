const path=require('path');const __DIR__=__dirname;
const fs=require('fs');
const code=fs.readFileSync(path.join(__DIR__,'..','index.html'),'utf8')
 .match(/<script>[\s\S]*?<\/script>\s*<div id="app">[\s\S]*?<script>([\s\S]*?)<\/script>/)[1];
const mk=()=>({innerHTML:'',focus(){},setSelectionRange(){},value:'',dataset:{},closest:()=>null,style:{},files:[],click(){}});
const nodes={app:mk(),tabs:mk(),overlay:mk()};
const root={a:{},setAttribute(k,v){this.a[k]=v},getAttribute(k){return this.a[k]}};
let listeners={};
global.document={addEventListener:(t,f)=>listeners[t]=f,getElementById:i=>nodes[i]||mk(),activeElement:null,
 createElement:mk,documentElement:root,querySelector:()=>({setAttribute(){}})};
global.window={addEventListener(){},dispatchEvent(){},matchMedia:()=>({matches:false,addEventListener(){}})};
global.navigator={};let store={},alerts=[];
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]};
global.alert=m=>alerts.push(m);global.confirm=()=>true;
const calls=[];
global.window.CLOUD={enabled:true,user:null,
 signInPw:async(m,p)=>{calls.push(['in',m,p]);if(p!=='bonmotdepasse')throw new Error('Invalid login credentials')},
 signUp:async(m,p)=>{calls.push(['up',m,p]);if(m==='pris@x.fr')throw new Error('User already registered');
   if(m==='confirm@x.fr')throw new Error('CONFIRMATION_REQUISE')},
 signOut(){},pull:async()=>null,push:async()=>{},wipe:async()=>{}};
const {S,render}=new Function(code+"\n;return {S,render};")();
const click=ds=>listeners.click({target:{closest:sel=>sel==='[data-act]'?{dataset:ds}:null}});
const input=(id,v)=>listeners.input({target:{id,value:v,dataset:{},closest:()=>null}});
const tick=()=>new Promise(r=>setTimeout(r,0));
const H=()=>nodes.app.innerHTML;

(async()=>{
 S.cloud.enabled=true;S.tab='profil';S.profile={sex:'m',age:36,bw:80,name:'B'};render();
 console.log('  1. écran de connexion       : '+(/Me connecter/.test(H())&&/id="pw"/.test(H())?'✓ mail + mot de passe':'✗'));
 console.log('  2. aucun envoi de mail      : '+(!/code|lien/i.test(H())?'✓':'✗'));
 click({act:'toggsign'});render();
 console.log('  3. bascule création         : '+(/Créer mon compte/.test(H())?'✓':'✗'));
 click({act:'toggsign'});render();

 alerts.length=0;input('mail','pasunmail');input('pw','azerty');click({act:'signinpw'});
 console.log('  4. mail invalide bloqué     : '+(alerts.length?'✓':'✗'));
 alerts.length=0;input('mail','b@test.fr');input('pw','123');click({act:'signinpw'});
 console.log('  5. mot de passe court bloqué: '+(alerts.some(a=>/6 caractères/.test(a))?'✓':'✗'));

 alerts.length=0;input('pw','mauvais');click({act:'signinpw'});await tick();
 console.log('  6. mauvais mot de passe     : '+(alerts.some(a=>/incorrect/.test(a))?'message clair ✓':'✗ '+alerts));
 alerts.length=0;input('pw','bonmotdepasse');click({act:'signinpw'});await tick();
 console.log('  7. connexion réussie        : '+(calls.some(c=>c[0]==='in'&&c[2]==='bonmotdepasse')?'✓':'✗')+
   '  · mot de passe effacé de l\'état : '+(S.pw===''?'✓':'✗'));

 S.cloud.signup=true;
 alerts.length=0;input('mail','pris@x.fr');input('pw','azerty12');click({act:'signup'});await tick();
 console.log('  8. compte déjà existant     : '+(alerts.some(a=>/existe déjà/.test(a))?'✓':'✗'));
 alerts.length=0;input('mail','confirm@x.fr');input('pw','azerty12');click({act:'signup'});await tick();
 console.log('  9. confirmation encore active: '+(alerts.some(a=>/Sign In \/ Providers/.test(a))?'consigne précise ✓':'✗'));
 alerts.length=0;input('mail','neuf@x.fr');input('pw','azerty12');click({act:'signup'});await tick();
 console.log(' 10. création réussie         : '+(calls.some(c=>c[0]==='up'&&c[1]==='neuf@x.fr')&&!alerts.length?'✓':'✗'));
})();
