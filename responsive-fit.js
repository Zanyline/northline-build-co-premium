(() => {
  const MOBILE_MAX = 820;
  const root = document.documentElement;

  function resetHorizontalPosition(){
    if (window.scrollX !== 0) window.scrollTo({left:0, top:window.scrollY, behavior:'auto'});
    const se = document.scrollingElement;
    if (se && se.scrollLeft) se.scrollLeft = 0;
  }

  function fitHeading(el){
    if (!el || innerWidth > MOBILE_MAX) {
      el?.style.removeProperty('font-size');
      return;
    }
    el.style.removeProperty('font-size');
    const available = el.clientWidth;
    if (!available) return;

    let high = parseFloat(getComputedStyle(el).fontSize) || 48;
    const min = el.matches('h1') ? 34 : 26;
    if (el.scrollWidth <= available + 1) return;

    let low = min;
    for (let i=0; i<10; i++) {
      const mid = (low + high) / 2;
      el.style.fontSize = `${mid}px`;
      if (el.scrollWidth <= available + 1) low = mid;
      else high = mid;
    }
    el.style.fontSize = `${Math.max(min, low - .5)}px`;
  }

  function fitAll(){
    root.style.setProperty('--actual-vw', `${root.clientWidth}px`);
    if (innerWidth <= MOBILE_MAX) {
      document.querySelectorAll('main h1, main h2').forEach(fitHeading);
      resetHorizontalPosition();
    } else {
      document.querySelectorAll('main h1, main h2').forEach(el => el.style.removeProperty('font-size'));
    }
  }

  let raf = 0;
  function schedule(){
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(fitAll);
  }

  addEventListener('DOMContentLoaded', schedule, {once:true});
  addEventListener('load', schedule, {once:true});
  addEventListener('resize', schedule, {passive:true});
  addEventListener('orientationchange', () => setTimeout(schedule, 120), {passive:true});

  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(schedule);
    ro.observe(root);
  }
})();
