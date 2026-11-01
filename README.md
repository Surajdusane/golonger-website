# Golonger website

The public marketing, support, and legal site for the Golonger app: guided
pelvic floor exercise sessions with video, timers, and reminders.

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
- `/contact` - support email and contact details
- `/support`, `/help`, `/faq` - help centre
- `/health-disclaimer` - health and safety information
- `/privacy-policy` - privacy policy
- `/terms-of-use` - terms of use

Site-wide constants (support email, store URLs, last-updated date) live in
`src/lib/site.ts`.
