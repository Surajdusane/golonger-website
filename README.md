# GoLonger website

The public marketing, support, and legal site for the GoLonger app: guided
pelvic floor exercise sessions with video, timers, and optional reminders.

Built with Next.js (App Router) and Tailwind CSS, statically exported to `out/`
and deployed on Cloudflare Pages.

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and verify

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

The static export is written to `out/`.

## Routes

- `/` - marketing home
- `/support` - canonical help centre and FAQ (`/help` and `/faq` 301 to it)
- `/contact` - support email and company details
- `/data-deletion` - how to delete local data and request analytics deletion
- `/health-disclaimer` - health and safety information
- `/privacy-policy` - privacy policy
- `/terms-of-use` - terms of use, including Apple App Store additional terms

## Configuration

All site-wide constants live in `src/lib/site.ts`: legal entity, support email,
store URLs, effective dates, and retention wording. Page metadata is built with
`src/lib/metadata.ts`.

Store URLs are read from `NEXT_PUBLIC_APP_STORE_URL` and
`NEXT_PUBLIC_GOOGLE_PLAY_URL`. While they are empty, the site renders disabled
"Coming soon" badges instead of links.

Deployment files: `public/_redirects` (301s) and `public/_headers` (security
headers).
