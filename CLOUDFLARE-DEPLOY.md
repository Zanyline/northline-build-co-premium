# Northline — Cloudflare deployment

This project is a plain static multi-page site. No build step is required.

## Recommended: Cloudflare Pages from GitHub
1. Push this complete folder to the GitHub repository.
2. In Cloudflare: Workers & Pages -> Create application -> Pages -> Import an existing Git repository.
3. Select the Northline repository.
4. Production branch: `main`.
5. Framework preset: None.
6. Build command: leave blank (or use `exit 0`).
7. Build output directory: `.`
8. Deploy.

The `_headers` file supplies security/cache headers on Pages.

## Alternative: Workers Static Assets
This repo also includes `wrangler.jsonc`.
From the repository root, deploy with a recent Wrangler version:

    npx wrangler deploy

The config serves the current directory as static assets and uses `404.html` for missing routes.

## Forms
Northline is a fictional demo. Netlify's native form collection is Netlify-specific. On Cloudflare, the site itself still works, but real enquiry collection should later be connected to a form service, email API, or Cloudflare Worker/Pages Function when a real client is installed.
