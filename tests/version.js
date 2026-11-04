/* La version de l'app (APP_VERSION dans index.html) doit être identique au nom du cache
   du service worker : sinon les téléphones gardent l'ancienne version, ou la copie
   automatique des données avant mise à jour ne se déclenche pas. */
const path=require('path'),fs=require('fs');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const sw=fs.readFileSync(path.join(__dirname,'..','sw.js'),'utf8');
let ko=0;const T=(n,c)=>{if(!c)ko++;console.log(`  ${c?'✓':'✗'} ${n}`)};
console.log('═══ Version et cache ═══\n');
const av=(html.match(/const APP_VERSION="([^"]+)"/)||[])[1];
const cv=(sw.match(/const CACHE = "([^"]+)"/)||[])[1];
T('APP_VERSION trouvée ('+av+')',!!av);
T('cache du service worker trouvé ('+cv+')',!!cv);
T('même version dans index.html et sw.js',av&&av===cv);
const shell=(sw.match(/const SHELL = (\[[^\]]+\])/)||[])[1]||'';
T('planif.js est mis en cache',shell.includes('./planif.js'));
T('index.html charge planif.js après le script principal',/<\/script>\s*<script src="planif.js"><\/script>/.test(html));
T('planif.js existe',fs.existsSync(path.join(__dirname,'..','planif.js')));
console.log(`\n  ${ko?'✗ '+ko+' problème(s)':'✓ tout est conforme'}`);
process.exit(ko?1:0);
