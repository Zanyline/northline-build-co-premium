# Northline Build Co. — complete fictional builder demo

This is a plain static HTML/CSS/JS website. No npm, Vite or build step is required.

## Local test
Open the folder in VS Code and run `index.html` with Live Server.

## Netlify
- Build command: leave blank
- Publish directory: `.`
- `netlify.toml` already sets the publish directory.

## Forms
`contact.html` uses Netlify Forms. After the first production deploy, open Netlify > Forms and configure form submission notifications for the real client email address. The local Live Server version deliberately does not submit.

## Important demo safeguards
- Northline Build Co. is fictional.
- All projects, people, testimonials and metrics are demo content.
- Call/WhatsApp buttons intentionally show a demo notice instead of dialing a fake number.
- Every page is `noindex,nofollow`, and `robots.txt` blocks crawling. Remove these protections only after replacing the fictional brand/content with a real business.

## Before turning this into a real client website
1. Replace business name, logo and brand colours if required.
2. Replace every demo project with real client work.
3. Add the real phone, WhatsApp and email.
4. Add only verified registrations, ratings, years and project counts.
5. Replace the fictional founder and testimonial.
6. Review services and areas served.
7. Remove `noindex,nofollow` and update `robots.txt` to allow crawling.
8. Add the production canonical URL, Open Graph image and sitemap after the final domain is known.
9. Configure Netlify Forms email notifications.
10. Test every link, form, image and mobile view before launch.
