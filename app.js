const siteHeader=document.querySelector('.site-header');
function updateHeader(){siteHeader?.classList.toggle('scrolled',window.scrollY>18)}
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
const menu=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobileNav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const comparison=document.querySelector('[data-comparison]');
if(comparison){const before=comparison.querySelector('.comparison-before'),handle=comparison.querySelector('.compare-handle');let drag=false;const set=x=>{const r=comparison.getBoundingClientRect(),v=Math.max(0,Math.min(r.width,x-r.left)),pct=v/r.width*100;before.style.width=pct+'%';handle.style.left=pct+'%'};comparison.addEventListener('pointerdown',e=>{drag=true;comparison.setPointerCapture(e.pointerId);set(e.clientX)});comparison.addEventListener('pointermove',e=>{if(drag)set(e.clientX)});comparison.addEventListener('pointerup',()=>drag=false);comparison.addEventListener('pointercancel',()=>drag=false)}
const toast=document.querySelector('.demo-toast');let toastTimer;
document.querySelectorAll('.demo-contact-action').forEach(btn=>btn.addEventListener('click',()=>{if(!toast)return;toast.textContent=`Demo ${btn.dataset.channel} action — the real client's contact details are connected here during setup.`;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}));
const enquiry=document.querySelector('form[name="project-enquiry"]');
if(enquiry){enquiry.addEventListener('submit',e=>{if(location.hostname==='localhost'||location.hostname==='127.0.0.1'){e.preventDefault();if(toast){toast.textContent='Local demo only — this form will submit through Netlify Forms after deployment.';toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),4200)}}})}
