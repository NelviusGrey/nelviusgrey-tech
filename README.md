# NelviusGrey Tech Website

Premium multi-page corporate website for NelviusGrey Tech, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Routes

- `/` - Home
- `/about` - Brand story, founder, mission, vision, values
- `/services` - Detailed service lines and deliverables
- `/solutions` - Thematic sectors and solution examples
- `/projects` - Selected work and solution concepts
- `/blog` - Technology insights with server-side news API fallback
- `/contact` - Contact form, details, LinkedIn, WhatsApp, and map
- `/api/tech-news` - Server route for technology article data

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
```

The project is ready for Vercel deployment. Vercel will auto-detect Next.js.

## Environment Variables

Copy `.env.example` to `.env.local` and add a NewsAPI key when live article fetching is needed:

```bash
NEWS_API_KEY=
```

If no key is configured, `/api/tech-news` returns curated placeholder cards marked as "Insights Coming Soon".

## Brand Assets

The official logo and founder photo are stored in:

- `public/images/logo/nelviusgrey-tech-logo.png`
- `public/images/founder/ighere-g-nelson.png`

The logo green was extracted from the supplied logo image and applied as `--brand-green: #00a438` in `src/app/globals.css`.
