(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const header = $('[data-header]');
  const mobileMenu = $('[data-mobile-menu]');
  const menuBtn = $('[data-menu-button]');
  const mobileContact = $('[data-mobile-contact]');
  const toast = $('[data-toast]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;
  const mem = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const tier = reduced || saveData || mem <= 2 || cores <= 2 ? 'low' : (mem <= 4 || cores <= 4 ? 'mid' : 'high');
  document.documentElement.dataset.performanceTier = tier;

  const onScroll = () => {
    const y = scrollY;
    header?.classList.toggle('scrolled', y > 24);
    mobileContact?.classList.toggle('visible', y > innerHeight * .72);
  };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  function setMenu(open){
    mobileMenu?.classList.toggle('open', open);
    mobileMenu?.setAttribute('aria-hidden', String(!open));
    menuBtn?.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  menuBtn?.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  $$('#mobile-menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  function showToast(msg){ if(!toast) return; toast.textContent=msg; toast.classList.add('show'); clearTimeout(showToast.t); showToast.t=setTimeout(()=>toast.classList.remove('show'),2800); }
  $$('[data-demo-whatsapp]').forEach(b => b.addEventListener('click',()=>showToast("Demo website — connect the client's WhatsApp number here.")));

  // Progressive construction sequence: only the first frame is required for first paint.
  const story = $('[data-build-story]');
  const buildFrames = $('[data-build-frames]');
  const frames = $$('.build-frame');
  const stageTitle = $('[data-stage-title]');
  const stageDesc = $('[data-stage-desc]');
  const stepEls = $$('.build-steps li');
  const blueprintGrid = $('.blueprint-grid');
  const buildShade = $('.build-shade');
  const stages = [
    ['COMPLETE HOME','See the finished vision before we pull it back into the plan.'],
    ['BLUEPRINT OVERLAY','The completed home resolves into a more technical reading.'],
    ['BLUEPRINT','Every build starts with a line. The blueprint becomes part of the story.'],
    ['PREPARE','Strip back to the site and prepare the ground for what follows.'],
    ['FOUNDATION','Groundwork and concrete forms become the base for everything above.'],
    ['STRUCTURE','Turn the plan into structure. Frame, mass and volume begin to rise.'],
    ['ENCLOSE','Roof, windows and envelope transform structure into real space.'],
    ['REFINE','Materials, glazing and architectural details come together.'],
    ['LANDSCAPE','The site is finished and the building settles into its setting.'],
    ['DELIVER','Ready to live. Ready to work. Ready for what comes next.']
  ];
  const timelineStops = [0, 0.07, 0.18, 0.31, 0.43, 0.56, 0.69, 0.81, 0.92, 1];
  const lowFrames = [0,1,2,3,5,7,9];
  const activeFrames = tier === 'low' ? lowFrames : frames.map((_, i) => i);
  // Portrait phones use the portrait sequence; landscape/tablet/desktop always use 16:9 desktop frames.
  const mobile = innerWidth < 700 && innerHeight >= innerWidth;
  frames.forEach((img, i) => {
    img.style.opacity = i === 0 ? '1' : '0';
    if(i===0){
      img.src = mobile ? img.dataset.mobile : img.dataset.desktop;
      buildFrames?.style.setProperty('--active-build-frame', `url("${img.src}")`);
      return;
    }
    if(tier==='low' && !activeFrames.includes(i)) return;
    const load = () => { if(!img.src) img.src = mobile ? img.dataset.mobile : img.dataset.desktop; };
    if('requestIdleCallback' in window) requestIdleCallback(load,{timeout:2200+i*120}); else setTimeout(load,600+i*90);
  });

  let raf=0, current=-1;
  function getTimelineIndex(progress){
    if(progress <= 0) return 0;
    if(progress >= 1) return stages.length - 1;
    for(let i = 0; i < timelineStops.length - 1; i++){
      const start = timelineStops[i];
      const end = timelineStops[i + 1];
      if(progress <= end){
        const local = (progress - start) / Math.max(0.0001, end - start);
        return i + local;
      }
    }
    return stages.length - 1;
  }
  function nearestLoaded(floatIndex){
    let prev = activeFrames[0];
    let next = activeFrames[activeFrames.length - 1];
    for (let i = 0; i < activeFrames.length; i++) {
      const idx = activeFrames[i];
      if (idx <= floatIndex) prev = idx;
      if (idx >= floatIndex) { next = idx; break; }
    }
    return [prev, next];
  }
  function setFrameBlend(floatIndex){
    const [prev, next] = nearestLoaded(floatIndex);
    frames.forEach((frame, i) => {
      const alpha = i === prev && prev === next ? 1 : i === prev ? Math.max(0, 1 - ((floatIndex - prev) / Math.max(0.0001, next - prev))) : i === next ? Math.max(0, (floatIndex - prev) / Math.max(0.0001, next - prev)) : 0;
      frame.style.opacity = String(alpha);
      frame.classList.toggle('is-active', alpha > 0.5);
    });
  }
  function renderStory(){
    raf=0; if(!story || reduced) return;
    const r=story.getBoundingClientRect();
    const travel=Math.max(1,r.height-innerHeight);
    const progress=Math.min(1,Math.max(0,-r.top/travel));
    const stageFloat = getTimelineIndex(progress);
    const nearest = Math.round(stageFloat);
    setFrameBlend(stageFloat);
    if(nearest!==current){
      current=nearest;
      const visualFrame = frames[nearest] || frames[0];
      const visualSrc = mobile ? visualFrame?.dataset.mobile : visualFrame?.dataset.desktop;
      if(visualSrc) buildFrames?.style.setProperty('--active-build-frame', `url("${visualSrc}")`);
      if(stageTitle) stageTitle.textContent=stages[nearest][0];
      if(stageDesc) stageDesc.textContent=stages[nearest][1];
      const step = nearest<=2?0:nearest<=4?1:nearest<=6?2:nearest<=8?3:4;
      stepEls.forEach((el,i)=>el.classList.toggle('is-active',i===step));
    }
    const blueprintFocus = Math.max(0, 1 - Math.min(1, Math.abs(stageFloat - 1.7) / 2.1));
    if(blueprintGrid) blueprintGrid.style.opacity = String(0.12 + blueprintFocus * 0.18);
    if(buildShade) buildShade.style.opacity = String(0.92 - blueprintFocus * 0.18);
  }
  function requestStory(){ if(!raf) raf=requestAnimationFrame(renderStory); }
  addEventListener('scroll', requestStory,{passive:true}); addEventListener('resize',requestStory); renderStory();

  // Project slider.
  const track=$('[data-project-track]'); const cards=$$('.project-card',track||document); const count=$('[data-project-count]');
  function projectIndex(){ if(!track||!cards.length)return 0; return Math.round(track.scrollLeft/track.clientWidth); }
  function goProject(delta){ if(!track)return; const i=Math.max(0,Math.min(cards.length-1,projectIndex()+delta)); track.scrollTo({left:i*track.clientWidth,behavior:reduced?'auto':'smooth'}); if(count)count.textContent=String(i+1).padStart(2,'0'); }
  $('.project-arrow.prev')?.addEventListener('click',()=>goProject(-1)); $('.project-arrow.next')?.addEventListener('click',()=>goProject(1));
  track?.addEventListener('scroll',()=>{clearTimeout(track._t);track._t=setTimeout(()=>{if(count)count.textContent=String(projectIndex()+1).padStart(2,'0')},60)},{passive:true});

  // Before/after.
  const compare=$('[data-comparison]'); const before=$('[data-before]'); const handle=$('[data-compare-handle]');
  function sizeCompare(){ const img=before?.querySelector('img'); if(compare&&img) img.style.width=compare.clientWidth+'px'; }
  function setCompare(clientX){ if(!compare||!before||!handle)return; const r=compare.getBoundingClientRect(); const p=Math.max(0,Math.min(1,(clientX-r.left)/r.width)); const x=(p*100).toFixed(2)+'%'; before.style.width=x; handle.style.left=x; }
  sizeCompare(); addEventListener('resize', sizeCompare);
  if(compare){ let drag=false; compare.addEventListener('pointerdown',e=>{drag=true;compare.setPointerCapture?.(e.pointerId);setCompare(e.clientX)}); compare.addEventListener('pointermove',e=>{if(drag)setCompare(e.clientX)}); compare.addEventListener('pointerup',()=>drag=false); compare.addEventListener('click',e=>setCompare(e.clientX)); }

  // Quote flow.
  const qForm=$('[data-quote-form]'); const qSteps=$$('[data-quote-step]'); const dots=$$('.quote-progress i'); const back=$('[data-quote-back]'); const next=$('[data-quote-next]'); const submit=$('[data-quote-submit]'); let q=0;
  function showQ(){ qSteps.forEach((s,i)=>s.classList.toggle('is-active',i===q)); dots.forEach((d,i)=>d.classList.toggle('is-active',i<=q)); if(back)back.disabled=q===0; if(next)next.hidden=q===qSteps.length-1; if(submit)submit.hidden=q!==qSteps.length-1; }
  next?.addEventListener('click',()=>{q=Math.min(qSteps.length-1,q+1);showQ()}); back?.addEventListener('click',()=>{q=Math.max(0,q-1);showQ()}); showQ();
})();
