# Deploy Northline Premium separately

Use a new GitHub repository and a new Netlify site. Do not replace the original Northline demo.

## Suggested repository name
`northline-build-co-premium`

## GitHub Desktop
1. Extract `northline-build-co-premium-final.zip`.
2. Open GitHub Desktop.
3. File -> Add local repository / Create new repository from the extracted folder.
4. Name it `northline-build-co-premium`.
5. Commit all files with message: `Northline Premium V2.6 initial release`.
6. Publish repository to GitHub.

## Netlify
1. In Netlify choose Add new site -> Import an existing project.
2. Select GitHub and choose `northline-build-co-premium`.
3. Build command: leave blank.
4. Publish directory: `.`
5. Deploy.
6. Give the site its own name, separate from the original demo.

## After it is live
- Test the URL on the Samsung A13 using `MOBILE-TEST-CHECKLIST.md`.
- Confirm both Netlify forms appear in Forms.
- Keep `noindex,nofollow` while Northline is a fictional showcase unless you intentionally want it indexed later.
