# Northline Build Co. — Premium V2.6

Separate premium showcase release for ARKA Digital.

## Final system
- Blueprint-to-Built scroll sequence with full desktop and portrait mobile frame sets
- Smooth frame blending with high/mid/low performance tiers
- Reduced-motion and Save-Data fallbacks
- Blueprint overlay + full blueprint stage retained in the construction story
- Warm-white / charcoal / blueprint-blue design system sitewide
- Services, projects, before/after, process, enquiry flow and final CTA
- Secondary pages restyled to match the premium homepage
- Netlify Forms markup on homepage and full contact form
- Keyboard focus treatment, skip links and reduced-motion support
- Fictional/demo claims clearly disclosed
- noindex is intentionally enabled while Northline remains a fictional showcase

## Deployment
Deploy this folder as a separate site from the original Northline demo. The included `netlify.toml` publishes the project root.

## Mobile optimization pass — 2026-10-01

Live Samsung/Android screenshots exposed horizontal overflow and desktop-first intrinsic sizing in several sections. The mobile pass now:

- removes horizontal page overflow at 320, 360, 390, 412 and 700 CSS px on the homepage;
- keeps the full NORTHLINE / BUILD CO. wordmark from 341px upward;
- gives the mobile header a stable background and clearer menu control;
- makes the hero phone-first without changing the desktop composition;
- fits Transformation, Our Approach and Capability headings inside the viewport;
- improves the before/after drag target for touch;
- keeps the Capability grid as a clean two-column mobile layout;
- makes the quote form easier to use with 16px form fields and larger touch targets;
- adds safe-area handling for the sticky WhatsApp / Get Quote bar;
- removes horizontal overflow from all secondary pages at 320, 360, 412 and 768 CSS px;
- switches secondary service-page heroes to content-first mobile order;
- aligns secondary-page sticky actions with the homepage two-button pattern.

Desktop styles and the construction-sequence timing were left unchanged.
