/* Module « Plan » de Mon Suivi CrossFit — planification muscu, course et activités.
   Fichier généré à partir du planificateur ; les données vivent dans S.planif
   (sauvegarde locale + synchronisation Supabase de l'app). */
'use strict';
(function () {
  var PLCSS = "\n\n:host{display:block;color:var(--tx);font:14px/1.45 Barlow,system-ui,-apple-system,sans-serif;--bg:var(--cloud);--s1:var(--card);--s2:var(--sunk);--s3:var(--track);--bd:var(--line);--bd2:var(--seg0);--tx:var(--ink);--t2:var(--ink);--mu:var(--mute);--warn:var(--melon);--ok:var(--orchid);--bc:'Barlow Condensed',Barlow,system-ui,sans-serif}\n*{box-sizing:border-box}\nbutton,input,select,textarea{font:inherit;color:inherit}\nbutton{cursor:pointer;-webkit-tap-highlight-color:transparent}\nbutton:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--tx);outline-offset:2px}\n.wrap{padding:0 16px 24px;display:flex;flex-direction:column;gap:14px}\n\nh1,h2,h3,.bc{font-family:var(--bc);font-weight:700;letter-spacing:.01em;margin:0;line-height:1.05}\nh1{font-size:30px}@media(min-width:860px){h1{font-size:40px}}\nh2{font-size:24px}h3{font-size:20px}\np{margin:0}\n.mu{color:var(--mu)}.t2{color:var(--t2)}.small{font-size:12px}\n.eyebrow{font-family:var(--bc);font-weight:600;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--mu)}\n.row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.between{justify-content:space-between}\n.col{display:flex;flex-direction:column;gap:8px}\n.grow{flex:1 1 auto;min-width:0}\n.card{background:var(--s1);border:1px solid var(--bd);border-radius:16px;padding:14px}\n@media(min-width:860px){.card{padding:16px}}\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 14px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);color:var(--tx);font-weight:600;font-size:14px;white-space:nowrap}\n.btn.primary{background:var(--tx);color:var(--bg);border-color:var(--tx)}\n.btn.ghost{background:transparent}\n.btn.danger{border-color:color-mix(in srgb,var(--pl-rd) 60%,transparent);color:var(--pl-rd);background:transparent}\n.b-ok{border-color:color-mix(in srgb,var(--pl-te) 65%,transparent);background:color-mix(in srgb,var(--pl-te) 14%,transparent);color:var(--pl-te)}\n.b-log{border-color:color-mix(in srgb,var(--pl-bl) 65%,transparent);background:color-mix(in srgb,var(--pl-bl) 14%,transparent);color:var(--pl-bl)}\n.b-skip{border-color:color-mix(in srgb,var(--pl-rd) 60%,transparent);background:color-mix(in srgb,var(--pl-rd) 10%,transparent);color:var(--pl-rd)}\n.b-edit{border-color:color-mix(in srgb,var(--pl-or) 65%,transparent);background:color-mix(in srgb,var(--pl-or) 12%,transparent);color:var(--pl-or)}\n.b-order{border-color:color-mix(in srgb,var(--pl-vi) 65%,transparent);background:color-mix(in srgb,var(--pl-vi) 14%,transparent);color:var(--pl-vi)}\n.btn.sm{min-height:44px;padding:0 12px;font-size:13px;border-radius:10px}\n.btn.icon{width:44px;padding:0}\n.btn[disabled]{opacity:.35;cursor:default}\n.chip{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 12px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--t2);font-size:13px;font-weight:500;flex:none}\n.chip.on{color:var(--tx)}\n.dot{display:inline-block;width:8px;height:8px;border-radius:50%;flex:none}\n.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:3px 8px;border-radius:999px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.scrollx{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}\n.scrollx::-webkit-scrollbar{display:none}\n.tabs{display:flex;gap:4px;background:var(--s1);border:1px solid var(--bd);border-radius:14px;padding:4px}\n.tab{min-height:44px;padding:0 16px;border-radius:10px;border:0;background:transparent;color:var(--t2);font-weight:600}\n.tab.on{background:var(--tx);color:var(--bg)}\n.bnav{position:fixed;left:0;right:0;bottom:0;z-index:20;background:#12161A;border-top:1px solid var(--bd);display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;padding:6px 8px calc(6px + env(safe-area-inset-bottom))}\n.bnav button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:54px;border:0;border-radius:12px;background:transparent;color:var(--mu);font-size:12px;font-weight:600}\n.bnav button.on{background:var(--s3);color:#fff}\n.status{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--mu)}\n.kpis{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}\n.kpi{background:var(--s1);border:1px solid var(--bd);border-radius:14px;padding:12px 14px;display:flex;flex-direction:column;gap:2px;min-width:0}\n.kpi .l{font-size:12px;color:var(--mu);text-transform:uppercase;letter-spacing:.08em}\n.kpi .v{font-family:var(--bc);font-weight:700;font-size:26px;line-height:1.05}\n.alert{display:flex;gap:10px;align-items:flex-start;font-size:13px;line-height:1.45;padding:10px 12px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);color:var(--t2)}\n.alert.warn{border-color:rgba(255,179,87,.5);background:rgba(255,179,87,.10);color:var(--tx)}\n.wk{display:flex;flex-wrap:wrap;gap:14px;align-items:flex-start}\n.wk-main{flex:999 1 600px;min-width:0;display:flex;flex-direction:column;gap:8px}\n.wk-side{flex:1 1 340px;min-width:0}\n.wgrid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}\n.dcol{display:flex;flex-direction:column;gap:6px;min-width:0;padding:6px;border-radius:12px;border:1px solid transparent}\n.dcol.today{background:#151A1F;border-color:var(--bd2)}\n.dhead{display:flex;justify-content:space-between;align-items:center;padding:2px 2px 4px}\n.dname{font-family:var(--bc);font-weight:600;font-size:16px;letter-spacing:.06em;text-transform:uppercase;color:var(--t2)}\n.dnum{font-size:13px;color:var(--mu)}\n.dnum.today{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;border-radius:13px;background:var(--tx);color:var(--bg);font-weight:700}\n.sess{display:flex;flex-direction:column;align-items:flex-start;gap:5px;width:100%;text-align:left;padding:10px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);color:var(--tx);min-width:0}\n.sess.on{background:var(--s3)}\n.sess .t{font-weight:600;font-size:13px;line-height:1.3;overflow-wrap:anywhere}\n.sess .m{font-size:12px;line-height:1.35;color:var(--mu);overflow-wrap:anywhere}\n.done-tag{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;color:var(--ok)}\n.rest{display:flex;align-items:center;justify-content:center;min-height:64px;border:1px dashed var(--bd);border-radius:12px;color:#8A949E;font-size:12px}\n.strip{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}\n.strip button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:64px;padding:4px 0;border-radius:12px;border:1px solid var(--bd);background:var(--s1);color:var(--tx)}\n.strip button.today{border-color:var(--bd2)}\n.strip button.on{background:var(--tx);color:var(--bg);border-color:var(--tx)}\n.strip .n{font-family:var(--bc);font-weight:700;font-size:19px;line-height:1}\n.strip .l{font-size:12px;font-weight:600;text-transform:uppercase}\n.dots{display:flex;gap:3px;min-height:6px;flex-wrap:wrap;justify-content:center}\n.dots .dot{width:6px;height:6px}\n.items .it{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 12px;padding:9px 0;border-top:1px solid var(--bd)}\n.it .n{font-weight:500}\n.it .s{font-family:var(--bc);font-weight:600;font-size:19px;line-height:1.1;text-align:right}\n.it .no{font-size:12px;color:var(--mu)}\n.it .lo{font-size:14px;font-weight:600;text-align:right}\n.it .ed{grid-column:1/-1;display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:6px}\n.it .ed input{flex:1 1 110px;min-width:0}\n.linkbtn{border:0;background:transparent;color:var(--mu);font-size:12px;padding:6px 0;text-decoration:underline;text-underline-offset:2px;min-height:32px}\n.rpe{display:grid;grid-template-columns:repeat(10,minmax(0,1fr));gap:2px;width:100%}\n.rpe-ends{display:flex;justify-content:space-between;font-size:12px}\n.rpe button{position:relative;width:100%;height:48px;padding:0;border:0;border-radius:3px;color:#0F1215;font-family:var(--bc);font-weight:700;font-size:17px;display:flex;align-items:center;justify-content:center}\n.rpe button:first-child{border-radius:10px 3px 3px 10px}.rpe button:last-child{border-radius:3px 10px 10px 3px}\n.rpe button span{color:var(--tx)}\n.rpe button[style*=\"background:#\"] span{color:#FFFFFF;text-shadow:0 1px 2px rgba(0,0,0,.5)}\n.rpe button.on{outline:3px solid var(--tx);outline-offset:1px;z-index:1;transform:scaleY(1.12)}\n.rpe button.on span{color:#0F1215;text-shadow:none}\n.rpe button.plan::after{content:'';position:absolute;left:50%;bottom:-7px;transform:translateX(-50%);border:5px solid transparent;border-bottom-color:var(--tx);border-top:0}\n.advice{font-size:13px;line-height:1.45;padding:10px 12px;border-radius:10px;border:1px solid color-mix(in srgb,var(--ok) 50%,transparent);background:color-mix(in srgb,var(--ok) 8%,transparent)}\n.advice.warn{border-color:var(--warn);background:rgba(255,179,87,.10)}\ninput.in,select.in,textarea.in{width:100%;min-height:44px;padding:0 12px;border-radius:10px;border:1px solid var(--bd);background:var(--bg);color:var(--tx);font-size:16px}\ntextarea.in{padding:10px 12px;min-height:72px;resize:vertical}\nselect.in{appearance:none;background-image:linear-gradient(45deg,transparent 50%,#9AA4AE 50%),linear-gradient(135deg,#9AA4AE 50%,transparent 50%);background-position:calc(100% - 18px) 19px,calc(100% - 13px) 19px;background-size:5px 5px;background-repeat:no-repeat;padding-right:32px}\n.field{display:flex;flex-direction:column;gap:4px;min-width:0}\n.field>span{font-size:12px;color:var(--mu)}\n.fgrid{display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}\n.fgrid.w2{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}\n.cal{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}\n.cal .h{text-align:center;font-family:var(--bc);font-weight:600;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--mu)}\n.cal button{position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;min-height:58px;min-width:0;padding:12px 2px 6px;border-radius:10px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);text-align:left}\n@media(min-width:860px){.cal button{align-items:stretch;min-height:100px;padding:14px 6px 6px}}\n.cal button.out{opacity:.45}\n.cal button.today{border-color:#7D8892}\n.cal button.on{border-color:var(--tx);background:#2A323C}\n.cal .num{font-family:var(--bc);font-weight:700;font-size:16px;line-height:1;color:var(--t2)}\n.cal .chipm{display:block;font-size:12px;font-weight:600;line-height:1.25;padding:2px 6px;border-radius:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.cal .stripe{position:absolute;left:5px;right:5px;top:5px;height:4px;border-radius:2px}\n.plist{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}\n.blocks{display:flex;gap:3px;height:28px;border-radius:8px;overflow:hidden}\n.blocks span{display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:#14181C;min-width:0;overflow:hidden;white-space:nowrap;padding:0 4px}\n.bars{display:flex;align-items:flex-end;gap:4px;height:210px}\n.bars button{flex:1 1 0;min-width:0;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;padding:0;border:0;background:transparent;color:var(--tx)}\n.bars .lab{font-family:var(--bc);font-weight:600;font-size:12px;min-height:15px;white-space:nowrap}\n.bars .bar{display:flex;flex-direction:column-reverse;width:76%;max-width:44px;border-radius:6px 6px 3px 3px;overflow:hidden}\n.bars .wn{font-family:var(--bc);font-weight:700;font-size:12px;color:var(--mu);min-height:16px;white-space:nowrap}\n.bars .cur .wn{color:#fff}\n.bars .cur .bar{outline:2px solid var(--tx);outline-offset:2px}\n.bars .var{font-size:12px;font-weight:600;min-height:13px;color:#7D8892}\n.bars .var.hot{color:var(--warn)}\n.legend{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12px;color:var(--t2)}\n.legend span{display:inline-flex;align-items:center;gap:6px}\n.legend i{display:inline-block;width:12px;height:12px;border-radius:3px}\ntable.tb{width:100%;border-collapse:collapse;font-size:13px}\n.tb th{text-align:left;color:var(--mu);font-size:12px;text-transform:uppercase;letter-spacing:.06em;font-weight:600;padding:6px 6px}\n.tb td{padding:8px 6px;border-top:1px solid var(--bd);vertical-align:top}\n.tb tr.cur td{background:var(--s3)}\n.wcard{display:flex;flex-direction:column;gap:6px;padding:12px;border-radius:12px;border:1px solid var(--bd);background:var(--bg)}\n.wcard.cur{border-color:var(--tx)}\n.badge{display:inline-flex;align-items:center;justify-content:center;min-width:40px;height:32px;padding:0 8px;border-radius:9px;font-family:var(--bc);font-weight:700;font-size:15px;color:#14181C}\n.sheet{position:fixed;inset:0;z-index:240;background:rgba(5,7,9,.72);display:flex;justify-content:center;align-items:stretch}\n.sheet-in{width:100%;max-width:820px;background:var(--bg);display:flex;flex-direction:column;min-height:0;height:100%}\n@media(min-width:860px){.sheet{padding:24px}.sheet-in{border:1px solid var(--bd);border-radius:18px;overflow:hidden}}\n.sheet-head{display:flex;align-items:center;gap:8px;padding:calc(10px + env(safe-area-inset-top)) 12px 10px;border-bottom:1px solid var(--bd);background:var(--s1)}\n.sheet-head h2{flex:1;text-align:center;font-size:20px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.sheet-body{flex:1;overflow-y:auto;padding:14px 12px calc(30px + env(safe-area-inset-bottom));display:flex;flex-direction:column;gap:14px;-webkit-overflow-scrolling:touch}\n@media(min-width:860px){.sheet-body{padding:18px 20px 30px}}\n.sec{display:flex;flex-direction:column;gap:10px}\n.sec>h3{display:flex;align-items:center;justify-content:space-between;gap:8px}\n.sub{background:var(--s1);border:1px solid var(--bd);border-radius:14px;padding:12px;display:flex;flex-direction:column;gap:10px}\n.exr{background:var(--bg);border:1px solid var(--bd);border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:8px}\n.presets{display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}\n.preset{display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left;padding:10px 12px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);color:var(--tx);min-height:56px}\n.preset b{font-size:14px}.preset span{font-size:12px;color:var(--mu)}\n.preset.on{border-color:var(--tx);background:var(--s3)}\n.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(104px + env(safe-area-inset-bottom));z-index:260;background:var(--tx);color:var(--bg);font-weight:600;padding:10px 16px;border-radius:12px;font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.4);max-width:calc(100% - 32px)}\n@media(min-width:860px){.toast{bottom:28px}}\n.empty{display:flex;flex-direction:column;gap:12px;align-items:flex-start}\n.kindbtn{display:flex;gap:12px;align-items:center;text-align:left;width:100%;padding:14px;border-radius:14px;border:1px solid var(--bd);background:var(--s1);color:var(--tx);min-height:64px}\n.kindbtn b{display:block;font-size:15px}.kindbtn span{font-size:12px;color:var(--mu)}\n.swatch{width:36px;height:36px;border-radius:10px;border:2px solid transparent}\n.swatch.on{border-color:var(--tx)}\n.hr{height:1px;background:var(--bd);border:0;margin:2px 0}\n.restbtn{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--bd);background:var(--s2);color:var(--t2);border-radius:999px;padding:4px 12px;font-size:13px;font-weight:600;min-height:44px;margin-right:4px}\n.restbtn svg{width:14px;height:14px}\n.xadd{width:100%;margin-top:10px;border-style:dashed;color:var(--t2)}\n.xbar{display:flex;flex-direction:column;gap:8px;padding:10px 12px;border:1px dashed var(--bd);border-radius:12px;background:var(--s2)}\n.xchips{display:flex;flex-wrap:wrap;gap:6px}\n.xchip{min-height:36px;font-size:13px}.xchip svg{width:14px;height:14px}\n.xrm{border:0;background:transparent;color:var(--mu);font-size:18px;line-height:1;padding:0 0 0 4px;min-height:28px;cursor:pointer}\n.pains{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px}\n.pains button{min-height:44px;padding:0;border-radius:8px;border:1px solid transparent;font-weight:700;font-size:13px;color:var(--tx);background:hsl(var(--h) 45% 50% / .16)}\n.pains button.on{background:hsl(var(--h) 60% 50%);color:#0F1215;border-color:var(--tx)}\n.sumcard{display:flex;flex-direction:column;gap:8px;padding:12px 14px;border-radius:14px;border:1px solid color-mix(in srgb,var(--ok) 55%,transparent);background:color-mix(in srgb,var(--ok) 8%,transparent)}\n.sumgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}\n.sumgrid div{display:flex;flex-direction:column;gap:2px}\n.sumgrid .l{font-size:12px;color:var(--mu);text-transform:uppercase;letter-spacing:.06em}\n.sumgrid .v{font-family:var(--bc);font-weight:700;font-size:22px;line-height:1.05}\n.wkhead{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:10px;width:100%}\n.exmeta{display:flex;align-items:center;gap:6px 10px;margin-top:10px}\n.exmeta .restbtn{flex:none;margin:0}\n.exmeta .prog{flex:1 1 0;min-width:0;font-size:12.5px;line-height:1.35;color:var(--t2)}\n.swtag{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:6px;padding:6px 10px;border-radius:10px;background:var(--s2);color:var(--t2)}\n.swp .xchips{margin:2px 0}\n.run{position:fixed;inset:0;z-index:80;background:var(--bg);display:flex;flex-direction:column;overflow:hidden}\n.runhead{display:flex;align-items:center;gap:8px;padding:calc(30px + env(safe-area-inset-top)) 12px 8px;border-bottom:1px solid var(--bd);flex:none}\n.runtt{font-size:15px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.rundots{display:flex;gap:6px;overflow-x:auto;padding:10px 12px;flex:none;scrollbar-width:none}\n.rundots::-webkit-scrollbar{display:none}\n.rundots>:first-child{margin-left:auto}.rundots>:last-child{margin-right:auto}\n.rd{flex:none;min-width:44px;height:44px;border-radius:12px;border:1px solid var(--bd);background:var(--s1);color:var(--mu);font-weight:700;font-size:15px}\n.rd.done{background:color-mix(in srgb,var(--ok) 18%,transparent);color:var(--ok);border-color:color-mix(in srgb,var(--ok) 50%,transparent)}\n.rd.part{color:var(--tx);border-color:var(--warn)}\n.rd.skip{opacity:.55}\n.rd.on{outline:2px solid var(--tx);outline-offset:1px;color:var(--tx)}\n.runrest{display:flex;align-items:center;gap:6px;margin:0 12px;padding:8px 10px 8px 14px;border-radius:16px;background:var(--s2);border:1px solid var(--bd);flex:none}\n.runrest>.col{flex:1;min-width:0}\n.runt{font-family:var(--bc);font-size:42px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}\n.runt.end{color:var(--ok)}\n.runbody{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:12px 16px calc(16px + env(safe-area-inset-bottom));display:flex;flex-direction:column;gap:14px;max-width:640px;width:100%;margin:0 auto}\n.runname{font-size:30px;line-height:1.05}\n.runsub{display:flex;flex-direction:column;gap:2px;font-size:14px}\n.runset{font-family:var(--bc);font-size:24px;font-weight:700;color:var(--ok)}\n.runlast{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border-radius:12px;background:var(--s2);font-size:15px}\n.runsets{display:flex;flex-wrap:wrap;gap:6px;align-items:center}\n.runsets .chip{color:var(--tx);min-height:36px}\n.runfields{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.runf{display:flex;flex-direction:column;gap:4px;min-width:0}\n.runst{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;gap:5px}\n.runst .btn{min-height:56px;font-size:24px;padding:0}\n.runin{min-height:56px;text-align:center;font-family:var(--bc);font-size:26px;font-weight:700;padding:0 2px;width:100%}\n.runcue summary{cursor:pointer;font-size:14px;font-weight:600;color:var(--t2);min-height:44px;display:flex;align-items:center}\n.runfoot{display:flex;flex-direction:column;gap:8px;margin-top:auto;padding-top:6px}\n.runmain{min-height:60px;font-size:18px}\n.runbtn{min-height:52px;font-size:16px}\n.cues{list-style:none;margin:8px 0 0;padding:7px 10px 7px 12px;border-left:3px solid var(--bd);background:var(--s2);border-radius:4px 10px 10px 4px}\n.cues li{position:relative;padding-left:12px;font-size:13px;line-height:1.4;color:var(--tx)}\n.cues li+li{margin-top:3px}\n.cues li:before{content:'';position:absolute;left:0;top:.62em;width:4px;height:4px;border-radius:50%;background:var(--mu)}\n.timer{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(98px + env(safe-area-inset-bottom));z-index:250;display:flex;align-items:center;gap:10px;background:#E8ECEF;color:#0F1215;border-radius:16px;padding:8px 10px 8px 16px;box-shadow:0 8px 30px rgba(0,0,0,.5);max-width:calc(100% - 24px)}\n@media(min-width:860px){.timer{bottom:24px}}\n.timer[hidden]{display:none}\n.timer .lbl{max-width:96px;line-height:1.2}\n.timer .t{font-family:var(--bc);font-weight:700;font-size:28px;min-width:72px}\n.timer .t.end{color:#B4561A}\n.timer button{white-space:nowrap;min-height:40px;border-radius:10px;border:1px solid #C9D1D8;background:#fff;color:#0F1215;font-weight:600;padding:0 10px}\n.scrollx .pill{flex:none}\n.ex{display:flex;flex-direction:column;gap:6px;padding:12px 0;border-top:1px solid var(--bd)}\n.exh{display:flex;align-items:center;gap:8px}.exh .n{flex:1;font-weight:600;font-size:15px}\n.tag{font-size:12px;font-weight:600;color:var(--warn);border:1px solid rgba(255,179,87,.5);border-radius:999px;padding:1px 7px}\n.pgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;background:var(--bg);border:1px solid var(--bd);border-radius:12px;padding:8px 4px}\n.pc{display:flex;flex-direction:column;align-items:center;gap:1px;min-width:0;text-align:center}\n.pl{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mu)}\n.pv{font-family:var(--bc);font-weight:700;font-size:22px;line-height:1.1}\n.pv small{font-family:inherit;font-size:12px;font-weight:500;color:var(--mu);display:block}\n.ex.skipped .pgrid{opacity:.4}\n.realrow.skip span{font-size:13px;font-weight:600;color:var(--pl-rd)}\n.realrow.acts{display:grid;grid-template-columns:1fr 1fr auto;gap:6px}\n.realrow.acts .btn{white-space:normal;padding:0 8px;line-height:1.2;text-align:center}\n@media(max-width:520px){.realrow.acts .b-ok svg{display:none}}\n.realrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;justify-content:space-between}\n.realrow.done span{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--ok)}\n.realrow.done b{color:var(--tx)}\n.sgrid{display:grid;grid-template-columns:44px repeat(3,minmax(0,1fr)) 40px;gap:6px;align-items:center}\n.snum{min-height:44px;border-radius:10px;border:1px solid var(--bd);background:transparent;color:var(--t2);font-weight:700;font-size:13px;padding:0}\n.snum.on{background:var(--tx);color:var(--bg);border-color:var(--tx)}\n.sdq{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.sdq .btn{min-height:44px;padding:0 4px}\n.sgrid .pl{text-align:center}\n.snum{font-family:var(--bc);font-weight:700;font-size:15px;color:var(--mu)}\n.lg{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:6px}\n.lg input::-webkit-outer-spin-button,.lg input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}\n.lg input{-moz-appearance:textfield}\n.lgres{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;font-size:13px;margin-top:6px;padding:8px 10px;border-radius:10px;background:var(--s2);border:1px solid var(--bd)}\n.bars .barw{position:relative;display:flex;justify-content:center;align-items:flex-end;width:100%}\n.bars .mark{position:absolute;left:8%;right:8%;height:3px;border-radius:2px;background:#fff;box-shadow:0 0 0 1px #0F1215}\n.card.col>.pill,.col>.pill{align-self:flex-start}\n.wgrid .sess .pill{font-size:12px;letter-spacing:.02em;padding:2px 6px}\n.wgrid .sess .m{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n\n.phead{padding:calc(30px + env(safe-area-inset-top)) 0 4px}\n.phead .eyebrow{font-size:10.5px;letter-spacing:.13em}\n.phead h1{font-family:var(--bc);font-weight:700;text-transform:uppercase;font-size:44px;letter-spacing:.006em;line-height:.9;margin-top:5px}\n.subnav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;background:var(--s1);border:1px solid var(--bd);border-radius:14px;padding:4px}\n.subnav button{min-height:40px;border:0;border-radius:10px;background:transparent;color:var(--mu);font-weight:600;font-size:13px;padding:0 4px}\n.subnav button.on{background:var(--aqua);color:var(--onacc)}\n.subnav button{min-height:44px}\n.card{border-radius:20px}\n.btn{border-radius:14px}\n.btn.sm{border-radius:999px}\n.btn.primary{background:var(--aqua);color:var(--onacc);border-color:var(--aqua)}\n.strip button.on{background:var(--aqua);color:var(--onacc);border-color:var(--aqua)}\n.chip{min-height:44px}\n.phead .eyebrow{font-size:12px}\n";

  if (typeof S === 'undefined') return;
  // ---------- Utilitaires ----------
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var iso = function (d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  var parseISO = function (s) { var a = String(s || '').split('-').map(Number); return (a[0] && a[1] && a[2]) ? new Date(a[0], a[1] - 1, a[2]) : null; };
  var addDays = function (d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; };
  var mondayOf = function (d) { return addDays(d, -((d.getDay() + 6) % 7)); };
  var dayDiff = function (a, b) { return Math.round((a - b) / 86400000); };
  var today0 = function () { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); };
  var dow = function (d) { return (d.getDay() + 6) % 7; };
  var fmtN = function (x) { return String(Math.round(x * 10) / 10).replace('.', ','); };
  var kg = function (x) { return fmtN(x) + ' kg'; };
  var r25 = function (x) { return Math.round(x / 2.5) * 2.5; };
  var r05 = function (x) { return Math.round(x * 2) / 2; };
  var num = function (v, d) { var n = parseFloat(String(v == null ? '' : v).replace(',', '.')); return isFinite(n) ? n : (d === undefined ? 0 : d); };
  var uid = function () { return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var clone = function (o) { return JSON.parse(JSON.stringify(o)); };
  var rpeNum = function (s) { var p = String(s).split(/[–-]/); return p.length > 1 ? (num(p[0]) + num(p[1])) / 2 : num(p[0]); };
  // 1RM estimé : Epley sur les répétitions faites + répétitions en réserve (10 − RPE)
  var e1rm = function (kgv, reps, rpe) { kgv = num(kgv); reps = num(reps); if (!(kgv > 0 && reps > 0)) return null; var rir = rpe ? Math.max(0, 10 - num(rpe)) : 0, tot = reps + rir; if (tot <= 1) return kgv; return kgv * (1 + tot / 30); };
  var thou = function (x) { var s = String(Math.round(x)); return s.length > 3 ? s.slice(0, -3) + ' ' + s.slice(-3) : s; };
  var JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  var JOURSL = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  var MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  var MOISL = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  var dLabel = function (d) { return JOURSL[dow(d)] + ' ' + d.getDate() + ' ' + MOIS[d.getMonth()]; };
  var tint = function (c, a) { return 'color-mix(in srgb, ' + c + ' ' + Math.round(a * 100) + '%, transparent)'; };
  var PALV = { '#FF9F43': 'var(--pl-or)', '#5AA9FF': 'var(--pl-te)', '#C792EA': 'var(--pl-vi)', '#7FE0C9': 'var(--pl-te)', '#E8D36A': 'var(--pl-ye)', '#F59BC0': 'var(--pl-pk)', '#9FB4C7': 'var(--pl-gy)', '#3D7BD9': 'var(--pl-db)' };
  var ICON = {
    left: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    right: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',
    warn: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;margin-top:1px"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>',
    info: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;margin-top:1px"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    trash: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
    week: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
    month: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 10h18M3 15h18M9 10v11M15 10v11"/></svg>',
    progs: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h9M3 12h14M3 18h18"/></svg>',
    chart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 20V13M11 20V9M17 20V5M3 20h18"/></svg>',
    clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };

  // ---------- Modèles ----------
  var GOALS = {
    hyp: { label: 'Hypertrophie', sh: 'Hyp.', color: '#FFC37A', rest: '2–3 min', desc: '8–10 reps · 62,5 → 72,5 % du 1RM', week: function (k) { return { s: 4, r: [10, 9, 8, 8, 8, 8, 8, 8, 8][k] || 8, p: 62.5 + 2.5 * k, rpe: k < 2 ? '7' : (k < 3 ? '7–8' : '8') }; } },
    force: { label: 'Force', sh: 'Force', color: '#FF8A4C', rest: '3 min', desc: '5 → 3 reps · 75 → 85 % du 1RM', week: function (k) { return { s: 5, r: [5, 5, 4, 3, 3, 3, 3, 3, 3][k] || 3, p: 75 + 2.5 * k, rpe: ['7', '7–8', '8', '8–9'][k] || '9' }; } },
    max: { label: 'Force max', sh: 'Max', color: '#F2555A', rest: '3–5 min', desc: '3 → 1 reps · 85 → 92,5 % du 1RM', week: function (k) { return { s: k < 2 ? 4 : 3, r: [3, 2, 2, 1, 1, 1, 1][k] || 1, p: Math.min(95, 85 + 2.5 * k), rpe: ['8', '8–9', '9', '9'][k] || '9' }; } },
    endu: { label: 'Endurance de force', sh: 'Endu.', color: '#E8D36A', rest: '60–90 s', desc: '15 → 12 reps · 55 → 67,5 % du 1RM', week: function (k) { return { s: 3, r: k < 2 ? 15 : 12, p: k < 2 ? 55 + 2.5 * k : Math.min(67.5, 62.5 + 2.5 * (k - 2)), rpe: k < 1 ? '7' : (k < 2 ? '7–8' : '8') }; } },
    puis: { label: 'Puissance', sh: 'Puiss.', color: '#F59BC0', rest: '2–3 min', desc: '2–3 reps explosives · 60 → 70 % du 1RM', week: function (k) { return { s: k < 2 ? 6 : 5, r: k < 3 ? 3 : 2, p: Math.min(75, 60 + 2.5 * k), rpe: '5–6' }; } },
    perso: { label: 'Personnalisé', sh: 'Perso', color: '#9FB4C7', rest: 'à ta main', desc: 'Ton schéma de départ + ta progression', week: function (k, c) { return { s: c.s, r: c.r, p: c.p0 + c.inc * k, rpe: String(c.rpe) }; } }
  };
  var GOAL_ORDER = ['hyp', 'force', 'max', 'endu', 'puis', 'perso'];
  var DEF_CUSTOM = { s: 4, r: 6, p0: 70, inc: 2.5, rpe: 8 };
  var CYCLE_PRESETS = [
    { id: 'force14', label: 'Force · 14 semaines', desc: 'Hypertrophie → Force → Force max + test', blocks: [{ goal: 'hyp', weeks: 5, end: 'deload' }, { goal: 'force', weeks: 5, end: 'deload' }, { goal: 'max', weeks: 4, end: 'test' }] },
    { id: 'force6', label: 'Force · 6 semaines', desc: '5 semaines de force puis test 1RM', blocks: [{ goal: 'force', weeks: 6, end: 'test' }] },
    { id: 'hyp8', label: 'Hypertrophie · 8 semaines', desc: '2 blocs de 4 semaines avec décharge', blocks: [{ goal: 'hyp', weeks: 4, end: 'deload' }, { goal: 'hyp', weeks: 4, end: 'deload' }] },
    { id: 'endu6', label: 'Endurance de force · 6 sem.', desc: 'Séries longues, repos courts', blocks: [{ goal: 'endu', weeks: 6, end: 'deload' }] },
    { id: 'puis4', label: 'Puissance · 4 semaines', desc: 'Charges moyennes, vitesse max', blocks: [{ goal: 'puis', weeks: 4, end: 'deload' }] },
    { id: 'perso', label: 'Personnalisé', desc: 'Tu fixes séries, reps, % et progression', blocks: [{ goal: 'perso', weeks: 4, end: 'deload' }] }
  ];
  var RUN_PRESETS = [
    { id: 'reprise', label: 'Reprise course continue', desc: '1 sortie / sem, +2 min jusqu’à 40 min', weeks: 12, deloadEvery: 0, deloadPct: 25, capPct: 15, runs: [{ name: 'Course continue', day: 6, type: 'continu', startMin: 20, mode: 'min', inc: 2, maxMin: 40, rpe: 4, note: 'Allure facile, aisance respiratoire' }] },
    { id: 'marche', label: 'Marche / course', desc: 'Retour progressif, 2 séances / sem', weeks: 8, deloadEvery: 4, deloadPct: 25, capPct: 15, runs: [{ name: 'Marche-course', day: 2, type: 'intervalles', reps0: 6, repsInc: 1, maxReps: 12, effort: 2, recup: 1, warm: 5, rpe: 5, note: 'Course facile / marche active' }, { name: 'Marche-course', day: 6, type: 'intervalles', reps0: 6, repsInc: 1, maxReps: 12, effort: 2, recup: 1, warm: 5, rpe: 5, note: 'Course facile / marche active' }] },
    { id: 'base10', label: 'Base 10 km · 3 séances', desc: 'Footing, fractionné court, sortie longue', weeks: 10, deloadEvery: 4, deloadPct: 25, capPct: 10, runs: [{ name: 'Footing', day: 1, type: 'continu', startMin: 30, mode: 'pct', inc: 5, maxMin: 45, rpe: 4, note: 'Zone 2' }, { name: 'Fractionné', day: 3, type: 'intervalles', reps0: 6, repsInc: 1, maxReps: 10, effort: 2, recup: 1.5, warm: 15, rpe: 7, note: 'Allure 10 km, récup trottinée' }, { name: 'Sortie longue', day: 6, type: 'continu', startMin: 45, mode: 'pct', inc: 8, maxMin: 80, rpe: 4, note: 'Très facile' }] },
    { id: 'vide', label: 'Vide', desc: 'Je crée mes séances moi-même', weeks: 8, deloadEvery: 0, deloadPct: 25, capPct: 15, runs: [] }
  ];
  var FIXED_PRESETS = [
    { id: 'cf', label: 'CrossFit · lun + jeu', desc: '2 séances box de 60 min', name: 'CrossFit', color: '#C792EA', weeks: 14, fixed: [{ name: 'CrossFit — WOD box', day: 0, dur: 60, rpe: 7, note: 'Soir', detail: 'WOD de la box\nTractions strictes 5×2–3 RIR 1–2' }, { name: 'CrossFit — WOD box', day: 3, dur: 60, rpe: 7, note: 'Soir', detail: 'WOD de la box' }] },
    { id: 'hsr', label: 'Rééduc HSR', desc: 'Achille + coude, 3 séances', name: 'Rééduc HSR', color: '#7FE0C9', weeks: 14, fixed: [{ name: 'HSR Achille', day: 1, dur: 20, rpe: 5, note: 'Lourd et lent', detail: 'Mollets debout unilatéral 3×8\nMollets assis (soléaire) 3×8' }, { name: 'HSR coude', day: 2, dur: 15, rpe: 4, note: '15 RM', detail: 'Extension de poignet 3×15\nInclinaison radiale 3×15\nProno-supination 3×15' }, { name: 'HSR Achille + coude', day: 6, dur: 30, rpe: 5, note: '', detail: 'Mollets debout unilatéral 3×8\nMollets assis 3×8\nCoude 3 exercices 3×15' }] },
    { id: 'mob', label: 'Mobilité', desc: '2 × 20 min', name: 'Mobilité', color: '#E8D36A', weeks: 8, fixed: [{ name: 'Mobilité', day: 2, dur: 20, rpe: 3, note: '', detail: 'Hanches, chevilles, épaules' }, { name: 'Mobilité', day: 4, dur: 20, rpe: 3, note: '', detail: 'Hanches, chevilles, épaules' }] },
    { id: 'vide', label: 'Vide', desc: 'Je crée mes séances moi-même', name: '', color: '#C792EA', weeks: 8, fixed: [] }
  ];
  var KIND = {
    muscu: { label: 'Musculation', color: '#FF9F43', desc: 'Cycles et blocs : force, hypertrophie, endurance de force…' },
    course: { label: 'Course à pied', color: '#5AA9FF', desc: 'Progression de durée, fractionné, semaines allégées' },
    fixe: { label: 'Activité fixe', color: '#C792EA', desc: 'CrossFit, rééduc, mobilité : séances récurrentes' }
  };
  var COLORS = ['#FF9F43', '#5AA9FF', '#C792EA', '#7FE0C9', '#E8D36A', '#F59BC0', '#9FB4C7', '#3D7BD9'];
  var EX_MODES = [['pct', 'Principal (% du 1RM)'], ['kg', 'Charge en kg'], ['reps', 'Poids du corps'], ['libre', 'Texte libre']];

  var sampleSessions = function () {
    return [
      { id: uid(), name: 'Muscu A — Squat / Bench', day: 1, dur: 70, exercises: [
        { id: uid(), name: 'Back squat', mode: 'pct', orm: 120, offset: 0 },
        { id: uid(), name: 'Développé couché', mode: 'pct', orm: 90, offset: 0 },
        { id: uid(), name: 'Tractions strictes', mode: 'reps', sets: 5, reps: 3, incReps: 0.5, maxReps: 8, note: 'RIR 1–2' },
        { id: uid(), name: 'Rowing buste appuyé', mode: 'kg', sets: 3, reps: 10, startKg: 22, incKg: 1, note: 'Haltères, RPE 8' },
        { id: uid(), name: 'Hip thrust', mode: 'kg', sets: 3, reps: 10, startKg: 80, incKg: 2.5, note: 'RPE 8' }] },
      { id: uid(), name: 'Muscu B — Soulevé de terre / Press', day: 5, dur: 70, exercises: [
        { id: uid(), name: 'Soulevé de terre', mode: 'pct', orm: 150, offset: 0 },
        { id: uid(), name: 'Strict press', mode: 'pct', orm: 55, offset: 0 },
        { id: uid(), name: 'Squat secondaire', mode: 'pct', orm: 120, offset: -10 },
        { id: uid(), name: 'Tractions strictes', mode: 'reps', sets: 5, reps: 3, incReps: 0.5, maxReps: 8, note: 'RIR 1–2' },
        { id: uid(), name: 'Rowing poulie basse', mode: 'kg', sets: 3, reps: 10, startKg: 50, incKg: 2.5, note: 'RPE 8' }] }
    ];
  };
  var withIds = function (list) { return (list || []).map(function (x) { var y = clone(x); y.id = uid(); return y; }); };
  var newBlocks = function (bl) { return bl.map(function (b) { return { goal: b.goal, weeks: b.weeks, end: b.end, custom: clone(DEF_CUSTOM) }; }); };
  var nextMondayISO = function () { return iso(mondayOf(today0())); };
  var newProgram = function (kind) {
    var base = { id: uid(), kind: kind, name: '', start: nextMondayISO(), color: KIND[kind].color, logs: {}, overrides: {}, createdAt: Date.now() };
    if (kind === 'muscu') { base.name = 'Cycle force'; base.preset = 'force14'; base.blocks = newBlocks(CYCLE_PRESETS[0].blocks); base.sessions = []; }
    if (kind === 'course') { var rp = RUN_PRESETS[0]; base.name = rp.label; base.preset = rp.id; base.weeks = rp.weeks; base.deloadEvery = rp.deloadEvery; base.deloadPct = rp.deloadPct; base.capPct = rp.capPct; base.runs = withIds(rp.runs); }
    if (kind === 'fixe') { var fp = FIXED_PRESETS[0]; base.name = fp.name; base.preset = fp.id; base.color = fp.color; base.weeks = fp.weeks; base.fixed = withIds(fp.fixed); }
    var used = state.programs.map(function (q) { return q.color; });
    if (used.indexOf(base.color) >= 0) { var free = COLORS.filter(function (c) { return used.indexOf(c) < 0; }); if (free.length) base.color = free[0]; }
    return base;
  };

  // ---------- Moteur de génération ----------
  var progLen = function (p) { if (p.kind === 'muscu') return Math.max(1, (p.blocks || []).reduce(function (a, b) { return a + Math.max(1, num(b.weeks, 1) | 0); }, 0)); return Math.max(1, num(p.weeks, 1) | 0); };
  var progStart = function (p) { return mondayOf(parseISO(p.start) || today0()); };
  var progEnd = function (p) { return addDays(progStart(p), progLen(p) * 7 - 1); };
  var weekOf = function (p, date) { var dd = dayDiff(mondayOf(date), progStart(p)); if (dd < 0) return 0; var w = Math.round(dd / 7) + 1; return w <= progLen(p) ? w : 0; };
  var effDay = function (p, s, w) { var m = (p.moves || {})[w + '|' + s.id]; return m != null ? (num(m, 0) | 0) : (num(s.day, 0) | 0); };
  // Séances ajoutées à la main : rangées par date, rattachées à un programme
  var extraW = function (p, e) { var d = parseISO(e.date); return d ? Math.round(dayDiff(mondayOf(d), progStart(p)) / 7) + 1 : 0; };
  var extrasIn = function (p, w) { return (p.extras || []).filter(function (e) { return extraW(p, e) === w; }); };
  var isMuscuInst = function (x) { return x.s && x.s.extra ? x.s.kind === 'muscu' : x.p.kind === 'muscu'; };
  var fmtPace = function (mpk) { var m = Math.floor(mpk), sc = Math.round((mpk - m) * 60); if (sc === 60) { m++; sc = 0; } return m + '′' + pad(sc) + ' /km'; };
  var sessList = function (p) { return p.kind === 'muscu' ? (p.sessions || []) : (p.kind === 'course' ? (p.runs || []) : (p.fixed || [])); };

  var muscuSpec = function (p, w) {
    if (!(w >= 1)) return null;
    var acc = 0, seen = {}, blocks = p.blocks || [];
    for (var bi = 0; bi < blocks.length; bi++) {
      var b = blocks[bi], n = Math.max(1, num(b.weeks, 1) | 0), G = GOALS[b.goal] || GOALS.force;
      var rep = seen[b.goal] || 0; seen[b.goal] = rep + 1;
      if (w <= acc + n) {
        var k = w - acc - 1;
        var nWork = b.end === 'none' ? n : Math.max(1, n - 1);
        if (n === 1) nWork = b.end === 'test' ? 0 : 1;
        var off = b.goal === 'perso' ? 0 : 2.5 * rep;
        var c = Object.assign({}, DEF_CUSTOM, b.custom || {});
        c.s = num(c.s, 4); c.r = num(c.r, 6); c.p0 = num(c.p0, 70); c.inc = num(c.inc, 0); c.rpe = num(c.rpe, 8);
        var base = function (kk) { var x = G.week(kk, c); return { s: Math.max(1, Math.round(x.s)), r: Math.max(1, Math.round(x.r)), p: Math.max(30, Math.min(97.5, x.p + off)), rpe: x.rpe }; };
        var info = { r0: base(0).r, bi: bi, k: k, n: n, nWork: nWork, goal: b.goal, blockLabel: 'Bloc ' + (bi + 1) + ' · ' + G.label, color: G.color, rest: G.rest };
        if (k < nWork) { var x = base(k); return Object.assign(info, x, { ph: G.label, sh: G.sh }); }
        var last = base(Math.max(0, nWork - 1));
        if (b.end === 'test') return Object.assign(info, { s: 1, r: 1, p: 100, rpe: '10', ph: 'Test 1RM', sh: 'Test', test: true, rest: '4–5 min' });
        return Object.assign(info, { s: Math.max(2, last.s - 2), r: last.r, p: Math.max(40, last.p - 12.5), rpe: '6', ph: 'Décharge', sh: 'Déch.', deload: true, color: '#6B7680' });
      }
      acc += n;
    }
    return null;
  };
  var workBefore = function (w, isLight) { var c = 0; for (var i = 1; i < w; i++) if (!isLight(i)) c++; return c; };
  var muscuLight = function (p) { return function (i) { var s = muscuSpec(p, i); return !s || s.deload || s.test; }; };
  var runIsDeload = function (p, w) { var e = num(p.deloadEvery, 0) | 0; return e > 1 && w % e === 0; };

  var orderedEx = function (p, sess, w) {
    var list = (sess.exercises || []).slice(), ord = (p.orders || {})[w + '|' + sess.id];
    if (!ord) return list;
    var pos = {}; ord.forEach(function (id, i) { pos[id] = i; });
    return list.sort(function (a, b) { return (pos[a.id] != null ? pos[a.id] : 999) - (pos[b.id] != null ? pos[b.id] : 999); });
  };
  // ---------- Autorégulation ----------
  // Pas de charge : 2,5 kg par défaut (barre), réglable par exercice (1 kg avec micro-disques, 2 kg aux haltères…)
  var rstep = function (x, ex) { var st = num(ex && ex.step, 0) > 0 ? num(ex.step) : 2.5; return Math.round(x / st) * st; };
  // Paramètres d'une semaine pour un mouvement en % du 1RM (sans la charge)
  var pctParams = function (sp, ex) {
    var off = num(ex.offset, 0), rc = num(ex.repCap, 0), rr0 = sp.r, pAdj = 0;
    if (rc > 0 && rr0 > rc) { pAdj = Math.max(0, (sp.r0 || rr0) - rc) * 2; rr0 = rc; }
    var s = off < 0 ? Math.min(3, sp.s) : sp.s; if (num(ex.setCap, 0) > 0) s = Math.min(s, num(ex.setCap) | 0);
    return { s: s, r: rr0, pp: Math.min(97.5, sp.p + off + pAdj), pAdj: pAdj, rc: rc };
  };
  // Toutes les saisies d'un exercice sur une semaine : séances prévues puis séances ajoutées
  var logsFor = function (p, ex, k) {
    var res = [];
    (p.sessions || []).concat(extrasIn(p, k)).forEach(function (s) {
      var has = (s.exercises || []).some(function (e) { return s.extra ? e.ref === ex.id : e.id === ex.id; }); if (!has) return;
      var lg = (p.logs || {})[k + '|' + s.id]; if (lg && lg.ex && lg.ex[ex.id]) res.push({ raw: lg.ex[ex.id], sess: s });
    });
    cfLifts(p, ex).forEach(function (c) { if (c.w === k) res.push(c); });
    return res;
  };
  // Séries CrossFit d'un mouvement principal, notées après la référence du programme
  var cfLifts = function (p, ex) {
    if (p.kind !== 'muscu' || ex.mode !== 'pct' || num(ex.offset, 0) !== 0) return [];
    var id = cfIdOf(ex); if (!id) return [];
    var since = iso(new Date(Math.max(num(p.createdAt, 0), num(ex.refAt, 0)) || 0));
    var out = [];
    cfSessions().forEach(function (c) {
      if (c.date < since) return;
      (c.lifts || []).forEach(function (l) { if (l.id !== id || !(l.sets || []).length) return; var d = parseISO(c.date); out.push({ raw: { sets: l.sets }, sess: { id: 'cf-' + c.id, extra: true, cf: true }, w: Math.round(dayDiff(mondayOf(d), progStart(p)) / 7) + 1 }); });
    });
    return out;
  };
  // ---------- Séances externes (CrossFit de l'app hôte) ----------
  // L'app hôte peut exposer window.PLAN_HOST = { sessions(), open(id) } ; seule ici, la liste est vide.
  var HOST = function () { return window.PLAN_HOST || null; };
  var cfCache = null, cfCacheT = 0;
  var cfSessions = function () { var t = Date.now(); if (cfCache && t - cfCacheT < 300) return cfCache; var h = HOST(), r = []; try { r = h && h.sessions ? (h.sessions() || []) : []; } catch (e) { r = []; } cfCache = r; cfCacheT = t; return r; };
  var cfOn = function (d) { var k = iso(d); return cfSessions().filter(function (c) { return c.date === k; }); };
  var painApi = function () { var h = HOST(); return h && h.pain ? h.pain : null; };
  var painFlags = function (d) { var pa = painApi(); try { return (pa && pa.flags ? pa.flags(iso(d)) : null) || {}; } catch (e) { return {}; } };
  var CFP = { id: '__cf', name: 'CrossFit', kind: 'fixe', color: 'var(--aqua, #6E9BEA)' };
  var normTxt = function (t) { return String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };

  // ---------- Bibliothèque de mouvements de musculation ----------
  // [identifiant, nom(s) séparés par |, type de charge (barbell/db/gym), groupe, famille, mode conseillé]
  // Les identifiants sans « mu- » sont ceux du suivi CrossFit (même mouvement, pas de doublon).
  var LIB = [
    ['back-squat', 'Back squat|Squat', 'barbell', 'Jambes', 'squat', 'pct'], ['front-squat', 'Front squat', 'barbell', 'Jambes', 'squat', 'pct'],
    ['mu-pause-squat', 'Squat pause', 'barbell', 'Jambes', 'squat', 'pct'], ['mu-box-squat', 'Box squat', 'barbell', 'Jambes', 'squat', 'kg'],
    ['mu-zercher', 'Zercher squat', 'barbell', 'Jambes', 'squat', 'kg'], ['mu-ssb', 'Squat safety bar', 'barbell', 'Jambes', 'squat', 'kg'],
    ['mu-goblet', 'Goblet squat', 'db', 'Jambes', 'squat', 'kg'], ['mu-hack', 'Hack squat', 'db', 'Jambes', 'squat', 'kg'],
    ['mu-legpress', 'Presse à cuisses|Leg press', 'db', 'Jambes', 'squat', 'kg'], ['mu-bss', 'Fentes bulgares|Bulgarian split squat', 'db', 'Jambes', 'squat', 'kg'],
    ['mu-split', 'Split squat', 'db', 'Jambes', 'squat', 'kg'], ['db-lunge', 'Fentes haltères', 'db', 'Jambes', 'squat', 'kg'],
    ['mu-walk-lunge', 'Fentes marchées', 'db', 'Jambes', 'squat', 'kg'], ['front-lunge', 'Fentes barre', 'barbell', 'Jambes', 'squat', 'kg'],
    ['mu-stepup', 'Step-up haltères', 'db', 'Jambes', 'squat', 'kg'], ['mu-legext', 'Leg extension', 'db', 'Jambes', 'squat', 'kg'],
    ['mu-sissy', 'Sissy squat', 'gym', 'Jambes', 'squat', 'reps'], ['mu-adduct', 'Adduction machine|Adduction hanche machine', 'db', 'Jambes', null, 'kg'],
    ['mu-abduct', 'Abduction machine|Abduction hanche machine', 'db', 'Jambes', null, 'kg'],
    ['deadlift', 'Soulevé de terre|Deadlift', 'barbell', 'Ischios & fessiers', 'hinge', 'pct'], ['mu-sumo', 'Soulevé de terre sumo', 'barbell', 'Ischios & fessiers', 'hinge', 'pct'],
    ['mu-trapbar', 'Soulevé de terre trap bar', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-rdl', 'Soulevé de terre roumain|RDL', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'],
    ['mu-db-rdl', 'Soulevé de terre roumain haltères', 'db', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-sldl', 'Soulevé de terre jambes tendues', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'],
    ['mu-deficit-dl', 'Soulevé de terre déficit', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-rack-pull', 'Rack pull', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'],
    ['hip-thrust', 'Hip thrust', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-glute-bridge', 'Pont fessier', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'],
    ['good-morning', 'Good morning', 'barbell', 'Ischios & fessiers', 'hinge', 'kg'], ['back-ext', 'Hyperextension lombaire|Extension lombaire', 'gym', 'Ischios & fessiers', 'hinge', 'reps'],
    ['mu-legcurl-lying', 'Leg curl allongé|Leg curl allongé unilatéral', 'db', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-legcurl-seated', 'Leg curl assis', 'db', 'Ischios & fessiers', 'hinge', 'kg'],
    ['mu-nordic', 'Nordic hamstring curl', 'gym', 'Ischios & fessiers', 'hinge', 'reps'], ['kb-swing', 'Kettlebell swing', 'db', 'Ischios & fessiers', 'hinge', 'kg'],
    ['mu-pullthrough', 'Pull-through poulie', 'db', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-revhyper', 'Reverse hyper', 'db', 'Ischios & fessiers', 'hinge', 'kg'],
    ['bench', 'Développé couché|Bench press', 'barbell', 'Pectoraux', 'pushH', 'pct'], ['mu-bench-pause', 'Développé couché pause', 'barbell', 'Pectoraux', 'pushH', 'pct'],
    ['mu-closegrip', 'Développé couché prise serrée', 'barbell', 'Pectoraux', 'pushH', 'kg'], ['mu-incline-bb', 'Développé incliné barre', 'barbell', 'Pectoraux', 'pushH', 'kg'],
    ['mu-decline', 'Développé décliné', 'barbell', 'Pectoraux', 'pushH', 'kg'], ['mu-floor', 'Floor press', 'barbell', 'Pectoraux', 'pushH', 'kg'],
    ['mu-db-bench', 'Développé couché haltères', 'db', 'Pectoraux', 'pushH', 'kg'], ['mu-db-incline', 'Développé incliné haltères', 'db', 'Pectoraux', 'pushH', 'kg'],
    ['mu-chestpress', 'Chest press machine', 'db', 'Pectoraux', 'pushH', 'kg'], ['mu-flyes', 'Écarté haltères', 'db', 'Pectoraux', 'pushH', 'kg'],
    ['mu-cablefly', 'Écarté poulie', 'db', 'Pectoraux', 'pushH', 'kg'], ['mu-pecdeck', 'Pec deck', 'db', 'Pectoraux', 'pushH', 'kg'],
    ['push-up', 'Pompes', 'gym', 'Pectoraux', 'pushH', 'reps'], ['mu-dips', 'Dips barres|Dips', 'gym', 'Pectoraux', 'pushH', 'reps'], ['ring-dip', 'Dips anneaux', 'gym', 'Pectoraux', 'pushH', 'reps'],
    ['strict-press', 'Strict press|Développé militaire barre', 'barbell', 'Épaules', 'pushV', 'pct'], ['push-press', 'Push press', 'barbell', 'Épaules', 'pushV', 'kg'],
    ['mu-db-ohp', 'Développé militaire haltères', 'db', 'Épaules', 'pushV', 'kg'], ['mu-db-seated', 'Développé épaules assis haltères', 'db', 'Épaules', 'pushV', 'kg'],
    ['mu-arnold', 'Développé Arnold', 'db', 'Épaules', 'pushV', 'kg'], ['mu-landmine', 'Landmine press', 'barbell', 'Épaules', 'pushV', 'kg'],
    ['mu-zpress', 'Z press', 'barbell', 'Épaules', 'pushV', 'kg'], ['mu-lateral', 'Élévations latérales', 'db', 'Épaules', null, 'kg'],
    ['mu-front-raise', 'Élévations frontales', 'db', 'Épaules', null, 'kg'], ['mu-reardelt', 'Oiseau|Deltoïde postérieur', 'db', 'Épaules', 'pull', 'kg'],
    ['mu-facepull', 'Face pull', 'db', 'Épaules', 'pull', 'kg'], ['mu-upright', 'Tirage menton', 'barbell', 'Épaules', 'pull', 'kg'], ['mu-shrug', 'Shrugs', 'barbell', 'Épaules', null, 'kg'],
    ['pull-up', 'Tractions strictes|Tractions', 'gym', 'Dos', 'pull', 'reps'], ['mu-pullup-w', 'Tractions lestées', 'db', 'Dos', 'pull', 'kg'],
    ['mu-chinup', 'Tractions supination|Chin-up', 'gym', 'Dos', 'pull', 'reps'], ['mu-neg-pullup', 'Tractions négatives|Tractions négatives lentes', 'gym', 'Dos', 'pull', 'reps'],
    ['mu-latpull', 'Tirage vertical poulie|Lat pulldown', 'db', 'Dos', 'pull', 'kg'], ['mu-seated-row', 'Tirage horizontal poulie', 'db', 'Dos', 'pull', 'kg'],
    ['bent-row', 'Rowing barre', 'barbell', 'Dos', 'pull', 'kg'], ['mu-pendlay', 'Rowing Pendlay', 'barbell', 'Dos', 'pull', 'kg'],
    ['mu-db-row', 'Rowing haltère un bras', 'db', 'Dos', 'pull', 'kg'], ['mu-chest-row', 'Rowing poitrine appuyée|Rowing poitrine appuyée (haltères)', 'db', 'Dos', 'pull', 'kg'],
    ['mu-tbar', 'Rowing T-bar', 'barbell', 'Dos', 'pull', 'kg'], ['mu-machine-row', 'Rowing machine', 'db', 'Dos', 'pull', 'kg'],
    ['mu-pullover', 'Pull-over', 'db', 'Dos', 'pull', 'kg'], ['mu-straight-pd', 'Tirage bras tendus poulie', 'db', 'Dos', 'pull', 'kg'],
    ['mu-inverted', 'Rowing inversé', 'gym', 'Dos', 'pull', 'reps'],
    ['mu-curl-bb', 'Curl barre', 'barbell', 'Bras', 'bras', 'kg'], ['mu-curl-db', 'Curl haltères', 'db', 'Bras', 'bras', 'kg'], ['mu-hammer', 'Curl marteau', 'db', 'Bras', 'bras', 'kg'],
    ['mu-curl-cable', 'Curl poulie', 'db', 'Bras', 'bras', 'kg'], ['mu-preacher', 'Curl pupitre', 'db', 'Bras', 'bras', 'kg'], ['mu-rev-curl', 'Curl prise inversée', 'db', 'Bras', 'bras', 'kg'],
    ['mu-wrist-curl', 'Curl poignet', 'db', 'Bras', 'bras', 'kg'], ['mu-wrist-ext', 'Extension poignet', 'db', 'Bras', 'bras', 'kg'],
    ['mu-skull', 'Barre au front', 'barbell', 'Bras', 'bras', 'kg'], ['mu-tri-pd', 'Extension triceps poulie', 'db', 'Bras', 'bras', 'kg'],
    ['mu-tri-oh', 'Extension triceps au-dessus de la tête', 'db', 'Bras', 'bras', 'kg'], ['mu-bench-dips', 'Dips sur banc', 'gym', 'Bras', 'bras', 'reps'],
    ['mu-calf-stand', 'Mollets debout|Calf raise debout', 'db', 'Mollets', null, 'kg'], ['mu-calf-seated', 'Mollets assis|Seated calf raise|Seated calf raise (machine)', 'db', 'Mollets', null, 'kg'],
    ['mu-calf-single', 'Mollet unilatéral debout|Mollet debout unilatéral|Mollet debout unilatéral (barre)', 'db', 'Mollets', null, 'kg'],
    ['mu-tibialis', 'Releveurs (tibial antérieur)', 'db', 'Mollets', null, 'kg'],
    ['mu-crunch', 'Crunch', 'gym', 'Abdos & gainage', null, 'reps'], ['mu-decl-crunch', 'Crunch décliné', 'gym', 'Abdos & gainage', null, 'reps'],
    ['mu-cable-crunch', 'Crunch poulie', 'db', 'Abdos & gainage', null, 'kg'], ['mu-hang-leg', 'Relevés de jambes suspendu', 'gym', 'Abdos & gainage', 'pull', 'reps'],
    ['mu-abwheel', 'Roulette abdominale', 'gym', 'Abdos & gainage', null, 'reps'], ['mu-pallof', 'Pallof press', 'db', 'Abdos & gainage', null, 'kg'],
    ['plank', 'Gainage|Planche|Gainage ventral|Plank', 'gym', 'Abdos & gainage', null, 'sec'], ['mu-side-plank', 'Gainage latéral|Side plank', 'gym', 'Abdos & gainage', null, 'sec'],
    ['hollow', 'Hollow hold', 'gym', 'Abdos & gainage', null, 'sec'], ['mu-russian', 'Russian twist', 'db', 'Abdos & gainage', null, 'kg'],
    ['mu-deadbug', 'Dead bug', 'gym', 'Abdos & gainage', null, 'reps'], ['farmer', 'Farmer walk|Marche du fermier', 'db', 'Abdos & gainage', 'hinge', 'kg'],
    ['air-squat', 'Air squat|Squat au poids du corps|Squat PDC', 'gym', 'Jambes', 'squat', 'reps'], ['mu-jump-squat', 'Squat sauté|Jump squat', 'gym', 'Jambes', 'squat', 'reps'],
    ['pistol', 'Pistol squat|Pistol', 'gym', 'Jambes', 'squat', 'reps'], ['mu-cossack', 'Cossack squat', 'gym', 'Jambes', 'squat', 'reps'],
    ['mu-skater', 'Skater squat', 'gym', 'Jambes', 'squat', 'reps'], ['lunge', 'Fentes avant|Fentes|Lunge', 'gym', 'Jambes', 'squat', 'reps'],
    ['mu-reverse-lunge', 'Fentes arrière', 'gym', 'Jambes', 'squat', 'reps'], ['mu-lateral-lunge', 'Fentes latérales|Fentes chassées', 'gym', 'Jambes', 'squat', 'reps'],
    ['box-step', 'Step-up|Montée sur box', 'gym', 'Jambes', 'squat', 'reps'], ['box-jump', 'Box jump|Saut sur box', 'gym', 'Jambes', 'squat', 'reps'],
    ['mu-wall-sit', 'Chaise|Wall sit', 'gym', 'Jambes', 'squat', 'sec'], ['mu-calf-bw', 'Mollets au poids du corps', 'gym', 'Mollets', null, 'reps'],
    ['mu-glute-bridge-bw', 'Pont fessier au sol|Glute bridge', 'gym', 'Ischios & fessiers', 'hinge', 'reps'], ['mu-sl-bridge', 'Pont fessier unilatéral', 'gym', 'Ischios & fessiers', 'hinge', 'reps'],
    ['mu-sl-rdl', 'Soulevé de terre unilatéral|RDL unilatéral', 'db', 'Ischios & fessiers', 'hinge', 'kg'], ['mu-clamshell', 'Clamshell|Coquillage', 'gym', 'Ischios & fessiers', null, 'reps'],
    ['mu-monster-walk', 'Marche latérale élastique|Monster walk', 'gym', 'Ischios & fessiers', null, 'reps'], ['mu-superman', 'Superman', 'gym', 'Ischios & fessiers', null, 'reps'],
    ['mu-knee-pushup', 'Pompes sur les genoux', 'gym', 'Pectoraux', 'pushH', 'reps'], ['mu-incline-pushup', 'Pompes inclinées|Pompes mains surélevées', 'gym', 'Pectoraux', 'pushH', 'reps'],
    ['mu-decline-pushup', 'Pompes déclinées|Pompes pieds surélevés', 'gym', 'Pectoraux', 'pushH', 'reps'], ['mu-diamond', 'Pompes diamant|Pompes serrées', 'gym', 'Bras', 'pushH', 'reps'],
    ['mu-pike', 'Pompes piquées|Pike push-up', 'gym', 'Épaules', 'pushV', 'reps'], ['hspu', 'Pompes en équilibre|Handstand push-up|HSPU', 'gym', 'Épaules', 'pushV', 'reps'],
    ['mu-hs-hold', 'Équilibre contre le mur|Handstand hold', 'gym', 'Épaules', 'pushV', 'sec'], ['mu-band-pullapart', 'Écartés élastique|Band pull-apart', 'gym', 'Épaules', 'pull', 'reps'],
    ['mu-ext-rot', 'Rotation externe épaule|Rotation externe élastique', 'db', 'Épaules', null, 'kg'], ['mu-ytw', 'Y-T-W', 'db', 'Épaules', null, 'kg'],
    ['mu-scap-pull', 'Tractions scapulaires', 'gym', 'Dos', 'pull', 'reps'], ['mu-dead-hang', 'Suspension barre|Dead hang', 'gym', 'Dos', 'pull', 'sec'],
    ['mu-knee-raise', 'Relevés de genoux', 'gym', 'Abdos & gainage', null, 'reps'], ['mu-leg-raise', 'Relevés de jambes au sol', 'gym', 'Abdos & gainage', null, 'reps'],
    ['t2b', 'Toes-to-bar', 'gym', 'Abdos & gainage', 'pull', 'reps'], ['k2e', 'Knees-to-elbows', 'gym', 'Abdos & gainage', 'pull', 'reps'],
    ['sit-up', 'Sit-up|Relevé de buste', 'gym', 'Abdos & gainage', null, 'reps'], ['ghd', 'GHD sit-up', 'gym', 'Abdos & gainage', null, 'reps'],
    ['mu-vup', 'V-ups', 'gym', 'Abdos & gainage', null, 'reps'], ['mu-rev-crunch', 'Crunch inversé', 'gym', 'Abdos & gainage', null, 'reps'],
    ['mu-bicycle', 'Crunch bicyclette', 'gym', 'Abdos & gainage', null, 'reps'], ['mu-mountain', 'Mountain climbers', 'gym', 'Abdos & gainage', null, 'reps'],
    ['mu-birddog', 'Bird dog', 'gym', 'Abdos & gainage', null, 'reps'], ['mu-copenhagen', 'Gainage Copenhague|Copenhagen plank', 'gym', 'Abdos & gainage', null, 'sec'],
    ['mu-lsit', 'L-sit', 'gym', 'Abdos & gainage', null, 'sec'], ['tgu', 'Turkish get-up', 'db', 'Abdos & gainage', null, 'kg'],
    ['burpee', 'Burpees|Burpee', 'gym', 'Cardio & divers', null, 'reps'], ['mu-jumping-jack', 'Jumping jacks', 'gym', 'Cardio & divers', null, 'reps']
  ];
  var libKey = function (t) { return normTxt(String(t || '').replace(/^\s*hsr\s*·\s*/i, '').replace(/\([^)]*\)/g, '')).replace(/[^a-z0-9]/g, ''); };
  var LIBN = {}; LIB.forEach(function (l) { l[1].split('|').forEach(function (n) { LIBN[libKey(n)] = l; }); });
  var libFind = function (name) { return LIBN[libKey(name)] || LIBN[normTxt(name).replace(/[^a-z0-9]/g, '')] || null; };
  var libName = function (l) { return l[1].split('|')[0]; };
  var libDatalist = function (id) { return '<datalist id="' + id + '">' + LIB.map(function (l) { return '<option value="' + esc(libName(l)) + '">' + esc(l[3]) + '</option>'; }).join('') + '</datalist>'; };
  // Mouvement CrossFit correspondant à un exercice du plan (champ cf, sinon bibliothèque, sinon d'après le nom)
  var cfIdOf = function (ex) {
    if (ex.cf) return ex.cf; var lb = libFind(ex.name); if (lb) return lb[0]; var n = normTxt(ex.name);
    if (/pause|tempo|leger/.test(n)) return null;
    if (/front squat/.test(n)) return 'front-squat';
    if (/back squat|^squat$/.test(n)) return 'back-squat';
    if (/souleve de terre|deadlift/.test(n) && !/roumain|jambes tendues/.test(n)) return 'deadlift';
    if (/developpe couche|bench/.test(n) && !/haltere|incline/.test(n)) return 'bench';
    if (/strict press|developpe militaire barre|^militaire$/.test(n)) return 'strict-press';
    if (/push press/.test(n)) return 'push-press';
    return null;
  };
  // Grandes familles de mouvements, pour repérer la fatigue croisée
  var PAT_L = { squat: 'squat', hinge: 'charnière de hanche', pushV: 'poussée verticale', pushH: 'poussée horizontale', pull: 'tirage', bras: 'bras (biceps, triceps, avant-bras)' };
  var exPattern = function (name) {
    var lb = libFind(name); if (lb) return lb[4];
    var n = normTxt(name);
    if (/mollet|calf|adduction|abduction|crunch|gainage|hollow/.test(n)) return null;
    if (/militaire|strict press|overhead|push press|epaule/.test(n)) return 'pushV';
    if (/couche|incline|bench|dips|pompe|push-up/.test(n)) return 'pushH';
    if (/traction|pull|rowing|tirage|row/.test(n)) return 'pull';
    if (/curl|triceps|biceps|barre au front|poignet/.test(n) && !/leg curl/.test(n)) return 'bras';
    if (/souleve|deadlift|rdl|hip thrust|good morning|hyperextension|leg curl|swing/.test(n)) return 'hinge';
    if (/squat|fente|lunge|presse/.test(n)) return 'squat';
    return null;
  };
  // Avant chaque action : repère de l'état du suivi (utilisé par l'app hôte pour dater chaque saisie)
  var editBegin = function () {};
  var kc = function (c) { return PALV[String(c).toUpperCase()] || c; };
  var AUTO_ALPHA = 0.5, AUTO_CAP = 0.05;
  // Première semaine à prendre en compte : S1, ou plus tôt si une séance a été ajoutée avant le cycle
  var firstWeek = function (p) { var k0 = 1; (p.extras || []).forEach(function (e) { var k = extraW(p, e); if (k < k0) k0 = k; });
    (p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { cfLifts(p, e).forEach(function (c) { if (c.w < k0) k0 = c.w; }); }); });
    return k0; };
  var horsPlan = function (sp, sess) { return !sp || sp.deload || (sp.test && sess && sess.extra); };
  // Semaine de travail la plus proche (la précédente en priorité) : sert de repère aux séances hors plan
  var refSpec = function (p, k) {
    var best = null, bd = 1e9, L = progLen(p);
    for (var j = 1; j <= L; j++) { var sj = muscuSpec(p, j); if (!sj || sj.deload || sj.test) continue; var dd = Math.abs(j - k) + (j > k ? 0.5 : 0); if (dd < bd) { bd = dd; best = sj; } }
    return best;
  };
  /* 1RM de travail : la référence est recalée après chaque séance notée, à partir
     de l'écart entre ce que tu as fait et ce que le plan attendait (charge, reps et
     RPE convertis en 1RM estimé). Lissage à 50 % et ±5 % maximum par séance pour ne
     pas sur-réagir à un RPE mal coté. « Comme prévu », décharges et séances marquées
     « ne pas en tenir compte » ne changent rien. Un test 1RM réel compte en entier. */
  var tmTrace = function (p, ex, w) {
    var f = 1, steps = [];
    if (ex.mode !== 'pct' || num(ex.offset, 0) !== 0 || ex.noAuto || !(num(ex.orm, 0) > 0)) return { f: 1, steps: steps };
    var orm = num(ex.orm);
    for (var k = firstWeek(p); k < w; k++) {
      var sp = muscuSpec(p, k);
      logsFor(p, ex, k).forEach(function (lg) {
        if (lg.raw.plan || lg.raw.noAdj || lg.raw.skipped) return;
        var r = flat(lg.raw); if (!(num(r.kg) > 0 && num(r.reps) > 0)) return;
        var ov = (p.overrides || {})[k + '|' + lg.sess.id + '|' + ex.id] || {};
        var before = f, L, reps, rpe;
        if (sp && sp.goal === 'puis' && !sp.deload && !sp.test) return; // puissance : charges volontairement légères, pas un repère de force
        if (horsPlan(sp, lg.sess)) {
          // Séance sans repère de plan (avant/après le cycle, décharge, séance ajoutée en semaine test) :
          // comparée au plan de la semaine de travail la plus proche, si le RPE noté est fiable (7 ou plus)
          if (!(num(r.rpe) >= 7)) return;
          var rs = refSpec(p, k); if (!rs) return;
          var pr0 = pctParams(rs, ex), Lr = orm * f * pr0.pp / 100, rr = rpeNum(rs.rpe);
          var t0 = f * e1rm(r.kg, r.reps, r.rpe) / e1rm(Lr, pr0.r, rr);
          f = Math.max(f * (1 - AUTO_CAP), Math.min(f * (1 + AUTO_CAP), f + AUTO_ALPHA * (t0 - f)));
        }
        else if (sp.test) { L = rstep(orm * f * 1.025, ex); var e = e1rm(r.kg, r.reps, r.rpe || 10); f = Math.max(f * 0.85, Math.min(f * 1.15, e / orm)); }
        else {
          var pr = pctParams(sp, ex); L = ov.kg != null ? num(ov.kg) : rstep(orm * f * pr.pp / 100, ex); reps = ov.reps != null ? num(ov.reps) : pr.r; rpe = ov.rpe != null ? num(ov.rpe) : rpeNum(sp.rpe);
          var target = f * e1rm(r.kg, r.reps, r.rpe || rpe) / e1rm(L, reps, rpe);
          var nf = f + AUTO_ALPHA * (target - f);
          f = Math.max(f * (1 - AUTO_CAP), Math.min(f * (1 + AUTO_CAP), nf));
        }
        steps.push({ w: k, from: orm * before, to: orm * f, extra: !!lg.sess.extra, cf: !!lg.sess.cf });
      });
    }
    return { f: f, steps: steps };
  };
  /* Exercices en kg : on repart de la charge réellement utilisée si les reps prévues
     ont été faites sans dépasser le RPE prévu de plus d'un point ; sinon on ne
     garde que les baisses. */
  var kgShift = function (p, ex, w, planFn) {
    var d = 0;
    if (ex.mode !== 'kg' || ex.keep || ex.noAuto) return 0;
    for (var k = firstWeek(p); k < w; k++) {
      logsFor(p, ex, k).forEach(function (lg) {
        if (lg.raw.plan || lg.raw.noAdj || lg.raw.skipped) return;
        var r = flat(lg.raw); if (!(num(r.kg) > 0)) return;
        var pl = planFn(Math.max(1, k), d); if (!pl.L) { d += num(r.kg) - 0; return; }
        var diff = num(r.kg) - pl.L, okReps = num(r.reps) >= pl.reps - 1, okRpe = !r.rpe || num(r.rpe) <= 9;
        d += (okReps && okRpe) ? diff : Math.min(0, diff);
      });
    }
    return d;
  };
  var genMuscu = function (p, sess, w) {
    var sp = muscuSpec(p, w); if (!sp) return null;
    var kEff = workBefore(w, muscuLight(p));
    var items = orderedEx(p, sess, w).map(function (ex) {
      var it = { id: ex.id, name: ex.name || 'Exercice', scheme: '', load: '', note: ex.note || '', ton: 0, loadNum: null, mode: ex.mode, rpePlan: rpeNum(sp.rpe), repsPlan: null, main: ex.mode === 'pct' && num(ex.offset, 0) === 0, orm: num(ex.orm, 0) };
      if (ex.mode === 'pct') {
        var off = num(ex.offset, 0), orm0 = num(ex.orm, 0), tr = tmTrace(p, ex, w), orm = orm0 * tr.f;
        it.tmFrom = orm0; it.tmF = tr.f; it.orm = orm;
        if (sp.test) {
          if (off === 0) { it.scheme = '1RM'; it.load = orm ? 'visé ' + kg(rstep(orm * 1.025, ex)) : ''; it.note = 'Montée progressive, 3–5 essais'; it.loadNum = orm ? rstep(orm * 1.025, ex) : null; it.repsPlan = 1; it.rpePlan = 10; it.sets = '3–5'; it.reps = 1; it.rpeTxt = '9–10'; it.rest = '4–5 min'; it.info = 'Test : montée progressive par paliers'; }
          else { it.scheme = '3×3'; it.load = orm ? kg(r25(orm * 0.6)) : ''; it.note = 'Léger, garde de la fraîcheur pour le test'; it.loadNum = orm ? r25(orm * 0.6) : null; it.repsPlan = 3; it.rpePlan = 6; it.sets = 3; it.reps = 3; it.rpeTxt = '6'; it.rest = '2 min'; it.info = 'Léger avant le test'; }
        } else {
          var prm = pctParams(sp, ex), rc = prm.rc, rr0 = prm.r, pAdj = prm.pAdj, s = prm.s;
          var pp = prm.pp, L = rstep(orm * pp / 100, ex), L0 = rstep(orm0 * pp / 100, ex);
          it.adjKg = L - L0;
          it.scheme = s + '×' + rr0; it.load = orm ? kg(L) : fmtN(pp) + ' %';
          it.note = fmtN(pp) + ' % 1RM · RPE ' + sp.rpe + ' · repos ' + sp.rest + (pAdj ? ' · reps plafonnées à ' + rc + ', intensité ajustée' : '') + (ex.note ? ' · ' + ex.note : '');
          if (sp.goal === 'puis' && !sp.deload) it.note += ' · vitesse max';
          it.ton = orm ? s * rr0 * L : 0; it.loadNum = orm ? L : null; it.repsPlan = rr0; it.sets = s; it.reps = rr0; it.rpeTxt = sp.rpe; it.rest = off < 0 ? '2 min' : sp.rest; it.info = fmtN(pp) + ' % du 1RM' + (orm ? (Math.abs(tr.f - 1) > 0.001 ? ' · 1RM de travail ' + kg(Math.round(orm * 2) / 2) + ' (réf. ' + kg(orm0) + ')' : ' (1RM ' + kg(orm0) + ')') : ' · 1RM à renseigner') + (pAdj ? ' · reps limitées à ' + rc : '');
        }
      } else if (ex.mode === 'kg') {
        var kgPlan = function (wk, shift) {
          var kE = workBefore(wk, muscuLight(p)), r0 = Math.max(1, num(ex.reps, 10) | 0), mx0 = num(ex.repsMax, 0), base = num(ex.startKg, 0) + shift, Lk, rk = r0;
          if (mx0 > r0) { var sp0 = mx0 - r0 + 1; rk = r0 + (kE % sp0); Lk = base + num(ex.incKg, 0) * Math.floor(kE / sp0); } else Lk = base + num(ex.incKg, 0) * kE;
          return { L: num(ex.startKg, 0) > 0 || shift ? r05(Lk) : 0, reps: rk };
        };
        var shiftKg = kgShift(p, ex, w, kgPlan), kp = kgPlan(w, shiftKg);
        var s2 = Math.max(1, num(ex.sets, 3) | 0), rr = kp.reps, L2 = kp.L, rmx = num(ex.repsMax, 0), dbl = rmx > num(ex.reps, 10);
        it.adjKg = shiftKg;
        if ((sp.deload || sp.test) && !ex.keep) { s2 = Math.max(1, s2 - 1); }
        L2 = r05(L2); it.scheme = s2 + '×' + rr; it.load = L2 ? kg(L2) : 'charge à définir'; it.ton = s2 * rr * L2; it.loadNum = L2 || null; it.repsPlan = rr; it.rpePlan = (sp.deload || sp.test) && !ex.keep ? 6 : 8; it.sets = s2; it.reps = rr; it.rpeTxt = String(it.rpePlan); it.rest = '90 s – 2 min'; it.info = ex.keep ? 'Charge fixe' : (dbl ? 'Double progression : ' + num(ex.reps) + ' → ' + rmx + ' reps, puis +' + kg(num(ex.incKg, 0)) : (num(ex.incKg, 0) && String(ex.note || '').indexOf('par semaine') < 0 ? '+' + kg(num(ex.incKg)) + ' par semaine' : ''));
        if (sp.deload && !ex.keep) it.info = 'Semaine allégée : 1 série en moins' + (it.info ? ' · ' + it.info : '');
      } else if (ex.mode === 'reps') {
        var s3 = Math.max(1, num(ex.sets, 3) | 0), r3 = Math.floor(num(ex.reps, 5) + num(ex.incReps, 0) * kEff), mx = num(ex.maxReps, 0);
        if (mx > 0) r3 = Math.min(mx, r3);
        if (sp.deload || sp.test) s3 = Math.max(1, s3 - 1);
        var dlInfo = sp.deload ? 'Semaine allégée : 1 série en moins' : '';
        it.scheme = s3 + '×' + Math.max(1, r3); it.load = 'Poids du corps'; it.loadNum = r3; it.repsPlan = Math.max(1, r3); it.rpePlan = 8; it.sets = s3; it.reps = Math.max(1, r3); it.rpeTxt = '8'; it.rest = '2 min'; it.info = num(ex.incReps, 0) ? 'Reps qui augmentent au fil des semaines' + (num(ex.maxReps, 0) ? ' (jusqu’à ' + num(ex.maxReps) + ')' : '') : '';
        if (dlInfo) it.info = dlInfo + (it.info ? ' · ' + it.info : '');
        if (sp.test && (ex.testMax === true || num(ex.testMax, 0) > 0)) {
          it.testMax = true; it.sets = 1; it.reps = 'Max'; it.scheme = '1×max'; it.repsPlan = Math.max(1, r3); it.rpePlan = 10; it.rpeTxt = '9–10'; it.rest = '2–3 min';
          it.info = 'Test du max de reps unbroken';
          it.note = 'Échauffement : 2 séries courtes faciles · Une seule série, au max, technique stricte · Arrête dès que la technique casse · Coude qui tire : arrête la série';
        }
      } else { it.scheme = ex.text || ''; }
      if (ex.rest && !it.testMax) it.rest = ex.rest;
      return it;
    });
    var dur = sp.deload ? Math.round(num(sess.dur, 60) * 0.8) : num(sess.dur, 60);
    return { title: sess.name || 'Séance', short: sess.name || 'Muscu', meta: sp.test ? 'Semaine test 1RM' : (sp.ph + ' · ' + sp.s + '×' + sp.r + ' @ ' + fmtN(sp.p) + ' % · RPE ' + sp.rpe), dur: dur, rpe: rpeNum(sp.rpe), items: items, spec: sp, light: !!(sp.deload || sp.test), lightLabel: sp.deload ? 'Décharge' : (sp.test ? 'Test' : '') };
  };
  var genRun = function (p, rs, w) {
    var k = workBefore(w, function (i) { return runIsDeload(p, i); }), dl = runIsDeload(p, w), red = 1 - num(p.deloadPct, 25) / 100;
    if (rs.type === 'intervalles') {
      var reps = Math.floor(num(rs.reps0, 6) + num(rs.repsInc, 1) * k), mx = num(rs.maxReps, 0);
      if (mx > 0) reps = Math.min(mx, reps);
      if (dl) reps = Math.max(1, Math.round(reps * red));
      var ef = num(rs.effort, 2), rc = num(rs.recup, 1), wu = num(rs.warm, 10);
      var sc = reps + ' × ' + fmtN(ef) + '′ / ' + fmtN(rc) + '′';
      return { title: (rs.name || 'Intervalles') + ' — ' + sc, short: (rs.name || 'Interv.') + ' ' + reps + '×', meta: (dl ? 'Semaine allégée · ' : '') + (rs.note || 'Effort / récupération'), dur: Math.round(reps * (ef + rc) + wu), rpe: num(rs.rpe, 6), runMin: Math.round(reps * (ef + rc) + wu), items: [{ id: 'wu', name: 'Échauffement', scheme: fmtN(wu) + ' min', load: '', note: 'Footing lent ou marche active' }, { id: 'bl', name: 'Bloc principal', scheme: sc, load: '', note: rs.note || '' }], light: dl, lightLabel: dl ? 'Allégée' : '' };
    }
    if (rs.type === 'libre') { var d0 = num(rs.startMin, 30); return { title: rs.name || 'Séance', short: rs.name || 'Course', meta: rs.note || '', dur: d0, rpe: num(rs.rpe, 5), runMin: d0, items: [{ id: 'lb', name: rs.name || 'Séance', scheme: d0 + ' min', load: '', note: rs.note || '' }], light: false }; }
    var d = num(rs.startMin, 30);
    if (rs.mode === 'pct') d = d * Math.pow(1 + num(rs.inc, 0) / 100, k);
    else { var sw = num(rs.switchMin, 0), i2 = num(rs.inc2, 0); for (var kk = 0; kk < k; kk++) d += (sw > 0 && i2 > 0 && d >= sw) ? i2 : num(rs.inc, 0); }
    var mxm = num(rs.maxMin, 0); if (mxm > 0) d = Math.min(mxm, d);
    if (dl) d = d * red;
    d = Math.round(d);
    return { title: (rs.name || 'Course') + ' — ' + d + ' min', short: (rs.name || 'Course') + ' ' + d + '′', meta: (dl ? 'Semaine allégée · ' : '') + (rs.note || 'Allure facile'), dur: d, rpe: num(rs.rpe, 4), runMin: d, items: [{ id: 'ct', name: rs.name || 'Course continue', scheme: d + ' min', load: '', note: rs.note || '' }], light: dl, lightLabel: dl ? 'Allégée' : '' };
  };
  var genFixed = function (p, fs, w) {
    var lines = String(fs.detail || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
    var items = lines.length ? lines.map(function (l, i) { return { id: 'l' + i, name: l, scheme: '', load: '', note: '' }; }) : [{ id: 'l0', name: fs.name || 'Séance', scheme: num(fs.dur, 60) + ' min', load: '', note: '' }];
    return { title: fs.name || 'Séance', short: fs.name || 'Séance', meta: (fs.note ? fs.note + ' · ' : '') + num(fs.dur, 60) + ' min', dur: num(fs.dur, 60), rpe: num(fs.rpe, 6), items: items, light: false };
  };
  var genExtra = function (p, e, w) {
    var lg = (p.logs || {})[w + '|' + e.id] || {}, rpe = num(lg.rpe, 0) || num(e.rpe, 6) || 6;
    var dur = Math.max(1, num(e.dur, 0) || (e.kind === 'course' ? 30 : 60));
    if (e.kind === 'autre') {
      return { title: e.name || 'Activité', short: e.name || 'Activité', meta: 'Ajoutée · ' + dur + ' min', dur: dur, rpe: rpe, items: [{ id: 'ac', name: e.name || 'Activité', scheme: dur + ' min', load: '', note: e.note || '' }], light: false, extra: true };
    }
    if (e.kind === 'course') {
      var km = num(e.km, 0), pace = km > 0 ? fmtPace(dur / km) : '';
      return { title: e.name || 'Course ajoutée', short: (e.name || 'Course') + ' ' + dur + '′', meta: 'Ajoutée · ' + dur + ' min' + (km ? ' · ' + fmtN(km) + ' km' : ''), dur: dur, rpe: rpe, runMin: dur, km: km, items: [{ id: 'ct', name: e.name || 'Course', scheme: dur + ' min' + (km ? ' · ' + fmtN(km) + ' km' : ''), load: pace, note: e.note || '' }], light: false, extra: true };
    }
    var items = (e.exercises || []).map(function (xe) {
      var base = null;
      if (xe.ref) {
        (p.sessions || []).forEach(function (s) { if (base || !(s.exercises || []).some(function (z) { return z.id === xe.ref; })) return; var g0 = genMuscu(p, s, w); if (g0) base = g0.items.filter(function (z) { return z.id === xe.ref; })[0] || null; });
        if (!base) { var e0 = findEx(p, xe.ref); var rs0 = e0 && e0.mode === 'pct' ? refSpec(p, w) : null;
          if (rs0) { var pr1 = pctParams(rs0, e0), tf = tmTrace(p, e0, w).f, o1 = num(e0.orm, 0), L1 = o1 ? rstep(o1 * tf * pr1.pp / 100, e0) : null;
            base = { id: xe.ref, name: e0.name, mode: 'pct', main: num(e0.offset, 0) === 0, orm: o1, sets: pr1.s, reps: pr1.r, repsPlan: pr1.r, loadNum: L1, rpePlan: rpeNum(rs0.rpe), rpeTxt: String(rs0.rpe), rest: e0.rest || rs0.rest || '2–3 min', note: e0.note || '', info: 'Hors cycle : repère = semaine de travail la plus proche' + (o1 ? ' · 1RM de travail ' + kg(Math.round(o1 * tf * 2) / 2) : '') + ' · note un RPE de 7 ou plus pour recaler ton 1RM' }; } }
        if (!base && e0) { if (e0) base = { id: xe.ref, name: e0.name, mode: e0.mode === 'reps' ? 'reps' : 'kg', sets: num(e0.sets, 3) || 3, reps: num(e0.reps, 8) || 8, loadNum: e0.mode === 'kg' && num(e0.startKg, 0) ? num(e0.startKg) : null, rpePlan: 8, rpeTxt: '8', rest: e0.rest || '2 min', note: e0.note || '' }; }
      }
      if (!base) { var lbe = libFind(xe.name), sec = !!(lbe && lbe[5] === 'sec'); base = { id: xe.id, name: xe.name || 'Exercice', mode: lbe && (lbe[5] === 'reps' || sec) ? 'reps' : 'kg', unit: sec ? 's' : '', sets: 3, reps: sec ? 30 : 10, loadNum: null, rpePlan: 8, rpeTxt: '8', rest: '2 min', note: '' }; }
      var it = clone(base); it.repsPlan = it.repsPlan || it.reps; it.scheme = it.sets + '×' + it.reps; it.load = it.loadNum ? kg(it.loadNum) : '';
      var done = getSets(((lg.ex || {})[it.id]) || null);
      it.ton = done.length ? done.reduce(function (a, z) { return a + num(z.kg, 0) * num(z.reps, 0); }, 0) : num(it.sets, 0) * num(it.reps, 0) * num(it.loadNum, 0);
      return it;
    });
    return { title: e.name || 'Muscu ajoutée', short: e.name || 'Muscu +', meta: 'Ajoutée · ' + dur + ' min · ' + items.length + ' exercice' + (items.length > 1 ? 's' : ''), dur: dur, rpe: rpe, items: items, spec: muscuSpec(p, w) || {}, light: false, extra: true };
  };
  var gen = function (p, s, w) {
    var g = s.extra ? genExtra(p, s, w) : p.kind === 'muscu' ? genMuscu(p, s, w) : (p.kind === 'course' ? genRun(p, s, w) : genFixed(p, s, w));
    if (!g) return null;
    var ovs = p.overrides || {};
    g.items.forEach(function (it) { var ov = ovs[w + '|' + s.id + '|' + it.id]; if (ov) { if (ov.scheme) it.scheme = ov.scheme; if (ov.load) it.load = ov.load; if (ov.sets != null) it.sets = ov.sets; if (ov.reps != null) { it.reps = ov.reps; it.repsPlan = ov.reps; } if (ov.sets != null || ov.reps != null) it.scheme = it.sets + '×' + it.reps; if (ov.kg != null) { it.loadNum = ov.kg; it.load = kg(ov.kg); } if (ov.rpe != null) { it.rpeTxt = String(ov.rpe); it.rpePlan = ov.rpe; } it.edited = true; } });
    /* Exercice remplacé (overrides[...].swap) : nouvel identifiant « ~sw » pour que ses séries
       ne se mélangent pas à l'historique ni au 1RM de l'exercice d'origine */
    g.items = g.items.map(function (it) {
      var ov = ovs[w + '|' + s.id + '|' + it.id]; if (!ov || !ov.swap || !ov.swap.name || it.mode === 'libre') return it;
      var lb = libFind(ov.swap.name), sec = !!(lb && lb[5] === 'sec'), rp = !!(lb && (lb[5] === 'reps' || sec)), wasSec = it.unit === 's';
      var n2 = { id: it.id + '~sw', origId: it.id, origName: it.name, name: ov.swap.name, mode: rp ? 'reps' : 'kg', unit: sec ? 's' : '', sets: it.sets,
        reps: sec && !wasSec ? 30 : (!sec && wasSec ? 10 : it.reps), loadNum: null, rpePlan: it.rpePlan, rpeTxt: it.rpeTxt, rest: it.rest, note: '', swapped: true, info: ov.swap.all ? 'Remplacement appliqué aussi aux semaines suivantes' : '' };
      n2.repsPlan = n2.reps;
      var o2 = ovs[w + '|' + s.id + '|' + n2.id];
      if (o2) { if (o2.sets != null) n2.sets = o2.sets; if (o2.reps != null) { n2.reps = o2.reps; n2.repsPlan = o2.reps; } if (o2.kg != null) n2.loadNum = o2.kg; if (o2.rpe != null) { n2.rpePlan = o2.rpe; n2.rpeTxt = String(o2.rpe); } n2.edited = true; }
      n2.scheme = n2.sets + '×' + n2.reps; n2.load = n2.loadNum ? kg(n2.loadNum) : '';
      n2.ton = num(n2.sets, 0) * num(n2.reps, 0) * num(n2.loadNum, 0);
      return n2;
    });
    var dD = s.extra ? parseISO(s.date) : addDays(progStart(p), (w - 1) * 7 + effDay(p, s, w)), fl = dD ? painFlags(dD) : {};
    var isM = s.extra ? s.kind === 'muscu' : p.kind === 'muscu', isR = s.extra ? s.kind === 'course' : p.kind === 'course';
    if (fl.pats && isM) g.items.forEach(function (it) {
      var pt = exPattern(it.name), why = pt && fl.pats[pt]; if (!why || it.testMax) return;
      if (typeof it.sets === 'number' && it.sets > 1) { it.ton = it.ton ? it.ton * (it.sets - 1) / it.sets : 0; it.sets -= 1; it.scheme = it.sets + '×' + it.reps; }
      it.painAdj = why; it.info = 'Allégé : douleur ' + why + ', 1 série en moins' + (it.info ? ' · ' + it.info : '');
      it.note = 'Arrête la série si la douleur dépasse 3/10' + (it.note ? ' · ' + it.note : '');
    });
    if (fl.course && isR && g.runMin) {
      var nd = Math.max(10, Math.round(g.dur * 0.75));
      g.title = String(g.title).replace(g.dur + ' min', nd + ' min'); g.dur = nd; g.runMin = nd; g.meta = 'Allégée (douleur ' + fl.course + ') · ' + g.meta;
      g.items.forEach(function (it) { if (/min/.test(it.scheme || '')) it.scheme = nd + ' min'; });
    }
    g.ua = Math.round(g.dur * g.rpe);
    return g;
  };

  // ---------- État ----------
  var P = function () { if (!S.planif || !Array.isArray(S.planif.programs)) S.planif = { programs: [], deleted: [] }; return S.planif; };
  var state = { inbox: [] };
  Object.defineProperty(state, 'programs', { get: function () { return P().programs; }, set: function (v) { P().programs = v; } });
  var T0 = today0();
  var ui = { view: 'semaine', weekStart: iso(mondayOf(T0)), day: dow(T0), sel: null, month: iso(new Date(T0.getFullYear(), T0.getMonth(), 1)), mDay: iso(T0), hidden: {}, planId: null, planEx: null, edit: null, confirm: null, importOpen: false };
  try { var savedUi = JSON.parse(localStorage.getItem('planif-ui') || 'null'); if (savedUi && savedUi.hidden) ui.hidden = savedUi.hidden; } catch (e) {}
  var wide = function () { try { return window.innerWidth >= 1000; } catch (e) { return false; } };
  var visible = function () { return state.programs.filter(function (p) { return !ui.hidden[p.id]; }); };
  var progById = function (id) { for (var i = 0; i < state.programs.length; i++) if (state.programs[i].id === id) return state.programs[i]; return null; };
  var instancesOn = function (date, all) {
    var out = [], d = dow(date);
    (all ? state.programs : visible()).forEach(function (p) {
      (p.extras || []).forEach(function (e) { if (e.date !== iso(date)) return; var w2 = extraW(p, e), g2 = gen(p, e, w2); if (!g2) return; out.push({ p: p, s: e, w: w2, g: g2, moved: false, key: p.id + '|' + w2 + '|' + e.id, date: date, log: (p.logs || {})[w2 + '|' + e.id] || null }); });
      var w = weekOf(p, date); if (!w) return;
      sessList(p).forEach(function (s) { if (effDay(p, s, w) !== d) return; var g = gen(p, s, w); if (!g) return; out.push({ p: p, s: s, w: w, g: g, moved: effDay(p, s, w) !== (num(s.day, 0) | 0), key: p.id + '|' + w + '|' + s.id, date: date, log: (p.logs || {})[w + '|' + s.id] || null }); });
    });
    return out;
  };
  var weekStats = function (monday, all) {
    var o = { ua: 0, byProg: {}, done: 0, total: 0, runMin: 0, ton: 0, light: false };
    for (var i = 0; i < 7; i++) instancesOn(addDays(monday, i), all).forEach(function (x) {
      o.ua += x.g.ua; o.byProg[x.p.id] = (o.byProg[x.p.id] || 0) + x.g.ua; o.total++;
      if (x.log && x.log.done) o.done++;
      o.runMin += x.g.runMin || 0;
      x.g.items.forEach(function (it) { o.ton += it.ton || 0; });
      if (x.g.light) o.light = true;
    });
    for (var j = 0; j < 7; j++) cfOn(addDays(monday, j)).forEach(function (c) { var ua = Math.round(num(c.dur, 60) * num(c.rpe, 7)); o.ua += ua; o.byProg.__cf = (o.byProg.__cf || 0) + ua; o.cf = (o.cf || 0) + 1; });
    return o;
  };

  // ---------- Stockage : délégué à l'app (localStorage + Supabase) ----------
  var store = { mode: 'app' };
  var sortProgs = function (a) { return a.slice().sort(function (x, y) { return (x.createdAt || 0) - (y.createdAt || 0); }); };
  /* Chaque entrée du suivi (séance notée, modification, déplacement, ordre, séance ajoutée)
     est datée dans p.ts quand elle change : la synchro fusionne alors entrée par entrée. */
  var MAPF = ['logs', 'overrides', 'moves', 'orders'], baseMaps = {};
  var snapP = function (p) { var o = {}; MAPF.forEach(function (f) { var m = {}; Object.keys(p[f] || {}).forEach(function (k) { m[k] = JSON.stringify(p[f][k]); }); o[f] = m; }); var x = {}; (p.extras || []).forEach(function (e) { if (e && e.id) x[e.id] = JSON.stringify(e); }); o.extras = x; return o; };
  editBegin = function () { baseMaps = {}; state.programs.forEach(function (p) { if (p && p.id) baseMaps[p.id] = snapP(p); }); };
  var stampP = function (p) {
    var now = Date.now(), old = baseMaps[p.id] || null, cur = snapP(p); p.ts = p.ts || {};
    Object.keys(cur).forEach(function (f) { var a = old ? old[f] : {}, b = cur[f], ks = {}; Object.keys(a).forEach(function (k) { ks[k] = 1; }); Object.keys(b).forEach(function (k) { ks[k] = 1; }); Object.keys(ks).forEach(function (k) { if (a[k] !== b[k]) p.ts[f + '|' + k] = now; }); });
    baseMaps[p.id] = cur;
  };
  var persist = function (p) { stampP(p); p.updatedAt = Date.now(); P(); save(); };
  var removeStored = function (id) { var d = P(); d.deleted = (d.deleted || []).filter(function (z) { return z.id !== id; }).concat([{ id: id, at: Date.now() }]); save(); };
  var saveLocal = function () { save(); };

  // ---------- Racines ----------
  var STYLE = '<style>' + PLCSS + '</style>';
  var mainRoot = null, floatRoot = null, rootHandlers = [];
  var rootListen = function (type, fn) { rootHandlers.push([type, fn]); };
  var $id = function (id) { return (mainRoot && mainRoot.getElementById(id)) || (floatRoot && floatRoot.getElementById(id)) || null; };
  var activeIn = function () { var r = [mainRoot, floatRoot]; for (var i = 0; i < r.length; i++) { if (r[i] && r[i].activeElement) return r[i].activeElement; } return null; };
  (function () {
    var host = document.createElement('div'); host.id = 'pl-float'; document.body.appendChild(host);
    floatRoot = host.attachShadow({ mode: 'open' });
    floatRoot.innerHTML = STYLE + '<div id="sheet"></div><div id="run"></div><div id="toast" class="toast" role="status" hidden></div><div id="timer" class="timer" role="timer" aria-live="polite" hidden></div>';
    var vars = document.createElement('style');
    vars.textContent = ':root{--pl-or:#FF9F43;--pl-bl:#5AA9FF;--pl-vi:#C792EA;--pl-te:#7FE0C9;--pl-ye:#E8D36A;--pl-pk:#F59BC0;--pl-gy:#9FB4C7;--pl-db:#3D7BD9;--pl-rd:#FF8A80}' +
      ':root[data-theme="light"]{--pl-or:#B55A00;--pl-bl:#1F5FC4;--pl-vi:#7A3FB0;--pl-te:#12705C;--pl-ye:#7D6400;--pl-pk:#A82E66;--pl-gy:#4E6275;--pl-db:#1F4FA8;--pl-rd:#B3261E}' +
      '@media (prefers-color-scheme:light){:root[data-theme="auto"]{--pl-or:#B55A00;--pl-bl:#1F5FC4;--pl-vi:#7A3FB0;--pl-te:#12705C;--pl-ye:#7D6400;--pl-pk:#A82E66;--pl-gy:#4E6275;--pl-db:#1F4FA8;--pl-rd:#B3261E}}';
    document.head.appendChild(vars);
  })();
  // ---------- Toast ----------
  // ---------- Minuteur de repos ----------
  var tm = { end: 0, iv: null, ctx: null, label: '' };
  var parseRest = function (t) { var ns = (String(t).match(/\d+(?:[.,]\d+)?/g) || []).map(function (v) { return num(v); }); if (!ns.length) return 120; var avg = ns.reduce(function (a, b) { return a + b; }, 0) / ns.length; return /min/.test(t) ? Math.round(avg * 60) : Math.round(avg); };
  var beep = function () { if (tm.mute) return; try { if (!tm.ctx) return; [0, 0.25, 0.5].forEach(function (d) { var o = tm.ctx.createOscillator(), g = tm.ctx.createGain(); o.frequency.value = 880; g.gain.value = 0.15; o.connect(g); g.connect(tm.ctx.destination); o.start(tm.ctx.currentTime + d); o.stop(tm.ctx.currentTime + d + 0.15); }); } catch (e) {} try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {} };
  var drawTimer = function () {
    var el = $id('timer'), runOn = !!(ui.run && ui.run.open); if (!tm.end) { el.hidden = true; return; }
    var left = Math.round((tm.end - Date.now()) / 1000), a = Math.abs(left), txt = (left < 0 ? '+' : '') + Math.floor(a / 60) + ':' + pad(a % 60);
    var rt = $id('runt'); if (rt) { rt.textContent = txt; rt.className = 'runt' + (left <= 0 ? ' end' : ''); var rl = $id('runl'); if (rl) rl.textContent = left <= 0 ? 'Repos terminé : à toi !' : tm.label; }
    if (runOn) { el.hidden = true; if (left <= 0 && left > -5 && !tm.beeped) { tm.beeped = true; beep(); } return; }
    el.hidden = false;
    if (!el.firstChild) el.innerHTML = '<span class="t"></span><span class="small lbl" style="color:#3A434D"></span><button data-a="rest-add">+30 s</button><button data-a="rest-stop" aria-label="Arrêter le minuteur">Stop</button>';
    var te = el.querySelector('.t'); te.textContent = txt; te.className = 't' + (left <= 0 ? ' end' : '');
    el.querySelector('.lbl').textContent = left <= 0 ? 'Repos terminé' : tm.label;
    if (left <= 0 && left > -5 && !tm.beeped) { tm.beeped = true; beep(); }
  };
  var startTimer = function (txt) {
    var sec = parseRest(txt); tm.end = Date.now() + sec * 1000; tm.beeped = false; tm.label = 'Repos ' + txt;
    try { if (!tm.ctx) { var AC = window.AudioContext || window.webkitAudioContext; if (AC) tm.ctx = new AC(); } if (tm.ctx && tm.ctx.resume) tm.ctx.resume(); } catch (e) {}
    clearInterval(tm.iv); tm.iv = setInterval(drawTimer, 250); drawTimer();
  };
  var toastT = null;
  var toast = function (msg) { var t = $id('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 2600); };

  // ---------- Rendu : commun ----------
  var colorOf = function (p) { var c = p.color || KIND[p.kind].color; return PALV[String(c).toUpperCase()] || c; };
  var pillHtml = function (p, extra) { var c = colorOf(p); return '<span class="pill" style="color:' + c + ';background:' + tint(c, 0.14) + '"><span class="dot" style="background:' + c + '"></span>' + esc(extra || p.name || KIND[p.kind].label) + '</span>'; };
  var statusHtml0 = function () {
    var m = { sync: ['#7FE0C9', 'Synchronisé'], loading: ['#9AA4AE', 'Connexion…'], slow: ['#FFB357', 'Données pas encore joignables'], error: ['#FFB357', 'Synchro interrompue'], local: ['#9AA4AE', 'Enregistré sur cet appareil'] }[store.status] || ['#9AA4AE', ''];
    return '<span class="status"><span class="dot" style="background:' + m[0] + '"></span>' + m[1] + '</span>';
  };
  var VIEWS = [['semaine', 'Semaine', ICON.week], ['programmes', 'Programmes', ICON.progs], ['analyse', 'Analyse', ICON.chart]];
  var headerHtml = function () {
    var subs = VIEWS.map(function (v) { var on = ui.view === v[0] || (v[0] === 'programmes' && ui.view === 'plan'); return '<button class="' + (on ? 'on' : '') + '" data-a="view" data-v="' + v[0] + '" aria-pressed="' + on + '">' + v[1] + '</button>'; }).join('');
    var chips = state.programs.length ? '<div class="scrollx" role="group" aria-label="Programmes affichés">' + state.programs.map(function (p) { var on = !ui.hidden[p.id], c = colorOf(p); return '<button class="chip' + (on ? ' on' : '') + '" data-a="toggle" data-id="' + p.id + '" aria-pressed="' + on + '" style="' + (on ? 'border-color:' + c + ';background:' + tint(c, 0.14) : '') + '"><span class="dot" style="background:' + (on ? c : 'var(--mu)') + '"></span>' + esc(p.name || KIND[p.kind].label) + '</button>'; }).join('') + '</div>' : '';
    var showChips = chips && (ui.view === 'semaine' || ui.view === 'mois' || ui.view === 'analyse');
    return '<div class="phead row between" style="align-items:flex-end"><div><div class="eyebrow">Muscu · course · activités</div><h1>Plan</h1></div><button class="btn sm primary" data-a="today">' + ICON.clock + 'Aujourd’hui</button></div>' +
      '<nav class="subnav" aria-label="Vues du plan">' + subs + '</nav>' + (showChips ? chips : '');
  };
  var headerHtml0 = function () {
    var W = wide();
    var h = '<header class="row between" style="align-items:flex-end;gap:10px 16px"><div class="col" style="gap:4px;min-width:0"><span class="eyebrow">Muscu · course · activités</span><h1>Planificateur d’entraînement</h1></div><div class="row">' + statusHtml() + '<button class="btn primary" data-a="today">' + ICON.clock + 'Aujourd’hui</button></div></header>';
    var tabs = W ? '<nav class="tabs" aria-label="Vues">' + VIEWS.map(function (v) { var on = ui.view === v[0] || (v[0] === 'programmes' && ui.view === 'plan'); return '<button class="tab' + (on ? ' on' : '') + '" data-a="view" data-v="' + v[0] + '" aria-pressed="' + on + '">' + v[1] + '</button>'; }).join('') + '</nav>' : '';
    var chips = state.programs.length ? '<div class="scrollx" role="group" aria-label="Programmes affichés">' + state.programs.map(function (p) { var on = !ui.hidden[p.id], c = colorOf(p); return '<button class="chip' + (on ? ' on' : '') + '" data-a="toggle" data-id="' + p.id + '" aria-pressed="' + on + '" style="' + (on ? 'border-color:' + c + ';background:' + tint(c, 0.14) : '') + '"><span class="dot" style="background:' + (on ? c : '#4A525C') + '"></span>' + esc(p.name || KIND[p.kind].label) + '</button>'; }).join('') + '</div>' : '';
    var showChips = chips && (ui.view === 'semaine' || ui.view === 'mois' || ui.view === 'analyse');
    if (!tabs && !showChips) return h + inboxHtml();
    h += inboxHtml();
    return h + '<div class="row between" style="gap:10px">' + tabs + (showChips ? '<div class="grow" style="min-width:0;max-width:100%">' + chips + '</div>' : '') + '</div>';
  };
  var inboxHtml = function () {
    return '';
    return state.inbox.map(function (m) {
      var upd = m.programs.some(function (q) { return q && q.id && progById(q.id); }); var names = m.programs.map(function (q) { return esc(q.name || 'Programme'); }).join(', '); var rem = (m.remove || []).map(progById).filter(Boolean); if (rem.length) { upd = true; names += (names ? ' · ' : '') + 'retirer : ' + rem.map(function (q) { return esc(q.name); }).join(', '); } if (!names) return '';
      return '<div class="alert" style="border-color:var(--ok);background:rgba(127,224,201,.08);color:var(--tx);flex-wrap:wrap;align-items:center"><span class="grow"><b>' + (upd ? 'Mise à jour préparée par Claude (ton suivi est conservé) :' : 'Préparé par Claude :') + '</b> ' + names + (m.note ? '<br><span class="small mu">' + esc(m.note) + '</span>' : '') + '</span><span class="row"><button class="btn sm primary" data-a="inbox-add" data-id="' + esc(m._id) + '">' + (upd ? 'Mettre à jour' : 'Ajouter') + '</button><button class="btn sm ghost" data-a="inbox-no" data-id="' + esc(m._id) + '">Ignorer</button></span></div>';
    }).join('');
  };
  var bnavHtml = function () {
    return '';
    return '<nav class="bnav" aria-label="Vues">' + VIEWS.map(function (v) { var on = ui.view === v[0] || (v[0] === 'programmes' && ui.view === 'plan'); return '<button class="' + (on ? 'on' : '') + '" data-a="view" data-v="' + v[0] + '" aria-pressed="' + on + '">' + v[2] + v[1] + '</button>'; }).join('') + '</nav>';
  };
  var emptyHtml = function () {
    return '<section class="card empty"><h2>Commence par créer un programme</h2><p class="t2">Choisis un type, pars d’un modèle (force, hypertrophie, reprise de course…), entre tes séances : toutes les semaines du cycle se calculent automatiquement.</p>' +
      '<div class="col" style="width:100%;max-width:560px">' + Object.keys(KIND).map(function (k) { return '<button class="kindbtn" data-a="new" data-kind="' + k + '"><span class="dot" style="width:14px;height:14px;background:' + KIND[k].color + '"></span><span><b>' + KIND[k].label + '</b><span>' + KIND[k].desc + '</span></span></button>'; }).join('') + '</div>' +
      '<div class="hr" style="width:100%"></div><p class="t2">Pour faire des essais tout de suite :</p><button class="btn" data-a="example">Charger un exemple complet (muscu, course, CrossFit, HSR)</button></section>';
  };

  // ---------- Vue Semaine ----------
  var adviceFor = function (x) {
    var rec = x.log; if (!rec || !rec.rpe || x.s.extra) return null;
    var d = rec.rpe - x.g.rpe, k = x.p.kind;
    if (k === 'muscu') {
      if (d >= 1) return { warn: true, text: 'Plus dur que prévu (RPE ' + rec.rpe + ' pour ' + fmtN(x.g.rpe) + '). Garde les mêmes charges la semaine prochaine' + (d >= 2 ? ', et note tes séries réelles pour recaler les 1RM concernés.' : '.'), adj: 0 };
      if (d <= -1) return { warn: false, text: 'Plus facile que prévu (RPE ' + rec.rpe + ' pour ' + fmtN(x.g.rpe) + '). Note tes séries réelles sur les mouvements principaux : l’outil proposera d’ajuster ton 1RM exercice par exercice.', adj: 0 };
      return { warn: false, text: 'Conforme au plan : la progression prévue est maintenue.', adj: 0 };
    }
    if (k === 'course') {
      if (rec.rpe >= x.g.rpe + 2) return { warn: true, text: 'Plus dur que prévu pour cette séance : garde la même durée la semaine prochaine et ralentis l’allure.', adj: 0 };
      return { warn: false, text: 'Séance validée : la progression prévue est maintenue.', adj: 0 };
    }
    if (d >= 2) return { warn: true, text: 'Effort bien plus élevé que prévu : n’augmente pas la charge à la prochaine séance.', adj: 0 };
    return { warn: false, text: 'Conforme à ce qui était prévu.', adj: 0 };
  };
  var cfCardsHtml = function (d) {
    return cfOn(d).map(function (c) { var ua = Math.round(num(c.dur, 60) * num(c.rpe, 7)); return '<button class="sess" data-a="cf-open" data-id="' + esc(c.id) + '" style="padding:14px">' + pillHtml(CFP, 'CrossFit') + '<span class="t" style="font-size:15px">' + esc(c.name || 'Séance CrossFit') + '</span><span class="m">' + fmtN(num(c.dur, 60)) + ' min · RPE ' + fmtN(num(c.rpe, 7)) + (c.est ? ' (estimé)' : '') + ' · ' + ua + ' UA</span><span class="done-tag">' + ICON.check + 'Faite</span></button>'; }).join('');
  };
  var sessCardHtml = function (x, big) {
    var c = colorOf(x.p), on = ui.sel === x.key;
    var done = x.log && x.log.done;
    return '<button class="sess' + (on ? ' on' : '') + '" data-a="sel" data-key="' + esc(x.key) + '" data-day="' + dow(x.date) + '" aria-pressed="' + on + '" style="' + (on ? 'border-color:' + c : '') + (big ? ';padding:14px' : '') + '">' + pillHtml(x.p) +
      '<span class="t"' + (big ? ' style="font-size:15px"' : '') + '>' + esc(x.g.title) + '</span><span class="m">' + esc(x.g.meta) + '</span>' + (x.moved ? '<span class="small" style="color:var(--warn)">Déplacée (prévue ' + JOURSL[num(x.s.day, 0) | 0].toLowerCase() + ')</span>' : '') +
      (done ? '<span class="done-tag">' + ICON.check + 'Faite' + (x.log.rpe ? ' · RPE ' + x.log.rpe : '') + '</span>' : '') + '</button>';
  };
  // Saisie de ce qui a été réellement fait (série de référence : la plus lourde)
  var rirOf = function (t) { var p = String(t || '').split(/[–-]/).map(function (v) { return Math.max(0, 10 - num(v)); }); if (!t) return ''; return p.length > 1 ? Math.min(p[0], p[1]) + '–' + Math.max(p[0], p[1]) : String(p[0]); };
  var cell = function (l, v, c) { return '<div class="pc"><span class="pl">' + l + '</span><span class="pv"' + (c ? ' style="color:' + c + '"' : '') + '>' + v + '</span></div>'; };
  // Échauffement progressif pour les mouvements principaux
  var warmHtml = function (it) {
    if (it.mode !== 'pct' || !it.main || !it.loadNum || it.loadNum < 30) return '';
    var w = it.loadNum, seen = {}, steps = [];
    [[0, 8], [0.4, 5], [0.6, 3], [0.8, 2]].forEach(function (z) { var l = z[0] ? Math.max(20, r25(w * z[0])) : 20; if (l >= w || seen[l]) return; seen[l] = 1; steps.push(fmtN(l) + '×' + z[1]); });
    if (String(it.load).indexOf('visé') === 0) steps.push(fmtN(r25(w * 0.9)) + '×1');
    return steps.length ? '<div class="small t2" style="margin-top:8px">Échauffement : ' + steps.join(' · ') + ' kg</div>' : '';
  };
  // Exercice déjà noté (séries saisies ou « pas fait ») : on replie échauffement et consignes
  var isDoneIt = function (x, it) { var r = ((x.log || {}).ex || {})[it.id]; return !!(r && (r.skipped || getSets(r).length)); };
  /* Exercices de même objectif : même schéma de mouvement, puis même groupe musculaire */
  var altFor = function (name) {
    var lb = libFind(name), pat = lb ? lb[4] : exPattern(name), grp = lb ? lb[3] : null, me = lb ? lb[0] : null, sc = [];
    LIB.forEach(function (l) { if (l[0] === me) return; var v = (pat && l[4] === pat ? 2 : 0) + (grp && l[3] === grp ? 1 : 0); if (v > 0) sc.push([v, l]); });
    sc.sort(function (a, b) { return b[0] - a[0]; });
    return sc.slice(0, 14).map(function (z) { return libName(z[1]); });
  };
  var swapWeeks = function (x, oid, all) {
    var out = [x.w]; if (!all || x.s.extra) return out;
    for (var w = x.w + 1; w <= progLen(x.p); w++) { var lg = (x.p.logs || {})[w + '|' + x.s.id]; if (lg && lg.ex && (lg.ex[oid] || lg.ex[oid + '~sw'])) continue; out.push(w); }
    return out;
  };
  var doSwap = function (x, it, name, all) {
    var p = x.p, oid = it.origId || it.id; p.overrides = p.overrides || {};
    swapWeeks(x, oid, all === true || (name == null && it.swapped)).forEach(function (w) {
      var k = w + '|' + x.s.id + '|' + oid, o = Object.assign({}, p.overrides[k] || {});
      if (name == null) { if (w !== x.w && !(o.swap && it.swapped && o.swap.name === it.name)) return; delete o.swap; delete p.overrides[w + '|' + x.s.id + '|' + oid + '~sw']; }
      else o.swap = { name: name, all: !!all };
      if (Object.keys(o).length) p.overrides[k] = o; else delete p.overrides[k];
    });
    persist(p);
  };
  var swapPanelHtml = function (x, it, ek, act) {
    var alts = altFor(it.origName || it.name).filter(function (n) { return n !== it.name; });
    return '<div class="sub swp" style="margin-top:8px"><b class="small">Remplacer ' + esc(it.name) + ' par un exercice de même objectif</b>' +
      (alts.length ? '<div class="xchips">' + alts.map(function (n) { return '<button class="chip xchip" data-a="' + act + '" data-key="' + esc(ek) + '" data-n="' + esc(n) + '">' + esc(n) + '</button>'; }).join('') + '</div>' : '') +
      '<div class="row" style="flex-wrap:nowrap"><input class="in" data-swn="1" list="pl-lib3" autocomplete="off" placeholder="Ou un autre exercice…" style="flex:1;min-width:0"><button class="btn sm" data-a="' + act + '" data-key="' + esc(ek) + '" data-n="">Choisir</button></div>' +
      (x.s.extra || act !== 'sw-pick' ? '' : '<label class="row small" style="gap:8px;cursor:pointer"><input type="checkbox" data-swall="1"' + (ui.swapAll ? ' checked' : '') + ' style="width:20px;height:20px"> Aussi pour les semaines suivantes de cette séance</label>') +
      '<span class="small mu">Séries, reps, RPE et repos sont gardés ; la charge est à choisir. Les séries notées comptent pour le nouvel exercice, pas pour l’ancien.</span>' +
      '<div class="row"><button class="btn sm ghost" data-a="' + (act === 'sw-pick' ? 'sw-cancel' : 'run-swcancel') + '">Annuler</button></div>' + libDatalist('pl-lib3') + '</div>';
  };
  var swapBtnHtml = function (x, it, ek) {
    if (!isMuscuInst(x) || it.mode === 'libre' || isDoneIt(x, it)) return '';
    return '<button class="btn sm ghost" data-a="sw-open" data-key="' + esc(ek) + '" aria-label="Remplacer ' + esc(it.name) + '">⇄</button>';
  };
  var muscuItemHtml = function (x, it) {
    var c = colorOf(x.p), ek = x.key + '|' + it.id, editing = ui.edit === ek, ov = (x.p.overrides || {})[x.w + '|' + x.s.id + '|' + it.id];
    var h = '<div class="ex' + (((x.log || {}).ex || {})[it.id] && ((x.log || {}).ex || {})[it.id].skipped ? ' skipped' : '') + '"><div class="exh">' + (ui.reorder === x.key ? '<button class="btn sm ghost icon" data-a="mv-up" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '" aria-label="Monter ' + esc(it.name) + '">↑</button><button class="btn sm ghost icon" data-a="mv-down" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '" aria-label="Descendre ' + esc(it.name) + '">↓</button>' : '') + '<span class="n">' + esc(it.name) + '</span>' + (it.edited ? '<span class="tag">modifié</span>' : '') + (editing || ui.reorder === x.key ? '' : swapBtnHtml(x, it, ek) + '<button class="btn sm b-edit" data-a="ov-edit" data-key="' + esc(ek) + '" aria-label="Modifier ' + esc(it.name) + ' pour cette semaine">Modifier</button>') + '</div>';
    if (it.swapped) h += '<div class="swtag small"><span>⇄ Remplace <b>' + esc(it.origName) + '</b></span>' + (isDoneIt(x, it) ? '' : '<button class="btn sm ghost" data-a="sw-undo" data-key="' + esc(ek) + '">Revenir à ' + esc(it.origName) + '</button>') + '</div>';
    if (ui.swap === ek) h += swapPanelHtml(x, it, ek, 'sw-pick');
    if (it.mode === 'libre') h += '<div class="small t2">' + esc(it.scheme) + (it.note ? ' · ' + esc(it.note) : '') + '</div>';
    else {
      var adjTxt = Math.abs(num(it.adjKg, 0)) >= 0.25 ? '<small style="color:var(--ok)">ajusté ' + (it.adjKg > 0 ? '+' : '') + fmtN(it.adjKg) + ' kg</small>' : '';
      var chg = it.mode === 'reps' ? 'PDC' : (it.loadNum ? fmtN(it.loadNum) + '<small> kg</small>' + adjTxt : (String(it.load).indexOf('%') >= 0 ? esc(it.load) : '—'));
      if (it.mode === 'pct' && String(it.load).indexOf('visé') === 0) chg = fmtN(it.loadNum) + '<small> kg</small>';
      h += '<div class="pgrid">' + cell('Séries', esc(it.sets)) + cell('Reps', esc(it.reps)) + cell(it.mode === 'pct' && String(it.load).indexOf('visé') === 0 ? 'Charge visée' : 'Charge', chg, c) + cell('RPE', esc(it.rpeTxt || '—') + (it.rpeTxt ? '<small>' + rirOf(it.rpeTxt) + ' en réserve</small>' : '')) + '</div>' +
        (isDoneIt(x, it) ? '' : warmHtml(it)) + '<div class="exmeta"><button class="restbtn" data-a="rest" data-r="' + esc(it.rest || '') + '" aria-label="Lancer le minuteur de repos">' + ICON.clock + 'Repos ' + esc(it.rest || '—') + '</button>' + (it.info ? '<span class="prog">' + esc(it.info) + '</span>' : '') + '</div>' + (function () { if (isDoneIt(x, it)) return ''; var nt = it.mode === 'pct' ? (findEx(x.p, it.id) || {}).note : it.note; if (!nt) return ''; var a = String(it.info || '').toLowerCase(); var li = String(nt).split(/\s+·\s+/).filter(function (t) { t = t.trim(); return t && a.indexOf(t.toLowerCase().slice(0, 14)) < 0; }); return li.length ? '<ul class="cues" style="border-left-color:' + c + '">' + li.map(function (t) { return '<li>' + esc(t.trim()) + '</li>'; }).join('') + '</ul>' : ''; })();
    }
    if (editing) {
      var nf = function (id, l, v, ph) { return '<label class="field"><span>' + l + '</span><input class="in" id="' + id + '" type="number" inputmode="decimal" step="any" value="' + (v == null ? '' : esc(v)) + '" placeholder="' + esc(ph == null ? '' : ph) + '"></label>'; };
      h += '<div class="sub" style="margin-top:8px"><b class="small">Changer pour cette séance uniquement</b><div class="fgrid" style="grid-template-columns:repeat(4,minmax(0,1fr))">' + nf('ov-sets', 'Séries', ov && ov.sets, it.sets) + nf('ov-reps', 'Reps', ov && ov.reps, it.reps) + (it.mode === 'reps' || it.mode === 'libre' ? '' : nf('ov-kg', 'Charge kg', ov && ov.kg, it.loadNum)) + nf('ov-rpe', 'RPE', ov && ov.rpe, it.rpePlan) + '</div>' +
        '<div class="row"><button class="btn sm primary" data-a="ov-save" data-key="' + esc(ek) + '">Enregistrer</button>' + (ov ? '<button class="btn sm ghost" data-a="ov-clear" data-key="' + esc(ek) + '">Revenir au plan</button>' : '') + '<button class="btn sm ghost" data-a="ov-cancel">Annuler</button></div><span class="small mu">Champ vide = valeur du plan. Pour changer toutes les semaines : Programmes → Modifier.</span></div>';
    }
    h += realHtml(x, it);
    return h + '</div>';
  };
  var realHtml = function (x, it) {
    if (!isMuscuInst(x) || ['pct', 'kg', 'reps'].indexOf(it.mode) < 0) return '';
    var raw = ((x.log || {}).ex || {})[it.id] || {}, sets = getSets(raw), rk = x.key + '|' + it.id, has = sets.length > 0, isR = it.mode === 'reps';
    if (raw.skipped && ui.realEdit !== rk) return '<div class="realrow skip"><span>✕ Non réalisé</span><button class="btn sm ghost" data-a="unskip" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '">Annuler</button></div>';
    if (!has && ui.realEdit !== rk) return '<div class="realrow acts"><button class="btn sm b-ok" data-a="lg-plan" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '">' + ICON.check + 'Comme prévu</button><button class="btn sm b-log" data-a="real-edit" data-k="' + esc(rk) + '">Série par série</button><button class="btn sm b-skip" data-a="skip" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '">Pas fait</button></div>';
    if (has && ui.realEdit !== rk) {
      var fs = function (z) { return (isR ? (z.reps != null ? z.reps : '?') + (z.kg ? ' (+' + fmtN(num(z.kg)) + ' kg)' : '') : (z.kg != null ? fmtN(num(z.kg)) + ' kg' : '?') + ' × ' + (z.reps != null ? z.reps : '?')) + (z.rpe ? ' · RPE ' + fmtN(num(z.rpe)) : ''); };
      var same = sets.every(function (z) { return fs(z) === fs(sets[0]); });
      var sum = same ? sets.length + ' série' + (sets.length > 1 ? 's' : '') + ' : ' + fs(sets[0]) : sets.map(function (z, i) { return 'S' + (i + 1) + ' ' + fs(z); }).join(' · ');
      var out = '<div class="realrow done"><span>' + ICON.check + ' Fait : <b>' + esc(sum) + '</b></span><button class="btn sm b-log" data-a="real-edit" data-k="' + esc(rk) + '">Corriger</button></div>';
      return out + realResults(x, it, flat(raw));
    }
    var d = ui.realDraft || [];
    var rows = d.map(function (z, i) {
      var inp = function (f, ph) { return '<input class="in" type="number" inputmode="decimal" step="any" data-sd="' + i + '|' + f + '" value="' + (z[f] == null ? '' : esc(z[f])) + '" placeholder="' + esc(ph == null ? '' : ph) + '" aria-label="Série ' + (i + 1) + ' ' + f + '" style="min-height:42px;padding:0 6px;text-align:center">'; };
      var on = (ui.sdSel || 0) === i;
      return '<button class="snum' + (on ? ' on' : '') + '" data-a="sd-sel" data-i="' + i + '" aria-pressed="' + on + '" aria-label="Choisir la série ' + (i + 1) + '">S' + (i + 1) + '</button>' + inp('kg', isR ? '0' : it.loadNum) + inp('reps', it.repsPlan) + inp('rpe', it.rpePlan) + '<button class="btn sm ghost icon" data-a="set-del" data-i="' + i + '" aria-label="Retirer la série ' + (i + 1) + '" style="width:36px;min-height:36px">×</button>';
    }).join('');
    return '<div class="sub" style="margin-top:8px"><b class="small">Ce que j’ai fait, série par série</b><span class="small mu">Pré-rempli avec le prévu : change seulement ce qui diffère.</span><div class="sgrid"><span></span><span class="pl">' + (isR ? 'Lest kg' : 'Charge kg') + '</span><span class="pl">Reps</span><span class="pl">RPE</span><span></span>' + rows + '</div>' +
      (function () { var sel = Math.min(ui.sdSel || 0, Math.max(0, d.length - 1)), st = num((findEx(x.p, it.id) || {}).step, 0) || 2.5;
        return '<div class="col" style="gap:6px"><span class="small mu">' + (d.length > 1 ? 'S' + (sel + 1) + (sel < d.length - 1 ? ' et suivantes' : '') : 'Série') + ' (touche S1, S2… pour choisir)</span><div class="sdq">' +
          [['kg', -st, '−' + fmtN(st) + ' kg'], ['kg', st, '+' + fmtN(st) + ' kg'], ['reps', -1, '−1 rep'], ['reps', 1, '+1 rep']].map(function (q) { return '<button class="btn sm" data-a="sd-step" data-f="' + q[0] + '" data-d="' + q[1] + '">' + q[2] + '</button>'; }).join('') + '</div></div>'; })() +
      '<div class="row"><button class="btn sm ghost" data-a="set-add">' + ICON.plus + 'Série</button><span class="grow"></span><button class="btn sm ghost" data-a="real-close">Annuler</button><button class="btn sm primary" data-a="real-save" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '">Enregistrer</button></div></div>';
  };
  // séries réalisées : ancien format (une série) ou liste
  // 1RM estimé recalé sur le plan : faire le prévu au RPE prévu = 1RM inchangé
  var adjE1 = function (it, r) {
    var e = e1rm(r.kg, r.reps, r.rpe || it.rpePlan); if (!e) return null;
    var pe = it.loadNum && it.repsPlan && it.orm ? e1rm(it.loadNum, it.repsPlan, it.rpePlan) : null;
    return pe ? it.orm * e / pe : e;
  };
  var getSets = function (r) { if (!r) return []; if (Array.isArray(r.sets)) return r.sets; return (r.kg != null || r.reps != null) ? [{ kg: r.kg, reps: r.reps, rpe: r.rpe }] : []; };
  var flat = function (r) {
    var ss = getSets(r); if (!ss.length) return {};
    /* Série retenue : la plus lourde ; à charge égale, la plus dure (RPE le plus haut,
       puis le moins de reps). Le RPE prévu correspond à la dernière série, la plus dure :
       retenir la première, plus fraîche, ferait croire à un 1RM trop haut. Sans charge
       (poids du corps), on garde la série avec le plus de reps. */
    var best = null;
    ss.forEach(function (z) {
      if (!best) { best = z; return; }
      var kz = num(z.kg, 0), kb = num(best.kg, 0);
      if (kz > kb) best = z;
      else if (kz === kb) {
        if (kz > 0) { var rz = num(z.rpe, 0), rb = num(best.rpe, 0); if (rz > rb || (rz === rb && num(z.reps, 0) < num(best.reps, 0))) best = z; }
        else if (num(z.reps, 0) > num(best.reps, 0)) best = z;
      }
    });
    return { kg: best.kg, reps: best.reps, rpe: best.rpe, plan: r.plan, n: ss.length };
  };
  var realResults = function (x, it, r) {
    var h = '';
    if (r.plan) return '';
    var raw0 = ((x.log || {}).ex || {})[it.id] || {};
    var ign = '<button class="btn sm ghost" data-a="noadj" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '">' + (raw0.noAdj ? 'En tenir compte' : 'Ne pas en tenir compte') + '</button>';
    if (it.mode === 'pct' && it.main && r.kg && r.reps) {
      var exo = findEx(x.p, it.id), now = tmTrace(x.p, exo, x.w).f, nxt = tmTrace(x.p, exo, x.w + 1).f, o0 = num(exo.orm), hp = horsPlan(muscuSpec(x.p, x.w), x.s);
      if (raw0.noAdj) h += '<div class="lgres"><span>Séance ignorée pour l’ajustement.</span>' + ign + '</div>';
      else if (o0 && hp && !(num(r.rpe) >= 7)) h += '<div class="lgres"><span>Pour que cette séance recale ton 1RM, note le RPE de ta meilleure série (7 ou plus : en dessous, l’estimation n’est pas fiable).</span></div>';
      else if (o0) { var dp = (nxt / now - 1) * 100;
        h += '<div class="lgres"><span>' + (Math.abs(dp) < 0.3 ? (hp ? 'Comparée à ta semaine de travail la plus proche : ton 1RM de travail ne change pas.' : 'Conforme au plan : la suite ne change pas.') : '1RM de travail ' + kg(Math.round(o0 * now * 2) / 2) + ' → <b>' + kg(Math.round(o0 * nxt * 2) / 2) + '</b> (' + (dp > 0 ? '+' : '') + fmtN(dp) + ' %) : les charges des semaines suivantes s’ajustent.') + '</span>' + (Math.abs(dp) >= 0.3 ? ign : '') + '</div>'; }
    }
    if (it.mode === 'kg' && r.kg) {
      var exk = findEx(x.p, it.id);
      if (raw0.noAdj) h += '<div class="lgres"><span>Séance ignorée pour l’ajustement.</span>' + ign + '</div>';
      else if (it.loadNum == null || Math.abs(num(r.kg) - it.loadNum) >= 0.5) h += '<div class="lgres"><span>' + (it.loadNum ? 'Prévu ' + kg(it.loadNum) + ', fait ' + kg(num(r.kg)) : 'Fait ' + kg(num(r.kg))) + ' : la suite repart de ta charge réelle.</span>' + ign + '</div>';
    }
    if (it.testMax && r.reps) h += '<div class="lgres"><span>Test : <b>' + num(r.reps) + ' reps unbroken</b>.</span></div>';
    else if (it.mode === 'reps' && r.reps && it.repsPlan && num(r.reps) > it.repsPlan) h += '<div class="lgres"><span>' + num(r.reps) + ' reps faites pour ' + it.repsPlan + ' prévues</span><button class="btn sm" data-a="reps-set" data-key="' + esc(x.key) + '" data-ex="' + esc(it.id) + '" data-v="' + num(r.reps) + '">Repartir de ' + num(r.reps) + ' reps</button></div>';
    return h;
  };
  // Historique d'un exercice (par nom) dans un programme muscu
  var exHistory = function (p, name) {
    var out = [], L = progLen(p);
    for (var w = 1; w <= L; w++) (p.sessions || []).concat(extrasIn(p, w)).forEach(function (s) {
      var lg = (p.logs || {})[w + '|' + s.id]; if (!lg || !lg.ex) return;
      (s.exercises || []).forEach(function (ex0) {
        var ex = s.extra ? (ex0.ref ? findEx(p, ex0.ref) : null) : ex0; if (!ex) return;
        if (ex.name !== name) return; var r = flat(lg.ex[ex.id]); if (r.kg == null && r.reps == null) return;
        var g = gen(p, s, w), it = g ? g.items.filter(function (z) { return z.id === ex.id; })[0] : null;
        var date = s.extra ? parseISO(s.date) : addDays(progStart(p), (w - 1) * 7 + effDay(p, s, w));
        out.push({ w: w, date: date, mode: ex.mode, plan: it ? it.load : '', planScheme: it ? it.scheme : '', planNum: it ? it.loadNum : null, kg: r.kg, reps: r.reps, rpe: r.rpe, e1: ex.mode === 'pct' ? (it ? adjE1(it, r) : e1rm(r.kg, r.reps, r.rpe || 8)) : null, ex: ex });
      });
      /* exercices remplacés (« ~sw ») et exercices libres des séances ajoutées */
      if (Object.keys(lg.ex).some(function (k0) { return /~sw$/.test(k0) || (s.extra && !findEx(p, k0)); })) {
        var g2 = gen(p, s, w), d2 = s.extra ? parseISO(s.date) : addDays(progStart(p), (w - 1) * 7 + effDay(p, s, w));
        (g2 ? g2.items : []).forEach(function (it2) {
          if (it2.name !== name || !(it2.swapped || (s.extra && !findEx(p, it2.id)))) return;
          var r2 = flat(lg.ex[it2.id]); if (r2.kg == null && r2.reps == null) return;
          out.push({ w: w, date: d2, mode: it2.mode, plan: it2.load, planScheme: it2.scheme, planNum: it2.loadNum, kg: r2.kg, reps: r2.reps, rpe: r2.rpe, e1: null, ex: { id: it2.id, name: it2.name, mode: it2.mode } });
        });
      }
    });
    return out;
  };
  var moveHtml = function (x) {
    var cur = effDay(x.p, x.s, x.w), base = num(x.s.day, 0) | 0;
    if (ui.moveOpen !== x.key) return '<div class="row" style="gap:8px"><button class="btn sm ghost" data-a="move-open" data-key="' + esc(x.key) + '">' + ICON.week + 'Déplacer cette séance</button>' + (cur !== base ? '<span class="small" style="color:var(--warn)">Déplacée (prévue le ' + JOURSL[base].toLowerCase() + ')</span>' : '') + '</div>';
    return '<div class="col" style="gap:6px"><span class="small mu">Jour de cette séance (semaine ' + x.w + ' uniquement)' + (cur !== base ? ' · prévue initialement le ' + JOURSL[base].toLowerCase() : '') + '</span><div class="row" role="group" aria-label="Déplacer la séance" style="gap:4px;flex-wrap:nowrap">' +
      JOURS.map(function (j, i) { var on = i === cur; return '<button class="btn sm" data-a="move" data-key="' + esc(x.key) + '" data-day="' + i + '" aria-pressed="' + on + '" aria-label="Déplacer au ' + JOURSL[i].toLowerCase() + '" style="flex:1 1 0;min-width:0;padding:0;min-height:40px;' + (on ? 'background:var(--tx);color:var(--bg);border-color:var(--tx)' : (i === base ? 'border-color:var(--bd2)' : '')) + '">' + j.slice(0, 2) + '</button>'; }).join('') +
      '</div><span class="small mu">Pour changer le jour sur tout le cycle : Programmes → Modifier.</span></div>';
  };
  var copyHtml = function (x) {
    if (ui.copyOpen !== x.key) return '<div class="row" style="gap:8px"><button class="btn sm ghost" data-a="cp-open" data-key="' + esc(x.key) + '">⧉ Copier vers un autre jour</button></div>';
    var d0 = iso(x.date), base = iso(T0) > d0 ? iso(T0) : d0, tom = iso(addDays(parseISO(base), 1)), nw = iso(addDays(x.date, 7));
    return '<div class="col sub" style="gap:8px"><b class="small">Copier « ' + esc(String(x.g.title).split(' — ')[0]) + ' » vers…</b>' +
      '<div class="row" style="gap:6px"><button class="btn sm" data-a="cp-do" data-key="' + esc(x.key) + '" data-d="' + tom + '">' + (tom === iso(addDays(T0, 1)) ? 'Demain' : dLabel(parseISO(tom))) + '</button><button class="btn sm" data-a="cp-do" data-key="' + esc(x.key) + '" data-d="' + nw + '">Même jour, semaine suivante</button></div>' +
      '<div class="row" style="flex-wrap:nowrap"><input class="in" type="date" id="cp-date" value="' + tom + '" style="flex:1;min-width:0"><button class="btn sm primary" data-a="cp-do" data-key="' + esc(x.key) + '" data-d="">Copier</button></div>' +
      '<span class="small mu">La copie devient une séance « à réaliser » ce jour-là : même contenu, à lancer en mode séance le jour J. L’originale ne bouge pas.</span>' +
      '<div class="row"><button class="btn sm ghost" data-a="cp-cancel">Annuler</button></div></div>';
  };
  var copyInst = function (x, d) {
    var p = x.p, g = x.g, fd = parseISO(d); if (!fd) return null;
    var kind = isMuscuInst(x) ? 'muscu' : x.s.extra ? x.s.kind : (p.kind === 'course' ? 'course' : 'autre');
    var XE = { id: 'x' + uid(), extra: true, kind: kind, date: d, day: dow(fd), name: String(g.title || '').trim(), dur: num(g.dur, 0) || null, rpe: null, km: kind === 'course' ? (num(g.km, 0) || null) : null, note: x.s.extra ? (x.s.note || '') : '', exercises: [], todo: 1 };
    var ovNew = [];
    if (kind === 'muscu') g.items.forEach(function (it) {
      if (it.mode === 'libre') return;
      var isRef = !it.swapped && !!findEx(p, it.id), z = isRef ? { id: it.id, ref: it.id, name: it.name, lib: null } : { id: 'xe' + uid(), ref: null, name: it.name, lib: (libFind(it.name) || [])[0] || null };
      if (XE.exercises.some(function (q) { return q.id === z.id; })) return;
      XE.exercises.push(z);
      if (!isRef || it.edited) { var o = {}; if (typeof it.sets === 'number') o.sets = it.sets; if (isFinite(num(it.reps, NaN))) o.reps = num(it.reps); if (it.loadNum) o.kg = it.loadNum; if (it.rpePlan) o.rpe = it.rpePlan; if (Object.keys(o).length) ovNew.push([z.id, o]); }
    });
    p.extras = (p.extras || []).concat([XE]);
    var nw = extraW(p, XE);
    if (ovNew.length) { p.overrides = p.overrides || {}; ovNew.forEach(function (q) { p.overrides[nw + '|' + XE.id + '|' + q[0]] = q[1]; }); }
    persist(p);
    return p.id + '|' + nw + '|' + XE.id;
  };
  var extraBarHtml = function (x) {
    var conf = ui.confirm === 'xdel:' + x.key;
    if (x.s.todo && !(x.log && x.log.done)) return '<div class="xbar"><span class="small t2">Séance à réaliser, préparée à l’avance : lance-la le jour J (mode séance) ou note-la comme une séance prévue.</span>' +
      (conf ? '<span class="row"><b class="small">Supprimer cette séance ?</b><button class="btn sm b-skip" data-a="x-del-yes" data-key="' + esc(x.key) + '">Supprimer</button><button class="btn sm ghost" data-a="del-no">Annuler</button></span>'
        : '<span class="row"><button class="btn sm b-edit" data-a="x-edit" data-key="' + esc(x.key) + '">Modifier</button><button class="btn sm b-skip" data-a="x-del" data-key="' + esc(x.key) + '">Supprimer</button></span>') + '</div>';
    return '<div class="xbar"><span class="small t2">Séance ajoutée à la main : elle compte dans la charge de la semaine' + (x.s.kind === 'autre' ? '' : x.s.kind === 'course' ? ' et le volume de course' : ', le tonnage et l’ajustement des charges (exercices de ton programme)') + '.</span>' +
      (conf ? '<span class="row"><b class="small">Supprimer cette séance et ses saisies ?</b><button class="btn sm b-skip" data-a="x-del-yes" data-key="' + esc(x.key) + '">Supprimer</button><button class="btn sm ghost" data-a="del-no">Annuler</button></span>'
        : '<span class="row"><button class="btn sm b-edit" data-a="x-edit" data-key="' + esc(x.key) + '">Modifier</button><button class="btn sm b-skip" data-a="x-del" data-key="' + esc(x.key) + '">Supprimer</button></span>') + '</div>';
  };
  var xfPrograms = function (kind, date) {
    var d = parseISO(date) || T0; if (kind === 'autre') kind = 'fixe';
    return state.programs.slice().sort(function (a, b) { var sa = (a.kind === kind ? 2 : 0) + (weekOf(a, d) ? 1 : 0), sb = (b.kind === kind ? 2 : 0) + (weekOf(b, d) ? 1 : 0); return sb - sa; });
  };
  var xfTodo = function (f) { return f.todo != null ? !!f.todo : String(f.date) > iso(T0); };
  var extraFormHtml = function () {
    var f = ui.xf, progs = xfPrograms(f.kind, f.date);
    if (!progs.length) return '<div class="card col" id="xform"><h2>Ajouter une séance</h2><p class="mu">Crée d’abord un programme (onglet Programmes) : la séance y sera rattachée.</p><button class="btn" data-a="xf-cancel">Fermer</button></div>';
    if (!progById(f.pid)) f.pid = progs[0].id;
    var p = progById(f.pid), isM = f.kind === 'muscu';
    var seg = [['muscu', 'Muscu'], ['course', 'Course'], ['autre', 'Autre']].map(function (k) { var on = f.kind === k[0]; return '<button class="btn sm" data-a="xf-kind" data-k="' + k[0] + '" aria-pressed="' + on + '" style="flex:1;min-height:42px;' + (on ? 'background:var(--tx);color:var(--bg);border-color:var(--tx)' : '') + '">' + k[1] + '</button>'; }).join('');
    var popt = progs.map(function (q) { return '<option value="' + esc(q.id) + '"' + (q.id === f.pid ? ' selected' : '') + '>' + esc(q.name || KIND[q.kind].label) + '</option>'; }).join('');
    var RPEC = ['#3E7F73', '#4E9A7F', '#62AD84', '#86B86F', '#B5BE5E', '#D9B44F', '#E79A45', '#EC7D43', '#E8603F', '#D9453B'], rv = num(f.rpe, 0) | 0;
    var rpe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { var on = rv === n, fill = rv && n <= rv; return '<button data-a="xf-rpe" data-n="' + n + '" aria-pressed="' + on + '" aria-label="RPE ' + n + '" class="' + (on ? 'on' : '') + '" style="background:' + (fill ? RPEC[n - 1] : tint(RPEC[n - 1], 0.22)) + '"><span>' + n + '</span></button>'; }).join('');
    var exh = '';
    if (isM) {
      var seen = {}, own = [];
      (p.kind === 'muscu' ? (p.sessions || []) : []).forEach(function (s) { (s.exercises || []).forEach(function (e) { if (seen[e.name]) return; seen[e.name] = 1; own.push(e); }); });
      var chips = own.map(function (e) { var on = f.ex.some(function (z) { return z.ref === e.id; }); return '<button class="chip xchip" data-a="xf-ex" data-ref="' + esc(e.id) + '" aria-pressed="' + on + '" style="' + (on ? 'border-color:' + colorOf(p) + ';color:var(--tx);background:' + tint(colorOf(p), 0.16) : '') + '">' + (on ? ICON.check : '') + esc(e.name) + '</button>'; }).join('');
      var free = f.ex.map(function (z, i) { return z.ref ? '' : '<span class="chip xchip" style="color:var(--tx)">' + esc(z.name) + '<button class="xrm" data-a="xf-rm" data-i="' + i + '" aria-label="Retirer ' + esc(z.name) + '">×</button></span>'; }).join('');
      exh = '<div class="col" style="gap:8px"><b class="small">' + (xfTodo(f) ? 'Exercices prévus' : 'Exercices réalisés') + '</b>' + (own.length ? '<span class="small mu">Touche ceux de ton programme : ils comptent dans l’ajustement des 1RM et des charges.</span><div class="xchips">' + chips + '</div>' : '') +
        (free ? '<div class="xchips">' + free + '</div>' : '') +
        '<div class="row" style="flex-wrap:nowrap"><input class="in" data-xf="newEx" list="pl-lib2" autocomplete="off" placeholder="Autre exercice (ex. Hip thrust)" value="' + esc(f.newEx || '') + '" style="flex:1;min-width:0"><button class="btn sm" data-a="xf-add">' + ICON.plus + 'Ajouter</button></div>' +
        '<span class="small mu">' + (xfTodo(f) ? 'Le jour J, lance-la en mode séance : séries, reps et charges s’ajustent exercice par exercice (bouton Modifier).' : 'Après l’enregistrement, note tes séries (charge, reps, RPE) sous chaque exercice, comme pour une séance prévue.') + '</span></div>';
    }
    var todo = xfTodo(f);
    return libDatalist('pl-lib2') + '<div class="card col" id="xform" style="gap:12px"><div class="row between"><h2>' + (f.id ? 'Modifier la séance' : 'Ajouter une séance') + '</h2><button class="btn sm ghost icon" data-a="xf-cancel" aria-label="Fermer">×</button></div>' +
      '<div class="row" role="group" aria-label="Statut de la séance" style="flex-wrap:nowrap"><button class="btn sm" style="flex:1' + (!todo ? ';background:var(--tx);color:var(--bg);border-color:var(--tx)' : '') + '" data-a="xf-todo" data-v="0" aria-pressed="' + !todo + '">Déjà faite</button><button class="btn sm" style="flex:1' + (todo ? ';background:var(--tx);color:var(--bg);border-color:var(--tx)' : '') + '" data-a="xf-todo" data-v="1" aria-pressed="' + todo + '">À réaliser</button></div>' +
      '<div class="row" role="group" aria-label="Type de séance" style="flex-wrap:nowrap">' + seg + '</div>' +
      '<div class="fgrid w2"><label class="field"><span>Date</span><input class="in" type="date" data-xf="date" value="' + esc(f.date) + '"></label><label class="field"><span>Programme</span><select class="in" data-xf="pid">' + popt + '</select></label></div>' +
      '<label class="field"><span>Nom</span><input class="in" data-xf="name" value="' + esc(f.name || '') + '" placeholder="' + (isM ? 'ex. Muscu haut du corps' : (f.kind === 'course' ? 'ex. Footing en forêt' : 'ex. Vélo, natation, mobilité')) + '"></label>' +
      '<div class="fgrid w2"><label class="field"><span>Durée (min)</span><input class="in" type="number" inputmode="numeric" data-xf="dur" value="' + esc(f.dur == null ? '' : f.dur) + '" placeholder="' + (isM ? '60' : '30') + '"></label>' + (f.kind !== 'course' ? '' : '<label class="field"><span>Distance (km, facultatif)</span><input class="in" type="number" inputmode="decimal" step="any" data-xf="km" value="' + esc(f.km == null ? '' : f.km) + '"></label>') + '</div>' +
      (todo ? '<span class="small mu">Elle apparaîtra ce jour-là comme une séance prévue : tu pourras la lancer en mode séance et ajuster séries et charges exercice par exercice.</span>' : '<div class="col" style="gap:6px"><div class="row between"><span class="small mu">RPE de la séance</span><b class="small">' + (rv ? 'RPE ' + rv : 'Touche l’échelle') + '</b></div><div class="rpe" role="group" aria-label="RPE de la séance">' + rpe + '</div></div>') +
      exh +
      '<label class="field"><span>Note</span><textarea class="in" data-xf="note" rows="2">' + esc(f.note || '') + '</textarea></label>' +
      '<div class="row"><button class="btn primary" data-a="xf-save">' + (f.id ? 'Enregistrer' : todo ? 'Planifier la séance' : 'Ajouter la séance') + '</button><button class="btn ghost" data-a="xf-cancel">Annuler</button></div></div>';
  };
  // Fatigue croisée : un CrossFit la veille ou le jour même sur les mêmes familles de mouvements
  var crossAlert = function (x) {
    if (!isMuscuInst(x) || (x.log && x.log.done)) return '';
    var pats = {}, names = {};
    x.g.items.forEach(function (it) { var pt = exPattern(it.name); if (pt && (it.mode === 'pct' || it.mode === 'kg' || it.mode === 'reps')) { pats[pt] = 1; (names[pt] = names[pt] || []).push(it.name); } });
    var hits = [];
    [[-1, 'Hier'], [0, 'Aujourd’hui']].forEach(function (dd) {
      cfOn(addDays(x.date, dd[0])).forEach(function (c) {
        var ov = Object.keys(c.pats || {}).filter(function (pt) { return pats[pt] && c.pats[pt] >= 3; });
        if (ov.length) hits.push(dd[1] + ' au CrossFit' + (c.name ? ' (' + c.name + ')' : '') + ' : ' + ov.map(function (pt) { return PAT_L[pt]; }).join(', ') + '. Aujourd’hui : ' + ov.map(function (pt) { return names[pt].join(', '); }).join(', '));
      });
    });
    if (!hits.length) return '';
    return '<div class="advice warn">' + esc(hits.join(' · ')) + '. Ces muscles ont déjà travaillé : garde le RPE prévu, pas de record aujourd’hui, et note un RPE honnête (l’ajustement en tiendra compte).</div>';
  };
  var painHtml = function (x) {
    var pa = painApi(); if (!pa || !pa.zones) return '';
    var zs = pa.zones() || []; if (!zs.length) return '';
    var d = iso(x.date);
    return '<div class="col" style="gap:8px">' + zs.map(function (z) {
      var cur = pa.get(d, z.id, 'seance');
      return '<div class="col" style="gap:6px"><div class="row between"><span class="small mu">Douleur ' + esc(z.l.toLowerCase()) + ' pendant ou après</span><b class="small">' + (cur == null ? '—' : cur + '/10') + '</b></div><div class="pains" role="group" aria-label="Douleur ' + esc(z.l) + ' de 0 à 10">' +
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { var on = cur === n; return '<button data-a="pain" data-z="' + esc(z.id) + '" data-d="' + d + '" data-n="' + n + '" aria-pressed="' + on + '" class="' + (on ? 'on' : '') + '" style="--h:' + Math.round(140 - n * 14) + '">' + n + '</button>'; }).join('') + '</div></div>';
    }).join('') + '</div>';
  };
  // Noter une séance prévue plus tard qu'aujourd'hui : demandé une fois par séance
  var futureOk = function (key) {
    var x = findInst(key); if (!x || x.date <= T0 || (x.log && x.log.done)) return true;
    ui.futOk = ui.futOk || {}; if (ui.futOk[key]) return true;
    if (!window.confirm('Cette séance est prévue le ' + dLabel(x.date).toLowerCase() + ', plus tard qu’aujourd’hui. La noter quand même ?')) return false;
    ui.futOk[key] = 1; return true;
  };
  // Bilan d'une séance terminée : volume, comparaison avec la même séance la semaine d'avant, 1RM qui ont bougé
  var sessTon = function (x) {
    var lg = x.log || {}, ton = 0, nsets = 0, nex = 0, skip = 0, mu = isMuscuInst(x);
    if (!mu) return null;
    x.g.items.forEach(function (it) { var r = (lg.ex || {})[it.id]; if (r && r.skipped) { skip++; return; } var ss = getSets(r); if (!ss.length) return; nex++; nsets += ss.length; ss.forEach(function (z) { ton += num(z.kg, 0) * num(z.reps, 0); }); });
    return { ton: ton, sets: nsets, ex: nex, skip: skip, total: x.g.items.length };
  };
  var summaryHtml = function (x) {
    var lg = x.log || {}; if (!lg.done || !isMuscuInst(x)) return '';
    var t = sessTon(x); if (!t) return '';
    var prev = null;
    if (!x.s.extra && x.w > 1) { var pk = x.p.id + '|' + (x.w - 1) + '|' + x.s.id, px = findInst(pk); if (px && px.log && px.log.done) prev = sessTon(px); }
    var moved = [];
    x.g.items.forEach(function (it) { if (it.mode !== 'pct' || !it.main) return; var ex = findEx(x.p, it.id); if (!ex || !num(ex.orm, 0)) return; var a = tmTrace(x.p, ex, x.w).f, b2 = tmTrace(x.p, ex, x.w + 1).f; if (Math.abs(b2 / a - 1) >= 0.003) moved.push(it.name + ' ' + kg(Math.round(num(ex.orm) * a * 2) / 2) + ' → ' + kg(Math.round(num(ex.orm) * b2 * 2) / 2)); });
    var dv = prev && prev.ton > 0 ? Math.round((t.ton / prev.ton - 1) * 100) : null;
    var cells = [['Exercices', t.ex + '/' + t.total], ['Séries', String(t.sets)], ['Volume', t.ton ? fmtN(Math.round(t.ton / 10) / 100) + ' t' : '—'], ['RPE', lg.rpe ? String(lg.rpe) : '—']];
    return '<div class="sumcard"><div class="row between"><b>Séance terminée</b>' + (dv != null ? '<span class="small" style="font-weight:700;color:' + (dv >= 0 ? 'var(--ok)' : 'var(--warn)') + '">' + (dv >= 0 ? '+' : '') + dv + ' % de volume vs semaine ' + (x.w - 1) + '</span>' : '') + '</div>' +
      '<div class="sumgrid">' + cells.map(function (c) { return '<div><span class="l">' + c[0] + '</span><span class="v">' + esc(c[1]) + '</span></div>'; }).join('') + '</div>' +
      (moved.length ? '<span class="small" style="color:var(--t2)">1RM de travail : ' + esc(moved.join(' · ')) + '</span>' : '') +
      (t.skip ? '<span class="small mu">' + t.skip + ' exercice' + (t.skip > 1 ? 's' : '') + ' non fait' + (t.skip > 1 ? 's' : '') + '.</span>' : '') +
      (t.ex + t.skip < t.total ? '<span class="small mu">' + (t.total - t.ex - t.skip) + ' exercice(s) sans séries notées : ils ne comptent ni dans le volume ni dans l’ajustement des charges.</span>' : '') + '</div>';
  };
  // ---------- Mode séance : plein écran, exercice par exercice ----------
  /* Aucune donnée nouvelle : chaque série validée est écrite dans le suivi de la séance,
     exactement comme la saisie « Série par série ». Seul l'avancement de l'écran
     (exercice affiché, début, repos en cours) est gardé à part pour reprendre. */
  var RUNK = 'planif-run', RUNC = ['#3E7F73', '#4E9A7F', '#62AD84', '#86B86F', '#B5BE5E', '#D9B44F', '#E79A45', '#EC7D43', '#E8603F', '#D9453B'];
  try { tm.mute = localStorage.getItem('planif-mute') === '1'; } catch (e) {}
  var runSave = function () { try { if (ui.run) localStorage.setItem(RUNK, JSON.stringify({ key: ui.run.key, exI: ui.run.exI, t0: ui.run.t0, open: !!ui.run.open, end: !!ui.run.end, add: !!ui.run.add, rest: tm.end || 0, restLbl: tm.label || '' })); else localStorage.removeItem(RUNK); } catch (e) {} };
  var wl = null;
  var wakeOn = function () { try { if (navigator.wakeLock && !wl && document.visibilityState === 'visible') navigator.wakeLock.request('screen').then(function (l) { wl = l; l.addEventListener('release', function () { wl = null; }); }).catch(function () {}); } catch (e) {} };
  var wakeOff = function () { try { if (wl) wl.release(); } catch (e) {} wl = null; };
  var runLock = function (on) { try { document.documentElement.style.overflow = on ? 'hidden' : ''; document.body.style.overflow = on ? 'hidden' : ''; } catch (e) {} };
  var runOpenEnd = function (x) { return !!(x && x.s && x.s.extra && x.s.free); };
  var runUnit = function (it) { if (it.unit === 's') return 's'; var lb = libFind(it.name); return lb && lb[5] === 'sec' && it.mode === 'reps' ? 's' : ''; };
  var runN = function (it) { return Math.max(1, parseInt(it.sets, 10) || 1); };
  var runLoggable = function (x, it) { return isMuscuInst(x) && ['pct', 'kg', 'reps'].indexOf(it.mode) >= 0; };
  var runRaw = function (x, it) { return ((x.log || {}).ex || {})[it.id] || null; };
  var runState = function (x, it) {
    if (!runLoggable(x, it)) return 'info';
    var r = runRaw(x, it); if (r && r.skipped) return 'skip';
    var n = getSets(r).length; if (runOpenEnd(x)) return n ? 'done' : 'todo'; return n >= runN(it) ? 'done' : n ? 'part' : 'todo';
  };
  var runNext = function (x, from) {
    var its = x.g.items, j, st;
    for (j = from + 1; j < its.length; j++) { st = runState(x, its[j]); if (st === 'todo' || st === 'part' || st === 'info') return j; }
    for (j = 0; j <= from && j < its.length; j++) { st = runState(x, its[j]); if (st === 'todo' || st === 'part') return j; }
    return -1;
  };
  var runFirst = function (x) { var its = x.g.items; for (var j = 0; j < its.length; j++) { var st = runState(x, its[j]); if (st === 'todo' || st === 'part') return j; } return -1; };
  var runDraft = function (x, it) {
    var ss = getSets(runRaw(x, it)), i = ss.length, d = ui.run.d;
    if (!d || d.ex !== it.id || d.i !== i) {
      var last = ss[i - 1];
      d = ui.run.d = { ex: it.id, i: i, kg: last && last.kg != null ? last.kg : (it.mode === 'reps' ? null : it.loadNum), reps: last && (runOpenEnd(x) || it.repsPlan == null) ? last.reps : it.repsPlan, rpe: last && runOpenEnd(x) && last.rpe ? last.rpe : (it.rpePlan || null) };
    }
    return d;
  };
  var runFs = function (z, isR, un) {
    var kgv = num(z.kg, 0), r = (z.reps != null ? z.reps : '?') + (un === 's' ? ' s' : ''), rr = un === 's' ? r : r + ' reps';
    return (kgv ? (isR ? '+' : '') + fmtN(kgv) + ' kg × ' + r : rr) + (z.rpe ? ' · RPE ' + fmtN(num(z.rpe)) : ''); };
  var runLast = function (x, it) {
    var lim = iso(x.date), best = null;
    state.programs.forEach(function (p) {
      if (p.kind !== 'muscu' && !(p.extras || []).some(function (e) { return e.kind === 'muscu'; })) return;
      exHistory(p, it.name).forEach(function (h) { var d = iso(h.date); if (d >= lim) return; if (!best || d > best.d) best = { d: d, h: h }; });
    });
    return best;
  };
  var runPush = function (x, it, z) {
    var p = x.p; p.logs = p.logs || {};
    var k = x.w + '|' + x.s.id, lg = Object.assign({}, p.logs[k] || {}), exs = Object.assign({}, lg.ex || {}), cur = exs[it.id] || {}, ss = getSets(cur).slice();
    if (z) ss.push(z); else ss.pop();
    var nx = { sets: ss }; if (cur.noAdj) nx.noAdj = cur.noAdj; if (!z && cur.plan) nx.plan = 1;
    if (ss.length) exs[it.id] = nx; else delete exs[it.id];
    lg.ex = exs; if (Object.keys(exs).length) lg.done = true;
    p.logs[k] = lg; persist(p);
  };
  var runSkip = function (x, it, on) {
    var p = x.p; p.logs = p.logs || {};
    var k = x.w + '|' + x.s.id, lg = Object.assign({}, p.logs[k] || {}), em = Object.assign({}, lg.ex || {});
    if (on) em[it.id] = { skipped: true }; else delete em[it.id];
    lg.ex = em; p.logs[k] = lg; persist(p);
  };
  var runScale = function (act, val) {
    var rv = num(val, 0);
    return '<div class="rpe" role="group" aria-label="RPE de 1 à 10">' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { var on = rv === n, fill = rv && n <= rv; return '<button data-a="' + act + '" data-n="' + n + '" aria-pressed="' + on + '" aria-label="RPE ' + n + '" class="' + (on ? 'on' : '') + '" style="background:' + (fill ? RUNC[n - 1] : tint(RUNC[n - 1], 0.22)) + '"><span>' + n + '</span></button>'; }).join('') + '</div><div class="rpe-ends small mu"><span>Très facile</span><span>Maximal</span></div>';
  };
  var runExHtml = function (x, it, c) {
    var h = '<h2 class="runname">' + esc(it.name) + '</h2>';
    if (!runLoggable(x, it)) return h + '<p class="t2">' + esc(it.scheme || '') + (it.load ? ' · ' + esc(it.load) : '') + '</p>' + (it.note ? '<p class="small mu">' + esc(it.note) + '</p>' : '') +
      '<div class="runfoot"><button class="btn primary runmain" data-a="run-next">' + ICON.check + 'C’est fait · suivant</button></div>';
    var ss = getSets(runRaw(x, it)), n = runN(it), isR = it.mode === 'reps', st = runState(x, it), more = ui.run.more === it.id, oe = runOpenEnd(x), un = runUnit(it), lk = (libFind(it.name) || [])[2] || '';
    var rtx = (it.reps != null ? it.reps : '?') + (un === 's' ? ' s' : isR || !it.loadNum ? ' reps' : ''), tgt = !isR && it.loadNum ? fmtN(it.loadNum) + ' kg × ' + rtx : rtx;
    if (oe) h += '<div class="runsub"><span class="runset">Série ' + (ss.length + 1) + '</span><span class="t2">' + (ss.length ? 'Ajoute autant de séries que tu veux, puis « Exercice terminé ».' : 'Note chaque série quand tu la finis : autant que tu veux.') + ' Repos ' + esc(it.rest || '2 min') + '.</span></div>';
    else h += '<div class="runsub"><span class="runset">' + (st === 'skip' ? 'Non fait' : st === 'done' && !more ? n + '/' + n + ' séries faites' : 'Série ' + (ss.length + 1) + ' / ' + Math.max(n, ss.length + 1)) + '</span>' +
      '<span class="t2">Prévu : <b>' + esc(it.sets) + ' × ' + esc(tgt) + '</b>' + (it.rpeTxt ? ' · RPE ' + esc(it.rpeTxt) : '') + ' · repos ' + esc(it.rest || '—') + '</span></div>';
    var lt = runLast(x, it);
    if (lt) { var ld = parseISO(lt.d); h += '<div class="runlast"><span class="small mu">La dernière fois · ' + ld.getDate() + ' ' + MOIS[ld.getMonth()] + ' · meilleure série</span><b>' + esc(runFs(lt.h, isR, un)) + '</b></div>'; }
    if (ss.length) h += '<div class="runsets">' + ss.map(function (z, j) { return '<span class="chip">S' + (j + 1) + ' · ' + esc(runFs(z, isR, un)) + '</span>'; }).join('') + '<button class="btn sm ghost" data-a="run-undo">Annuler la dernière</button></div>';
    if (ui.run.swap === it.id && !ss.length) return h + swapPanelHtml(x, it, x.key + '|' + it.id, 'run-swpick');
    if (it.swapped && !ss.length) h += '<div class="swtag small"><span>⇄ Remplace <b>' + esc(it.origName) + '</b></span><button class="btn sm ghost" data-a="run-swundo">Revenir</button></div>';
    if (st === 'skip') return h + '<div class="runfoot"><button class="btn" data-a="run-unskip">Je le fais finalement</button><button class="btn primary runmain" data-a="run-next">Exercice suivant ›</button></div>';
    if (st === 'done' && !more && !oe) return h + '<div class="runfoot"><button class="btn" data-a="run-more">' + ICON.plus + 'Série en plus</button><button class="btn primary runmain" data-a="run-next">Exercice suivant ›</button></div>';
    var d = runDraft(x, it), stp = num((findEx(x.p, it.id) || {}).step, 0) || 2.5, rv = num(d.rpe, 0);
    var kgLab = isR ? 'Lest kg · facultatif' : lk === 'db' ? 'Kg par haltère' : 'Charge kg', kgPh = isR || lk === 'db' || lk === 'gym' ? 'PDC' : '0';
    var stepper = function (f, lab, dv, val) { return '<div class="runf"><span class="pl">' + lab + '</span><div class="runst"><button class="btn icon" data-a="run-step" data-f="' + f + '" data-d="' + (-dv) + '" aria-label="' + lab + ' moins ' + fmtN(dv) + '">−</button><input class="in runin" type="number" inputmode="decimal" step="any" data-rf="' + f + '" value="' + (val == null || (f === 'kg' && !num(val, 0)) ? '' : esc(val)) + '" placeholder="' + (f === 'kg' ? kgPh : '0') + '" aria-label="' + lab + '"><button class="btn icon" data-a="run-step" data-f="' + f + '" data-d="' + dv + '" aria-label="' + lab + ' plus ' + fmtN(dv) + '">+</button></div></div>'; };
    if (!ss.length) h += warmHtml(it);
    h += '<div class="runfields">' + stepper('kg', kgLab, stp, d.kg) + stepper('reps', un === 's' ? 'Durée (s)' : 'Reps', un === 's' ? 5 : 1, d.reps) + '</div>' + (kgPh === 'PDC' && !num(d.kg, 0) ? '<span class="small mu" style="margin-top:-8px">Case vide = au poids du corps, sans charge.</span>' : '');
    h += '<div class="col" style="gap:6px"><div class="row between"><span class="small mu">RPE de la série' + (it.rpePlan ? ' · prévu ' + fmtN(it.rpePlan) : '') + '</span><b class="small">' + (rv ? 'RPE ' + fmtN(rv) + ' · ' + fmtN(Math.max(0, 10 - rv)) + ' en réserve' : '') + '</b></div>' + runScale('run-rpe', rv) + '</div>';
    var nt = it.mode === 'pct' ? (findEx(x.p, it.id) || {}).note : it.note;
    var li = String(nt || '').split(/\s+·\s+/).filter(function (t) { return t.trim(); });
    if (li.length) h += '<details class="runcue"><summary>Consignes ▾</summary><ul class="cues" style="border-left-color:' + c + '">' + li.map(function (t) { return '<li>' + esc(t.trim()) + '</li>'; }).join('') + '</ul></details>';
    h += '<div class="runfoot"><button class="btn primary runmain" data-a="run-set">' + ICON.check + 'Série faite</button><div class="row between">' +
      (ss.length ? '<span></span>' : oe ? '<button class="btn sm ghost" data-a="run-rmex">Retirer l’exercice</button>' : '<span class="row" style="gap:6px"><button class="btn sm ghost" data-a="run-skip">Pas fait</button><button class="btn sm ghost" data-a="run-swap" aria-label="Remplacer cet exercice">⇄ Remplacer</button></span>') + '<button class="btn sm' + (oe && ss.length ? '' : ' ghost') + '" data-a="run-next">' + (oe ? 'Exercice terminé ›' : 'Exercice suivant ›') + '</button></div></div>';
    return h;
  };
  var runEndHtml = function (x) {
    var lg = x.log || {}, mins = Math.round((Date.now() - num(ui.run.t0, Date.now())) / 60000), rv = num(lg.rpe, 0);
    var h = '<h2 class="runname">Bravo, c’est fini</h2>' + (mins > 0 && mins < 300 ? '<p class="t2">' + mins + ' min depuis le début' + (x.s.free ? ' : durée enregistrée pour la charge de la séance' : '') + '.</p>' : '');
    if (x.s.free) h += '<label class="field"><span>Nom de la séance</span><input class="in" data-rf="name" maxlength="60" value="' + esc(ui.run.name != null ? ui.run.name : (x.s.name || '')) + '" placeholder="Séance libre"></label>';
    h += '<div class="col" style="gap:6px"><div class="row between"><span class="small mu">RPE de la séance (effort global)' + (x.g.rpe ? ' · prévu ' + fmtN(x.g.rpe) : '') + '</span><b class="small">' + (rv ? 'RPE ' + rv : 'Touche l’échelle') + '</b></div>' + runScale('run-srpe', rv) + '</div>';
    h += summaryHtml(x);
    return h + '<div class="runfoot"><button class="btn primary runmain" data-a="run-finish">' + ICON.check + 'Terminer</button><button class="btn sm ghost" data-a="run-back">Revenir aux exercices</button></div>';
  };
  var runRestHtml = function () {
    if (!tm.end) return '';
    return '<div class="runrest"><div class="col" style="gap:0"><span class="small" id="runl">' + esc(tm.label) + '</span><span class="runt" id="runt"></span></div><button class="btn sm" data-a="run-rest" data-d="-15" aria-label="Retirer 15 secondes">−15 s</button><button class="btn sm" data-a="run-rest" data-d="15" aria-label="Ajouter 15 secondes">+15 s</button><button class="btn sm primary" data-a="run-rest" data-d="0">Passer</button></div>';
  };
  var drawRun = function () {
    var el = $id('run'); if (!el) return;
    if (!ui.run || !ui.run.open) { if (el.innerHTML) el.innerHTML = ''; return; }
    var x = findInst(ui.run.key);
    if (!x) { ui.run = null; runSave(); el.innerHTML = ''; runLock(false); wakeOff(); return; }
    var its = x.g.items, c = colorOf(x.p);
    if (!(ui.run.exI >= 0 && ui.run.exI < its.length)) ui.run.exI = 0;
    var ae = el.querySelector('.runbody'), sc = ae ? ae.scrollTop : 0, same = ui.run.lastEx === ui.run.exI && ui.run.lastEnd === !!ui.run.end && !ui.run.add;
    var head = '<div class="runhead"><button class="btn sm" data-a="run-close" aria-label="Quitter le mode séance (tes séries sont gardées)">✕ Quitter</button><div class="col" style="gap:0;align-items:center;min-width:0;flex:1"><b class="runtt">' + esc(String(x.g.title).split(' — ')[0]) + '</b><span class="small mu">' + (ui.run.end ? 'Bilan' : ui.run.add || !its.length ? 'Ajout d’un exercice' : 'Exercice ' + (ui.run.exI + 1) + ' / ' + its.length) + '</span></div><button class="btn sm icon" data-a="run-mute" aria-pressed="' + !!tm.mute + '" aria-label="' + (tm.mute ? 'Activer le bip de fin de repos' : 'Couper le bip de fin de repos') + '">' + (tm.mute ? '🔕' : '🔔') + '</button></div>';
    var dots = '<div class="rundots" aria-label="Exercices">' + its.map(function (it, j) { var st = runState(x, it), on = !ui.run.end && !ui.run.add && j === ui.run.exI; return '<button class="rd ' + st + (on ? ' on' : '') + '" data-a="run-go" data-i="' + j + '" aria-label="' + esc(it.name) + '"' + (on ? ' aria-current="step"' : '') + '>' + (st === 'done' ? '✓' : st === 'skip' ? '–' : (j + 1)) + '</button>'; }).join('') + (x.s.extra ? '<button class="rd' + (ui.run.add && !ui.run.end ? ' on' : '') + '" data-a="run-add" aria-label="Ajouter un exercice">+</button>' : '') + '</div>';
    el.innerHTML = '<div class="run" role="dialog" aria-modal="true" aria-label="Mode séance">' + head + dots + runRestHtml() + '<div class="runbody">' + (ui.run.end ? runEndHtml(x) : ui.run.add || !its.length ? runAddHtml(x) : runExHtml(x, its[ui.run.exI], c)) + '</div></div>';
    var nb = el.querySelector('.runbody'); if (nb && same) nb.scrollTop = sc;
    ui.run.lastEx = ui.run.exI; ui.run.lastEnd = !!ui.run.end;
    var cur = el.querySelector('.rd.on'); if (cur && cur.scrollIntoView) try { cur.scrollIntoView({ block: 'nearest', inline: 'center' }); } catch (e) {}
    drawTimer();
  };
  var runOwn = function (x) {
    var have = {}, own = [], seen = {};
    x.g.items.forEach(function (it) { have[normTxt(it.name)] = 1; });
    (x.p.kind === 'muscu' ? (x.p.sessions || []) : []).forEach(function (s0) { (s0.exercises || []).forEach(function (e) { var k = normTxt(e.name); if (seen[k] || have[k]) return; seen[k] = 1; own.push(e); }); });
    return own;
  };
  var runAddHtml = function (x) {
    var own = runOwn(x), n = x.g.items.length;
    var h = '<h2 class="runname">' + (n ? 'Exercice suivant' : 'Premier exercice') + '</h2>';
    h += '<div class="col" style="gap:6px"><span class="small mu">Choisis dans la bibliothèque (plus de 150 exercices, poids du corps compris) ou tape un nom libre.</span><div class="row" style="flex-wrap:nowrap"><input class="in" data-rf="newEx" list="run-lib" autocomplete="off" enterkeyhint="done" placeholder="ex. Hip thrust" aria-label="Nom de l’exercice" value="' + esc(ui.run.newEx || '') + '" style="flex:1;min-width:0;min-height:52px;font-size:17px"><button class="btn primary" data-a="run-addname" style="min-height:52px">' + ICON.plus + 'Ajouter</button></div></div>';
    if (n) h += '<div class="row between"><button class="btn sm ghost" data-a="run-back">‹ Revenir aux exercices</button><button class="btn primary" data-a="run-endnow">' + ICON.check + 'Terminer la séance</button></div>';
    if (own.length) h += '<div class="col" style="gap:6px"><span class="small mu">Ceux de ton programme comptent pour tes 1RM et tes charges.</span><div class="xchips">' + own.map(function (e) { return '<button class="chip xchip" data-a="run-addref" data-ref="' + esc(e.id) + '">' + esc(e.name) + '</button>'; }).join('') + '</div></div>';
    if (!n) h += '<span class="small mu">Ajoute ton premier exercice, puis note tes séries au fur et à mesure. Tout s’enregistre comme une séance faite aujourd’hui.</span>';
    return libDatalist('run-lib') + h;
  };
  var runExtra = function (x) { return (x.p.extras || []).filter(function (z) { return z.id === x.s.id; })[0] || null; };
  var runSetExtra = function (x, patch) {
    var E = runExtra(x); if (!E) return;
    x.p.extras = x.p.extras.map(function (z) { return z.id === E.id ? Object.assign({}, z, patch) : z; }); persist(x.p);
  };
  var runAddEx = function (x, xe) {
    var E = runExtra(x); if (!E) return -1;
    var ex = (E.exercises || []).slice(), at = -1; ex.forEach(function (z, i) { if (z.id === xe.id) at = i; });
    if (at < 0) { ex.push(xe); runSetExtra(x, { exercises: ex }); }
    var x2 = findInst(ui.run.key), j = -1; if (x2) x2.g.items.forEach(function (it, i) { if (it.id === xe.id) j = i; });
    return j;
  };
  var runHasSets = function (x) { return x.g.items.some(function (it) { return getSets(runRaw(x, it)).length > 0; }); };
  var runDropEmpty = function (x) {
    if (!x || !x.s.extra || !x.s.free || runHasSets(x)) return false;
    var P0 = x.p; P0.extras = (P0.extras || []).filter(function (z) { return z.id !== x.s.id; }); if (P0.logs) delete P0.logs[x.w + '|' + x.s.id]; persist(P0);
    if (ui.sel === x.key) ui.sel = null; return true;
  };
  var runFree = function () {
    editBegin();
    var d = iso(T0), fd = parseISO(d), ps = xfPrograms('muscu', d), P0 = ps.filter(function (q) { return q.kind === 'muscu'; })[0] || ps[0];
    if (!P0) { toast('Crée d’abord un programme (onglet Programmes).'); return; }
    if (ui.run && !ui.run.open) { var old = findInst(ui.run.key); if (old) runDropEmpty(old); }
    var XE = { id: 'x' + uid(), extra: true, kind: 'muscu', date: d, day: dow(fd), name: 'Séance libre', dur: null, rpe: null, km: null, note: '', exercises: [], free: 1 };
    P0.extras = (P0.extras || []).concat([XE]); persist(P0);
    var key = P0.id + '|' + extraW(P0, XE) + '|' + XE.id;
    ui.view = 'semaine'; ui.weekStart = iso(mondayOf(fd)); ui.day = dow(fd); ui.sel = key; ui.xf = null; ui.edit = null; if (ui.hidden[P0.id]) ui.hidden[P0.id] = false;
    ui.run = { key: key, t0: Date.now(), exI: 0, end: false, add: true, open: true };
    runLock(true); wakeOn(); runSave(); drawRun(); render();
  };
  var runOpen = function (key) {
    var x = findInst(key); if (!x || !isMuscuInst(x)) return;
    if (!ui.run || ui.run.key !== key) { var f = runFirst(x), nx0 = !x.g.items.length && !!x.s.extra; ui.run = { key: key, t0: Date.now(), exI: f < 0 ? 0 : f, end: f < 0 && !nx0, add: nx0 }; }
    ui.run.open = true; ui.run.d = null; ui.run.more = null;
    runLock(true); wakeOn(); runSave(); drawRun();
  };
  var runClose = function (finish) {
    if (!ui.run) return;
    if (finish) { ui.run = null; tm.end = 0; clearInterval(tm.iv); } else ui.run.open = false;
    runSave(); runLock(false); wakeOff(); drawRun(); drawTimer(); render();
  };
  var runAct = function (a, b) {
    if (a === 'run-free') { runFree(); return; }
    if (a === 'run-open') { var k0 = b.getAttribute('data-key'); if (!futureOk(k0)) return; runOpen(k0); render(); return; }
    if (!ui.run) return;
    var x = findInst(ui.run.key); if (!x) { runClose(true); return; }
    var it = ui.run.end ? null : x.g.items[ui.run.exI];
    var go = function (j) { ui.run.add = false; if (j < 0) { if (x.s.extra) ui.run.add = true; else ui.run.end = true; } else { ui.run.exI = j; ui.run.end = false; } ui.run.d = null; ui.run.more = null; };
    switch (a) {
      case 'run-close': if (runDropEmpty(x)) { runClose(true); toast('Séance vide : rien n’a été enregistré'); return; } runClose(false); return;
      case 'run-finish':
        if (runDropEmpty(x)) { runClose(true); toast('Séance vide : rien n’a été enregistré'); return; }
        if (x.s.free) { var nm = String(ui.run.name != null ? ui.run.name : (x.s.name || '')).trim() || 'Séance libre', pt = { name: nm }, mn = Math.round((Date.now() - num(ui.run.t0, Date.now())) / 60000); if (!num(x.s.dur, 0) && mn >= 5 && mn < 300) pt.dur = mn; runSetExtra(x, pt); }
        runClose(true); toast('Séance enregistrée'); return;
      case 'run-mute': tm.mute = !tm.mute; try { localStorage.setItem('planif-mute', tm.mute ? '1' : '0'); } catch (e) {} break;
      case 'run-go': go(num(b.getAttribute('data-i')) | 0); break;
      case 'run-back': ui.run.end = false; ui.run.add = false; if (!x.g.items.length) ui.run.add = true; break;
      case 'run-add': ui.run.add = true; ui.run.end = false; ui.run.newEx = ''; break;
      case 'run-endnow': ui.run.add = false; ui.run.end = true; tm.end = 0; clearInterval(tm.iv); break;
      case 'run-addref': var rf = b.getAttribute('data-ref'), re1 = findEx(x.p, rf); if (re1) { var ja = runAddEx(x, { id: rf, ref: rf, name: re1.name, lib: null }); if (ja >= 0) go(ja); } break;
      case 'run-addname':
        var inp = b.parentNode && b.parentNode.querySelector('[data-rf="newEx"]'), nn = String((inp && inp.value) || ui.run.newEx || '').trim();
        if (!nn) { toast('Tape le nom de l’exercice'); return; }
        var own1 = runOwn(x).filter(function (e) { return normTxt(e.name) === normTxt(nn); })[0], lbx = libFind(nn), jb;
        if (own1) jb = runAddEx(x, { id: own1.id, ref: own1.id, name: own1.name, lib: null });
        else { var dup = x.g.items.filter(function (it) { return normTxt(it.name) === normTxt(lbx ? libName(lbx) : nn); })[0]; jb = dup ? x.g.items.indexOf(dup) : runAddEx(x, { id: 'xe' + uid(), ref: null, name: lbx ? libName(lbx) : nn, lib: lbx ? lbx[0] : null }); }
        ui.run.newEx = ''; if (jb >= 0) go(jb); break;
      case 'run-next': go(runNext(x, ui.run.exI)); break;
      case 'run-step': if (it) { var d = runDraft(x, it), f = b.getAttribute('data-f'); d[f] = Math.max(0, Math.round((num(d[f], 0) + num(b.getAttribute('data-d'))) * 100) / 100); } break;
      case 'run-rpe': if (it) { var d1 = runDraft(x, it), n = num(b.getAttribute('data-n')); d1.rpe = num(d1.rpe, 0) === n ? null : n; } break;
      case 'run-set':
        if (!it || !runLoggable(x, it)) break;
        var d2 = runDraft(x, it), z = {};
        ['kg', 'reps', 'rpe'].forEach(function (f2) { if (d2[f2] !== '' && d2[f2] != null && isFinite(num(d2[f2], NaN))) z[f2] = num(d2[f2]); });
        if (z.reps == null) { toast('Indique le nombre de reps'); return; }
        if (it.mode === 'reps' && !z.kg) delete z.kg;
        var wasMore = ui.run.more === it.id;
        runPush(x, it, z); x = findInst(ui.run.key); ui.run.d = null; ui.run.more = null;
        if (wasMore || runOpenEnd(x) || getSets(runRaw(x, it)).length < runN(it)) startTimer(it.rest || '2 min');
        else { var nj = runNext(x, ui.run.exI); if (nj < 0) { if (x.s.extra) startTimer(it.rest || '2 min'); else { tm.end = 0; clearInterval(tm.iv); } go(-1); } else { startTimer(it.rest || '2 min'); tm.label = 'Repos · ensuite ' + x.g.items[nj].name; go(nj); } }
        break;
      case 'run-undo': if (it) { runPush(x, it, null); ui.run.d = null; } break;
      case 'run-skip': if (it && !getSets(runRaw(x, it)).length) { runSkip(x, it, true); x = findInst(ui.run.key); } go(runNext(x, ui.run.exI)); break;
      case 'run-unskip': if (it) runSkip(x, it, false); ui.run.d = null; break;
      case 'run-rmex': if (it && runOpenEnd(x) && !getSets(runRaw(x, it)).length) { var E1 = runExtra(x); if (E1) { runSetExtra(x, { exercises: (E1.exercises || []).filter(function (z) { return z.id !== it.id; }) }); x = findInst(ui.run.key); var nl = x ? x.g.items.length : 0; if (!nl) { ui.run.add = true; ui.run.exI = 0; } else ui.run.exI = Math.min(ui.run.exI, nl - 1); ui.run.d = null; } } break;
      case 'run-swap': if (it) ui.run.swap = it.id; break;
      case 'run-swcancel': ui.run.swap = null; break;
      case 'run-swpick': case 'run-swundo':
        if (it) {
          if (a === 'run-swundo') doSwap(x, it, null);
          else { var cont2 = b.closest('.swp'), sn2 = b.getAttribute('data-n') || String(((cont2 && cont2.querySelector('[data-swn]')) || {}).value || '').trim(), lb2 = libFind(sn2);
            if (!sn2) { toast('Choisis ou tape un exercice'); return; } doSwap(x, it, lb2 ? libName(lb2) : sn2, false); }
        }
        ui.run.swap = null; ui.run.d = null; break;
      case 'run-more': if (it) { ui.run.more = it.id; ui.run.d = null; } break;
      case 'run-rest': var dd = num(b.getAttribute('data-d')); if (!dd) { tm.end = 0; clearInterval(tm.iv); } else if (tm.end) { tm.end = Math.max(Date.now() + 1000, tm.end + dd * 1000); tm.beeped = false; } break;
      case 'run-srpe': var sn = num(b.getAttribute('data-n')); setLog(ui.run.key, { done: true, rpe: (x.log && x.log.rpe === sn) ? null : sn }); break;
    }
    runSave(); drawRun(); render();
  };
  var runBtnHtml = function (x) {
    if (!isMuscuInst(x)) return '';
    var act = !!(ui.run && ui.run.key === x.key), f = runFirst(x), empty = !!x.s.extra && !x.g.items.length;
    if (!empty && !x.g.items.some(function (it) { return runLoggable(x, it); })) return '';
    if (f < 0 && !act && !empty) return '';
    var started = act || x.g.items.some(function (it) { var st = runState(x, it); return st === 'done' || st === 'part' || st === 'skip'; });
    return '<button class="btn primary runbtn" data-a="run-open" data-key="' + esc(x.key) + '">▶ ' + (started ? 'Reprendre la séance' : 'Démarrer la séance') + '</button><span class="small mu" style="margin-top:-4px">Plein écran, exercice par exercice, repos lancé automatiquement.</span>';
  };
  var detailHtml = function (x) {
    if (!x) return '<div class="card col"><h2>Détail de la séance</h2><p class="mu">Touche une séance pour voir les exercices, séries et charges, puis note ton RPE quand elle est faite.</p></div>';
    var c = colorOf(x.p), log = x.log || {}, adv = adviceFor(x);
    var items = x.g.items.map(function (it) {
      if (isMuscuInst(x)) return muscuItemHtml(x, it);
      var ek = x.key + '|' + it.id, editing = ui.edit === ek;
      var ov = (x.p.overrides || {})[x.w + '|' + x.s.id + '|' + it.id];
      return '<div class="it"><span class="n">' + esc(it.name) + (it.edited ? ' <span class="small" style="color:var(--warn)">· modifié</span>' : '') + '</span><span class="s">' + esc(it.scheme) + '</span><span class="no">' + esc(it.note) + '</span><span class="lo" style="color:' + c + '">' + esc(it.load) + '</span>' + realHtml(x, it) +
        (editing ? '<div class="ed"><input class="in" id="ov-scheme" placeholder="Schéma (ex. 4×6)" value="' + esc(ov && ov.scheme || '') + '" aria-label="Schéma pour cette semaine"><input class="in" id="ov-load" placeholder="Charge (ex. 82,5 kg)" value="' + esc(ov && ov.load || '') + '" aria-label="Charge pour cette semaine"><button class="btn sm primary" data-a="ov-save" data-key="' + esc(ek) + '">OK</button>' + (ov ? '<button class="btn sm ghost" data-a="ov-clear" data-key="' + esc(ek) + '">Rétablir</button>' : '') + '<button class="btn sm ghost" data-a="ov-cancel">Annuler</button></div>'
          : x.s.extra ? '' : '<div style="grid-column:1/-1"><button class="btn sm b-edit" style="margin-top:6px" data-a="ov-edit" data-key="' + esc(ek) + '">Modifier pour cette semaine</button></div>') + '</div>';
    }).join('');
    var RPEC = ['#3E7F73', '#4E9A7F', '#62AD84', '#86B86F', '#B5BE5E', '#D9B44F', '#E79A45', '#EC7D43', '#E8603F', '#D9453B'];
    var plan = Math.round(x.g.rpe);
    var rpe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { var on = log.rpe === n, fill = log.rpe && n <= log.rpe; return '<button data-a="rpe" data-key="' + esc(x.key) + '" data-n="' + n + '" aria-pressed="' + on + '" aria-label="RPE ' + n + '" class="' + (on ? 'on' : '') + (n === plan ? ' plan' : '') + '" style="background:' + (fill ? RPEC[n - 1] : tint(RPEC[n - 1], 0.22)) + '"><span>' + n + '</span></button>'; }).join('');
    var rpeLab = log.rpe ? 'RPE ' + log.rpe + ' · ' + Math.max(0, 10 - log.rpe) + ' en réserve' : 'Touche l’échelle';
    var tparts = String(x.g.title).split(' — ');
    return '<div class="card col" style="gap:10px">' + pillHtml(x.p) + '<h2>' + esc(tparts[0]) + '</h2>' + (tparts.length > 1 ? '<span class="t2" style="font-size:14px;font-weight:600;margin-top:-6px">' + esc(tparts.slice(1).join(' — ')) + '</span>' : '') + '<span class="mu" style="font-size:13px">' + esc(dLabel(x.date)) + ' · semaine ' + x.w + '/' + progLen(x.p) + ' · ' + esc(x.g.meta) + '</span>' + (x.s.extra ? '<span class="small mu">Durée ' + x.g.dur + ' min · RPE ' + fmtN(x.g.rpe) + ' · charge ' + x.g.ua + ' UA</span>' : '<span class="small mu">Durée prévue ' + x.g.dur + ' min · charge prévue ' + x.g.ua + ' UA</span>') +
      summaryHtml(x) + runBtnHtml(x) + crossAlert(x) + (x.s.extra ? extraBarHtml(x) : moveHtml(x)) + copyHtml(x) + (x.s.extra && isMuscuInst(x) ? '<b class="small" style="margin-top:4px">Exercices · note tes séries réelles</b>' : '') + (x.p.kind === 'muscu' && !x.s.extra ? '<div class="row between" style="margin-top:4px"><b class="small">Exercices</b>' + (ui.reorder === x.key ? '<span class="row">' + ((x.p.orders || {})[x.w + '|' + x.s.id] ? '<button class="btn sm ghost" data-a="ord-all" data-key="' + esc(x.key) + '">Garder cet ordre pour tout le cycle</button><button class="btn sm ghost" data-a="ord-reset" data-key="' + esc(x.key) + '">Ordre du plan</button>' : '') + '<button class="btn sm primary" data-a="reorder" data-key="">Terminé</button></span>' : '<button class="btn sm b-order" data-a="reorder" data-key="' + esc(x.key) + '">Réorganiser</button>') + '</div>' : '') + '<div class="items">' + items + '</div>' +
      '<div class="col" style="border-top:1px solid var(--bd);padding-top:12px;gap:10px">' +
      '<button class="btn" data-a="done" data-key="' + esc(x.key) + '" aria-pressed="' + !!log.done + '" style="min-height:48px;' + (log.done ? 'border-color:var(--ok);color:#0F1215;background:var(--ok)' : 'border-color:rgba(127,224,201,.6);color:var(--ok);background:rgba(127,224,201,.10)') + '">' + ICON.check + (log.done ? 'Séance faite' : 'Marquer comme faite') + '</button>' +
      '<div class="col" style="gap:6px"><div class="row between"><span class="small mu">' + (x.s.extra ? 'RPE ressenti' : 'RPE ressenti · repère blanc = prévu (' + fmtN(x.g.rpe) + ')') + '</span><b class="small">' + rpeLab + '</b></div><div class="rpe" role="group" aria-label="RPE ressenti, de 1 à 10">' + rpe + '</div><div class="rpe-ends small mu"><span>Très facile</span><span>Maximal</span></div></div>' +
      painHtml(x) +
      '<label class="field"><span>Note (sensations, douleur, charges réelles…)</span><textarea class="in" data-note="' + esc(x.key) + '" rows="2">' + esc(log.note || '') + '</textarea></label>' +
      (adv ? '<div class="advice' + (adv.warn ? ' warn' : '') + '">' + esc(adv.text) + (adv.adj ? '<div style="margin-top:8px"><button class="btn sm" data-a="adj" data-key="' + esc(x.key) + '" data-d="' + adv.adj + '">' + (adv.adj > 0 ? 'Monter la référence de 2,5 kg' : 'Baisser la référence de 2,5 kg') + '</button></div>' : '') + '</div>' : '') +
      '</div></div>';
  };
  var findInst = function (key) {
    if (!key) return null;
    var parts = key.split('|'), p = progById(parts[0]); if (!p) return null;
    var w = num(parts[1]) | 0, s = null; sessList(p).forEach(function (z) { if (z.id === parts[2]) s = z; });
    var xe = (p.extras || []).filter(function (z) { return z.id === parts[2]; })[0];
    if (xe) { var xw = extraW(p, xe), xg = gen(p, xe, xw); if (!xg) return null; return { p: p, s: xe, w: xw, g: xg, key: p.id + '|' + xw + '|' + xe.id, date: parseISO(xe.date), moved: false, log: (p.logs || {})[xw + '|' + xe.id] || null }; }
    if (!s || w < 1 || w > progLen(p)) return null;
    var date = addDays(progStart(p), (w - 1) * 7 + effDay(p, s, w));
    var g = gen(p, s, w); if (!g) return null;
    return { p: p, s: s, w: w, g: g, key: key, date: date, moved: effDay(p, s, w) !== (num(s.day, 0) | 0), log: (p.logs || {})[w + '|' + s.id] || null };
  };
  var startsThisWeek = function (mon) { return visible().some(function (p) { return weekOf(p, mon) === 1; }); };
  var weekAlerts = function (mon, st) {
    var out = [], prev = weekStats(addDays(mon, -7));
    if (prev.ua > 0 && st.ua > 0 && !startsThisWeek(mon)) {
      var v = (st.ua - prev.ua) / prev.ua * 100;
      if (v > 15) out.push(prev.light ? { warn: false, text: 'Reprise après une semaine allégée : charge interne +' + Math.round(v) + ' %. C’est attendu, surveille les sensations (tendons) dans les 24 h.' } : { warn: true, text: 'Charge interne +' + Math.round(v) + ' % par rapport à la semaine précédente : au-dessus du repère de 15 %.' });
    }
    visible().forEach(function (p) {
      var w = weekOf(p, mon); if (!w) return;
      if (p.kind === 'muscu') { var sp = muscuSpec(p, w); if (sp && sp.deload) out.push({ warn: false, text: (p.name || 'Muscu') + ' : semaine de décharge, technique propre et pas de record.' }); if (sp && sp.test) out.push({ warn: false, text: (p.name || 'Muscu') + ' : semaine test 1RM, arrive reposé et allège les autres activités.' }); }
      if (p.kind === 'course' && w > 1) {
        var cur = 0, pv = 0; (p.runs || []).forEach(function (rs) { cur += genRun(p, rs, w).runMin; pv += genRun(p, rs, w - 1).runMin; });
        extrasIn(p, w).forEach(function (e) { if (e.kind === 'course') cur += num(e.dur, 0); }); extrasIn(p, w - 1).forEach(function (e) { if (e.kind === 'course') pv += num(e.dur, 0); });
        var cap = num(p.capPct, 15);
        if (pv > 0 && !runIsDeload(p, w - 1) && (cur - pv) / pv * 100 > cap + 0.5) out.push({ warn: true, text: (p.name || 'Course') + ' : volume de course +' + Math.round((cur - pv) / pv * 100) + ' % (garde-fou fixé à ' + cap + ' %). Réduis la progression ou la durée de départ.' });
        if (runIsDeload(p, w)) out.push({ warn: false, text: (p.name || 'Course') + ' : semaine allégée (−' + num(p.deloadPct, 25) + ' %).' });
      }
    });
    for (var i = 0; i < 7; i++) instancesOn(addDays(mon, i)).forEach(function (x) { if (x.log && x.log.rpe && x.log.rpe - x.g.rpe >= 2) out.push({ warn: true, text: JOURSL[i] + ' : ' + x.g.title + ' notée RPE ' + x.log.rpe + ' pour ' + fmtN(x.g.rpe) + ' prévu. Allège la prochaine séance du même type.' }); });
    return out;
  };
  var weekHtml = function () {
    var W = wide(), mon = parseISO(ui.weekStart), sun = addDays(mon, 6);
    var st = weekStats(mon), prev = weekStats(addDays(mon, -7));
    var range = mon.getDate() + (mon.getMonth() !== sun.getMonth() ? ' ' + MOIS[mon.getMonth()] : '') + ' – ' + sun.getDate() + ' ' + MOIS[sun.getMonth()] + ' ' + sun.getFullYear();
    var progLabels = visible().map(function (p) { var w = weekOf(p, mon); if (!w) return ''; var ex = p.kind === 'muscu' ? (function () { var sp = muscuSpec(p, w); return sp ? ' · ' + sp.ph : ''; })() : ''; return pillHtml(p, (p.name || KIND[p.kind].label) + ' S' + w + '/' + progLen(p) + ex); }).filter(Boolean).join('');
    var days = [];
    for (var i = 0; i < 7; i++) days.push({ d: addDays(mon, i), list: instancesOn(addDays(mon, i)) });
    var all = []; days.forEach(function (x) { all = all.concat(x.list); });
    if (!all.some(function (x) { return x.key === ui.sel; })) {
      var pick = days[ui.day] && days[ui.day].list[0] ? days[ui.day].list[0] : (W ? all[0] : null);
      ui.sel = pick ? pick.key : null;
    }
    var sel = findInst(ui.sel);
    var v = prev.ua > 0 && !startsThisWeek(mon) ? (st.ua - prev.ua) / prev.ua * 100 : null;
    var kpis = '<div class="kpis">' +
      '<div class="kpi"><span class="l">Charge interne</span><span class="v">' + thou(st.ua) + ' UA</span><span class="small" style="' + (v != null && v > 15 && !prev.light ? 'color:var(--warn);font-weight:600' : 'color:var(--mu)') + '">' + (v == null ? (startsThisWeek(mon) ? 'début de programme' : 'durée × RPE prévus') : (v >= 0 ? '+' : '') + Math.round(v) + ' % vs semaine préc.') + '</span></div>' +
      '<div class="kpi"><span class="l">Réalisé</span><span class="v" style="color:var(--ok)">' + st.done + ' / ' + st.total + '</span><span class="small mu">séances faites</span></div>' +
      '<div class="kpi"><span class="l">Course</span><span class="v" style="color:' + kc('#7FE0C9') + '">' + st.runMin + ' min</span><span class="small mu">' + (prev.runMin ? (st.runMin >= prev.runMin ? '+' : '') + (st.runMin - prev.runMin) + ' min vs sem. préc.' : 'volume prévu') + '</span></div>' +
      '<div class="kpi"><span class="l">Tonnage muscu</span><span class="v" style="color:' + kc('#FF9F43') + '">' + fmtN(st.ton / 1000) + ' t</span><span class="small mu">séries × reps × kg</span></div></div>';
    var alerts = weekAlerts(mon, st).map(function (a) { return '<div class="alert' + (a.warn ? ' warn' : '') + '">' + (a.warn ? ICON.warn : ICON.info) + '<span>' + esc(a.text) + '</span></div>'; }).join('');
    var main;
    if (W) {
      main = '<div class="wgrid">' + days.map(function (x, i) { var isT = iso(x.d) === iso(T0); return '<div class="dcol' + (isT ? ' today' : '') + '"><div class="dhead"><span class="dname">' + JOURS[i] + '</span><span class="dnum' + (isT ? ' today' : '') + '">' + x.d.getDate() + '</span></div>' + (x.list.length ? x.list.map(function (s) { return sessCardHtml(s, false); }).join('') : '<div class="rest">Repos</div>') + '</div>'; }).join('') + '</div>';
    } else {
      var dsel = Math.max(0, Math.min(6, ui.day));
      main = '<div class="strip" role="group" aria-label="Jour">' + days.map(function (x, i) { var isT = iso(x.d) === iso(T0); return '<button class="' + (i === dsel ? 'on' : '') + (isT ? ' today' : '') + '" data-a="day" data-day="' + i + '" aria-pressed="' + (i === dsel) + '" aria-label="' + esc(dLabel(x.d)) + ', ' + x.list.length + ' séance(s)"><span class="l">' + JOURS[i] + '</span><span class="n">' + x.d.getDate() + '</span><span class="dots">' + x.list.map(function (s) { return '<span class="dot" style="background:' + colorOf(s.p) + '"></span>'; }).join('') + cfOn(x.d).map(function () { return '<span class="dot" style="background:' + CFP.color + '"></span>'; }).join('') + '</span></button>'; }).join('') + '</div>' +
        '<span class="dname" style="margin-top:4px">' + esc(dLabel(days[dsel].d)) + '</span>' + (days[dsel].list.length || cfOn(days[dsel].d).length ? days[dsel].list.map(function (s) { return sessCardHtml(s, true); }).join('') + cfCardsHtml(days[dsel].d) : '<div class="rest">Repos</div>');
      if (sel && dow(sel.date) !== dsel) sel = null;
    }
    return '<section class="col" style="gap:12px" aria-label="Semaine">' +
      '<div class="wkhead"><button class="btn icon" data-a="wk" data-d="-1" aria-label="Semaine précédente">' + ICON.left + '</button><div class="col" style="gap:2px;align-items:center;text-align:center;min-width:0"><span class="bc" style="font-size:24px">Semaine du ' + mon.getDate() + ' ' + MOIS[mon.getMonth()] + '</span><span class="small mu">' + range + '</span></div><button class="btn icon" data-a="wk" data-d="1" aria-label="Semaine suivante">' + ICON.right + '</button></div>' +
      (progLabels ? '<div class="scrollx">' + progLabels + '</div>' : '<p class="mu">Aucun programme actif cette semaine.</p>') +
      kpis + alerts +
      '<div class="wk"><div class="wk-main">' + main + (state.programs.length ? '<button class="btn xadd" data-a="run-free">▶ Démarrer une séance de muscu libre</button>' : '') + '<button class="btn xadd" data-a="xf-new">' + ICON.plus + 'Ajouter une séance (faite ou à venir)</button></div><div class="wk-side">' + (ui.xf ? extraFormHtml() : detailHtml(sel)) + '</div></div></section>';
  };

  // ---------- Vue Mois ----------
  var monthHtml = function () {
    var W = wide(), m0 = parseISO(ui.month), last = new Date(m0.getFullYear(), m0.getMonth() + 1, 0);
    var cur = mondayOf(m0), cells = [], selDate = parseISO(ui.mDay);
    while (cur <= last || cells.length % 7 !== 0) {
      var list = instancesOn(cur), inM = cur.getMonth() === m0.getMonth(), isT = iso(cur) === iso(T0), on = selDate && iso(cur) === iso(selDate);
      var stripe = ''; visible().some(function (p) { if (p.kind !== 'muscu') return false; var w = weekOf(p, cur); if (!w) return false; var sp = muscuSpec(p, w); if (sp) stripe = sp.color; return !!sp; });
      cells.push('<button class="' + (inM ? '' : 'out ') + (isT ? 'today ' : '') + (on ? 'on' : '') + '" data-a="mday" data-d="' + iso(cur) + '" aria-pressed="' + !!on + '" aria-label="' + esc(dLabel(cur)) + ', ' + list.length + ' séance(s)">' + (stripe ? '<span class="stripe" style="background:' + stripe + '" aria-hidden="true"></span>' : '') + '<span class="num"' + (W ? '' : ' style="text-align:center"') + '>' + cur.getDate() + '</span>' +
        (W ? list.map(function (x) { var c = colorOf(x.p); return '<span class="chipm" style="color:' + c + ';background:' + tint(c, 0.14) + '">' + (x.log && x.log.done ? '✓ ' : '') + esc(x.g.short) + '</span>'; }).join('') : '<span class="dots" aria-hidden="true">' + list.map(function (x) { return '<span class="dot" style="background:' + colorOf(x.p) + (x.log && x.log.done ? '' : ';opacity:.85') + '"></span>'; }).join('') + '</span>') + '</button>');
      cur = addDays(cur, 1);
    }
    var dayList = selDate ? instancesOn(selDate) : [];
    var side = '<div class="card col"><h3>' + (selDate ? esc(dLabel(selDate)) : 'Choisis un jour') + '</h3>' + (selDate ? (dayList.length ? dayList.map(function (x) { return '<div class="col" style="gap:4px;padding:10px 0;border-top:1px solid var(--bd)">' + pillHtml(x.p) + '<span style="font-weight:600">' + esc(x.g.title) + '</span><span class="small mu">' + esc(x.g.meta) + '</span>' + (x.log && x.log.done ? '<span class="done-tag">' + ICON.check + 'Faite' + (x.log.rpe ? ' · RPE ' + x.log.rpe : '') + '</span>' : '') + '</div>'; }).join('') + '<button class="btn" data-a="open-day" data-d="' + iso(selDate) + '">Ouvrir ce jour dans la semaine</button>' : '<p class="mu">Repos.</p>') : '<p class="mu">Touche une date pour voir ses séances.</p>') + '</div>';
    var legend = {}; visible().forEach(function (p) { if (p.kind === 'muscu') (p.blocks || []).forEach(function (b) { var G = GOALS[b.goal] || GOALS.force; legend[G.label] = G.color; }); });
    var lg = Object.keys(legend).map(function (k) { return '<span><i style="background:' + legend[k] + '"></i>' + esc(k) + '</span>'; }).join('');
    return '<section class="wk" aria-label="Mois"><div class="wk-main card" style="gap:12px">' +
      '<div class="row between"><button class="btn icon" data-a="mo" data-d="-1" aria-label="Mois précédent">' + ICON.left + '</button><h2 style="text-transform:capitalize">' + MOISL[m0.getMonth()] + ' ' + m0.getFullYear() + '</h2><button class="btn icon" data-a="mo" data-d="1" aria-label="Mois suivant">' + ICON.right + '</button></div>' +
      '<div class="cal">' + JOURS.map(function (j) { return '<span class="h">' + j + '</span>'; }).join('') + cells.join('') + '</div>' +
      (lg ? '<div class="legend">' + lg + '<span><i style="background:#6B7680"></i>Décharge</span></div><p class="small mu">Le liseré en haut des jours indique le bloc de musculation en cours.</p>' : '') + '</div><div class="wk-side">' + side + '</div></section>';
  };

  // ---------- Vue Programmes ----------
  var blocksBar = function (p) {
    if (p.kind !== 'muscu') return '';
    var tot = progLen(p);
    return '<div class="blocks" aria-label="Blocs du cycle">' + (p.blocks || []).map(function (b) { var G = GOALS[b.goal] || GOALS.force; return '<span style="flex:' + Math.max(1, b.weeks | 0) + ';background:' + G.color + '" title="' + esc(G.label) + '">' + esc(G.sh) + ' ' + (b.weeks | 0) + 's</span>'; }).join('') + '</div><span class="small mu">' + tot + ' semaines · ' + (p.sessions || []).length + ' séance(s) / semaine</span>';
  };
  var progCard = function (p) {
    var s = progStart(p), e = progEnd(p), conf = ui.confirm === 'del:' + p.id;
    var done = 0, total = 0, xids = {}; (p.extras || []).forEach(function (e) { xids[e.id] = 1; }); Object.keys(p.logs || {}).forEach(function (k) { if (p.logs[k] && p.logs[k].done && !xids[k.split('|')[1]]) done++; });
    var n = sessList(p).length * progLen(p); total = n;
    var sub = p.kind === 'muscu' ? blocksBar(p) : '<span class="small mu">' + progLen(p) + ' semaines · ' + sessList(p).length + ' séance(s) / semaine' + (p.kind === 'course' && num(p.deloadEvery, 0) > 1 ? ' · allégée toutes les ' + (p.deloadEvery | 0) + ' sem.' : '') + '</span>';
    return '<div class="card col" style="gap:10px">' + pillHtml(p, KIND[p.kind].label) + '<h3>' + esc(p.name || 'Sans nom') + '</h3><span class="small t2">' + s.getDate() + ' ' + MOIS[s.getMonth()] + ' ' + s.getFullYear() + ' → ' + e.getDate() + ' ' + MOIS[e.getMonth()] + ' ' + e.getFullYear() + ' · ' + done + '/' + total + ' séances faites</span>' + sub +
      '<div class="row"><button class="btn sm primary" data-a="plan" data-id="' + p.id + '">Voir le plan</button><button class="btn sm" data-a="edit" data-id="' + p.id + '">Modifier</button><button class="btn sm ghost" data-a="dup" data-id="' + p.id + '">Dupliquer</button>' +
      (conf ? '<button class="btn sm danger" data-a="del-yes" data-id="' + p.id + '">Confirmer la suppression</button><button class="btn sm ghost" data-a="del-no">Annuler</button>' : '<button class="btn sm ghost" data-a="del" data-id="' + p.id + '" aria-label="Supprimer ' + esc(p.name) + '">' + ICON.trash + '</button>') + '</div></div>';
  };
  var programsHtml = function () {
    var head = '<div class="row between"><h2>Mes programmes</h2></div>';
    var nb = '<div class="card col"><h3>Nouveau programme</h3><div class="presets">' + Object.keys(KIND).map(function (k) { return '<button class="kindbtn" data-a="new" data-kind="' + k + '"><span class="dot" style="width:14px;height:14px;background:' + KIND[k].color + '"></span><span><b>' + KIND[k].label + '</b><span>' + KIND[k].desc + '</span></span></button>'; }).join('') + '</div></div>';
    var list = state.programs.length ? '<div class="plist">' + state.programs.map(progCard).join('') + '</div>' : '';
    var conf = ui.confirm === 'wipe';
    var data = '<div class="card col"><h3>Données</h3><p class="small mu">' + ((S.cloud && S.cloud.user) ? 'Tes programmes et ton suivi sont enregistrés dans ton compte et privés : ils sont les mêmes sur ton téléphone et ton ordinateur.' : 'Tes données sont enregistrées dans ce navigateur. Pense à copier une sauvegarde de temps en temps.') + '</p>' +
      '<div class="row"><button class="btn sm" data-a="export">Copier une sauvegarde</button><button class="btn sm" data-a="import-open">Importer une sauvegarde</button>' + (state.programs.length ? (conf ? '<button class="btn sm danger" data-a="wipe-yes">Tout effacer, confirmer</button><button class="btn sm ghost" data-a="del-no">Annuler</button>' : '<button class="btn sm danger" data-a="wipe">Tout effacer</button>') : '') + '</div>' +
      (ui.importOpen ? '<label class="field"><span>Colle ici le texte de la sauvegarde</span><textarea class="in" id="imp" rows="4"></textarea></label><div class="row"><button class="btn sm primary" data-a="import">Importer</button><button class="btn sm ghost" data-a="import-close">Fermer</button></div>' : '') +
      (ui.exportText ? '<label class="field"><span>Copie ce texte et garde-le (la copie automatique n’a pas fonctionné)</span><textarea class="in" rows="4" readonly>' + esc(ui.exportText) + '</textarea></label>' : '') + '</div>';
    return '<section class="col" style="gap:14px" aria-label="Programmes">' + head + (state.programs.length ? list + nb : emptyHtml()) + data + '</section>';
  };

  // ---------- Vue Plan d'un programme ----------
  var barsHtml = function (vals, opts) {
    var max = Math.max.apply(null, vals.map(function (v) { return Math.max(v.v || 0, v.real || 0); }).concat([1])), anyVar = vals.some(function (v) { return v.var != null; });
    return '<div class="bars">' + vals.map(function (v, i) {
      var h = v.v ? Math.max(3, Math.round(v.v / max * 150)) : 0, hm = v.real ? Math.round(v.real / max * 150) : 0;
      var bar = '<span class="bar" style="height:' + h + 'px">' + (v.segs ? v.segs.map(function (s) { return '<span style="display:block;width:100%;height:' + Math.max(1, Math.round(s.v / max * 150)) + 'px;background:' + s.c + '"></span>'; }).join('') : '<span style="display:block;width:100%;height:100%;background:' + v.c + '"></span>') + '</span>';
      if (v.real) bar = '<span class="barw" style="height:' + Math.max(h, hm + 3) + 'px">' + bar + '<span class="mark" style="bottom:' + Math.max(0, hm - 1) + 'px"></span></span>';
      return '<button class="' + (v.cur ? 'cur' : '') + '" data-a="' + opts.action + '" data-w="' + (i + 1) + '"' + (v.d ? ' data-d="' + v.d + '"' : '') + ' aria-label="' + esc(v.aria || '') + '"><span class="lab">' + esc(v.lab || '') + '</span>' + bar + '<span class="wn">' + esc(v.n) + '</span>' + (anyVar ? '<span class="var' + (v.hot ? ' hot' : '') + '">' + esc(v.var || '') + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  };
  var planHtml = function () {
    var p = progById(ui.planId); if (!p) { ui.view = 'programmes'; return programsHtml(); }
    var W = wide(), L = progLen(p), mon = parseISO(ui.weekStart), curW = weekOf(p, mon);
    var head = '<div class="row between"><div class="col" style="gap:6px">' + pillHtml(p, KIND[p.kind].label) + '<h2>' + esc(p.name) + '</h2><span class="small mu">' + L + ' semaines · début ' + dLabel(progStart(p)) + '</span></div><div class="row"><button class="btn sm ghost" data-a="view" data-v="programmes">Retour</button><button class="btn sm primary" data-a="edit" data-id="' + p.id + '">Modifier</button></div></div>';
    var chart = '', rows = [];
    for (var w = 1; w <= L; w++) {
      var mw = addDays(progStart(p), (w - 1) * 7), items = sessList(p).map(function (s) { return { s: s, g: gen(p, s, w), log: (p.logs || {})[w + '|' + s.id] }; }).filter(function (x) { return x.g; });
      rows.push({ w: w, mw: mw, items: items, spec: p.kind === 'muscu' ? muscuSpec(p, w) : null });
    }
    if (p.kind === 'muscu') {
      var names = []; (p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { if ((e.mode === 'pct' || e.mode === 'kg' || e.mode === 'reps') && names.indexOf(e.name) < 0) names.push(e.name); }); });
      if (!ui.planEx || names.indexOf(ui.planEx) < 0) ui.planEx = names[0] || null;
      if (ui.planEx) {
        var isReps = false, exObj = null; (p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { if (e.name === ui.planEx) { if (e.mode === 'reps') isReps = true; if (!exObj || (e.mode === 'pct' && num(e.offset, 0) === 0)) exObj = e; } }); });
        var hist = exHistory(p, ui.planEx), realBy = {};
        hist.forEach(function (hh) { var rv = isReps ? num(hh.reps) : num(hh.kg); if (rv > 0) realBy[hh.w] = Math.max(realBy[hh.w] || 0, rv); });
        var vals = rows.map(function (r) { var v = null, lab = ''; r.items.forEach(function (x) { x.g.items.forEach(function (it) { if (v == null && it.name === ui.planEx && it.loadNum != null) { v = it.loadNum; lab = fmtN(v); } }); }); var rl = realBy[r.w] || 0; return { v: v || 0, real: rl, lab: (!W && !(r.w === curW || r.w === 1 || r.w === L || rl)) ? '' : (rl ? fmtN(rl) : lab), n: W ? 'S' + r.w : String(r.w), c: r.spec ? r.spec.color : '#6B7680', cur: r.w === curW, aria: 'Semaine ' + r.w + ' : prévu ' + lab + (rl ? ', réalisé ' + fmtN(rl) : '') }; });
        var e1s = hist.filter(function (hh) { return hh.e1; }), recent = e1s.filter(function (hh) { return dayDiff(T0, hh.date) <= 42; }), best = recent.reduce(function (a, hh) { return Math.max(a, hh.e1); }, 0);
        var refBox = '';
        if (exObj && exObj.mode === 'pct') {
          var ref = num(exObj.orm, 0);
          var trP = tmTrace(p, exObj, L + 1), tmP = ref * trP.f, dpP = (trP.f - 1) * 100;
          refBox = '<div class="lgres" style="margin:0"><span>1RM de référence <b>' + kg(ref) + '</b> · 1RM de travail <b>' + kg(Math.round(tmP * 2) / 2) + '</b>' + (Math.abs(dpP) > 0.3 ? ' (' + (dpP > 0 ? '+' : '') + fmtN(dpP) + ' %)' : '') + (trP.steps.length ? ' · ajusté sur ' + trP.steps.length + ' séance(s)' : ' · aucune séance notée pour l’instant') + '</span></div>';
        }
        var histHtml = hist.length ? '<div style="overflow-x:auto"><table class="tb"><thead><tr><th>Sem.</th><th>Prévu</th><th>Réalisé</th>' + (exObj && exObj.mode === 'pct' ? '<th style="text-align:right">1RM estimé</th>' : '') + '</tr></thead><tbody>' + hist.slice().reverse().map(function (hh) {
          var real = (hh.mode === 'reps' ? '' : (hh.kg != null ? kg(num(hh.kg)) + ' × ' : '')) + (hh.reps != null ? hh.reps + (hh.mode === 'reps' ? ' reps' + (hh.kg ? ' (+' + kg(num(hh.kg)) + ')' : '') : '') : '') + (hh.rpe ? ' @ ' + hh.rpe : '');
          var cmp = hh.planNum && hh.kg && hh.mode !== 'reps' ? num(hh.kg) - hh.planNum : 0;
          return '<tr><td class="bc" style="font-size:15px;white-space:nowrap">S' + hh.w + '<div class="small mu" style="font-family:inherit">' + hh.date.getDate() + ' ' + MOIS[hh.date.getMonth()] + '</div></td><td class="t2">' + esc(hh.planScheme) + ' ' + esc(hh.plan) + '</td><td><b>' + esc(real) + '</b>' + (cmp ? '<div class="small" style="color:' + (cmp > 0 ? 'var(--ok)' : 'var(--warn)') + '">' + (cmp > 0 ? '+' : '') + kg(cmp) + ' vs prévu</div>' : '') + '</td>' + (exObj && exObj.mode === 'pct' ? '<td style="text-align:right;font-weight:600">' + (hh.e1 ? kg(r25(hh.e1)) : '—') + '</td>' : '') + '</tr>';
        }).join('') + '</tbody></table></div>' : '<p class="small mu">Aucune charge saisie. Dans la vue Semaine, ouvre une séance et remplis « Réalisé » sous l’exercice.</p>';
        chart = '<div class="card col" style="gap:12px"><div class="scrollx" role="group" aria-label="Exercice">' + names.map(function (n) { var on = n === ui.planEx; return '<button class="chip' + (on ? ' on' : '') + '" data-a="planex" data-n="' + esc(n) + '" aria-pressed="' + on + '" style="' + (on ? 'border-color:#FF9F43;background:rgba(255,159,67,.14)' : '') + '">' + esc(n) + '</button>'; }).join('') + '</div><h3>' + esc(ui.planEx) + ' · ' + (isReps ? 'répétitions' : 'charge') + ' par semaine</h3>' + refBox + barsHtml(vals, { action: 'plan-week' }) + '<div class="legend">' + (p.blocks || []).map(function (b, i) { var G = GOALS[b.goal] || GOALS.force; return '<span><i style="background:' + G.color + '"></i>Bloc ' + (i + 1) + ' · ' + esc(G.label) + '</span>'; }).join('') + '<span><i style="background:#6B7680"></i>Décharge</span><span><i style="background:#fff;height:3px;border-radius:2px"></i>Réalisé</span></div><h3 style="margin-top:4px">Historique</h3>' + histHtml + '</div>';
      }
    } else {
      var tv = rows.map(function (r, i) { var t = 0; r.items.forEach(function (x) { t += p.kind === 'course' ? (x.g.runMin || 0) : x.g.ua; }); return t; });
      chart = '<div class="card col" style="gap:12px"><h3>' + (p.kind === 'course' ? 'Minutes de course par semaine' : 'Charge interne par semaine (UA)') + '</h3>' + barsHtml(rows.map(function (r, i) { var v = tv[i], pv = i ? tv[i - 1] : 0, vr = pv ? (v - pv) / pv * 100 : null, light = p.kind === 'course' && runIsDeload(p, r.w); return { v: v, lab: (!W && !(r.w === curW || r.w === 1 || r.w === L)) ? '' : String(v), n: W ? 'S' + r.w : String(r.w), c: light ? '#6B7680' : colorOf(p), cur: r.w === curW, var: vr == null || (!W && !(p.kind === 'course' && vr > num(p.capPct, 15) + 0.5 && !runIsDeload(p, r.w - 1))) ? null : (vr >= 0 ? '+' : '') + Math.round(vr) + '%', hot: p.kind === 'course' && vr != null && vr > num(p.capPct, 15) + 0.5 && !runIsDeload(p, r.w - 1), aria: 'Semaine ' + r.w + ' : ' + v }; }), { action: 'plan-week' }) + '</div>';
    }
    var table;
    if (W) {
      var sn = sessList(p);
      table = '<div class="card" style="overflow-x:auto"><table class="tb"><thead><tr><th>Sem.</th><th>Date</th>' + (p.kind === 'muscu' ? '<th>Objectif</th>' : '') + sn.map(function (s) { return '<th>' + esc(JOURS[num(s.day, 0) | 0]) + ' · ' + esc(s.name || 'Séance') + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) {
        return '<tr class="' + (r.w === curW ? 'cur' : '') + '"><td class="bc" style="font-size:16px">S' + r.w + '</td><td class="t2" style="white-space:nowrap">' + r.mw.getDate() + ' ' + MOIS[r.mw.getMonth()] + '</td>' + (r.spec ? '<td><span class="pill" style="color:' + r.spec.color + ';border:1px solid ' + r.spec.color + '">' + esc(r.spec.ph) + '</span><div class="small mu" style="margin-top:4px">' + (r.spec.test ? '1RM' : r.spec.s + '×' + r.spec.r + ' @ ' + fmtN(r.spec.p) + ' %') + '</div></td>' : '') +
          r.items.map(function (x) { return '<td>' + (p.kind === 'muscu' ? x.g.items.filter(function (it) { return it.scheme; }).map(function (it) { return '<div><span class="t2">' + esc(it.name) + '</span> <b>' + esc(it.scheme) + '</b> ' + esc(it.load) + '</div>'; }).join('') : '<b>' + esc(x.g.title) + '</b>') + (x.log && x.log.done ? '<div class="done-tag">' + ICON.check + 'Faite' + (x.log.rpe ? ' · RPE ' + x.log.rpe : '') + '</div>' : '') + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
    } else {
      table = '<div class="col">' + rows.map(function (r) {
        var c = r.spec ? r.spec.color : (p.kind === 'course' && runIsDeload(p, r.w) ? '#6B7680' : colorOf(p));
        return '<div class="wcard' + (r.w === curW ? ' cur' : '') + '"><div class="row"><span class="badge" style="background:' + c + '">S' + r.w + '</span><span class="col grow" style="gap:0"><b>' + (r.spec ? esc(r.spec.ph) + ' · ' + (r.spec.test ? '1RM' : r.spec.s + '×' + r.spec.r + ' @ ' + fmtN(r.spec.p) + ' %') : 'Semaine ' + r.w) + '</b><span class="small mu">' + r.mw.getDate() + ' ' + MOIS[r.mw.getMonth()] + '</span></span></div>' +
          r.items.map(function (x) { return '<div class="small" style="border-top:1px solid var(--bd);padding-top:6px"><b>' + esc(JOURS[effDay(p, x.s, r.w)]) + ' · ' + esc(p.kind === 'muscu' ? x.g.title : x.g.title) + '</b>' + (p.kind === 'muscu' ? x.g.items.filter(function (it) { return it.scheme; }).map(function (it) { return '<div class="t2">' + esc(it.name) + ' · ' + esc(it.scheme) + (it.load ? ' · ' + esc(it.load) : '') + '</div>'; }).join('') : '') + (x.log && x.log.done ? '<div class="done-tag">' + ICON.check + 'Faite' + (x.log.rpe ? ' · RPE ' + x.log.rpe : '') + '</div>' : '') + '</div>'; }).join('') + '</div>';
      }).join('') + '</div>';
    }
    return '<section class="col" style="gap:14px" aria-label="Plan">' + head + (p.kind === 'muscu' ? '<div class="card col">' + blocksBar(p) + '</div>' : '') + chart + table + '</section>';
  };

  // ---------- Vue Analyse ----------
  var ormCard = function (progs) {
    var rows = [];
    progs.forEach(function (p) {
      if (p.kind !== 'muscu') return;
      var seen = {};
      (p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) {
        if (e.mode !== 'pct' || num(e.offset, 0) !== 0 || seen[e.name]) return; seen[e.name] = 1;
        var ref = num(e.orm, 0), wNow = weekOf(p, T0) || (T0 > progEnd(p) ? progLen(p) + 1 : 1), tr = tmTrace(p, e, wNow + (T0 > progEnd(p) ? 0 : 1)), tm = ref * tr.f, dp = (tr.f - 1) * 100;
        var last = tr.steps.length ? tr.steps[tr.steps.length - 1] : null;
        rows.push('<div class="col" style="gap:6px;padding:10px 0;border-top:1px solid var(--bd)"><div class="row between"><span style="font-weight:600">' + esc(e.name) + '</span>' + pillHtml(p) + '</div><span class="small t2">Référence <b>' + kg(ref) + '</b> · 1RM de travail <b style="color:' + (dp > 0.3 ? 'var(--ok)' : (dp < -0.3 ? 'var(--warn)' : 'inherit')) + '">' + kg(Math.round(tm * 2) / 2) + '</b>' + (Math.abs(dp) > 0.3 ? ' (' + (dp > 0 ? '+' : '') + fmtN(dp) + ' %)' : '') + (tr.steps.length ? ' · ' + tr.steps.length + ' séance(s) prise(s) en compte' : ' · pas encore de séance notée') + '</span></div>');
      }); });
    });
    if (!rows.length) return '';
    return '<div class="card col"><h3>1RM : référence et 1RM de travail</h3><p class="small mu">Le 1RM de travail sert à calculer tes charges. Il se recale après chaque séance notée, d’après l’écart entre ce que tu as fait (charge, reps, RPE) et ce que le plan attendait, avec la moitié de l’écart et au plus ±5 % par séance.</p>' + rows.join('') + '</div>';
  };
  var analyseHtml = function () {
    var W = wide(), progs = visible();
    if (!progs.length) return '<section class="card"><p class="mu">Aucun programme affiché.</p></section>';
    var s = progs.reduce(function (a, p) { var x = progStart(p); return !a || x < a ? x : a; }, null), e = progs.reduce(function (a, p) { var x = progEnd(p); return !a || x > a ? x : a; }, null);
    var n = Math.min(30, Math.ceil((dayDiff(e, s) + 1) / 7));
    var mon = parseISO(ui.weekStart), weeks = [];
    for (var i = 0; i < n; i++) { var m = addDays(s, i * 7), st = weekStats(m); weeks.push({ m: m, st: st }); }
    var segP = progs.concat(weeks.some(function (x) { return x.st.byProg.__cf; }) ? [CFP] : []);
    var vals = weeks.map(function (x, i) {
      var cur = iso(x.m) === iso(mon), pv = i && !startsThisWeek(x.m) ? weeks[i - 1].st.ua : 0, vr = pv ? (x.st.ua - pv) / pv * 100 : null, showN = W || cur || i === 0 || i === weeks.length - 1;
      return { v: x.st.ua, segs: segP.filter(function (p) { return x.st.byProg[p.id]; }).map(function (p) { return { v: x.st.byProg[p.id], c: colorOf(p) }; }), lab: (!W && !cur) ? '' : fmtN(x.st.ua / 1000) + 'k', n: showN ? x.m.getDate() + '/' + (x.m.getMonth() + 1) : '', cur: cur, var: (!W && !(vr != null && vr > 15 && !weeks[i - 1].st.light)) ? null : (vr == null ? '' : (vr >= 0 ? '+' : '') + Math.round(vr) + '%'), hot: vr != null && vr > 15 && !weeks[i - 1].st.light, d: iso(x.m), aria: 'Semaine du ' + x.m.getDate() + ' ' + MOIS[x.m.getMonth()] + ' : ' + thou(x.st.ua) + ' UA' };
    });
    var legend = segP.map(function (p) { return '<span><i style="background:' + colorOf(p) + '"></i>' + esc(p.name) + '</span>'; }).join('');
    var adh = progs.map(function (p) {
      var past = 0, done = 0, L = progLen(p);
      for (var w = 1; w <= L; w++) sessList(p).forEach(function (ss) { var d = addDays(progStart(p), (w - 1) * 7 + effDay(p, ss, w)); var lg = (p.logs || {})[w + '|' + ss.id], dn = !!(lg && lg.done); if (d <= T0 || dn) { past++; if (dn) done++; } });
      var pc = past ? Math.round(done / past * 100) : 0;
      return '<div class="col" style="gap:6px;padding:10px 0;border-top:1px solid var(--bd)"><div class="row between">' + pillHtml(p) + '<span class="bc" style="font-size:20px">' + (past ? pc + ' %' : '—') + '</span></div><span aria-hidden="true" style="display:block;height:6px;border-radius:3px;background:var(--bd);overflow:hidden"><span style="display:block;height:100%;width:' + pc + '%;background:' + colorOf(p) + '"></span></span><span class="small mu">' + done + ' faites sur ' + past + ' prévues à ce jour</span></div>';
    }).join('');
    return '<section class="col" style="gap:14px" aria-label="Analyse"><div class="card col" style="gap:12px"><h2>Charge interne hebdo, toutes activités</h2><p class="small mu">Durée × RPE prévu (UA)' + (segP.length > progs.length ? ', CrossFit compris (durée × RPE noté)' : '') + '. Orange : hausse de plus de 15 % sur une semaine. Touche une semaine pour l’ouvrir.</p>' +
      '<div style="overflow-x:auto"><div style="min-width:' + (W ? 0 : Math.max(320, n * 22)) + 'px">' + barsHtml(vals, { action: 'an-week' }) + '</div></div><div class="legend">' + legend + '</div></div>' +
      ormCard(progs) + '<div class="card col"><h3>Assiduité</h3>' + adh + '</div></section>';
  };

  // ---------- Rendu principal ----------
  var renderPending = false;
  var render = function () { if (typeof window.render === 'function') window.render(); };
  var buildHtml = function () {
    var body; if (ui.view === 'mois') ui.view = 'semaine';
    if (!state.programs.length && (ui.view === 'semaine' || ui.view === 'mois' || ui.view === 'analyse')) body = emptyHtml();
    else if (ui.view === 'programmes') body = programsHtml();
    else if (ui.view === 'plan') body = planHtml();
    else if (ui.view === 'analyse') body = analyseHtml();
    else body = weekHtml();
    return '<div class="wrap">' + headerHtml() + body + '</div>';
  };

  // ---------- Éditeur ----------
  var ed = null;
  var dayOpts = function (v) { return JOURSL.map(function (j, i) { return '<option value="' + i + '"' + ((num(v, 0) | 0) === i ? ' selected' : '') + '>' + j + '</option>'; }).join(''); };
  var opt = function (list, v) { return list.map(function (o) { return '<option value="' + o[0] + '"' + (String(v) === String(o[0]) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join(''); };
  var fld = function (label, path, val, attrs) { return '<label class="field"><span>' + label + '</span><input class="in" data-f="' + path + '" value="' + esc(val == null ? '' : val) + '" ' + (attrs || '') + '></label>'; };
  var nfld = function (label, path, val, extra) { return fld(label, path, val, 'type="number" inputmode="decimal" step="any" data-t="n" ' + (extra || '')); };
  var sel = function (label, path, html, rr) { return '<label class="field"><span>' + label + '</span><select class="in" data-f="' + path + '"' + (rr ? ' data-rr="1"' : '') + (path.indexOf('day') >= 0 || path.indexOf('weeks') >= 0 || path.indexOf('offset') >= 0 ? ' data-t="n"' : '') + '>' + html + '</select></label>'; };
  var editorBody = function () {
    var d = ed.draft, k = d.kind, h = '';
    h += '<div class="sec"><h3>Général</h3><div class="fgrid w2">' + fld('Nom du programme', 'name', d.name, 'maxlength="60"') + fld('Début (semaine 1 = lundi de cette date)', 'start', d.start, 'type="date" data-rr="1"') + '</div>';
    h += '<div class="field"><span>Couleur</span><div class="row">' + COLORS.map(function (c) { return '<button class="swatch' + (d.color === c ? ' on' : '') + '" data-a="ed-color" data-c="' + c + '" aria-label="Couleur ' + c + '" aria-pressed="' + (d.color === c) + '" style="background:' + c + '"></button>'; }).join('') + '</div></div>';
    h += '</div>';
    if (k === 'muscu') {
      h += '<div class="sec"><h3>Modèle de cycle</h3><p class="small mu">Un modèle remplace les blocs ci-dessous. Tes séances et exercices sont conservés.</p><div class="presets">' + CYCLE_PRESETS.map(function (c) { return '<button class="preset' + (d.preset === c.id ? ' on' : '') + '" data-a="ed-preset" data-id="' + c.id + '"><b>' + c.label + '</b><span>' + c.desc + '</span></button>'; }).join('') + '</div></div>';
      h += '<div class="sec"><h3>Blocs (mésocycles) <span class="small mu" style="font-family:inherit">' + progLen(d) + ' semaines au total</span></h3>' + (d.blocks || []).map(function (b, i) {
        var G = GOALS[b.goal] || GOALS.force, cu = b.custom || DEF_CUSTOM;
        return '<div class="sub"><div class="row between"><span class="row"><span class="badge" style="background:' + G.color + '">B' + (i + 1) + '</span><span class="small mu">' + esc(G.desc) + ' · repos ' + esc(G.rest) + '</span></span>' + ((d.blocks || []).length > 1 ? '<button class="btn sm ghost icon" data-a="ed-del-block" data-i="' + i + '" aria-label="Supprimer le bloc ' + (i + 1) + '">' + ICON.trash + '</button>' : '') + '</div><div class="fgrid">' +
          sel('Objectif', 'blocks.' + i + '.goal', opt(GOAL_ORDER.map(function (g) { return [g, GOALS[g].label]; }), b.goal), true) +
          sel('Durée', 'blocks.' + i + '.weeks', opt([2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map(function (n) { return [n, n + ' semaines']; }), b.weeks), true) +
          sel('Dernière semaine', 'blocks.' + i + '.end', opt([['deload', 'Décharge'], ['test', 'Test 1RM'], ['none', 'Aucune (travail)']], b.end), true) + '</div>' +
          (b.goal === 'perso' ? '<div class="fgrid">' + nfld('Séries', 'blocks.' + i + '.custom.s', cu.s) + nfld('Répétitions', 'blocks.' + i + '.custom.r', cu.r) + nfld('% 1RM semaine 1', 'blocks.' + i + '.custom.p0', cu.p0) + nfld('+ % par semaine', 'blocks.' + i + '.custom.inc', cu.inc) + nfld('RPE visé', 'blocks.' + i + '.custom.rpe', cu.rpe) + '</div>' : '') + '</div>';
      }).join('') + '<button class="btn" data-a="ed-add-block">' + ICON.plus + 'Ajouter un bloc</button></div>';
      h += '<div class="sec"><h3>Séances de la semaine type</h3><p class="small mu">Entre ta séance une fois : séries, répétitions et charges se calculent pour chaque semaine selon le bloc. « Principal » suit le % du 1RM du modèle, « Charge en kg » progresse de l’incrément choisi, « Poids du corps » ajoute des répétitions.</p>' +
        ((d.sessions || []).length ? '' : '<div class="row"><button class="btn" data-a="ed-sample">Remplir avec un exemple (A/B, 5 mouvements)</button></div>') +
        (d.sessions || []).map(function (s, i) {
          return '<div class="sub"><div class="row between"><b>Séance ' + (i + 1) + '</b><button class="btn sm ghost icon" data-a="ed-del-sess" data-i="' + i + '" aria-label="Supprimer la séance ' + (i + 1) + '">' + ICON.trash + '</button></div><div class="fgrid w2">' + fld('Nom', 'sessions.' + i + '.name', s.name) + '</div><div class="fgrid">' + sel('Jour', 'sessions.' + i + '.day', dayOpts(s.day)) + nfld('Durée (min)', 'sessions.' + i + '.dur', s.dur) + '</div>' +
            (s.exercises || []).map(function (e, j) {
              var pth = 'sessions.' + i + '.exercises.' + j + '.';
              var f = '';
              var restF = fld('Repos (vide = auto)', pth + 'rest', e.rest, 'placeholder="ex. 3 min"');
              if (e.mode === 'pct') f = nfld('1RM (kg)', pth + 'orm', e.orm) + sel('Variante', pth + 'offset', opt([[0, 'Principale'], [-5, 'Secondaire −5 %'], [-10, 'Secondaire −10 %'], [-15, 'Secondaire −15 %']], e.offset || 0)) + nfld('Reps max (0 = selon bloc)', pth + 'repCap', e.repCap || 0) + nfld('Séries max (0 = selon bloc)', pth + 'setCap', e.setCap || 0) + nfld('Pas de charge (kg)', pth + 'step', e.step || 2.5) + fld('Note', pth + 'note', e.note);
              else if (e.mode === 'kg') f = nfld('Séries', pth + 'sets', e.sets) + nfld('Reps (min)', pth + 'reps', e.reps) + nfld('Reps max (double progression, 0 = non)', pth + 'repsMax', e.repsMax || 0) + nfld('Charge S1 (kg)', pth + 'startKg', e.startKg) + nfld(num(e.repsMax, 0) > num(e.reps, 0) ? '+ kg à chaque cycle de reps' : '+ kg / semaine', pth + 'incKg', e.incKg) + fld('Note', pth + 'note', e.note);
              else if (e.mode === 'reps') f = nfld('Séries', pth + 'sets', e.sets) + nfld('Reps S1', pth + 'reps', e.reps) + nfld('+ reps / sem.', pth + 'incReps', e.incReps) + nfld('Reps max', pth + 'maxReps', e.maxReps) + sel('Semaine test', pth + 'testMax', opt([[0, '1 série en moins'], [1, 'Test : max unbroken']], num(e.testMax, 0) > 0 || e.testMax === true ? 1 : 0)) + fld('Note', pth + 'note', e.note);
              else f = fld('Prescription', pth + 'text', e.text, 'placeholder="ex. 3×12 RPE 8"') + fld('Note', pth + 'note', e.note);
              if (e.mode !== 'libre') f += restF;
              return '<div class="exr"><div class="row between"><span class="small mu">Exercice ' + (j + 1) + '</span><button class="btn sm ghost icon" data-a="ed-del-ex" data-i="' + i + '" data-j="' + j + '" aria-label="Supprimer l’exercice">' + ICON.trash + '</button></div><div class="fgrid w2">' + fld('Nom', pth + 'name', e.name, 'list="pl-lib" autocomplete="off" placeholder="Choisis ou écris un exercice"') + sel('Type', pth + 'mode', opt(EX_MODES, e.mode), true) + '</div><div class="fgrid">' + f + '</div></div>';
            }).join('') + '<button class="btn sm" data-a="ed-add-ex" data-i="' + i + '">' + ICON.plus + 'Ajouter un exercice</button></div>';
        }).join('') + '<button class="btn" data-a="ed-add-sess">' + ICON.plus + 'Ajouter une séance</button></div>';
    }
    if (k === 'course') {
      h += '<div class="sec"><h3>Modèle</h3><p class="small mu">Un modèle remplace les séances et réglages ci-dessous.</p><div class="presets">' + RUN_PRESETS.map(function (c) { return '<button class="preset' + (d.preset === c.id ? ' on' : '') + '" data-a="ed-preset" data-id="' + c.id + '"><b>' + c.label + '</b><span>' + c.desc + '</span></button>'; }).join('') + '</div></div>';
      h += '<div class="sec"><h3>Réglages</h3><div class="fgrid">' + nfld('Nombre de semaines', 'weeks', d.weeks, 'data-rr="1"') + sel('Semaine allégée', 'deloadEvery', opt([[0, 'Jamais'], [3, 'Toutes les 3 sem.'], [4, 'Toutes les 4 sem.'], [5, 'Toutes les 5 sem.']], d.deloadEvery || 0), false) + nfld('Réduction allégée (%)', 'deloadPct', d.deloadPct) + nfld('Garde-fou hausse hebdo (%)', 'capPct', d.capPct) + '</div></div>';
      h += '<div class="sec"><h3>Séances de la semaine type</h3>' + (d.runs || []).map(function (r, i) {
        var pth = 'runs.' + i + '.', f = '';
        if (r.type === 'intervalles') f = nfld('Répétitions S1', pth + 'reps0', r.reps0) + nfld('+ rép. / semaine', pth + 'repsInc', r.repsInc) + nfld('Rép. max', pth + 'maxReps', r.maxReps) + nfld('Effort (min)', pth + 'effort', r.effort) + nfld('Récup (min)', pth + 'recup', r.recup) + nfld('Échauffement (min)', pth + 'warm', r.warm);
        else if (r.type === 'libre') f = nfld('Durée (min)', pth + 'startMin', r.startMin);
        else f = nfld('Durée S1 (min)', pth + 'startMin', r.startMin) + sel('Progression', pth + 'mode', opt([['min', 'En minutes'], ['pct', 'En %']], r.mode || 'min'), true) + nfld(r.mode === 'pct' ? '+ % / semaine' : '+ min / semaine', pth + 'inc', r.inc) + (r.mode === 'pct' ? '' : nfld('À partir de (min)', pth + 'switchMin', r.switchMin || 0) + nfld('puis + min / semaine', pth + 'inc2', r.inc2 || 0)) + nfld('Durée max (min)', pth + 'maxMin', r.maxMin);
        return '<div class="sub"><div class="row between"><b>Séance ' + (i + 1) + '</b><button class="btn sm ghost icon" data-a="ed-del-run" data-i="' + i + '" aria-label="Supprimer la séance ' + (i + 1) + '">' + ICON.trash + '</button></div><div class="fgrid w2">' + fld('Nom', pth + 'name', r.name) + sel('Type', pth + 'type', opt([['continu', 'Course continue'], ['intervalles', 'Intervalles / marche-course'], ['libre', 'Libre (durée fixe)']], r.type), true) + '</div><div class="fgrid">' + sel('Jour', pth + 'day', dayOpts(r.day)) + f + nfld('RPE prévu', pth + 'rpe', r.rpe) + '</div>' + fld('Consigne (allure, zone…)', pth + 'note', r.note) + '</div>';
      }).join('') + '<button class="btn" data-a="ed-add-run">' + ICON.plus + 'Ajouter une séance</button></div>';
    }
    if (k === 'fixe') {
      h += '<div class="sec"><h3>Modèle</h3><div class="presets">' + FIXED_PRESETS.map(function (c) { return '<button class="preset' + (d.preset === c.id ? ' on' : '') + '" data-a="ed-preset" data-id="' + c.id + '"><b>' + c.label + '</b><span>' + c.desc + '</span></button>'; }).join('') + '</div></div>';
      h += '<div class="sec"><h3>Réglages</h3><div class="fgrid">' + nfld('Nombre de semaines', 'weeks', d.weeks, 'data-rr="1"') + '</div></div>';
      h += '<div class="sec"><h3>Séances récurrentes</h3>' + (d.fixed || []).map(function (s, i) {
        var pth = 'fixed.' + i + '.';
        return '<div class="sub"><div class="row between"><b>Séance ' + (i + 1) + '</b><button class="btn sm ghost icon" data-a="ed-del-fixed" data-i="' + i + '" aria-label="Supprimer la séance ' + (i + 1) + '">' + ICON.trash + '</button></div><div class="fgrid w2">' + fld('Nom', pth + 'name', s.name) + fld('Précision (soir, lieu…)', pth + 'note', s.note) + '</div><div class="fgrid">' + sel('Jour', pth + 'day', dayOpts(s.day)) + nfld('Durée (min)', pth + 'dur', s.dur) + nfld('RPE prévu', pth + 'rpe', s.rpe) + '</div><label class="field"><span>Contenu (une ligne par exercice)</span><textarea class="in" data-f="' + pth + 'detail" rows="3">' + esc(s.detail || '') + '</textarea></label></div>';
      }).join('') + '<button class="btn" data-a="ed-add-fixed">' + ICON.plus + 'Ajouter une séance</button></div>';
    }
    h += '<div class="sec"><h3>Aperçu du plan généré</h3><div id="ed-preview">' + previewHtml(d) + '</div></div>';
    if (!ed.isNew) h += '<div class="row"><button class="btn danger" data-a="ed-delete">' + ICON.trash + 'Supprimer ce programme</button></div>';
    return h;
  };
  var previewHtml = function (d) {
    var L = progLen(d), list = sessList(d);
    if (!list.length) return '<p class="mu small">Ajoute au moins une séance pour voir le plan se construire.</p>';
    var rows = '';
    for (var w = 1; w <= L; w++) {
      var mw = addDays(progStart(d), (w - 1) * 7), sp = d.kind === 'muscu' ? muscuSpec(d, w) : null, c = sp ? sp.color : (d.kind === 'course' && runIsDeload(d, w) ? '#6B7680' : colorOf(d));
      var txt = list.map(function (s) {
        var g = gen(d, s, w); if (!g) return '';
        if (d.kind === 'muscu') { var main = g.items.filter(function (it) { return it.load; }).slice(0, 2).map(function (it) { return esc(it.name) + ' ' + esc(it.scheme) + ' ' + esc(it.load); }).join(' · '); return '<div><b>' + esc(JOURS[num(s.day, 0) | 0]) + '</b> ' + (main || esc(g.meta)) + '</div>'; }
        return '<div><b>' + esc(JOURS[num(s.day, 0) | 0]) + '</b> ' + esc(g.title) + '</div>';
      }).join('');
      rows += '<div class="row" style="align-items:flex-start;gap:10px;padding:8px 0;border-top:1px solid var(--bd)"><span class="badge" style="background:' + c + '">S' + w + '</span><div class="col grow small" style="gap:2px"><span class="mu">' + mw.getDate() + ' ' + MOIS[mw.getMonth()] + (sp ? ' · ' + esc(sp.ph) + (sp.test ? '' : ' · ' + sp.s + '×' + sp.r + ' @ ' + fmtN(sp.p) + ' %') : '') + '</span>' + txt + '</div></div>';
    }
    return '<div class="card" style="padding:8px 12px">' + rows + '</div>';
  };
  var setPath = function (obj, path, val) { var ks = path.split('.'), o = obj; for (var i = 0; i < ks.length - 1; i++) { var k = /^\d+$/.test(ks[i]) ? +ks[i] : ks[i]; if (o[k] == null) o[k] = {}; o = o[k]; } var last = ks[ks.length - 1]; o[/^\d+$/.test(last) ? +last : last] = val; };
  var renderEditor = function () {
    var sh = $id('sheet');
    if (!ed) { sh.innerHTML = ''; document.body.style.overflow = ''; return; }
    var prevBody = sh.querySelector('.sheet-body'), top = prevBody ? prevBody.scrollTop : 0;
    sh.innerHTML = libDatalist('pl-lib') + '<div class="sheet" role="dialog" aria-modal="true" aria-label="Éditeur de programme"><div class="sheet-in"><div class="sheet-head"><button class="btn ghost sm" data-a="ed-cancel">Annuler</button><h2>' + (ed.isNew ? 'Nouveau · ' : '') + esc(KIND[ed.draft.kind].label) + '</h2><button class="btn primary sm" data-a="ed-save">Enregistrer</button></div><div class="sheet-body">' + editorBody() + '</div></div></div>';
    document.body.style.overflow = 'hidden';
    var nb = sh.querySelector('.sheet-body'); if (nb) nb.scrollTop = top;
  };
  var prevT = null;
  var refreshPreview = function () { clearTimeout(prevT); prevT = setTimeout(function () { var el = $id('ed-preview'); if (el && ed) el.innerHTML = previewHtml(ed.draft); }, 150); };
  var openEditor = function (p, isNew) { ed = { draft: clone(p), isNew: !!isNew }; renderEditor(); };
  var sheetEl = floatRoot;
  var onField = function (e) {
    var t = e.target, f = t.getAttribute && t.getAttribute('data-f'); if (!f || !ed) return;
    var v = t.getAttribute('data-t') === 'n' ? num(t.value, 0) : t.value;
    if (f === 'start' && v) { var dd = parseISO(v); if (dd) v = iso(mondayOf(dd)); }
    setPath(ed.draft, f, v);
    if (/\.mode$/.test(f) && f.indexOf('exercises') >= 0) {
      var parts = f.split('.'), ex = ed.draft.sessions[+parts[1]].exercises[+parts[3]];
      if (v === 'pct' && ex.orm == null) { ex.orm = 100; ex.offset = 0; }
      if (v === 'kg' && ex.sets == null) { ex.sets = 3; ex.reps = 10; ex.startKg = 20; ex.incKg = 1; }
      if (v === 'reps' && ex.sets == null) { ex.sets = 3; ex.reps = 5; ex.incReps = 1; ex.maxReps = 12; }
    }
    if (/^runs\.\d+\.type$/.test(f)) { var r = ed.draft.runs[+f.split('.')[1]]; if (v === 'intervalles' && r.reps0 == null) Object.assign(r, { reps0: 6, repsInc: 1, maxReps: 10, effort: 2, recup: 1, warm: 10 }); if (v !== 'intervalles' && r.startMin == null) Object.assign(r, { startMin: 30, mode: 'min', inc: 2, maxMin: 60 }); }
    if (/^blocks\.\d+\.goal$/.test(f)) { ed.draft.preset = null; var b = ed.draft.blocks[+f.split('.')[1]]; if (!b.custom) b.custom = clone(DEF_CUSTOM); }
    if (/^blocks\./.test(f)) ed.draft.preset = null;
    if (t.getAttribute('data-rr') && e.type === 'change') renderEditor(); else refreshPreview();
  };
  sheetEl.addEventListener('input', function (e) { if (e.target.tagName !== 'SELECT' && e.target.type !== 'date') onField(e); });
  sheetEl.addEventListener('change', onField);
  (function () {
    var re = $id('run'); if (!re) return;
    re.addEventListener('input', function (e) { var f = e.target.getAttribute && e.target.getAttribute('data-rf'); if (!f || !ui.run) return; if (f === 'newEx' || f === 'name') { ui.run[f] = e.target.value; return; } if (!ui.run.d) return; ui.run.d[f] = e.target.value === '' ? null : e.target.value; });
    re.addEventListener('keydown', function (e) { if (e.key !== 'Enter' || !e.target.getAttribute || e.target.getAttribute('data-rf') !== 'newEx') return; e.preventDefault(); var bt = re.querySelector('[data-a="run-addname"]'); if (bt) bt.click(); });
  })();
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible' && ui.run && ui.run.open) { wakeOn(); drawTimer(); } });
  /* Reprise : l'app a été fermée pendant la séance (appel, téléphone verrouillé…) */
  var runResume = function () { try {
    var rs0 = JSON.parse(localStorage.getItem(RUNK) || 'null');
    if (rs0 && rs0.key && Date.now() - num(rs0.t0, 0) < 5 * 3600000 && findInst(rs0.key)) {
      ui.run = { key: rs0.key, exI: num(rs0.exI, 0) | 0, t0: num(rs0.t0, Date.now()), end: !!rs0.end, add: !!rs0.add, open: !!rs0.open };
      if (num(rs0.rest, 0) > Date.now() - 60000) { tm.end = num(rs0.rest); tm.label = rs0.restLbl || 'Repos'; tm.beeped = tm.end <= Date.now(); clearInterval(tm.iv); tm.iv = setInterval(drawTimer, 250); }
      if (ui.run.open) { runLock(true); wakeOn(); drawRun(); }
    } else if (rs0) localStorage.removeItem(RUNK);
  } catch (e) {} };

  // ---------- Actions ----------
  var loadExample = function () {
    var start = nextMondayISO(), now = Date.now();
    var m = newProgram('muscu'); m.name = 'Force hiver'; m.start = start; m.sessions = sampleSessions(); m.createdAt = now;
    var c = newProgram('course'); c.name = 'Reprise 40 min'; c.start = start; c.weeks = 14; c.runs = [{ id: uid(), name: 'Course continue', day: 6, type: 'continu', startMin: 28, mode: 'min', inc: 1, maxMin: 40, rpe: 4, note: 'Allure facile, pas de tempo' }]; c.createdAt = now + 1;
    var f = newProgram('fixe'); f.start = start; f.createdAt = now + 2;
    var hp = FIXED_PRESETS[1], r = newProgram('fixe'); r.name = hp.name; r.color = hp.color; r.preset = hp.id; r.weeks = 14; r.fixed = withIds(hp.fixed); r.start = start; r.createdAt = now + 3;
    [m, c, f, r].forEach(function (p) { state.programs.push(p); persist(p); });
    ui.view = 'semaine'; ui.weekStart = start; ui.sel = null;
    toast('Exemple chargé : 4 programmes sur 14 semaines');
    render();
  };
  var applyPreset = function (id) {
    var d = ed.draft;
    if (d.kind === 'muscu') { var c = CYCLE_PRESETS.filter(function (x) { return x.id === id; })[0]; if (!c) return; d.blocks = newBlocks(c.blocks); d.preset = id; if (!d.name || CYCLE_PRESETS.some(function (x) { return d.name === 'Cycle ' + x.label.split(' ·')[0].toLowerCase() || d.name === x.label; })) d.name = c.label; }
    if (d.kind === 'course') { var r = RUN_PRESETS.filter(function (x) { return x.id === id; })[0]; if (!r) return; d.weeks = r.weeks; d.deloadEvery = r.deloadEvery; d.deloadPct = r.deloadPct; d.capPct = r.capPct; d.runs = withIds(r.runs); d.preset = id; if (r.id !== 'vide') d.name = r.label; }
    if (d.kind === 'fixe') { var f = FIXED_PRESETS.filter(function (x) { return x.id === id; })[0]; if (!f) return; d.weeks = f.weeks; d.fixed = withIds(f.fixed); if (!state.programs.some(function (q) { return q.color === f.color && q.id !== d.id; })) d.color = f.color; d.preset = id; if (f.name) d.name = f.name; }
    renderEditor();
  };
  var setLog = function (key, patch) {
    var x = findInst(key); if (!x) return;
    var p = x.p; p.logs = p.logs || {};
    var k = x.w + '|' + x.s.id, cur = Object.assign({}, p.logs[k] || {}), nx = Object.assign(cur, patch);
    if (!nx.done && !nx.rpe && !nx.note && !(nx.ex && Object.keys(nx.ex).length)) delete p.logs[k]; else p.logs[k] = nx;
    persist(p);
  };
  var setExLog = function (key, exId, patch) {
    var x = findInst(key); if (!x) return;
    var p = x.p; p.logs = p.logs || {};
    var k = x.w + '|' + x.s.id, lg = Object.assign({}, p.logs[k] || {}), exs = Object.assign({}, lg.ex || {}), cur = Object.assign({}, exs[exId] || {});
    if (!('plan' in patch)) delete cur.plan;
    Object.keys(patch).forEach(function (f) { var v = patch[f]; if (v === '' || v == null || !isFinite(num(v, NaN))) delete cur[f]; else cur[f] = num(v); });
    if (Object.keys(cur).length) exs[exId] = cur; else delete exs[exId];
    lg.ex = exs; if (Object.keys(exs).length) lg.done = true;
    p.logs[k] = lg; persist(p);
  };
  var saveSets = function (key, exId, sets, asPlan) {
    var x = findInst(key); if (!x) return;
    var p = x.p; p.logs = p.logs || {};
    var k = x.w + '|' + x.s.id, lg = Object.assign({}, p.logs[k] || {}), exs = Object.assign({}, lg.ex || {});
    if (sets.length) exs[exId] = asPlan ? { sets: sets, plan: 1 } : { sets: sets }; else delete exs[exId];
    lg.ex = exs; if (Object.keys(exs).length) lg.done = true;
    p.logs[k] = lg; persist(p);
  };
  // Garde les références (1RM, charge de départ, reps) que tu as ajustées après la préparation de la mise à jour
  var keepUserRefs = function (old, q, since) {
    var oe = {}; (old.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { oe[e.id] = e; }); });
    (q.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { var o = oe[e.id]; if (o && num(o.refAt, 0) > since) { ['orm', 'startKg', 'reps', 'maxReps', 'refAt'].forEach(function (f) { if (o[f] != null) e[f] = o[f]; }); } }); });
  };
  // Reprend suivi, modifications et déplacements ; si la date de début change, chaque saisie reste à sa vraie date
  var carryTracking = function (old, q) {
    var shift = Math.round(dayDiff(progStart(old), progStart(q)) / 7);
    var xid = {}; (old.extras || []).forEach(function (e) { xid[e.id] = 1; });
    var mv = function (obj) { var out = {}; Object.keys(obj || {}).forEach(function (k) { var i = k.indexOf('|'), w = num(k.slice(0, i)) + shift; if (w >= 1 || xid[k.slice(i + 1).split('|')[0]]) out[w + k.slice(i)] = obj[k]; }); return out; };
    q.extras = clone(old.extras || []);
    q.logs = mv(old.logs); q.overrides = mv(old.overrides); q.moves = mv(old.moves); q.orders = mv(old.orders);
  };
  var findEx = function (p, exId) { var f = null; (p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { if (e.id === exId) f = e; }); }); return f; };
  document.addEventListener('click', function (e) {
    var t0 = e.composedPath ? e.composedPath()[0] : e.target; if (!t0 || !t0.closest) return;
    var b = t0.closest('[data-a]'); if (!b) return;
    editBegin();
    var a = b.getAttribute('data-a'), id = b.getAttribute('data-id'), key = b.getAttribute('data-key');
    var ae = activeIn();
    if (a !== 'ov-save' && ae && ae !== b && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') && mainRoot && mainRoot.contains(ae)) ae.blur();
    if (a.indexOf('run-') === 0) { runAct(a, b); return; }
    var p, i;
    switch (a) {
      case 'view': ui.view = b.getAttribute('data-v'); ui.confirm = null; window.scrollTo(0, 0); break;
      case 'today': ui.view = 'semaine'; ui.weekStart = iso(mondayOf(T0)); ui.day = dow(T0); ui.sel = null; ui.month = iso(new Date(T0.getFullYear(), T0.getMonth(), 1)); ui.mDay = iso(T0); break;
      case 'toggle': ui.hidden[id] = !ui.hidden[id]; try { localStorage.setItem('planif-ui', JSON.stringify({ hidden: ui.hidden })); } catch (er) {} break;
      case 'wk': ui.weekStart = iso(addDays(parseISO(ui.weekStart), 7 * num(b.getAttribute('data-d')))); ui.sel = null; ui.edit = null; break;
      case 'day': ui.day = num(b.getAttribute('data-day')) | 0; ui.sel = null; ui.edit = null; break;
      case 'sel': ui.sel = key; ui.day = num(b.getAttribute('data-day')) | 0; ui.edit = null; break;
      case 'done': if (!futureOk(key)) return; var x0 = findInst(key); setLog(key, { done: !(x0 && x0.log && x0.log.done) }); break;
      case 'rpe': if (!futureOk(key)) return; var n = num(b.getAttribute('data-n')) | 0, x1 = findInst(key); setLog(key, { done: true, rpe: (x1 && x1.log && x1.log.rpe === n) ? null : n }); break;
      case 'adj':
        var x2 = findInst(key), dl = num(b.getAttribute('data-d'));
        if (x2) { (x2.s.exercises || []).forEach(function (ex) { if (ex.mode === 'pct' && num(ex.orm) > 0) ex.orm = Math.max(5, num(ex.orm) + dl); if (ex.mode === 'kg') ex.startKg = Math.max(0, num(ex.startKg) + (dl > 0 ? 1 : -1) * Math.max(1, num(ex.incKg, 1))); }); persist(x2.p); toast(dl > 0 ? 'Référence montée : tout le cycle est recalculé' : 'Référence baissée : tout le cycle est recalculé'); }
        break;
      case 'lg-plan': if (!futureOk(key)) return;
        var xp = findInst(key), exid = b.getAttribute('data-ex');
        if (xp) { var itp = xp.g.items.filter(function (z) { return z.id === exid; })[0]; if (itp) { var nS = parseInt(itp.sets, 10) || 1, ps = []; for (var q = 0; q < nS; q++) ps.push({ kg: itp.mode === 'reps' ? null : itp.loadNum, reps: itp.repsPlan, rpe: itp.rpePlan }); saveSets(key, exid, ps, true); } }
        break;
      case 'orm-set':
        var xo = findInst(key), eo = xo ? findEx(xo.p, b.getAttribute('data-ex')) : null, vo = num(b.getAttribute('data-v'));
        if (eo && vo > 0) { var cnt = 0; (xo.p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e2) { if (e2.mode === 'pct' && e2.name === eo.name) { e2.orm = vo; e2.refAt = Date.now(); cnt++; } }); }); persist(xo.p); toast('1RM ' + eo.name + ' : ' + kg(vo) + '. Tout le cycle est recalculé'); }
        break;
      case 'orm-set-p':
        var pp2 = progById(b.getAttribute('data-id') || ui.planId), ep = pp2 ? findEx(pp2, b.getAttribute('data-ex')) : null, vp = num(b.getAttribute('data-v'));
        if (ep && vp > 0) { (pp2.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e2) { if (e2.mode === 'pct' && e2.name === ep.name) { e2.orm = vp; e2.refAt = Date.now(); } }); }); persist(pp2); toast('1RM ' + ep.name + ' : ' + kg(vp) + '. Tout le cycle est recalculé'); }
        break;
      case 'kg-set':
        var xk = findInst(key), ek = xk ? findEx(xk.p, b.getAttribute('data-ex')) : null, vk = num(b.getAttribute('data-v'));
        if (ek) { var kE = workBefore(xk.w, muscuLight(xk.p)), sp0 = muscuSpec(xk.p, xk.w), base0 = (sp0 && (sp0.deload || sp0.test)) ? vk / 0.9 : vk; var cyc0 = num(ek.repsMax, 0) > num(ek.reps, 0) ? Math.floor(kE / (num(ek.repsMax) - num(ek.reps) + 1)) : kE; ek.startKg = Math.max(0, r05(base0 - num(ek.incKg, 0) * cyc0)); ek.refAt = Date.now(); persist(xk.p); toast(ek.name + ' : la suite repart de ' + kg(vk)); }
        break;
      case 'reps-set':
        var xr = findInst(key), er = xr ? findEx(xr.p, b.getAttribute('data-ex')) : null, vr2 = num(b.getAttribute('data-v'));
        if (er) { var kR = workBefore(xr.w, muscuLight(xr.p)); er.reps = Math.max(1, vr2 - num(er.incReps, 0) * kR); er.refAt = Date.now(); if (num(er.maxReps, 0) > 0 && vr2 >= num(er.maxReps)) er.maxReps = vr2 + 3; persist(xr.p); toast(er.name + ' : la suite repart de ' + vr2 + ' reps'); }
        break;
      case 'inbox-add': case 'inbox-no':
        var msg = (state.inbox || []).filter(function (m) { return m._id === id; })[0];
        if (msg && a === 'inbox-add') { var nadd = 0; msg.programs.forEach(function (q) { if (!q || !KIND[q.kind]) return; q = clone(q); var old = q.id ? progById(q.id) : null; if (old) { keepUserRefs(old, q, msg.createdAt || 0); carryTracking(old, q); q.createdAt = old.createdAt; state.programs = state.programs.map(function (z) { return z.id === q.id ? q : z; }); persist(q); nadd++; return; } if (!q.id) q.id = uid(); q.logs = q.logs || {}; q.overrides = q.overrides || {}; q.createdAt = Date.now() + nadd; (q.sessions || q.runs || q.fixed || []).forEach(function (s) { s.id = s.id || uid(); (s.exercises || []).forEach(function (e) { e.id = e.id || uid(); }); }); state.programs.push(q); persist(q); nadd++; }); (msg.remove || []).forEach(function (rid) { if (progById(rid)) { state.programs = state.programs.filter(function (z) { return z.id !== rid; }); removeStored(rid); nadd++; } }); toast('Mise à jour appliquée'); }
        if (msg && store.inbox) store.inbox.doc(id).delete().catch(function () {});
        state.inbox = (state.inbox || []).filter(function (m) { return m._id !== id; });
        break;
      case 'move': ui.moveOpen = null;
        var xm = findInst(key), nd = num(b.getAttribute('data-day')) | 0;
        if (xm) { xm.p.moves = xm.p.moves || {}; var mk = xm.w + '|' + xm.s.id; if (nd === (num(xm.s.day, 0) | 0)) delete xm.p.moves[mk]; else xm.p.moves[mk] = nd; persist(xm.p); ui.day = nd; ui.sel = key; toast('Séance déplacée au ' + JOURSL[nd].toLowerCase()); }
        break;
      case 'xf-new':
        var xd = addDays(parseISO(ui.weekStart), Math.max(0, Math.min(6, ui.day))), xk = 'muscu', xp = xfPrograms(xk, iso(xd))[0];
        ui.xf = { kind: xk, date: iso(xd), pid: xp ? xp.id : null, name: '', dur: '', rpe: 0, km: '', note: '', ex: [], newEx: '' };
        setTimeout(function () { var el = $id('xform'); if (el && !wide()) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 30); break;
      case 'xf-cancel': ui.xf = null; break;
      case 'xf-todo': if (ui.xf) ui.xf.todo = b.getAttribute('data-v') === '1' ? 1 : 0; break;
      case 'xf-kind': if (ui.xf) { var nk = b.getAttribute('data-k'); if (nk !== ui.xf.kind) { ui.xf.kind = nk; var np = xfPrograms(nk, ui.xf.date)[0]; ui.xf.pid = np ? np.id : null; ui.xf.ex = []; } } break;
      case 'xf-rpe': if (ui.xf) { var rn = num(b.getAttribute('data-n')) | 0; ui.xf.rpe = ui.xf.rpe === rn ? 0 : rn; } break;
      case 'xf-ex': if (ui.xf) { var rf = b.getAttribute('data-ref'), ri = -1; ui.xf.ex.forEach(function (z, i) { if (z.ref === rf) ri = i; }); if (ri >= 0) ui.xf.ex.splice(ri, 1); else { var re0 = findEx(progById(ui.xf.pid), rf); ui.xf.ex.push({ ref: rf, id: rf, name: re0 ? re0.name : '' }); } } break;
      case 'xf-add': if (ui.xf) { var inp0 = document.querySelector('[data-xf="newEx"]'), nn = String((inp0 && inp0.value) || ui.xf.newEx || '').trim(); if (nn) { var lbx = libFind(nn); ui.xf.ex.push({ ref: null, id: 'xe' + uid(), name: lbx ? libName(lbx) : nn, lib: lbx ? lbx[0] : null }); ui.xf.newEx = ''; } if (inp0) inp0.blur(); } break;
      case 'xf-rm': if (ui.xf) ui.xf.ex.splice(num(b.getAttribute('data-i')), 1); break;
      case 'xf-save':
        if (!ui.xf) break;
        var F = ui.xf, P = progById(F.pid), fd = parseISO(F.date);
        if (!P || !fd) { toast('Choisis une date et un programme.'); break; }
        var xid0 = F.id || ('x' + uid()), oldLog = null, oldOv = {};
        if (F.id) { var OP = progById(F.origPid); if (OP) { var oe0 = (OP.extras || []).filter(function (z) { return z.id === F.id; })[0]; if (oe0) { var ow = extraW(OP, oe0); oldLog = (OP.logs || {})[ow + '|' + F.id] || null; if (OP.logs) delete OP.logs[ow + '|' + F.id]; Object.keys(OP.overrides || {}).forEach(function (k) { var ps2 = k.split('|'); if (ps2[0] === String(ow) && ps2[1] === F.id) { oldOv[ps2[2]] = OP.overrides[k]; delete OP.overrides[k]; } }); OP.extras = OP.extras.filter(function (z) { return z.id !== F.id; }); if (OP !== P) persist(OP); } } }
        var isTodo = xfTodo(F) && !(oldLog && oldLog.done);
        var XE = { id: xid0, extra: true, kind: F.kind, date: F.date, day: dow(fd), todo: isTodo ? 1 : undefined, name: String(F.name || '').trim() || (isTodo ? (F.kind === 'muscu' ? 'Séance muscu' : F.kind === 'course' ? 'Course' : 'Activité') : ''), dur: num(F.dur, 0) || null, rpe: num(F.rpe, 0) || null, km: F.kind === 'course' ? (num(F.km, 0) || null) : null, note: String(F.note || '').trim(), exercises: F.kind === 'muscu' ? F.ex.map(function (z) { return { id: z.id, ref: z.ref || null, name: z.name, lib: z.lib || null }; }) : [] };
        P.extras = (P.extras || []).concat([XE]); P.logs = P.logs || {};
        var nw = extraW(P, XE), lgx = Object.assign({}, oldLog || {}); lgx.done = true; if (XE.rpe) lgx.rpe = XE.rpe; else delete lgx.rpe;
        if (lgx.ex) { var keep = {}; XE.exercises.forEach(function (z) { if (lgx.ex[z.id]) keep[z.id] = lgx.ex[z.id]; }); lgx.ex = keep; }
        if (isTodo) { delete lgx.done; if (Object.keys(lgx).length) P.logs[nw + '|' + xid0] = lgx; } else P.logs[nw + '|' + xid0] = lgx;
        Object.keys(oldOv).forEach(function (eid) { P.overrides = P.overrides || {}; P.overrides[nw + '|' + xid0 + '|' + eid] = oldOv[eid]; });
        persist(P);
        ui.xf = null; ui.weekStart = iso(mondayOf(fd)); ui.day = dow(fd); ui.sel = P.id + '|' + nw + '|' + xid0; ui.edit = null;
        if (ui.hidden[P.id]) { ui.hidden[P.id] = false; }
        toast(F.id ? 'Séance modifiée' : isTodo ? 'Séance planifiée le ' + dLabel(fd) : (F.kind === 'muscu' && F.ex.length ? 'Séance ajoutée : note tes séries' : 'Séance ajoutée')); break;
      case 'x-edit':
        var xx = findInst(key); if (xx && xx.s.extra) { var E = xx.s; ui.xf = { id: E.id, todo: E.todo && !(xx.log && xx.log.done) ? 1 : 0, origPid: xx.p.id, kind: E.kind, date: E.date, pid: xx.p.id, name: E.name || '', dur: E.dur == null ? '' : E.dur, rpe: (xx.log && xx.log.rpe) || E.rpe || 0, km: E.km == null ? '' : E.km, note: E.note || '', ex: clone(E.exercises || []), newEx: '' }; }
        break;
      case 'x-del': ui.confirm = 'xdel:' + key; break;
      case 'x-del-yes':
        var xd2 = findInst(key); if (xd2 && xd2.s.extra) { var PP = xd2.p, did2 = xd2.s.id; PP.extras = (PP.extras || []).filter(function (z) { return z.id !== did2; }); if (PP.logs) delete PP.logs[xd2.w + '|' + did2]; Object.keys(PP.overrides || {}).forEach(function (k) { if (k.indexOf(xd2.w + '|' + did2 + '|') === 0) delete PP.overrides[k]; }); persist(PP); ui.sel = null; toast('Séance supprimée'); }
        ui.confirm = null; break;
      case 'pain': var pz = painApi(); if (pz && pz.set) { var pv = num(b.getAttribute('data-n')) | 0, pd = b.getAttribute('data-d'), pzz = b.getAttribute('data-z'); pz.set(pd, pzz, 'seance', pz.get(pd, pzz, 'seance') === pv ? null : pv); } break;
      case 'cf-open': var hh = HOST(); if (hh && hh.open) hh.open(b.getAttribute('data-id')); return;
      case 'move-open': ui.moveOpen = ui.moveOpen === key ? null : key; break;
      case 'reorder': ui.reorder = key || null; ui.edit = null; break;
      case 'mv-up': case 'mv-down':
        var xo2 = findInst(key); if (xo2) { var p2 = xo2.p, okk = xo2.w + '|' + xo2.s.id, ids = orderedEx(p2, xo2.s, xo2.w).map(function (e) { return e.id; }), ix = ids.indexOf(b.getAttribute('data-ex')), jx = a === 'mv-up' ? ix - 1 : ix + 1;
          if (ix >= 0 && jx >= 0 && jx < ids.length) { var tmp = ids[ix]; ids[ix] = ids[jx]; ids[jx] = tmp; p2.orders = p2.orders || {}; p2.orders[okk] = ids; persist(p2); } }
        break;
      case 'ord-all': var xa = findInst(key); if (xa) { var oa = orderedEx(xa.p, xa.s, xa.w); xa.s.exercises = oa; var pref = '|' + xa.s.id; Object.keys(xa.p.orders || {}).forEach(function (k2) { if (k2.slice(-pref.length) === pref) delete xa.p.orders[k2]; }); persist(xa.p); toast('Nouvel ordre appliqué à toutes les semaines'); } break;
      case 'ord-reset': var xr0 = findInst(key); if (xr0 && xr0.p.orders) { delete xr0.p.orders[xr0.w + '|' + xr0.s.id]; persist(xr0.p); } break;
      case 'skip': case 'unskip':
        var xs = findInst(key), exs2 = b.getAttribute('data-ex');
        if (xs) { var lg2 = Object.assign({}, (xs.p.logs || {})[xs.w + '|' + xs.s.id] || {}), em = Object.assign({}, lg2.ex || {}); if (a === 'skip') em[exs2] = { skipped: true }; else delete em[exs2]; lg2.ex = em; xs.p.logs = xs.p.logs || {}; xs.p.logs[xs.w + '|' + xs.s.id] = lg2; persist(xs.p); }
        break;
      case 'noadj':
        var xn = findInst(key), exn = b.getAttribute('data-ex');
        if (xn) { var lgn = Object.assign({}, (xn.p.logs || {})[xn.w + '|' + xn.s.id] || {}), en = Object.assign({}, lgn.ex || {}); if (en[exn]) { en[exn] = Object.assign({}, en[exn]); if (en[exn].noAdj) delete en[exn].noAdj; else en[exn].noAdj = 1; } lgn.ex = en; xn.p.logs[xn.w + '|' + xn.s.id] = lgn; persist(xn.p); }
        break;
      case 'rest': startTimer(b.getAttribute('data-r') || '2 min'); return;
      case 'rest-add': if (tm.end) { tm.end += 30000; tm.beeped = false; drawTimer(); } return;
      case 'rest-stop': tm.end = 0; clearInterval(tm.iv); drawTimer(); return;
      case 'ov-edit': ui.edit = key; break;
      case 'sw-open': ui.swap = ui.swap === key ? null : key; ui.swapAll = false; ui.edit = null; break;
      case 'sw-cancel': ui.swap = null; break;
      case 'sw-pick': case 'sw-undo':
        var sp = key.split('|'), sx = findInst(sp[0] + '|' + sp[1] + '|' + sp[2]), sit = sx ? sx.g.items.filter(function (z) { return z.id === sp[3]; })[0] : null;
        if (sx && sit) {
          if (a === 'sw-undo') { doSwap(sx, sit, null); toast('Retour à ' + sit.origName); }
          else { var cont = b.closest('.swp'), sn = b.getAttribute('data-n') || String(((cont && cont.querySelector('[data-swn]')) || {}).value || '').trim(), lbn = libFind(sn), alle = !!(cont && cont.querySelector('[data-swall]') && cont.querySelector('[data-swall]').checked);
            if (!sn) { toast('Choisis ou tape un exercice'); return; }
            doSwap(sx, sit, lbn ? libName(lbn) : sn, alle); toast((lbn ? libName(lbn) : sn) + ' remplace ' + (sit.origName || sit.name)); }
        }
        ui.swap = null; break;
      case 'cp-open': ui.copyOpen = ui.copyOpen === key ? null : key; break;
      case 'cp-cancel': ui.copyOpen = null; break;
      case 'cp-do':
        var cx = findInst(key), cd = b.getAttribute('data-d') || (($id('cp-date') || {}).value || '');
        if (!cx || !parseISO(cd)) { toast('Choisis une date'); return; }
        var nk = copyInst(cx, cd);
        if (nk) { var cfd = parseISO(cd); ui.copyOpen = null; ui.weekStart = iso(mondayOf(cfd)); ui.day = dow(cfd); ui.sel = nk; ui.view = 'semaine'; toast('Copiée le ' + dLabel(cfd) + ' : à réaliser'); }
        break;
      case 'real-edit':
        var rk2 = b.getAttribute('data-k'), pr = rk2.split('|'); if (!futureOk(pr.slice(0, 3).join('|'))) return; pr = rk2.split('|'); var xe = findInst(pr.slice(0, 3).join('|'));
        if (xe) { var ite = xe.g.items.filter(function (z) { return z.id === pr[3]; })[0], ex0 = getSets(((xe.log || {}).ex || {})[pr[3]]);
          if (ex0.length) ui.realDraft = clone(ex0); else { var n0 = parseInt(ite && ite.sets, 10) || 1; ui.realDraft = []; for (var q2 = 0; q2 < n0; q2++) ui.realDraft.push({ kg: ite && ite.mode !== 'reps' ? ite.loadNum : null, reps: ite ? ite.repsPlan : null, rpe: ite ? ite.rpePlan : null }); } }
        ui.realEdit = rk2; ui.sdSel = 0; break;
      case 'real-close': ui.realEdit = null; ui.realDraft = null; break;
      case 'sd-sel': ui.sdSel = num(b.getAttribute('data-i')) | 0; break;
      case 'sd-step': if (ui.realDraft) { var sf = b.getAttribute('data-f'), sdv = num(b.getAttribute('data-d')), s0 = Math.min(ui.sdSel || 0, ui.realDraft.length - 1);
          ui.realDraft.forEach(function (z, i) { if (i < s0) return; var cv = num(z[sf], 0); z[sf] = Math.max(0, Math.round((cv + sdv) * 100) / 100); }); } break;
      case 'set-add': if (ui.realDraft) ui.realDraft.push(clone(ui.realDraft[ui.realDraft.length - 1] || { kg: null, reps: null, rpe: null })); break;
      case 'set-del': if (ui.realDraft) ui.realDraft.splice(num(b.getAttribute('data-i')), 1); break;
      case 'real-save':
        var rows2 = (ui.realDraft || []).map(function (z) { var o = {}; ['kg', 'reps', 'rpe'].forEach(function (f) { if (z[f] !== '' && z[f] != null && isFinite(num(z[f], NaN))) o[f] = num(z[f]); }); return o; }).filter(function (o) { return o.kg != null || o.reps != null; });
        saveSets(key, b.getAttribute('data-ex'), rows2, false); ui.realEdit = null; ui.realDraft = null; break;
      case 'ov-cancel': ui.edit = null; break;
      case 'ov-save': case 'ov-clear':
        var ps = key.split('|'), pp = progById(ps[0]);
        if (pp) { pp.overrides = pp.overrides || {}; var ok = ps[1] + '|' + ps[2] + '|' + ps[3]; if (a === 'ov-clear') delete pp.overrides[ok]; else if ($id('ov-sets')) { var o2 = {}; [['sets', 'ov-sets'], ['reps', 'ov-reps'], ['kg', 'ov-kg'], ['rpe', 'ov-rpe']].forEach(function (f) { var el = $id(f[1]); if (el && String(el.value).trim() !== '' && isFinite(num(el.value, NaN))) o2[f[0]] = num(el.value); }); if (Object.keys(o2).length) pp.overrides[ok] = o2; else delete pp.overrides[ok]; } else { var sc = ($id('ov-scheme') || {}).value || '', lo = ($id('ov-load') || {}).value || ''; if (sc.trim() || lo.trim()) pp.overrides[ok] = { scheme: sc.trim(), load: lo.trim() }; else delete pp.overrides[ok]; } persist(pp); }
        ui.edit = null; if (document.activeElement) document.activeElement.blur(); break;
      case 'mo': var m0 = parseISO(ui.month); ui.month = iso(new Date(m0.getFullYear(), m0.getMonth() + num(b.getAttribute('data-d')), 1)); break;
      case 'mday': ui.mDay = b.getAttribute('data-d'); break;
      case 'open-day': var od = parseISO(b.getAttribute('data-d')); ui.view = 'semaine'; ui.weekStart = iso(mondayOf(od)); ui.day = dow(od); ui.sel = null; break;
      case 'new': openEditor(newProgram(b.getAttribute('data-kind')), true); return;
      case 'edit': p = progById(id); if (p) openEditor(p, false); return;
      case 'dup': p = progById(id); if (p) { var cp = clone(p); cp.id = uid(); cp.name = (p.name || '') + ' (copie)'; cp.logs = {}; cp.overrides = {}; cp.extras = []; cp.moves = {}; cp.orders = {}; cp.createdAt = Date.now(); state.programs.push(cp); persist(cp); toast('Programme dupliqué'); } break;
      case 'del': ui.confirm = 'del:' + id; break;
      case 'del-no': ui.confirm = null; break;
      case 'del-yes': state.programs = state.programs.filter(function (z) { return z.id !== id; }); removeStored(id); ui.confirm = null; toast('Programme supprimé'); break;
      case 'plan': ui.planId = id; ui.view = 'plan'; window.scrollTo(0, 0); break;
      case 'planex': ui.planEx = b.getAttribute('data-n'); break;
      case 'plan-week': p = progById(ui.planId); if (p) { ui.weekStart = iso(addDays(progStart(p), (num(b.getAttribute('data-w')) - 1) * 7)); ui.view = 'semaine'; ui.sel = null; ui.day = 0; window.scrollTo(0, 0); } break;
      case 'an-week': ui.weekStart = b.getAttribute('data-d'); ui.view = 'semaine'; ui.sel = null; ui.day = 0; window.scrollTo(0, 0); break;
      case 'example': loadExample(); return;
      case 'export':
        var txt = JSON.stringify({ app: 'planif', v: 1, programs: state.programs });
        ui.exportText = null;
        try { navigator.clipboard.writeText(txt).then(function () { toast('Sauvegarde copiée'); }, function () { ui.exportText = txt; render(); }); } catch (er2) { ui.exportText = txt; }
        break;
      case 'import-open': ui.importOpen = true; break;
      case 'import-close': ui.importOpen = false; break;
      case 'import':
        try {
          var raw = JSON.parse(($id('imp') || {}).value || ''); var arr = Array.isArray(raw) ? raw : raw.programs;
          if (!Array.isArray(arr)) throw new Error('format');
          var cnt = 0; arr.forEach(function (q) { if (!q || !KIND[q.kind]) return; q.id = q.id || uid(); var ex = progById(q.id); if (ex) state.programs = state.programs.map(function (z) { return z.id === q.id ? q : z; }); else state.programs.push(q); persist(q); cnt++; });
          ui.importOpen = false; toast(cnt + ' programme(s) importé(s)');
        } catch (er3) { toast('Texte de sauvegarde non reconnu'); }
        if (document.activeElement) document.activeElement.blur();
        break;
      case 'wipe': ui.confirm = 'wipe'; break;
      case 'wipe-yes': if ((window.prompt('Pour supprimer tous les programmes et leur suivi sur tous tes appareils, tape EFFACER') || '').trim().toUpperCase() !== 'EFFACER') { ui.confirm = null; toast('Rien n’a été effacé'); break; } state.programs.forEach(function (z) { removeStored(z.id); }); state.programs = []; saveLocal(); ui.confirm = null; toast('Toutes les données ont été effacées'); break;
      // éditeur
      case 'ed-cancel': ed = null; renderEditor(); return;
      case 'ed-save':
        var d = ed.draft; if (!String(d.name || '').trim()) d.name = KIND[d.kind].label;
        d.start = iso(progStart(d));
        var exists = progById(d.id);
        if (exists) { carryTracking(exists, d); (d.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) { e.refAt = Date.now(); }); }); }
        if (exists) state.programs = state.programs.map(function (z) { return z.id === d.id ? d : z; }); else state.programs.push(d);
        persist(d); ed = null; renderEditor();
        ui.view = 'plan'; ui.planId = d.id; ui.planEx = null; toast('Programme enregistré'); window.scrollTo(0, 0); break;
      case 'ed-delete': if (ed && !ed.isNew) { var did = ed.draft.id; state.programs = state.programs.filter(function (z) { return z.id !== did; }); removeStored(did); ed = null; renderEditor(); ui.view = 'programmes'; toast('Programme supprimé'); } break;
      case 'ed-preset': applyPreset(id); return;
      case 'ed-color': ed.draft.color = b.getAttribute('data-c'); renderEditor(); return;
      case 'ed-add-block': ed.draft.blocks.push({ goal: 'force', weeks: 4, end: 'deload', custom: clone(DEF_CUSTOM) }); ed.draft.preset = null; renderEditor(); return;
      case 'ed-del-block': ed.draft.blocks.splice(num(b.getAttribute('data-i')), 1); ed.draft.preset = null; renderEditor(); return;
      case 'ed-sample': ed.draft.sessions = sampleSessions(); renderEditor(); return;
      case 'ed-add-sess': ed.draft.sessions = ed.draft.sessions || []; ed.draft.sessions.push({ id: uid(), name: 'Séance ' + String.fromCharCode(65 + ed.draft.sessions.length), day: 1, dur: 60, exercises: [{ id: uid(), name: 'Squat', mode: 'pct', orm: 100, offset: 0 }] }); renderEditor(); return;
      case 'ed-del-sess': ed.draft.sessions.splice(num(b.getAttribute('data-i')), 1); renderEditor(); return;
      case 'ed-add-ex': ed.draft.sessions[num(b.getAttribute('data-i'))].exercises.push({ id: uid(), name: '', mode: 'kg', sets: 3, reps: 10, startKg: 20, incKg: 1 }); renderEditor(); return;
      case 'ed-del-ex': ed.draft.sessions[num(b.getAttribute('data-i'))].exercises.splice(num(b.getAttribute('data-j')), 1); renderEditor(); return;
      case 'ed-add-run': ed.draft.runs = ed.draft.runs || []; ed.draft.runs.push({ id: uid(), name: 'Footing', day: 6, type: 'continu', startMin: 30, mode: 'min', inc: 2, maxMin: 60, rpe: 4, note: 'Allure facile' }); renderEditor(); return;
      case 'ed-del-run': ed.draft.runs.splice(num(b.getAttribute('data-i')), 1); renderEditor(); return;
      case 'ed-add-fixed': ed.draft.fixed = ed.draft.fixed || []; ed.draft.fixed.push({ id: uid(), name: 'Séance', day: 0, dur: 60, rpe: 6, note: '', detail: '' }); renderEditor(); return;
      case 'ed-del-fixed': ed.draft.fixed.splice(num(b.getAttribute('data-i')), 1); renderEditor(); return;
      default: return;
    }
    render();
  });
  rootListen('input', function (e) {
    var xf = e.target.getAttribute && e.target.getAttribute('data-xf'); if (xf && ui.xf && e.target.tagName !== 'SELECT' && e.target.type !== 'date') { ui.xf[xf] = e.target.value; return; }
    var sd = e.target.getAttribute && e.target.getAttribute('data-sd'); if (!sd || !ui.realDraft) return;
    var ps = sd.split('|'), row = ui.realDraft[+ps[0]]; if (row) row[ps[1]] = e.target.value;
  });
  rootListen('change', function (e) {
    var t = e.target; if (!t.getAttribute) return;
    editBegin();
    var xf2 = t.getAttribute('data-xf'); if (xf2 && ui.xf) { ui.xf[xf2] = t.value; if (xf2 === 'pid' || xf2 === 'date') { if (xf2 === 'pid') ui.xf.ex = ui.xf.ex.filter(function (z) { return !z.ref; }); setTimeout(render, 0); } return; }
    var k = t.getAttribute('data-note');
    if (k) { setLog(k, { note: t.value.trim() }); return; }
    var lgv = t.getAttribute('data-lg');
    if (lgv) { var ps = lgv.split('|'), patch = {}; patch[ps[4]] = t.value.trim(); setExLog(ps.slice(0, 3).join('|'), ps[3], patch); renderPending = true; setTimeout(render, 0); }
  });

  state.programs = sortProgs(state.programs);
  window.vPlan = function () { return '<div id="pl-host"></div>'; };
  window.PLAN = {
    mount: function (host) {
      if (!host) return;
      mainRoot = host.attachShadow({ mode: 'open' });
      mainRoot.innerHTML = STYLE + buildHtml();
      rootHandlers.forEach(function (h) { mainRoot.addEventListener(h[0], h[1]); });
      mainRoot.addEventListener('focusout', function () { setTimeout(function () { if (renderPending) { renderPending = false; render(); } }, 0); });
    },
    /* Pendant une saisie dans le plan, on diffère le rendu global de l'app
       (synchronisation, etc.) pour ne pas effacer ce qui est en cours de frappe. */
    hold: function () {
      if ((S.tab !== 'plan' && !(S.tab === 'noter' && S.notePlan)) || !mainRoot) return false;
      var a = mainRoot.activeElement;
      if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA')) { renderPending = true; return true; }
      return false;
    },
    unmount: function () { mainRoot = null; },
    /* Minuteur de repos, utilisable depuis la saisie CrossFit */
    timer: function (txt) { startTimer(txt || '2 min'); },
    /* Mode séance plein écran (bouton « Démarrer » de la carte Aujourd'hui) */
    run: function (key) { if (futureOk(key)) runOpen(key); },
    /* Séance de muscu libre : créée vide aujourd'hui, remplie dans le mode séance */
    free: function () { runFree(); },
    closeForm: function () { ui.xf = null; },
    /* 1RM de travail actuels des mouvements principaux, par mouvement CrossFit lié */
    workingMaxes: function () {
      var out = [];
      state.programs.forEach(function (p) {
        if (p.kind !== 'muscu') return;
        var wNow = weekOf(p, T0) || (T0 > progEnd(p) ? progLen(p) + 1 : 1), seen = {};
        (p.sessions || []).forEach(function (s) { (s.exercises || []).forEach(function (e) {
          if (e.mode !== 'pct' || num(e.offset, 0) !== 0 || !(num(e.orm, 0) > 0)) return; var id = cfIdOf(e); if (!id || seen[id]) return; seen[id] = 1;
          var f = tmTrace(p, e, wNow + (T0 > progEnd(p) ? 0 : 1)).f;
          out.push({ id: id, name: e.name, ref: num(e.orm), work: Math.round(num(e.orm) * f * 2) / 2, prog: p.name || '' });
        }); });
      });
      return out;
    },
    /* Pour le calendrier de l'accueil : séances du plan d'un jour donné (AAAA-MM-JJ) */
    dayList: function (d) {
      var dt = parseISO(d); if (!dt) return [];
      return instancesOn(dt, true).map(function (x) { var pats = {}, heavy = [], hp = {};
        if (isMuscuInst(x)) x.g.items.forEach(function (it) { var pt = exPattern(it.name); if (pt) pats[pt] = PAT_L[pt]; if (it.mode === 'pct' && it.main && !(x.g.spec || {}).deload && it.loadNum) { heavy.push(it.name + ' ' + it.sets + '×' + it.reps + ' à ' + fmtN(it.loadNum) + ' kg'); if (pt) hp[pt] = PAT_L[pt]; } });
        return { key: x.key, title: x.g.title, meta: x.g.meta, color: colorOf(x.p), prog: x.p.name || KIND[x.p.kind].label, kind: x.s.extra ? x.s.kind : x.p.kind, done: !!(x.log && x.log.done), rpe: (x.log && x.log.rpe) || null, extra: !!x.s.extra, dur: x.g.dur, pats: pats, heavy: heavy, heavyPats: hp }; });
    },
    /* Toutes les séances faites (prévues ou ajoutées), datées, pour les vues Semaines et Année de l'accueil */
    doneList: function () {
      var out = [];
      state.programs.forEach(function (p) {
        var c = colorOf(p), xs = {}; (p.extras || []).forEach(function (e) { xs[e.id] = e; });
        Object.keys(p.logs || {}).forEach(function (k) {
          var lg = p.logs[k]; if (!lg || !lg.done) return;
          var i = k.indexOf('|'), w = num(k.slice(0, i)), sid = k.slice(i + 1), d = null;
          if (xs[sid]) d = xs[sid].date;
          else { var s0 = null; sessList(p).forEach(function (z) { if (z.id === sid) s0 = z; }); if (!s0) return; d = iso(addDays(progStart(p), (w - 1) * 7 + effDay(p, s0, w))); }
          if (d) out.push({ date: d, color: c, prog: p.id });
        });
      });
      return out;
    },
    /* Séries de muscu des mouvements principaux, pour les courbes et records de l'app */
    liftSets: function () {
      var out = [];
      state.programs.forEach(function (p) {
        if (p.kind !== 'muscu') return;
        var xs = {}; (p.extras || []).forEach(function (e) { xs[e.id] = e; });
        Object.keys(p.logs || {}).forEach(function (k) {
          var lg = p.logs[k]; if (!lg || !lg.ex) return;
          var i = k.indexOf('|'), w = num(k.slice(0, i)), sid = k.slice(i + 1), d = null;
          if (xs[sid]) d = xs[sid].date; else { var s0 = null; (p.sessions || []).forEach(function (z) { if (z.id === sid) s0 = z; }); if (!s0) return; d = iso(addDays(progStart(p), (w - 1) * 7 + effDay(p, s0, w))); }
          var ents = [];
          Object.keys(lg.ex).forEach(function (eid) {
            var ex = findEx(p, eid);
            /* exercice remplacé pour cette séance : ses séries comptent pour le nouvel exercice */
            if (!ex && /~sw$/.test(eid)) { var ovw = (p.overrides || {})[w + '|' + sid + '|' + eid.slice(0, -3)]; if (ovw && ovw.swap && ovw.swap.name) { var lbw = libFind(ovw.swap.name); ex = { name: ovw.swap.name, mode: lbw && (lbw[5] === 'reps' || lbw[5] === 'sec') ? 'reps' : 'kg' }; } }
            if (!ex && xs[sid]) { var xe = (xs[sid].exercises || []).filter(function (z) { return z.id === eid; })[0]; if (xe) { var lbx = xe.ref ? null : libFind(xe.name); ex = xe.ref ? findEx(p, xe.ref) : { name: xe.name, mode: lbx && (lbx[5] === 'reps' || lbx[5] === 'sec') ? 'reps' : 'kg' }; } }
            if (!ex || ['pct', 'kg', 'reps'].indexOf(ex.mode || 'kg') < 0) return;
            var id = cfIdOf(ex); if (!id) return;
            var bw = ex.mode === 'reps';
            var sets = getSets(lg.ex[eid]).filter(function (z) { return num(z.reps, 0) > 0; }).map(function (z) { return { weight: num(z.kg, 0), reps: num(z.reps), diff: Math.max(0, 10 - (num(z.rpe, 0) || 8)) }; });
            if (sets.length) ents.push({ movementId: id, sets: sets });
          });
          if (ents.length) out.push({ id: 'plan-' + p.id + '-' + k, date: d, entries: ents, metcons: [], plan: true });
        });
      });
      return out;
    },
    /* Historique des séances du plan faites, pour l'onglet Suivi */
    historyList: function () {
      var out = [];
      var stx = function (ss, it) {
        var un = it && it.unit === 's' ? ' s' : ''; var f = function (z) { return (num(z.kg, 0) > 0 ? fmtN(num(z.kg)) + ' kg × ' : '') + (z.reps != null ? z.reps : '?') + (un || (num(z.kg, 0) > 0 ? '' : ' reps')) + (z.rpe ? ' · RPE ' + fmtN(num(z.rpe)) : ''); };
        var same = ss.every(function (z) { return f(z) === f(ss[0]); });
        return same ? ss.length + ' × ' + f(ss[0]) : ss.map(f).join(' / ');
      };
      state.programs.forEach(function (p) {
        Object.keys(p.logs || {}).forEach(function (k) {
          var lg = p.logs[k]; if (!lg || !lg.done) return;
          var x = findInst(p.id + '|' + k); if (!x) return;
          var lines = [], mu = isMuscuInst(x);
          x.g.items.forEach(function (it) {
            var raw = (lg.ex || {})[it.id];
            if (raw && raw.skipped) { lines.push({ n: it.name, t: 'non fait' }); return; }
            var ss = getSets(raw);
            if (ss.length) lines.push({ n: it.name, t: stx(ss, it) });
            else lines.push({ n: it.name, t: (mu ? 'prévu ' : '') + (it.scheme || '') + (it.load && it.load !== 'Poids du corps' ? ' · ' + it.load : '') });
          });
          out.push({ key: x.key, date: iso(x.date), title: x.g.title, prog: p.name || KIND[p.kind].label, color: colorOf(p), kind: x.s.extra ? x.s.kind : p.kind, rpe: lg.rpe || null, dur: x.g.dur, note: lg.note || '', lines: lines, extra: !!x.s.extra });
        });
      });
      return out;
    },
    /* Accès au moteur pour les tests automatiques (lecture seule, aucune interface ne s'en sert) */
    engine: { editBegin: function () { editBegin(); }, persist: function (p) { persist(p); }, gen: gen, tmTrace: tmTrace, kgShift: kgShift, findEx: findEx, findInst: findInst, muscuSpec: muscuSpec, logsFor: logsFor, cfIdOf: cfIdOf, exPattern: exPattern, libFind: libFind, LIB: LIB, progStart: progStart, instancesOn: instancesOn, weekStats: weekStats, parseISO: parseISO, iso: iso, addDays: addDays, rstep: rstep, e1rm: e1rm },
    library: function () { return LIB.map(function (l) { return { id: l[0], n: libName(l), k: l[2], g: l[3], pat: l[4], mode: l[5] }; }); },
    programs: function () { return state.programs.map(function (p) { return { id: p.id, name: p.name || KIND[p.kind].label, color: colorOf(p), kind: p.kind }; }); },
    open: function (key) { var x = findInst(key); if (!x) return; ui.view = 'semaine'; ui.weekStart = iso(mondayOf(x.date)); ui.day = dow(x.date); ui.sel = key; ui.xf = null; ui.edit = null; },
    add: function (d, kind) { var dt = parseISO(d); if (!dt) return; ui.view = 'semaine'; ui.weekStart = iso(mondayOf(dt)); ui.day = dow(dt); ui.sel = null; var k = kind || 'muscu', xp = xfPrograms(k, d)[0]; ui.xf = { kind: k, date: d, pid: xp ? xp.id : null, name: '', dur: '', rpe: 0, km: '', note: '', ex: [], newEx: '' }; }
  };
  // Les mouvements de musculation de la bibliothèque rejoignent la liste du suivi CrossFit
  if (typeof window.registerMoves === 'function') window.registerMoves(LIB.filter(function (l) { return /^mu-/.test(l[0]); }).map(function (l) { return { id: l[0], n: libName(l), al: l[1].split('|'), k: l[2], g: 'Muscu · ' + l[3], pat: l[4], u: l[5] === 'sec' ? 'sec' : 'reps' }; }));
  runResume();
  if (S.tab === 'plan') render();
})();
