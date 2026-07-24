<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"></head>
<body>
<style>
.pr-root{--deep:#06060f;--gold:#c9a84c;--gold-d:rgba(201,168,76,.3);--gold-g:rgba(201,168,76,.55);--cyan:#52cfe6;--cyan-d:rgba(82,207,230,.2);--violet:#9b6dff;--violet-d:rgba(155,109,255,.2);--c-mat:#3ec9bb;--c-emo:#d76b94;--c-dom:#a478f5;--c-sur:#e09a4a;--c-unk:#7a819c;--glass:rgba(255,255,255,.025);--gb:rgba(255,255,255,.07);--txt:#e2dff0;--txt-d:rgba(226,223,240,.4);--r:14px;--rs:8px;--rx:4px;--fc:"Noto Serif SC","Songti SC",serif;--fe:"Cinzel","Cormorant Garamond",serif;font-family:var(--fc);color:var(--txt);width:100%;max-width:920px;margin:20px auto;background:var(--deep);border-radius:var(--r);position:relative;overflow:hidden;border:1px solid rgba(201,168,76,.15);box-shadow:0 0 80px rgba(155,109,255,.08),inset 0 0 80px rgba(0,0,0,.5);animation:prIn 1s cubic-bezier(.22,1,.36,1)}
@keyframes prIn{from{opacity:0;transform:translateY(40px)scale(.97);filter:blur(10px)}to{opacity:1;transform:none;filter:none}}
@keyframes prPulse{0%,100%{opacity:.3}50%{opacity:1}}
@keyframes prOrbit{to{transform:rotate(360deg)}}
@keyframes prShimmer{to{background-position:200% center}}
@keyframes prGlow{0%,100%{text-shadow:0 0 6px currentColor}50%{text-shadow:0 0 14px currentColor,0 0 28px currentColor}}
@keyframes prSlide{from{opacity:0;max-height:0;transform:translateY(-6px)}to{opacity:1;max-height:6000px;transform:none}}
@keyframes prScan{from{top:-2px}to{top:100%}}
@keyframes prPop{0%{transform:scale(.85);opacity:0}60%{transform:scale(1.05)}100%{transform:scale(1);opacity:1}}
.pr-root .pr-bg{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.pr-root .pr-bg-grad{position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 20% 10%,rgba(155,109,255,.05)0%,transparent 60%),radial-gradient(ellipse 60% 40% at 80% 90%,rgba(82,207,230,.04)0%,transparent 50%)}
.pr-root .pr-star{position:absolute;width:1.5px;height:1.5px;background:#fff;border-radius:50%;animation:prPulse 3s ease-in-out infinite;box-shadow:0 0 4px rgba(255,255,255,.7)}
.pr-root .pr-orb{position:absolute;top:50%;left:50%;border-radius:50%;border:1px dashed rgba(201,168,76,.06);animation:prOrbit 100s linear infinite;pointer-events:none}
.pr-root .pr-orb.o1{width:500px;height:500px;margin:-250px 0 0 -250px}.pr-root .pr-orb.o2{width:720px;height:720px;margin:-360px 0 0 -360px;animation-direction:reverse;animation-duration:140s;border-color:rgba(155,109,255,.05)}
.pr-root .pr-scan{position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.05),transparent);animation:prScan 14s linear infinite}
.pr-root .pr-hdr{position:relative;z-index:2;padding:32px 36px 22px;text-align:center}
.pr-root .pr-hdr-orn{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:14px}
.pr-root .pr-hdr-orn .ln{height:1px;width:55px;background:linear-gradient(90deg,transparent,var(--gold-d),transparent)}
.pr-root .pr-hdr-orn .dm{width:5px;height:5px;background:var(--gold);transform:rotate(45deg);box-shadow:0 0 8px var(--gold-g);display:inline-block}
.pr-root .pr-hdr-orn .dt{width:3px;height:3px;background:var(--gold-d);border-radius:50%;display:inline-block}
.pr-root .pr-hdr-en{font-family:var(--fe);font-size:.68em;letter-spacing:.55em;color:var(--txt-d);margin-bottom:6px}
.pr-root .pr-hdr h1{font-size:2.2em;font-weight:300;letter-spacing:.45em;margin:0;background:linear-gradient(90deg,transparent 5%,var(--gold) 30%,#fff 50%,var(--gold) 70%,transparent 95%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:prShimmer 5s linear infinite;line-height:1.3}
.pr-root .pr-hdr-sub{font-size:.76em;color:var(--txt-d);letter-spacing:.25em;margin-top:8px}
.pr-root .pr-hdr-div{margin-top:18px;height:1px;background:linear-gradient(90deg,transparent,var(--gold-d),rgba(155,109,255,.12),var(--gold-d),transparent)}
/* Khối Thu Gọn */
.pr-root .pr-sec{position:relative;z-index:2;margin:12px 36px 0}
.pr-root .pr-sec-sum{display:flex;align-items:center;justify-content:space-between;padding:13px 20px;cursor:pointer;list-style:none;background:var(--glass);border:1px solid var(--gb);border-radius:var(--rs);transition:all .3s;position:relative;overflow:hidden}
.pr-root .pr-sec-sum::-webkit-details-marker{display:none}
.pr-root .pr-sec-sum::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--sec-c,var(--gold));box-shadow:0 0 8px var(--sec-c,var(--gold-g));transition:width .3s}
.pr-root .pr-sec-sum:hover{background:rgba(255,255,255,.035)}.pr-root .pr-sec-sum:hover::before{width:4px}
.pr-root details.pr-sec[open]>.pr-sec-sum{border-radius:var(--rs) var(--rs) 0 0;border-bottom-color:transparent}
.pr-root .pr-sec-label{font-size:.92em;letter-spacing:.18em;color:var(--sec-c,var(--gold))}
.pr-root .pr-sec-hint{font-size:.7em;color:var(--txt-d);letter-spacing:.1em;margin-left:10px}
.pr-root .pr-sec-arr{font-size:.6em;color:var(--txt-d);transition:transform .4s cubic-bezier(.4,0,.2,1)}
.pr-root details.pr-sec[open]>.pr-sec-sum .pr-sec-arr{transform:rotate(180deg)}
.pr-root .pr-sec-body{padding:20px;background:rgba(0,0,0,.15);border:1px solid var(--gb);border-top:none;border-radius:0 0 var(--rs) var(--rs);animation:prSlide .45s ease}
/* Lưới Biểu Mẫu */
.pr-root .pr-fg{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pr-root .pr-fg.c3{grid-template-columns:1fr 1fr 1fr}
.pr-root .pr-fi{display:flex;flex-direction:column;gap:4px}
.pr-root .pr-fi.fw{grid-column:1/-1}
.pr-root .pr-fi label{font-size:.72em;color:var(--txt-d);letter-spacing:.1em}
.pr-root .pr-fi input,.pr-root .pr-fi select,.pr-root .pr-fi textarea{padding:7px 12px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.1);border-radius:var(--rx);color:#fff;font-family:var(--fc);font-size:.85em;transition:all .3s}
.pr-root .pr-fi input:focus,.pr-root .pr-fi select:focus,.pr-root .pr-fi textarea:focus{outline:none;border-color:var(--cyan);box-shadow:0 0 10px var(--cyan-d)}
.pr-root .pr-fi select option{background:#1a1a2e;color:#fff}
.pr-root .pr-fi textarea{min-height:90px;resize:vertical;line-height:1.7}
/* Linh Xúc */
.pr-root .pr-sp-tools{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center}
.pr-root .pr-sp-fbtn{padding:4px 12px;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:16px;color:rgba(255,255,255,.45);cursor:pointer;font-size:.75em;letter-spacing:.1em;font-family:var(--fc);transition:all .3s}
.pr-root .pr-sp-fbtn:hover{border-color:var(--gold);color:#fff}
.pr-root .pr-sp-fbtn.on{border-color:var(--gold);color:var(--gold);box-shadow:0 0 10px var(--gold-d)}
.pr-root .pr-sp-search{flex:1;min-width:100px;padding:5px 12px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.08);border-radius:16px;color:#fff;font-size:.78em;font-family:var(--fc)}
.pr-root .pr-sp-search:focus{outline:none;border-color:var(--cyan);box-shadow:0 0 8px var(--cyan-d)}
.pr-root .pr-sp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;max-height:300px;overflow-y:auto;padding:4px 2px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.1) transparent}
.pr-root .pr-sp-grid::-webkit-scrollbar{width:3px}.pr-root .pr-sp-grid::-webkit-scrollbar-thumb{background:rgba(255,255,255,.12);border-radius:2px}
.pr-root .pr-sp-card{padding:10px;border:1px solid var(--sc);border-radius:var(--rs);background:linear-gradient(150deg,rgba(14,13,34,.88),rgba(6,6,15,.94));cursor:pointer;transition:all .35s;position:relative;overflow:hidden;animation:prPop .4s ease backwards}
.pr-root .pr-sp-card::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--sc),transparent);opacity:.5}
.pr-root .pr-sp-card:hover{border-color:var(--sc);box-shadow:0 0 14px var(--sc);transform:translateY(-2px)}
.pr-root .pr-sp-card.sel{box-shadow:0 0 18px var(--sc),inset 0 0 14px rgba(0,0,0,.3);border-width:2px}
.pr-root .pr-sp-card.sel::after{content:"";position:absolute;top:7px;right:7px;width:12px;height:12px;border-radius:50%;background:var(--sc);box-shadow:0 0 6px var(--sc)}
.pr-root .pr-sp-card .sp-no{font-family:var(--fe);font-size:1.4em;font-weight:700;color:var(--sc);line-height:1;text-shadow:0 0 8px var(--sc);animation:prGlow 5s ease-in-out infinite}
.pr-root .pr-sp-card .sp-nm{font-size:.88em;color:#fff;letter-spacing:.12em;margin-top:5px}
.pr-root .pr-sp-card .sp-dom{font-size:.6em;color:var(--sc);letter-spacing:.1em;margin-top:3px;opacity:.7}
.pr-root .pr-sp-card .sp-tag{position:absolute;bottom:5px;right:7px;font-size:.48em;letter-spacing:.15em;color:var(--sc);opacity:.4;font-family:var(--fe)}
.pr-root .pr-sp-card.unv{border-style:dashed;opacity:.75}
.pr-root .pr-sp-sel-list{margin-top:10px;display:flex;flex-wrap:wrap;gap:6px}
.pr-root .pr-sp-sel-tag{padding:3px 10px;background:rgba(0,0,0,.35);border:1px solid var(--gold-d);border-radius:10px;font-size:.75em;color:var(--gold);display:flex;align-items:center;gap:5px;animation:prPop .3s ease}
.pr-root .pr-sp-sel-tag .x{cursor:pointer;opacity:.5;transition:opacity .2s}.pr-root .pr-sp-sel-tag .x:hover{opacity:1}
.pr-root .pr-sp-addbtn{margin-top:10px;padding:5px 14px;background:linear-gradient(135deg,var(--violet),var(--cyan));border:none;border-radius:14px;color:#fff;cursor:pointer;font-size:.75em;letter-spacing:.1em;font-family:var(--fc);transition:all .25s;box-shadow:0 2px 10px var(--violet-d)}
.pr-root .pr-sp-addbtn:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(155,109,255,.4)}
.pr-root .pr-sp-addform{margin-top:10px;padding:14px;background:rgba(0,0,0,.25);border:1px solid var(--gb);border-radius:var(--rs);display:none;animation:prSlide .35s ease}
.pr-root .pr-sp-addform.show{display:block}
/* Thẻ Nhân Vật */
.pr-root .pr-ch-toolbar{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center}
.pr-root .pr-ch-syncbtn{padding:5px 14px;background:rgba(201,168,76,.08);border:1px solid var(--gold-d);border-radius:14px;color:var(--gold);cursor:pointer;font-size:.75em;letter-spacing:.1em;font-family:var(--fc);transition:all .3s}
.pr-root .pr-ch-syncbtn:hover{background:rgba(201,168,76,.2)}
.pr-root .pr-ch-syncbtn:disabled{opacity:.4;cursor:not-allowed}
.pr-root .pr-ch-syncstatus{font-size:.7em;color:var(--txt-d);letter-spacing:.08em}
.pr-root .pr-ch-list{display:flex;flex-direction:column;gap:8px}
.pr-root .pr-ch-card{animation:prPop .35s ease backwards}
.pr-root .pr-ch-card-sum{display:flex;align-items:center;gap:8px;padding:12px 16px;cursor:pointer;list-style:none;background:rgba(0,0,0,.2);border:1px solid var(--gb);border-radius:var(--rs);transition:all .3s;flex-wrap:wrap}
.pr-root .pr-ch-card-sum::-webkit-details-marker{display:none}
.pr-root .pr-ch-card-sum:hover{background:rgba(255,255,255,.03)}
.pr-root details.pr-ch-card[open]>.pr-ch-card-sum{border-radius:var(--rs) var(--rs) 0 0;border-bottom-color:transparent}
.pr-root .pr-ch-card-name{font-size:.92em;color:#fff;letter-spacing:.1em}
.pr-root .pr-ch-badge{font-size:.58em;padding:2px 8px;border-radius:8px;letter-spacing:.08em;font-weight:600;white-space:nowrap}
.pr-root .pr-ch-badge.new{background:rgba(82,207,230,.12);border:1px solid rgba(82,207,230,.35);color:var(--cyan)}
.pr-root .pr-ch-badge.exist{background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);color:var(--gold)}
.pr-root .pr-ch-badge.gd{background:rgba(255,255,255,.04);border:1px solid var(--gb);color:var(--txt-d)}
.pr-root .pr-ch-card-aff{font-size:.75em;color:var(--gold);margin-left:auto}
.pr-root .pr-ch-card-arr{font-size:.55em;color:var(--txt-d);transition:transform .4s cubic-bezier(.4,0,.2,1)}
.pr-root details.pr-ch-card[open]>.pr-ch-card-sum .pr-ch-card-arr{transform:rotate(180deg)}
.pr-root .pr-ch-card-body{padding:16px;background:rgba(0,0,0,.12);border:1px solid var(--gb);border-top:none;border-radius:0 0 var(--rs) var(--rs);animation:prSlide .4s ease}
.pr-root .pr-ch-subsec{margin-top:12px;padding-top:10px;border-top:1px dashed rgba(255,255,255,.06)}
.pr-root .pr-ch-subsec-title{font-size:.72em;color:var(--violet);letter-spacing:.15em;margin-bottom:8px}
.pr-root .pr-ch-slider{-webkit-appearance:none;appearance:none;flex:1;height:4px;border-radius:2px;background:linear-gradient(90deg,#3a3a5c,var(--gold));outline:none;cursor:pointer}
.pr-root .pr-ch-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--gold);box-shadow:0 0 8px var(--gold-g);cursor:pointer;transition:transform .2s}
.pr-root .pr-ch-slider::-webkit-slider-thumb:hover{transform:scale(1.2)}
.pr-root .pr-ch-val{font-size:.82em;color:var(--gold);min-width:26px;text-align:right;font-weight:600}
.pr-root .pr-ch-del{padding:4px 10px;background:rgba(255,60,60,.08);border:1px solid rgba(255,60,60,.18);border-radius:var(--rx);color:rgba(255,120,120,.6);cursor:pointer;font-size:.7em;font-family:var(--fc);transition:all .3s}
.pr-root .pr-ch-del:hover{background:rgba(255,60,60,.25);color:#ff8888}
/* Biểu Mẫu Nhân Vật Mới */
.pr-root .pr-newch-sec{margin:10px 0 0}
.pr-root .pr-newch-toggle{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;cursor:pointer;list-style:none;background:rgba(82,207,230,.04);border:1px solid rgba(82,207,230,.12);border-radius:var(--rs);font-size:.85em;color:var(--cyan);letter-spacing:.15em;transition:all .3s}
.pr-root .pr-newch-toggle::-webkit-details-marker{display:none}
.pr-root .pr-newch-toggle:hover{background:rgba(82,207,230,.08)}
.pr-root details.pr-newch-sec[open]>.pr-newch-toggle{border-radius:var(--rs) var(--rs) 0 0;border-bottom-color:transparent}
.pr-root .pr-newch-body{padding:16px;background:rgba(0,0,0,.15);border:1px solid rgba(82,207,230,.12);border-top:none;border-radius:0 0 var(--rs) var(--rs);animation:prSlide .4s ease}
.pr-root .pr-newch-body[data-ng="male"] .fonly{display:none}
.pr-root .pr-newch-body[data-ng="female"] .fonly{display:flex}
.pr-root .pr-newch-body .fonly{flex-direction:column;gap:4px}
.pr-root .pr-newch-body[data-ng="male"] .fonly-grid{display:none}
.pr-root .pr-newch-body[data-ng="female"] .fonly-grid{display:grid}
.pr-root .pr-newch-submit{margin-top:12px;padding:8px 0;width:100%;background:linear-gradient(135deg,var(--cyan),var(--violet));border:none;border-radius:var(--rx);color:#fff;font-weight:600;letter-spacing:.25em;cursor:pointer;font-family:var(--fc);transition:all .25s;box-shadow:0 2px 10px var(--cyan-d)}
.pr-root .pr-newch-submit:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(82,207,230,.4)}
/* Lời Mở Đầu */
.pr-root .pr-opening-hint{font-size:.7em;color:var(--txt-d);margin-bottom:8px;letter-spacing:.06em;line-height:1.6}
/* Chân Trang */
.pr-root .pr-footer{position:relative;z-index:2;padding:20px 36px 28px;text-align:center}
.pr-root .pr-confirm{padding:14px 48px;background:linear-gradient(135deg,var(--gold),#a07830);border:none;border-radius:var(--rs);color:#0a0a15;font-size:1.05em;font-weight:600;letter-spacing:.4em;cursor:pointer;font-family:var(--fc);transition:all .3s;box-shadow:0 4px 20px var(--gold-d);position:relative;overflow:hidden}
.pr-root .pr-confirm:hover{transform:translateY(-3px);box-shadow:0 8px 30px var(--gold-g)}
.pr-root .pr-confirm:active{transform:translateY(0)}
.pr-root .pr-confirm::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);transition:left .5s}
.pr-root .pr-confirm:hover::after{left:100%}
.pr-root .pr-confirm:disabled{opacity:.5;cursor:not-allowed;transform:none}.pr-root .pr-confirm:disabled::after{display:none}
.pr-root .pr-ftr{position:relative;z-index:2;text-align:center;padding:0 36px 20px}
.pr-root .pr-ftr-ln{height:1px;margin-bottom:10px;background:linear-gradient(90deg,transparent,var(--gold-d),transparent)}
.pr-root .pr-ftr-txt{font-size:.6em;color:var(--txt-d);letter-spacing:.35em;font-family:var(--fe)}
.pr-toast{position:fixed;top:28px;right:28px;z-index:10000;padding:10px 22px;background:rgba(6,6,15,.95);border:1px solid var(--gold);border-radius:var(--rx);color:var(--gold);font-size:.82em;letter-spacing:.12em;font-family:"Noto Serif SC",serif;box-shadow:0 4px 24px rgba(201,168,76,.3);animation:prPop .35s ease;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.pr-root .pr-msg{text-align:center;padding:16px;color:var(--txt-d);font-size:.82em;letter-spacing:.12em}
/* Xem Trước Bản Vá */
.pr-root .pr-patch-sec{position:relative;z-index:2;margin:12px 36px 0}
.pr-root .pr-patch-toggle{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;cursor:pointer;list-style:none;background:rgba(82,207,230,.03);border:1px solid rgba(82,207,230,.1);border-radius:var(--rs);font-size:.78em;color:rgba(82,207,230,.6);transition:all .3s}
.pr-root .pr-patch-toggle::-webkit-details-marker{display:none}
.pr-root details.pr-patch-sec[open]>.pr-patch-toggle{border-radius:var(--rs) var(--rs) 0 0;border-bottom-color:transparent}
.pr-root .pr-patch-body{padding:12px 18px;background:rgba(0,0,0,.3);border:1px solid rgba(82,207,230,.1);border-top:none;border-radius:0 0 var(--rs) var(--rs);animation:prSlide .35s ease}
.pr-root .pr-patch-body pre{background:rgba(0,0,0,.5);padding:10px;border-radius:var(--rx);max-height:220px;overflow:auto;white-space:pre-wrap;word-break:break-all;font-size:.75em;color:#aac;margin:0;line-height:1.5;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.08) transparent}
.pr-root .pr-patch-body pre::-webkit-scrollbar{width:3px}.pr-root .pr-patch-body pre::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:2px}
.pr-root .pr-patch-refresh{margin-top:8px;padding:4px 12px;background:rgba(82,207,230,.06);border:1px solid rgba(82,207,230,.18);border-radius:var(--rx);color:rgba(82,207,230,.65);cursor:pointer;font-size:.75em;font-family:var(--fc);transition:all .3s}
.pr-root .pr-patch-refresh:hover{background:rgba(82,207,230,.15)}
/* Chẩn Đoán */
.pr-root .pr-diag-sec{position:relative;z-index:2;margin:12px 36px 0}
.pr-root .pr-diag-toggle{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;cursor:pointer;list-style:none;background:rgba(255,60,60,.03);border:1px solid rgba(255,60,60,.1);border-radius:var(--rs);font-size:.72em;color:rgba(255,120,120,.5);transition:all .3s}
.pr-root .pr-diag-toggle::-webkit-details-marker{display:none}
.pr-root details.pr-diag-sec[open]>.pr-diag-toggle{border-radius:var(--rs) var(--rs) 0 0;border-bottom-color:transparent}
.pr-root .pr-diag-body{padding:10px 16px;background:rgba(0,0,0,.35);border:1px solid rgba(255,60,60,.1);border-top:none;border-radius:0 0 var(--rs) var(--rs);font-size:.72em;color:#999}
.pr-root .pr-diag-body pre{background:rgba(0,0,0,.5);padding:8px;border-radius:var(--rx);max-height:160px;overflow:auto;white-space:pre-wrap;word-break:break-all;font-size:.85em;color:#888;margin:6px 0}
.pr-root .pr-diag-btn{padding:4px 10px;background:rgba(255,60,60,.08);border:1px solid rgba(255,60,60,.18);border-radius:var(--rx);color:rgba(255,120,120,.65);cursor:pointer;font-size:.85em;font-family:var(--fc);margin:3px;transition:all .3s}
.pr-root .pr-diag-btn:hover{background:rgba(255,60,60,.22)}
@media(max-width:640px){
.pr-root .pr-hdr{padding:22px 20px 16px}.pr-root .pr-hdr h1{font-size:1.5em;letter-spacing:.2em}.pr-root .pr-sec,.pr-root .pr-patch-sec,.pr-root .pr-diag-sec{margin-left:20px;margin-right:20px}.pr-root .pr-footer{padding:16px 20px 22px}.pr-root .pr-fg,.pr-root .pr-fg.c3{grid-template-columns:1fr}.pr-root .pr-sp-grid{grid-template-columns:repeat(auto-fill,minmax(115px,1fr))}.pr-root .pr-ch-card-sum{font-size:.85em}
}
</style>

<div class="pr-root" id="prRoot">
<div class="pr-bg" id="prBg"><div class="pr-bg-grad"></div><div class="pr-scan"></div><div class="pr-orb o1"></div><div class="pr-orb o2"></div></div>
<div class="pr-hdr">
<div class="pr-hdr-orn"><div class="dt"></div><div class="ln"></div><div class="dm"></div><div class="ln"></div><div class="dt"></div></div>
<div class="pr-hdr-en">SPIRIT SANCTUM ARCHIVE INITIALIZATION</div>
<h1>Hồ sơ Linh Điện · Khởi tạo</h1>
<div class="pr-hdr-sub">Cấu hình thông số thế giới và thiết lập nhân vật, sau khi xác nhận sẽ ghi vào biến và tiến vào cốt truyện</div>
<div class="pr-hdr-div"></div>
</div>

<details class="pr-sec" open style="--sec-c:var(--cyan)">
<summary class="pr-sec-sum"><div><span class="pr-sec-label">Thiết lập thế giới</span><span class="pr-sec-hint">Khu vực / Thời gian / Thời tiết</span></div><div class="pr-sec-arr">&#9660;</div></summary>
<div class="pr-sec-body"><div class="pr-fg">
<div class="pr-fi"><label>Khu Vực Hiện Tại</label><select id="prArea"><option value="Số Không·Thành Khởi Nguyên">Số Không · Thành Khởi Nguyên</option><option value="Thứ Nhất·Eden">Thứ Nhất · Eden</option><option value="Thứ Hai·Babel">Thứ Hai · Babel</option><option value="Thứ Ba·Thâm Không">Thứ Ba · Thâm Không</option><option value="Thứ Tư·Phương Chu" selected>Thứ Tư · Phương Chu</option><option value="Thứ Năm·Dung Lô">Thứ Năm · Dung Lô</option><option value="Thứ Sáu·Đảo Ảnh">Thứ Sáu · Đảo Ảnh</option><option value="Thứ Bảy·Cực Trú">Thứ Bảy · Cực Trú</option></select></div>
<div class="pr-fi"><label>Thời Tiết</label><select id="prWeather"><option value="Nắng">Nắng</option><option value="Nhiều mây">Nhiều mây</option><option value="Âm u" selected>Âm u</option><option value="Mưa nhỏ">Mưa nhỏ</option><option value="Mưa lớn">Mưa lớn</option><option value="Mưa bão">Mưa bão</option><option value="Sương mù">Sương mù</option><option value="Tuyết">Tuyết</option><option value="Bão cát">Bão cát</option><option value="Bão linh năng">Bão linh năng</option></select></div>
<div class="pr-fi"><label>Ngày Tháng</label><input type="date" id="prDate" value="2027-03-15"></div>
<div class="pr-fi"><label>Thời Gian</label><input type="time" id="prTime" value="08:00"></div>
</div></div>
</details>

<details class="pr-sec" open style="--sec-c:var(--violet)">
<summary class="pr-sec-sum"><div><span class="pr-sec-label">Thiết lập Linh Môi Giả</span><span class="pr-sec-hint">Cấp bậc / Lựa chọn Linh Xúc</span></div><div class="pr-sec-arr">&#9660;</div></summary>
<div class="pr-sec-body">
<div class="pr-fg" style="margin-bottom:14px"><div class="pr-fi"><label>Cấp Bậc Nhân Vật Chính</label><select id="prRank"><option value="Không">Không</option><option value="Bậc Xúc Nguyên">Bậc Xúc Nguyên</option><option value="Bậc Cộng Hưởng" selected>Bậc Cộng Hưởng</option><option value="Bậc Thống Ngự">Bậc Thống Ngự</option><option value="Bậc Đồng Hóa">Bậc Đồng Hóa</option></select></div></div>
<label style="font-size:.72em;color:var(--txt-d);letter-spacing:.1em;display:block;margin-bottom:8px">Lựa chọn Linh Xúc (Nhấp để chọn/hủy, có thể chọn nhiều)</label>
<div class="pr-sp-tools"><button class="pr-sp-fbtn on" data-fd="all">Tất cả</button><button class="pr-sp-fbtn" data-fd="Vực Vật Chất">Vật chất</button><button class="pr-sp-fbtn" data-fd="Vực Tình Cảm">Tình cảm</button><button class="pr-sp-fbtn" data-fd="Vực Chi Phối">Chi phối</button><button class="pr-sp-fbtn" data-fd="Vực Sinh Tồn">Sinh tồn</button><input type="text" class="pr-sp-search" id="prSpSearch" placeholder="Số hiệu / Tên..."></div>
<div class="pr-sp-grid" id="prSpGrid"><div class="pr-msg">Đang đọc Bảng chu kỳ Linh Xúc...</div></div>
<div class="pr-sp-sel-list" id="prSpSel"></div>
<button class="pr-sp-addbtn" id="prSpAddToggle">+ Tùy chỉnh Linh Xúc mới (Đồng bộ ghi vào bảng chu kỳ)</button>
<div class="pr-sp-addform" id="prSpAddForm"><div class="pr-fg">
<div class="pr-fi"><label>Số hiệu</label><input type="number" id="prNsId" min="1" max="241"></div>
<div class="pr-fi"><label>Trực thuộc</label><select id="prNsDom"><option value="Vực Vật Chất">Vực Vật Chất</option><option value="Vực Tình Cảm">Vực Tình Cảm</option><option value="Vực Chi Phối">Vực Chi Phối</option><option value="Vực Sinh Tồn">Vực Sinh Tồn</option><option value="Chưa Rõ">Chưa Rõ</option></select></div>
<div class="pr-fi"><label>Tên</label><input type="text" id="prNsNm" maxlength="20"></div>
<div class="pr-fi"><label>Trạng thái xác thực</label><select id="prNsVer"><option value="true">Ghi chép trong sổ</option><option value="false">Suy luận lý thuyết</option></select></div>
<div class="pr-fi fw"><label>Năng lực</label><textarea id="prNsAbi" style="min-height:45px"></textarea></div>
<div class="pr-fi fw"><button class="pr-sp-addbtn" id="prNsSubmit" style="margin:0;width:100%">Ghi vào bảng chu kỳ và chọn</button></div>
</div></div>
</div>
</details>

<details class="pr-sec" open style="--sec-c:var(--c-emo)">
<summary class="pr-sec-sum"><div><span class="pr-sec-label">Thiết lập nhân vật</span><span class="pr-sec-hint">Chỉnh sửa nhân vật đã có / Tạo nhân vật mới</span></div><div class="pr-sec-arr">&#9660;</div></summary>
<div class="pr-sec-body">
<div class="pr-ch-toolbar">
<button class="pr-ch-syncbtn" id="prChSync">Đồng bộ dữ liệu MVU đã có</button>
<span class="pr-ch-syncstatus" id="prChSyncSt"></span>
</div>
<div class="pr-ch-list" id="prChList"></div>
<details class="pr-newch-sec" id="prNewChSec">
<summary class="pr-newch-toggle"><span>+ Thêm nhân vật mới</span><span>&#9660;</span></summary>
<div class="pr-newch-body" id="prNewChBody" data-ng="female">
<div class="pr-fg" style="margin-bottom:10px">
<div class="pr-fi"><label>Tên nhân vật</label><input type="text" id="prNewNm" placeholder="Bắt buộc"></div>
<div class="pr-fi"><label>Phân loại giới tính</label><select id="prNewGd"><option value="female">Nhân Vật Nữ</option><option value="male">Nhân Vật Nam</option></select></div>
</div>
<div class="pr-ch-subsec-title">Thuộc tính cơ bản</div>
<div class="pr-fg">
<div class="pr-fi fw"><label>Độ Hảo Cảm</label><div style="display:flex;align-items:center;gap:10px"><input type="range" class="pr-ch-slider" min="0" max="100" value="20" id="prNewAff"><span class="pr-ch-val" id="prNewAffV">20</span></div></div>
<div class="pr-fi"><label>Cấp Bậc</label><select id="prNewRank"><option value="Không">Không</option><option value="Bậc Xúc Nguyên">Bậc Xúc Nguyên</option><option value="Bậc Cộng Hưởng">Bậc Cộng Hưởng</option><option value="Bậc Thống Ngự">Bậc Thống Ngự</option><option value="Bậc Đồng Hóa">Bậc Đồng Hóa</option><option value="Bậc Du Ly">Bậc Du Ly</option><option value="Bậc Hội Tụ">Bậc Hội Tụ</option><option value="Bậc Khái Niệm">Bậc Khái Niệm</option><option value="Bậc Nguyên Hạch">Bậc Nguyên Hạch</option></select></div>
<div class="pr-fi"><label>Linh Xúc</label><input type="text" id="prNewSp" value="Không"></div>
<div class="pr-fi fonly"><label>Độ Thanh Tẩy</label><input type="number" id="prNewPur" value="0" min="0" max="100"></div>
<div class="pr-fi fonly"><label>Cảm Xúc Hiện Tại</label><select id="prNewEmo"><option value="Bình Tĩnh">Bình Tĩnh</option><option value="Vui Vẻ">Vui Vẻ</option><option value="Tức Giận">Tức Giận</option><option value="Tủi Thân">Tủi Thân</option><option value="Căng Thẳng">Căng Thẳng</option><option value="Buồn Bã">Buồn Bã</option><option value="Sợ Hãi">Sợ Hãi</option><option value="Ngại Ngùng">Ngại Ngùng</option><option value="Lo Âu">Lo Âu</option></select></div>
<div class="pr-fi"><label>Đang Có Mặt</label><select id="prNewPres"><option value="false">Không</option><option value="true">Có</option></select></div>
</div>
<div class="pr-ch-subsec fonly-grid" style="margin-top:12px;padding-top:10px;border-top:1px dashed rgba(255,255,255,.06)"><div class="pr-ch-subsec-title">Số Đo Ba Vòng (Tùy chọn)</div><div class="pr-fg c3">
<div class="pr-fi"><label>Vòng Ngực</label><input type="text" id="prNewBust" placeholder="Tùy chọn"></div>
<div class="pr-fi"><label>Vòng Eo</label><input type="text" id="prNewWaist" placeholder="Tùy chọn"></div>
<div class="pr-fi"><label>Vòng Mông</label><input type="text" id="prNewHip" placeholder="Tùy chọn"></div>
</div></div>
<div class="pr-ch-subsec fonly-grid" style="margin-top:12px;padding-top:10px;border-top:1px dashed rgba(255,255,255,.06)"><div class="pr-ch-subsec-title">Trang Phục (Tùy chọn)</div><div class="pr-fg">
<div class="pr-fi"><label>Áo</label><input type="text" id="prNewTop" placeholder="Tùy chọn"></div>
<div class="pr-fi"><label>Quần</label><input type="text" id="prNewBot" placeholder="Tùy chọn"></div>
<div class="pr-fi"><label>Áo Lót</label><input type="text" id="prNewBra" placeholder="Tùy chọn"></div>
<div class="pr-fi"><label>Quần Lót</label><input type="text" id="prNewPan" placeholder="Tùy chọn"></div>
</div></div>
<button class="pr-newch-submit" id="prNewChAdd">Thêm nhân vật này vào danh sách</button>
</div>
</details>
</div>
</details>

<details class="pr-sec" open style="--sec-c:var(--gold)">
<summary class="pr-sec-sum"><div><span class="pr-sec-label">Lời mở đầu</span><span class="pr-sec-hint">Điểm bắt đầu cốt truyện</span></div><div class="pr-sec-arr">&#9660;</div></summary>
<div class="pr-sec-body">
<div class="pr-opening-hint">Mô tả bối cảnh bắt đầu câu chuyện. Văn bản này cùng với tóm tắt khởi tạo sẽ được gửi làm tin nhắn đầu tiên của người dùng, AI sau đó sẽ dựa vào đây và các biến MVU để triển khai cốt truyện.</div>
<div class="pr-fi fw"><textarea id="prOpening" placeholder="Ví dụ: Khu Phương Chu vào tháng 3 năm 2027 bị bao phủ dưới một tầng mây thấp màu xám nhạt, tiếng còi báo động tạm thời lần thứ ba ở ranh giới khu cách ly vừa mới được dỡ bỏ..."></textarea></div>
</div>
</details>

<details class="pr-patch-sec" id="prPatchSec">
<summary class="pr-patch-toggle"><span>Xem trước JSONPatch</span><span>&#9660;</span></summary>
<div class="pr-patch-body"><pre id="prPatchPre">Nhấp vào bên dưới để làm mới xem trước bản vá biến sắp được ghi.</pre><button class="pr-patch-refresh" id="prPatchRefresh">Làm mới xem trước</button></div>
</details>

<details class="pr-diag-sec" id="prDiagSec">
<summary class="pr-diag-toggle"><span>Chẩn đoán kết nối</span><span>&#9660;</span></summary>
<div class="pr-diag-body">
<p>triggerSlash: <code id="dTs">--</code> | getContext: <code id="dCtx">--</code></p>
<div><button class="pr-diag-btn" id="dTestRead">Thử nghiệm đọc MVU</button><button class="pr-diag-btn" id="dClear">Xóa nhật ký</button></div>
<pre id="dLog">Đang chờ thao tác...</pre>
</div>
</details>

<div class="pr-footer"><button class="pr-confirm" id="prConfirm">Khởi tạo và bắt đầu</button></div>
<div class="pr-ftr"><div class="pr-ftr-ln"></div><div class="pr-ftr-txt">ARCHIVED BY THE SPIRIT SANCTUM</div></div>
</div>

<script>
(function(){
var WB='{Tương tư đêm nay sầu đứt ruột, Mưa lạnh hương hồn viếng thư khách}';
var SP_UID=6;
var root=document.getElementById('prRoot');
if(!root||root.dataset.pri==='1')return;
root.dataset.pri='1';
var DC={'Vực Vật Chất':'#3ec9bb','Vực Tình Cảm':'#d76b94','Vực Chi Phối':'#a478f5','Vực Sinh Tồn':'#e09a4a','Chưa Rõ':'#7a819c'};
var RANKS=['Không','Bậc Xúc Nguyên','Bậc Cộng Hưởng','Bậc Thống Ngự','Bậc Đồng Hóa','Bậc Du Ly','Bậc Hội Tụ','Bậc Khái Niệm','Bậc Nguyên Hạch'];
var EMOTIONS=['Bình Tĩnh','Vui Vẻ','Tức Giận','Tủi Thân','Căng Thẳng','Buồn Bã','Sợ Hãi','Ngại Ngùng','Lo Âu'];

var specData=[];
var selected={};
var existingSpirits={};
var chars=[];
var removedExisting=[];
var spFilter='all',spQuery='';

/* === Công Cụ === */
function toast(m,c){var t=document.createElement('div');t.className='pr-toast';t.textContent=m;if(c){t.style.borderColor=c;t.style.color=c;}document.body.appendChild(t);setTimeout(function(){t.style.opacity='0';t.style.transition='opacity .4s';},2200);setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t);},2800);}
function esc(s){var d=document.createElement('div');d.appendChild(document.createTextNode(String(s)));return d.innerHTML;}
function pad3(n){var s=String(n);while(s.length<3)s='0'+s;return s;}
function dlog(m){var el=document.getElementById('dLog');if(el){el.textContent='['+new Date().toLocaleTimeString()+'] '+m+'\n'+el.textContent;}console.log('[PR] '+m);}
function sanitize(r){if(typeof r!=='string')r=String(r||'');return r.replace(/^\uFEFF/,'').replace(/<[^>]*>/g,'').replace(/\u201c/g,'"').replace(/\u201d/g,'"').replace(/\u2018/g,"'").replace(/\u2019/g,"'").trim();}
function tryParseJSON(raw){
  raw=sanitize(raw);if(!raw||raw==='undefined'||raw==='null')return null;
  try{var d=JSON.parse(raw);return d;}catch(e){}
  var s=raw.indexOf('{'),e2=raw.lastIndexOf('}');
  if(s!==-1&&e2>s){try{return JSON.parse(raw.substring(s,e2+1));}catch(e3){}}
  var a=raw.indexOf("['),b=raw.lastIndexOf(']");
  if(a!==-1&&b>a){try{return JSON.parse(raw.substring(a,b+1));}catch(e4){}}
  return null;
}

/* === Tinh Không === */
function initStars(){var bg=document.getElementById('prBg');for(var i=0;i<55;i++){var s=document.createElement('div');s.className='pr-star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=Math.random()*4+'s';s.style.animationDuration=(2+Math.random()*5)+'s';var sz=.8+Math.random()*1.5;s.style.width=sz+'px';s.style.height=sz+'px';bg.appendChild(s);}}

/* === Bảng chu kỳ Linh Xúc IO === */
async function loadSpectrum(){
  if(typeof triggerSlash!=='function')return[];
  try{var raw=await triggerSlash('/getentryfield file="'+WB+'" field=content '+SP_UID);if(!raw)return[];var arr=tryParseJSON(String(raw));return(Array.isArray(arr)&&arr.length>0)?arr:[];}catch(e){return[];}
}
async function saveSpectrum(arr){
  if(typeof triggerSlash!=='function')return false;
  try{await triggerSlash('/setentryfield file="'+WB+'" uid='+SP_UID+' field=content '+JSON.stringify(arr));return true;}catch(e){return false;}
}

/* === MVUĐọc - Đa chiến lược === */
async function tryGetVar(key){
  if(typeof triggerSlash!=='function')return null;
  var strategies=[
    '/getvar key='+key,
    '/getvar key="'+key+'"',
  ];
  for(var i=0;i<strategies.length;i++){
    try{
      var raw=await triggerSlash(strategies[i]);
      if(raw&&String(raw).trim()&&String(raw).trim()!=='undefined'&&String(raw).trim()!==''){
        dlog('getvar "'+key+'" Chiến lược'+i+' Độ dài trả về:'+String(raw).length);
        return tryParseJSON(String(raw));
      }
    }catch(e){}
  }
  return null;
}

function tryContextRead(){
  try{
    if(typeof getContext==='function'){
      var ctx=getContext();
      if(ctx){
        var vars=null;
        if(ctx.chatMetadata&&ctx.chatMetadata.variables)vars=ctx.chatMetadata.variables;
        else if(ctx.chat_metadata&&ctx.chat_metadata.variables)vars=ctx.chat_metadata.variables;
        if(vars&&typeof vars==='object'){dlog('ContextĐọc thành công,keys:'+Object.keys(vars).join(','));return vars;}
      }
    }
  }catch(e){dlog('ContextLỗi đọc:'+e.message);}
  try{
    if(typeof SillyTavern!=='undefined'&&SillyTavern.getContext){
      var ctx2=SillyTavern.getContext();
      var v2=ctx2&&ctx2.chatMetadata&&ctx2.chatMetadata.variables;
      if(v2){dlog('SillyTavern.getContext Thành công');return v2;}
    }
  }catch(e2){}
  return null;
}

async function readMvuData(){
  dlog('Bắt đầu đọcMVUDữ liệu...');
  var result={};var keys=['Thế Giới','Nhân Vật Chính','Nhân Vật Nữ','Nhân Vật Nam'];

  // chiến lược1: Trực tiếpcontextĐọc
  var ctxData=tryContextRead();
  if(ctxData){
    for(var i=0;i<keys.length;i++){if(ctxData[keys[i]])result[keys[i]]=ctxData[keys[i]];}
    if(Object.keys(result).length>0){dlog('ContextTrúng chiến lược '+Object.keys(result).length+' khóa cấp cao nhất');return result;}
  }

  // chiến lược2: getvarĐọc từng cái
  for(var i=0;i<keys.length;i++){
    var val=await tryGetVar(keys[i]);
    if(val!==null){result[keys[i]]=val;dlog('getvarKhớp: '+keys[i]);}
  }
  if(Object.keys(result).length>0)return result;

  // chiến lược3: Thử đọc toàn bộMVUĐối tượng
  var rootKeys=['Biến','mvu','mvu_data','data','state'];
  for(var i=0;i<rootKeys.length;i++){
    var val=await tryGetVar(rootKeys[i]);
    if(val&&typeof val==='object'&&!Array.isArray(val)){
      dlog('Khóa gốc"'+rootKeys[i]+'"trúng đích');
      for(var j=0;j<keys.length;j++){if(val[keys[j]])result[keys[j]]=val[keys[j]];}
      if(Object.keys(result).length>0)return result;
    }
  }

  dlog('Tất cả chiến lược đọc đều không trả về dữ liệu hợp lệ');
  return Object.keys(result).length>0?result:null;
}

/* === Trích xuất trường nhân vật === */
function extractChar(name,gender,d){
  var c={name:name,gender:gender,existing:true,origData:JSON.parse(JSON.stringify(d))};
  c['Độ Hảo Cảm']=(typeof d['Độ Hảo Cảm']==='number')?d['Độ Hảo Cảm']:0;
  c['Cấp Bậc']=d['Cấp Bậc']||'vô';
  c['Linh Xúc']=d['Linh Xúc']||'vô';
  c['Đang Có Mặt']=!!d['Đang Có Mặt'];
  if(gender==='female'){
    c['Độ Thanh Tẩy']=(typeof d['Độ Thanh Tẩy']==='number')?d['Độ Thanh Tẩy']:0;
    c['Cảm Xúc Hiện Tại']=d['Cảm Xúc Hiện Tại']||'Bình Tĩnh';
    var sw=d['Số Đo Ba Vòng'];
    if(sw&&typeof sw==='object'){c['Số Đo Ba Vòng_Vòng Ngực']=sw['Vòng Ngực']||'';c['Số Đo Ba Vòng_Vòng Eo']=sw['Vòng Eo']||'';c['Số Đo Ba Vòng_Vòng Mông']=sw['Vòng Mông']||'';}
    else{c['số đo 3 vòng_vòng ngực']='';c['số đo 3 vòng_vòng eo']='';c['số đo 3 vòng_vòng mông']='';}
    var cz=d['Trang Phục'];
    if(cz&&typeof cz==='object'){c['Trang Phục_Áo']=cz['Áo']||'';c['Trang Phục_Quần']=cz['Quần']||'';c['Trang Phục_Áo Lót']=cz['Áo Lót']||'';c['Trang Phục_Quần Lót']=cz['Quần Lót']||'';}
    else{c['trang phục_áo']='';c['trang phục_quần']='';c['trang phục_áo lót']='';c['trang phục_quần lót']='';}
  }
  return c;
}

/* === MVUĐồng bộ === */
async function syncMvu(){
  var stEl=document.getElementById('prChSyncSt');
  if(stEl)stEl.textContent='Đang đồng bộ...';
  var data=await readMvuData();
  if(!data){if(stEl){stEl.textContent='Không đọc đượcMVUdữ liệu (có thể là khởi tạo lần đầu)';stEl.style.color='var(--txt-d)';}return false;}
  var loaded=false;

  if(data['Nhân Vật Chính']&&typeof data['Nhân Vật Chính']==='object'){
    var p=data['Nhân Vật Chính'];
    if(p['Cấp Bậc']&&p['Cấp Bậc']!=='Chờ Khởi Tạo'){var el=document.getElementById('prRank');if(el)el.value=p['Cấp Bậc'];}
    if(p['Khu Vực Hiện Tại']&&p['Khu Vực Hiện Tại']!=='Chờ Khởi Tạo'){var el2=document.getElementById('prArea');if(el2)el2.value=p['Khu Vực Hiện Tại'];}
    if(p['Linh Xúc']&&typeof p['Linh Xúc']==='object'){
      existingSpirits=p['Linh Xúc'];
      Object.keys(existingSpirits).forEach(function(nm){
        var sp=specData.filter(function(x){return x.name===nm;})[0];
        if(sp)selected[sp.id]={id:sp.id,name:nm,domain:sp.domain};
      });
    }
    loaded=true;
  }
  if(data['Thế Giới']&&typeof data['Thế Giới']==='object'){
    var w=data['Thế Giới'];
    if(w['Thời Tiết']&&w['Thời Tiết']!=='Chờ Khởi Tạo'){var el3=document.getElementById('prWeather');if(el3)el3.value=w['Thời Tiết'];}
    loaded=true;
  }

  // Nhân vật
  chars=[];removedExisting=[];
  if(data['Nhân Vật Nữ']&&typeof data['Nhân Vật Nữ']==='object'){
    Object.keys(data['Nhân Vật Nữ']).forEach(function(nm){chars.push(extractChar(nm,'female',data['Nhân Vật Nữ'][nm]));});
    loaded=true;
  }
  if(data['Nhân Vật Nam']&&typeof data['Nhân Vật Nam']==='object'){
    Object.keys(data['Nhân Vật Nam']).forEach(function(nm){chars.push(extractChar(nm,'male',data['Nhân Vật Nam'][nm]));});
    loaded=true;
  }

  if(stEl){stEl.textContent=loaded?('Đã đồng bộ: '+chars.length+'nhân vật, '+Object.keys(existingSpirits).length+'mục Linh Xúc'):'Không đọc được dữ liệu hợp lệ';stEl.style.color=loaded?'#3ec9bb':'var(--txt-d)';}
  renderSpGrid();renderSelList();renderChars();
  return loaded;
}

/* === Kết xuất Linh Xúc === */
function renderSpGrid(){
  var grid=document.getElementById('prSpGrid');grid.innerHTML='';
  var list=specData.slice().sort(function(a,b){return a.id-b.id;});
  if(spFilter!=='all')list=list.filter(function(x){return x.domain===spFilter;});
  if(spQuery){var q=spQuery.toLowerCase();list=list.filter(function(x){return String(x.id).indexOf(q)!==-1||x.name.toLowerCase().indexOf(q)!==-1;});}
  if(!list.length){grid.innerHTML='<div class="pr-msg"> Không có Linh Xúc phù hợp</div>';return;}
  list.forEach(function(item,idx){
    var c=document.createElement('div');
    c.className='pr-sp-card'+(item.verified?'':' unv')+(selected[item.id]?' sel':'');
    c.style.setProperty('--sc',DC[item.domain]||DC['Chưa Rõ']);
    c.style.animationDelay=(idx*.03)+'s';
    c.innerHTML='<div class="sp-no">'+pad3(item.id)+'</div><div class="sp-nm">'+esc(item.name)+'</div><div class="sp-dom">'+esc(item.domain)+'</div><div class="sp-tag">'+(item.verified?'VER':'THY')+'</div>';
    c.setAttribute('data-sid',String(item.id));
    c.addEventListener('click',function(){
      var sid=parseInt(this.getAttribute('data-sid'),10);
      if(selected[sid])delete selected[sid];
      else{var sp=specData.filter(function(x){return x.id===sid;})[0];if(sp)selected[sid]={id:sp.id,name:sp.name,domain:sp.domain};}
      renderSpGrid();renderSelList();
    });
    grid.appendChild(c);
  });
}
function renderSelList(){
  var wrap=document.getElementById('prSpSel');wrap.innerHTML='';
  Object.keys(selected).forEach(function(k){
    var sp=selected[k];var isE=existingSpirits[sp.name];
    var tag=document.createElement('div');tag.className='pr-sp-sel-tag';
    tag.innerHTML='No.'+pad3(sp.id)+' '+esc(sp.name)+(isE?' <span style="opacity:.35;font-size:.8em">[Đã có]</span>':'')+' <span class="x" data-rid="'+sp.id+'">&#10005;</span>';
    tag.querySelector('.x').addEventListener('click',function(e){e.stopPropagation();delete selected[parseInt(this.getAttribute('data-rid'),10)];renderSpGrid();renderSelList();});
    wrap.appendChild(tag);
  });
}

/* === Kết xuất danh sách nhân vật === */
function renderChars(){
  var list=document.getElementById('prChList');list.innerHTML='';
  if(!chars.length){list.innerHTML='<div class="pr-msg"> Tạm thời không có nhân vật, vui lòng đồng bộ từ phía trên hoặc thêm từ phía dưới</div>';return;}
  chars.forEach(function(ch,idx){
    var isF=ch.gender==='female';
    var det=document.createElement('details');det.className='pr-ch-card';det.style.animationDelay=(idx*.05)+'s';
    // summary
    var sum=document.createElement('summary');sum.className='pr-ch-card-sum';
    sum.innerHTML='<span class="pr-ch-card-name">'+esc(ch.name)+'</span>'+
      '<span class="pr-ch-badge '+(ch.existing?'exist':'new')+'">'+(ch.existing?'đã có':'Thêm mới')+'</span>'+
      '<span class="pr-ch-badge gd">'+(isF?'Nữ giới':'Nam giới')+'</span>'+
      '<span class="pr-ch-card-aff"> Hảo cảm <em id="prAffP'+idx+'">'+ch['Độ Hảo Cảm']+'</em></span>'+
      '<span class="pr-ch-card-arr">&#9660;</span>';
    det.appendChild(sum);
    // body
    var body=document.createElement('div');body.className='pr-ch-card-body';
    var h='<div class="pr-fg">';
    // Độ Hảo Cảm
    h+='<div class="pr-fi fw"><label> Độ Hảo Cảm</label><div style="display:flex;align-items:center;gap:10px"><input type="range" class="pr-ch-slider" min="0" max="100" value="'+ch['Độ Hảo Cảm']+'" data-ci="'+idx+'" data-f="Độ Hảo Cảm"><span class="pr-ch-val" id="prChV'+idx+'">'+ch['Độ Hảo Cảm']+'</span></div></div>';
    // Cấp Bậc
    h+='<div class="pr-fi"><label> Cấp Bậc</label><select data-ci="'+idx+'" data-f="Cấp Bậc">';
    RANKS.forEach(function(r){h+='<option value="'+r+'"'+(ch['Cấp Bậc']===r?' selected':'')+'>'+r+'</option>';});
    h+='</select></div>';
    // Linh Xúc
    h+='<div class="pr-fi"><label> Linh Xúc</label><input type="text" value="'+esc(ch['Linh Xúc'])+'" data-ci="'+idx+'" data-f="Linh Xúc"></div>';
    // Đang Có Mặt
    h+='<div class="pr-fi"><label> Đang Có Mặt</label><select data-ci="'+idx+'" data-f="Đang Có Mặt"><option value="false"'+(ch['Đang Có Mặt']?'':' selected')+'> Không</option><option value="true"'+(ch['Đang Có Mặt']?' selected':'')+'> Có</option></select></div>';
    if(isF){
      h+='<div class="pr-fi"><label> Độ Thanh Tẩy</label><input type="number" min="0" max="100" value="'+ch['Độ Thanh Tẩy']+'" data-ci="'+idx+'" data-f="Độ Thanh Tẩy"></div>';
      h+='<div class="pr-fi"><label> Cảm Xúc Hiện Tại</label><select data-ci="'+idx+'" data-f="Cảm Xúc Hiện Tại">';
      EMOTIONS.forEach(function(e){h+='<option value="'+e+'"'+(ch['Cảm Xúc Hiện Tại']===e?' selected':'')+'>'+e+'</option>';});
      h+='</select></div>';
    }
    h+='</div>';
    if(isF){
      h+='<div class="pr-ch-subsec"><div class="pr-ch-subsec-title"> Số Đo Ba Vòng</div><div class="pr-fg c3">';
      h+='<div class="pr-fi"><label> Vòng Ngực</label><input type="text" value="'+esc(ch['số đo 3 vòng_vòng ngực']||'')+'" data-ci="'+idx+'" data-f="số đo 3 vòng_vòng ngực" placeholder="Tùy chọn"></div>';
      h+='<div class="pr-fi"><label> Vòng Eo</label><input type="text" value="'+esc(ch['số đo 3 vòng_vòng eo']||'')+'" data-ci="'+idx+'" data-f="số đo 3 vòng_vòng eo" placeholder="tùy chọn"></div>';
      h+='<div class="pr-fi"><label> Vòng Mông</label><input type="text" value="'+esc(ch['số đo 3 vòng_vòng mông']||'')+'" data-ci="'+idx+'" data-f="số đo 3 vòng_vòng mông" placeholder="tùy chọn"></div>';
      h+='</div></div>';
      h+='<div class="pr-ch-subsec"><div class="pr-ch-subsec-title"> Trang Phục</div><div class="pr-fg">';
      h+='<div class="pr-fi"><label> Áo</label><input type="text" value="'+esc(ch['trang phục_áo']||'')+'" data-ci="'+idx+'" data-f="trang phục_áo" placeholder="tùy chọn"></div>';
      h+='<div class="pr-fi"><label> Quần</label><input type="text" value="'+esc(ch['trang phục_quần']||'')+'" data-ci="'+idx+'" data-f="trang phục_quần" placeholder="tùy chọn"></div>';
      h+='<div class="pr-fi"><label> Áo Lót</label><input type="text" value="'+esc(ch['trang phục_áo lót']||'')+'" data-ci="'+idx+'" data-f="trang phục_áo lót" placeholder="tùy chọn"></div>';
      h+='<div class="pr-fi"><label> Quần Lót</label><input type="text" value="'+esc(ch['trang phục_quần lót']||'')+'" data-ci="'+idx+'" data-f="trang phục_quần lót" placeholder="tùy chọn"></div>';
      h+='</div></div>';
    }
    h+='<div style="text-align:right;margin-top:10px"><button class="pr-ch-del" data-ci="'+idx+'"> Xóa nhân vật này</button></div>';
    body.innerHTML=h;
    det.appendChild(body);
    list.appendChild(det);
  });
  // Ủy thác sự kiện
  bindCharEvents();
}

function bindCharEvents(){
  var list=document.getElementById('prChList');
  list.onchange=list.oninput=function(e){
    var ci=parseInt(e.target.getAttribute('data-ci'),10);
    var f=e.target.getAttribute('data-f');
    if(isNaN(ci)||!f||!chars[ci])return;
    if(f==='Đang Có Mặt'){chars[ci][f]=e.target.value==='true';}
    else if(e.target.type==='range'||e.target.type==='number'){
      chars[ci][f]=parseInt(e.target.value,10)||0;
      if(f==='Độ Hảo Cảm'){
        var vEl=document.getElementById('prChV'+ci);var pEl=document.getElementById('prAffP'+ci);
        if(vEl)vEl.textContent=e.target.value;if(pEl)pEl.textContent=e.target.value;
      }
    }else{chars[ci][f]=e.target.value;}
  };
  list.onclick=function(e){
    if(e.target.classList.contains('pr-ch-del')){
      var ci=parseInt(e.target.getAttribute('data-ci'),10);
      if(!chars[ci])return;
      if(chars[ci].existing){
        if(!confirm('Xóa nhân vật đã có '+chars[ci].name+'?sẽ từMVUxóa dữ liệu nhân vật này.'))return;
        removedExisting.push({name:chars[ci].name,gender:chars[ci].gender});
      }
      chars.splice(ci,1);renderChars();
    }
  };
}

/* === Xây dựngJSONPatch === */
function buildPatches(){
  var P=[];
  var area=document.getElementById('prArea').value;
  var dateVal=document.getElementById('prDate').value;
  var timeVal=document.getElementById('prTime').value;
  var weather=document.getElementById('prWeather').value;
  var rank=document.getElementById('prRank').value;
  var dp=dateVal.split('-');
  var dateStr=(dp.length===3)?(dp[0]+'năm'+parseInt(dp[1],10)+'tháng'+parseInt(dp[2],10)+'ngày'):dateVal;
  P.push({op:'replace',path:'/Thế Giới/Ngày Tháng',value:dateStr});
  P.push({op:'replace',path:'/Thế Giới/Thời Gian',value:timeVal});
  P.push({op:'replace',path:'/Thế Giới/Thời Tiết',value:weather});
  P.push({op:'replace',path:'/Nhân Vật Chính/Cấp Bậc',value:rank});
  P.push({op:'replace',path:'/Nhân Vật Chính/Khu Vực Hiện Tại',value:area});

  // Linh Xúc patch
  var selNames={};
  Object.keys(selected).forEach(function(k){
    var sp=selected[k];selNames[sp.name]=true;
    if(!existingSpirits[sp.name]){P.push({op:'insert',path:'/Nhân Vật Chính/Linh Xúc/'+sp.name,value:{'Vực':sp.domain,'Số Hiệu':String(sp.id)}});}
  });
  Object.keys(existingSpirits).forEach(function(nm){
    if(!selNames[nm])P.push({op:'remove',path:'/Nhân Vật Chính/Linh Xúc/'+nm});
  });

  // Nhân vật đã có bị xóa
  removedExisting.forEach(function(r){
    var prefix=r.gender==='female'?'/Nhân Vật Nữ/':'/Nhân Vật Nam/';
    P.push({op:'remove',path:prefix+r.name});
  });

  // nhân vật patch
  chars.forEach(function(ch){
    var prefix=ch.gender==='female'?'/Nhân Vật Nữ/':'/Nhân Vật Nam/';
    var isF=ch.gender==='female';
    if(!ch.existing){
      // insert new
      var obj;
      if(isF){
        var sw=buildSW(ch);var cz=buildCZ(ch,null);
        obj={'Số Đo Ba Vòng':sw,'Linh Xúc':ch['Linh Xúc']||'vô','Cấp Bậc':ch['Cấp Bậc']||'vô','Vật Phẩm':{},'Trang Phục':cz,'Hoạt Động Nội Tâm':'vô','Độ Hảo Cảm':ch['Độ Hảo Cảm']||0,'Độ Thanh Tẩy':ch['Độ Thanh Tẩy']||0,'Cảm Xúc Hiện Tại':ch['Cảm Xúc Hiện Tại']||'Bình Tĩnh','Đang Có Mặt':!!ch['Đang Có Mặt']};
      }else{
        obj={'Vật Phẩm':{},'Linh Xúc':ch['Linh Xúc']||'vô','Cấp Bậc':ch['Cấp Bậc']||'vô','Độ Hảo Cảm':ch['Độ Hảo Cảm']||0,'Trang Sức':{},'Đang Có Mặt':!!ch['Đang Có Mặt']};
      }
      P.push({op:'insert',path:prefix+ch.name,value:obj});
    }else{
      // replace changed fields
      var od=ch.origData;if(!od)return;
      var fields=['Độ Hảo Cảm','Cấp Bậc','Linh Xúc','Đang Có Mặt'];
      if(isF)fields=fields.concat(['Độ Thanh Tẩy','Cảm Xúc Hiện Tại']);
      fields.forEach(function(f){
        var ov=od[f];if(ov===undefined)ov=null;
        var nv=ch[f];
        if(f==='Độ Hảo Cảm'||f==='Độ Thanh Tẩy'){ov=(typeof ov==='number')?ov:0;nv=(typeof nv==='number')?nv:0;}
        if(f==='Đang Có Mặt'){ov=!!ov;nv=!!nv;}
        if(JSON.stringify(ov)!==JSON.stringify(nv)){P.push({op:'replace',path:prefix+ch.name+'/'+f,value:nv});}
      });
      if(isF){
        var newSW=buildSW(ch);var origSW=od['Số Đo Ba Vòng'];
        if(JSON.stringify(origSW)!==JSON.stringify(newSW)){P.push({op:'replace',path:prefix+ch.name+'/Số Đo Ba Vòng',value:newSW});}
        var newCZ=buildCZ(ch,od);var origCZ=od['Trang Phục'];
        if(JSON.stringify(origCZ)!==JSON.stringify(newCZ)){P.push({op:'replace',path:prefix+ch.name+'/Trang Phục',value:newCZ});}
      }
    }
  });
  return P;
}

function buildSW(ch){
  var b=ch['số đo 3 vòng_vòng ngực']||'',w=ch['số đo 3 vòng_vòng eo']||'',h=ch['số đo 3 vòng_vòng mông']||'';
  if(!b&&!w&&!h)return 'Chờ Khởi Tạo';
  return{'Vòng Ngực':b||'Chờ Khởi Tạo','Vòng Eo':w||'Chờ Khởi Tạo','Vòng Mông':h||'Chờ Khởi Tạo'};
}
function buildCZ(ch,od){
  var t=ch['trang phục_áo']||'',b=ch['trang phục_quần']||'',u=ch['trang phục_áo lót']||'',p=ch['trang phục_quần lót']||'';
  if(!t&&!b&&!u&&!p)return 'Chờ Khởi Tạo';
  var acc={};
  if(od&&od['Trang Phục']&&typeof od['Trang Phục']==='object'&&od['Trang Phục']['Trang Sức'])acc=od['Trang Phục']['Trang Sức'];
  return{'Áo':t||'Chờ Khởi Tạo','Quần':b||'Chờ Khởi Tạo','Áo Lót':u||'Chờ Khởi Tạo','Quần Lót':p||'Chờ Khởi Tạo','Trang Sức':acc};
}

function buildUpdateBlock(patches){
  var selC=Object.keys(selected).length;
  var newC=chars.filter(function(c){return!c.existing;}).length;
  var modC=chars.filter(function(c){
    if(!c.existing)return false;
    var od=c.origData;if(!od)return false;
    return JSON.stringify(od['Độ Hảo Cảm'])!==JSON.stringify(c['Độ Hảo Cảm'])||od['Cấp Bậc']!==c['Cấp Bậc']||od['Linh Xúc']!==c['Linh Xúc'];
  }).length;
  var rmC=removedExisting.length;
  var a='Prologue initialization setup.\n- calculate time passed: initial setup, no time passed\n- decide whether dramatic updates are allowed: yes (initialization)\n- analyze: world date/time/weather/area set; protagonist rank and '+selC+' spirit-touch(es) configured; '+newC+' new char(s) inserted, '+modC+' existing modified, '+rmC+' removed';
  return '<UpdateVariable>\n<Analysis>'+a+'\n</Analysis>\n<JSONPatch>\n'+JSON.stringify(patches,null,2)+'\n</JSONPatch>\n</UpdateVariable>';
}

/* === Xác nhận gửi === */
async function onConfirm(){
  var opening=document.getElementById('prOpening').value.trim();
  if(!opening){toast('Vui lòng điền nội dung lời mở đầu','#ff7777');return;}
  var btn=document.getElementById('prConfirm');btn.disabled=true;btn.textContent='Đang ghi biến...';
  var patches=buildPatches();
  if(!patches.length){toast('Không có bất kỳ thay đổi biến nào','#ff7777');btn.disabled=false;btn.textContent='Khởi tạo và bắt đầu';return;}
  if(typeof triggerSlash!=='function'){toast('triggerSlashKhông khả dụng','#ff7777');btn.disabled=false;btn.textContent='khởi tạo và bắt đầu';return;}

  try{
    var updateBlock=buildUpdateBlock(patches);
    await triggerSlash('/sendas name={{char}} '+updateBlock);
    await new Promise(function(r){setTimeout(r,1200);});

    btn.textContent='Gửi lời mở đầu...';
    var area=document.getElementById('prArea').value;
    var dateVal=document.getElementById('prDate').value;var dp=dateVal.split('-');
    var dateStr=(dp.length===3)?(dp[0]+'niên'+parseInt(dp[1],10)+'nguyệt'+parseInt(dp[2],10)+'nhật'):dateVal;
    var timeVal=document.getElementById('prTime').value;
    var weather=document.getElementById('prWeather').value;
    var rank=document.getElementById('prRank').value;
    var spiritNames=Object.keys(selected).map(function(k){var sp=selected[k];return sp.name+'('+sp.domain+'/No.'+pad3(sp.id)+')';}).join('、')||'vô';
    var charSummary=chars.map(function(c){return c.name+'('+(c.gender==='female'?'Nữ':'Nam')+','+(c.existing?'đã có':'Mới')+',hảo cảm'+c['Độ Hảo Cảm']+')';}).join('、')||'vô';
    var sysMsg='[Khởi tạo hoàn tất]\nKhu vực:'+area+'\nNgày Tháng:'+dateStr+'\nThời Gian:'+timeVal+'\nThời Tiết:'+weather+'\nCấp Bậc:'+rank+'\nLinh Xúc:'+spiritNames+'\nNhân vật liên kết:'+charSummary+'\n\n'+opening;
    await triggerSlash('/send '+sysMsg);
    await triggerSlash('/trigger');
    toast('Khởi tạo hoàn tất, biến đã được ghi','#3ec9bb');
    btn.textContent='Đã hoàn tất';
  }catch(e){toast('Lỗi thực thi:'+e.message,'#ff7777');btn.disabled=false;btn.textContent='khởi tạo và bắt đầu';}
}

/* === Ràng buộc sự kiện === */
function bind(){
  // Lọc Linh Xúc
  var fbs=root.querySelectorAll('.pr-sp-fbtn');
  for(var i=0;i<fbs.length;i++){fbs[i].addEventListener('click',function(){for(var j=0;j<fbs.length;j++)fbs[j].classList.remove('on');this.classList.add('on');spFilter=this.getAttribute('data-fd');renderSpGrid();});}
  document.getElementById('prSpSearch').addEventListener('input',function(){spQuery=this.value.trim();renderSpGrid();});
  document.getElementById('prSpAddToggle').addEventListener('click',function(){var f=document.getElementById('prSpAddForm');f.classList.toggle('show');if(f.classList.contains('show'))f.scrollIntoView({behavior:'smooth',block:'center'});});
  document.getElementById('prNsSubmit').addEventListener('click',async function(){
    var id=parseInt(document.getElementById('prNsId').value,10);var dom=document.getElementById('prNsDom').value;
    var nm=document.getElementById('prNsNm').value.trim();var abi=document.getElementById('prNsAbi').value.trim();
    var ver=document.getElementById('prNsVer').value==='true';
    if(!id||!nm||!abi){toast('Vui lòng điền đầy đủ thông tin','#ff7777');return;}
    if(specData.some(function(x){return x.id===id;})){if(!confirm('No.'+id+'đã tồn tại, có ghi đè không?'))return;specData=specData.filter(function(x){return x.id!==id;});}
    specData.push({id:id,domain:dom,name:nm,ability:abi,verified:ver});
    var ok=await saveSpectrum(specData);
    if(ok){toast('Đã ghi vào bảng chu kỳ và chọn',DC[dom]);selected[id]={id:id,name:nm,domain:dom};renderSpGrid();renderSelList();
    document.getElementById('prNsId').value='';document.getElementById('prNsNm').value='';document.getElementById('prNsAbi').value='';document.getElementById('prSpAddForm').classList.remove('show');
    }else{toast('Ghi thất bại','#ff7777');}
  });

  // Nút đồng bộ
  document.getElementById('prChSync').addEventListener('click',async function(){
    this.disabled=true;this.textContent='đang đồng bộ...';
    var ok=await syncMvu();
    this.disabled=false;this.textContent='đồng bộMVUDữ liệu đã có';
    if(ok)toast('đã đồng bộ','#3ec9bb');else toast('Không đọc được dữ liệu, vui lòng xem bảng chẩn đoán','#7a819c');
  });

  // Nhân vật mới - Chuyển đổi giới tính
  document.getElementById('prNewGd').addEventListener('change',function(){document.getElementById('prNewChBody').setAttribute('data-ng',this.value);});
  document.getElementById('prNewAff').addEventListener('input',function(){document.getElementById('prNewAffV').textContent=this.value;});

  // Nhân vật mới - Thêm
  document.getElementById('prNewChAdd').addEventListener('click',function(){
    var nm=document.getElementById('prNewNm').value.trim();
    if(!nm){toast('Vui lòng nhập tên nhân vật','#ff7777');return;}
    var gd=document.getElementById('prNewGd').value;
    if(chars.some(function(c){return c.name===nm;})){toast('Nhân vật này đã có trong danh sách','#ff7777');return;}
    var isF=gd==='female';
    var nc={name:nm,gender:gd,existing:false,origData:null};
    nc['Độ Hảo Cảm']=parseInt(document.getElementById('prNewAff').value,10)||20;
    nc['Cấp Bậc']=document.getElementById('prNewRank').value||'vô';
    nc['Linh Xúc']=document.getElementById('prNewSp').value.trim()||'vô';
    nc['Đang Có Mặt']=document.getElementById('prNewPres').value==='true';
    if(isF){
      nc['Độ Thanh Tẩy']=parseInt(document.getElementById('prNewPur').value,10)||0;
      nc['Cảm Xúc Hiện Tại']=document.getElementById('prNewEmo').value||'Bình Tĩnh';
      nc['số đo 3 vòng_vòng ngực']=document.getElementById('prNewBust').value.trim();
      nc['số đo 3 vòng_vòng eo']=document.getElementById('prNewWaist').value.trim();
      nc['số đo 3 vòng_vòng mông']=document.getElementById('prNewHip').value.trim();
      nc['trang phục_áo']=document.getElementById('prNewTop').value.trim();
      nc['trang phục_quần']=document.getElementById('prNewBot').value.trim();
      nc['trang phục_áo lót']=document.getElementById('prNewBra').value.trim();
      nc['trang phục_quần lót']=document.getElementById('prNewPan').value.trim();
    }
    chars.push(nc);renderChars();
    document.getElementById('prNewNm').value='';document.getElementById('prNewAff').value='20';document.getElementById('prNewAffV').textContent='20';
    document.getElementById('prNewSp').value='vô';document.getElementById('prNewRank').value='vô';document.getElementById('prNewPres').value='false';
    if(isF){document.getElementById('prNewPur').value='0';document.getElementById('prNewEmo').value='Bình Tĩnh';
    document.getElementById('prNewBust').value='';document.getElementById('prNewWaist').value='';document.getElementById('prNewHip').value='';
    document.getElementById('prNewTop').value='';document.getElementById('prNewBot').value='';document.getElementById('prNewBra').value='';document.getElementById('prNewPan').value='';}
    document.getElementById('prNewChSec').open=false;
    toast('Đã thêm '+nm,'#3ec9bb');
  });

  // JSONPatchXem trước
  document.getElementById('prPatchRefresh').addEventListener('click',function(){
    var patches=buildPatches();
    document.getElementById('prPatchPre').textContent=patches.length?JSON.stringify(patches,null,2):'Hiện tại không có bất kỳ thay đổi biến nào.';
  });

  // Xác nhận
  document.getElementById('prConfirm').addEventListener('click',onConfirm);

  // Chẩn đoán
  document.getElementById('dTs').textContent=(typeof triggerSlash==='function')?'Khả dụng':'không khả dụng';
  document.getElementById('dCtx').textContent=(typeof getContext==='function')?'khả dụng':'không khả dụng';
  document.getElementById('dTestRead').addEventListener('click',async function(){
    dlog('--- Kiểm tra thủ côngMVUđọc ---');
    var data=await readMvuData();
    if(data){
      dlog('Đọc thành công, khóa cấp cao nhất: '+Object.keys(data).join(', '));
      Object.keys(data).forEach(function(k){
        var v=data[k];
        if(typeof v==='object'){dlog(k+': '+JSON.stringify(v).substring(0,300));}
        else{dlog(k+': '+String(v).substring(0,200));}
      });
    }else{dlog('Tất cả chiến lược đều không trả về dữ liệu hợp lệ');}
  });
  document.getElementById('dClear').addEventListener('click',function(){document.getElementById('dLog').textContent='Đã xóa.';});
}

/* === Khởi tạo === */
async function init(){
  initStars();bind();
  specData=await loadSpectrum();
  if(specData.length>0){renderSpGrid();toast('Đã tải'+specData.length+'mục Linh Xúc','#c9a84c');}
  else{document.getElementById('prSpGrid').innerHTML='<div class="pr-msg"> Không đọc được dữ liệu Linh Xúc</div>';}
  await syncMvu();
}

init();
})();
</script>

</body>
</html>