# Northline smooth construction scroll V6

This patch restores the earlier V2.1-style construction sequence behaviour while preserving the current responsive design and interactions.

Changes:
- preloads the active construction frames early
- keeps the same continuous crossfade/interpolation timeline
- stops repainting the full-screen blurred background at each stage boundary
- leaves menu, projects, before/after, responsive layout, favicon and Cloudflare configuration untouched

Replace only `v2.js` in the current project, commit, and push.
