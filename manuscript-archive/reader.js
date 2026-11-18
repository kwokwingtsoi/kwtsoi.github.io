'use strict';
(()=>{
 const el=id=>document.getElementById(id), chooser=el('edition'), status=el('message'), frame=el('private'), register=el('register'), reading=el('reading');
 const stages=new Set(['O1','O2','O3','O4','V0','V1','V2','V3']); let stage='', serial=0;
 const policy="<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; connect-src 'none'; img-src data: blob:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none'\">";
 function selectStage(s){
   stage=stages.has(s)?s:'';
   status.textContent=stage?'Selected '+stage+'. Choose your private HTML copy to open this version.':'';
 }
 const params=new URLSearchParams(location.search);selectStage(params.get('version'));
 el('entries').addEventListener('click',e=>{
   const a=e.target.closest('a[data-stage]');if(!a)return;
   e.preventDefault();selectStage(a.dataset.stage);chooser.click();
 });
 function leave(){
   serial++;frame.onload=null;frame.removeAttribute('srcdoc');frame.src='about:blank';chooser.value='';reading.hidden=true;register.hidden=false;selectStage('');el('pick-label').scrollIntoView({block:'center'});chooser.focus();
 }
 chooser.addEventListener('change',async()=>{
   if(!chooser.files.length)return;const entry=chooser.files[0],token=++serial;
   try{
    if(!/\.html?$/i.test(entry.name)||entry.size>120*1024*1024)throw Error('format');
    let text=await entry.text();if(token!==serial)return;
    if(!/<head(?:\s[^>]*)?>/i.test(text)||!['O1','O2','O3','O4','V0','V1','V2','V3'].every(x=>text.includes('id="v-'+x+'"')))throw Error('format');
    text=text.replace(/(<head(?:\s[^>]*)?>)/i,(_,pre)=>pre+policy);
    frame.onload=()=>{if(token===serial&&stage)frame.contentWindow.postMessage({type:'archive-jump',id:stage},'*');};
    chooser.value='';frame.removeAttribute('src');frame.srcdoc=text;el('open-label').textContent=stage?'Version '+stage:'';register.hidden=true;reading.hidden=false;status.textContent='';el('close').focus();
   }catch{chooser.value='';status.textContent='Choose the self-contained private archive HTML supplied to you. A Word document, ZIP or saved copy of this public page will not open here.';}
 });
 el('close').addEventListener('click',leave);window.addEventListener('pagehide',()=>{serial++;frame.onload=null;frame.removeAttribute('srcdoc');chooser.value='';reading.hidden=true;register.hidden=false;});
})();
