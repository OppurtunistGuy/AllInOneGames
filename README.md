# Party Engine — deploy bundle

A static site. No server, no database, no accounts, no build step.
Everything runs in the visitor's browser and nothing is transmitted anywhere.

## What's in here

```
index.html                 the game
privacy.html               privacy notice (has placeholders to fill in)
assets/reset.css           base reset the Artifact host used to inject
assets/styles.css          design tokens + all layout
assets/app.js              game engines (vanilla JS, no dependencies)
vercel.json                security headers, clean URLs, cache policy
robots.txt  sitemap.xml    (both contain a domain placeholder)
icon.svg  site.webmanifest
scripts/selfhost-fonts.sh  removes the one third-party request
```

CSS and JS are separate files on purpose. It lets the Content-Security-Policy
use `script-src 'self'` with no `unsafe-inline`, which is the single most
effective header against injected script. Inlining them back into index.html
would force `unsafe-inline` and undo that.

## Deploy

```bash
git init && git add -A && git commit -m "Party Engine"
# push to GitHub, then import the repo at vercel.com/new
# framework preset: Other    build command: none    output dir: ./
```

Or straight from this folder:

```bash
npx vercel@latest --prod
```

## Before it goes public

1. **Replace `CHANGE-ME.example`** in `index.html`, `robots.txt` and `sitemap.xml`
   with your real domain. Four places in `index.html` (canonical, `og:url`, `og:image`)
   — grep for it.
2. **Fill in the placeholders in `privacy.html`.** The contact address and operating
   entity are legally required in the EU and UK; an unfinished privacy page is worse
   than none.
3. **Make `og.png`** at 1200×630 and drop it at the root. Without it, every share
   looks like a dead link.
4. **Make `icon-180.png`, `icon-192.png`, `icon-512.png`** from `icon.svg`.
5. **Run `scripts/selfhost-fonts.sh`**, then delete the three Google Fonts `<link>`
   tags from both HTML files and remove the two `fonts.g*.com` entries from the CSP
   in `vercel.json`. After that the site makes zero third-party requests.
6. **Test on a real handset.** Long "Would You Rather" phrases at 360px are the
   thing most likely to overflow.

## Security posture

| Concern | Position |
| --- | --- |
| XSS | `script-src 'self'`, no inline script, no `eval`. All interpolated text goes through an escape function, though every prompt is static data in the repo — there is no user input to inject. |
| Clickjacking | `frame-ancestors 'none'` plus `X-Frame-Options: DENY` — nobody can wrap your game in their ad page. |
| Transport | HSTS with preload, `upgrade-insecure-requests`. Vercel terminates TLS. |
| Data breach | Nothing to breach. No server, no database, no personal data. |
| Supply chain | Zero npm dependencies. One third-party request (fonts), removable with the script above. |
| Device APIs | `Permissions-Policy` denies camera, microphone, geolocation and the rest outright. |
| Flooding | Vercel's edge absorbs it. Put Cloudflare in front if you want more. |

`style-src` keeps `'unsafe-inline'` because the game sets inline style attributes
for animation delays and bar widths. Inline *styles* cannot execute code, so this
is a much smaller concession than inline script would be. Removing it means moving
every dynamic value to CSS custom properties — worth doing if you ever handle
untrusted content, unnecessary while all content ships in the repo.

## When the stack should actually change

Stay static until one of these is real:

- **30 locales and SEO** → Next.js App Router, static generation per locale.
  This is the one with a business case, and it's about ranking, not security.
- **Saved scores, accounts, leaderboards** → now you need a backend, and with it
  auth, rate limiting, input validation and a real security review.
- **User-submitted prompts** → moderation queue, spam defence, abuse reporting.

None of those are needed for a visitor who opens the site, plays, and leaves.
