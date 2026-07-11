# NelviusGrey Tech Website

Premium multi-page corporate website for NelviusGrey Tech, built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, Lenis, React Three Fiber, Drei, React Hook Form, Zod, RSS aggregation, and Lucide React.

## Routes

- `/` - Home
- `/about` - Brand story, founder, mission, vision, values
- `/services` - Detailed service lines and deliverables
- `/solutions` - Thematic sectors and solution examples
- `/work` - Premium project exhibition and case-study routes
- `/projects` - Redirects to `/work`
- `/insights` - NelviusGrey notes plus African technology news radar
- `/blog` - Redirects to `/insights`
- `/contact` - Contact form, details, LinkedIn, WhatsApp, and map
- `/api/news` - Server-side RSS/GDELT technology news aggregation
- `/api/contact` - Server-side project enquiry validation and webhook/mailto fallback

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The default build is Vercel-ready and preserves Next.js Route Handlers for `/api/news` and `/api/contact`.

For the existing ChatGPT Sites project, use the static packaging path:

```bash
npm run build:sites
```

That package is designed for Sites publishing and gracefully falls back when server routes are unavailable.

## Environment Variables

Copy `.env.example` to `.env.local` when local runtime configuration is needed:

```bash
CONTACT_WEBHOOK_URL=
ENABLE_GDELT_NEWS=true
```

- `CONTACT_WEBHOOK_URL` is optional. When absent, the contact route validates the enquiry and returns a prepared email fallback.
- `ENABLE_GDELT_NEWS` is optional. RSS feeds remain the primary news source; GDELT is only a configurable discovery fallback.

## Vercel And GitHub

Vercel will auto-detect this as a Next.js App Router project. Connect the GitHub repository to Vercel, set the production branch to `main`, and Vercel will create production deployments from `main` and preview deployments for pull requests.

If using GitHub Actions instead of Vercel Git integration, configure `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as repository secrets, then run `vercel pull`, `vercel build`, and `vercel deploy --prebuilt`.

## News Sources

The news radar uses publisher-provided RSS metadata from TechCabal, Techpoint Africa, Disrupt Africa, and IT News Africa. It stores no full articles and sends readers to the original publisher.

## Brand Assets

The official logo and founder photo are stored in:

- `public/images/logo/nelviusgrey-tech-logo.png`
- `public/images/founder/ighere-g-nelson.png`

The logo green was extracted from the supplied logo image and applied as `--brand-green: #00a438` in `src/app/globals.css`.
