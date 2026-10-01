# Northline Responsive V3

This pass changes mobile sizing from breakpoint-specific patches to fluid, container-aware sizing.

- Display typography sizes from the actual content container (`cqw`), not only viewport width.
- A small ResizeObserver-based fallback reduces any H1/H2 that would overflow.
- The mobile hero no longer uses negative margins / expanded widths.
- The before/after image sizes from its comparison container instead of `100vw`.
- Main content is inline-size contained so a child cannot make the document wider.
- Horizontal scroll position is reset after resize/orientation changes.
- CSS/JS URLs are versioned (`?v=3`) and Netlify CSS/JS caching is disabled during QA, preventing phones from reusing stale styles.
