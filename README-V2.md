# Northline Build Co. — Premium V2

This folder is the first working build of the approved high-end Northline redesign.

## What changed
- Clean conversion-first hero
- Scroll-controlled 10-stage desktop + mobile construction story
- Progressive performance tiers (high / mid / low)
- Services, project slider, before/after comparison, philosophy and process sections
- Multi-step quote form with Netlify form markup
- Mobile menu and sticky WhatsApp / quote bar
- Reduced-motion fallback
- Fictional/demo claims are labelled rather than presented as real credentials

## Performance approach
The first hero frame is preloaded. Remaining construction frames are WebP files loaded after first paint. Low-end / save-data / reduced-motion users receive a lighter experience.

## Files
- `index.html` — V2 homepage
- `v2.css` — V2 design system and responsive layouts
- `v2.js` — interactions and progressive sequence loader
- `assets/sequence/desktop/` — 10 desktop keyframes
- `assets/sequence/mobile/` — 10 portrait keyframes

The older supporting pages remain in the package and can be redesigned in the next pass.
