# Northline mobile optimization report

Date: 2026-10-01

## What the phone screenshots revealed

The live site was visually strong, but several desktop layout rules were still controlling intrinsic width on small screens. That made long editorial headings such as **TRANSFORMATION** and **CLEAR COMMUNICATION** wider than the phone viewport. The Our Approach section also inherited a desktop grid width, which could expand the page to roughly twice the phone width.

## What was fixed

- Homepage horizontal overflow removed.
- Hero converted to a true single-column phone layout.
- Mobile navigation control made more obvious.
- Long editorial headings scaled per section instead of using one oversized global value.
- Transformation comparison remains tall and cinematic, with a larger touch drag target.
- Our Approach desktop grid no longer expands the phone canvas.
- Capability remains a two-column 3-row grid while the heading fits cleanly above it.
- Quote form uses phone-safe sizing and 16px fields.
- Sticky conversion bar respects mobile safe areas.
- All secondary pages receive the same width, typography, form and sticky-action corrections.

## Width QA

Checked for document-level horizontal overflow at:

- 320px
- 360px
- 390px
- 412px
- 700px homepage
- 768px secondary pages

Result: no document-level horizontal overflow.

## Preserved

- Desktop design.
- Existing colour system.
- Construction scroll sequence and timeline.
- Full mobile/desktop construction image sets.
- Before/after interaction.
- Project slider.
- Netlify form setup.
