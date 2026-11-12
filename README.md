# Portfolio

React + TypeScript + Vite + Tailwind CSS v4. Static site, deployable to Vercel.

## Local setup

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # unit/component tests (Vitest + React Testing Library)
npm run test:e2e     # Playwright smoke test (first run: npx playwright install chromium)
npm run build        # type-check + production build into dist/
```

## Editing content

Everything lives in [src/content.ts](src/content.ts); components only render it. Types are in [src/types.ts](src/types.ts), so the editor flags mistakes.

- **Social links, domain, resume:** `person.github`, `person.linkedin`, `site.url`, and drop your PDF at `public/resume.pdf`.
- **Empty means "coming soon":** an empty string or empty array renders a visible placeholder instead of a fake value.
- **Numbers:** every figure on the site (the hero counters, "13,000+ users") is real and lives in `content.ts`. Don't add estimates.
- **SEO:** the title, description, canonical URL, JSON-LD, `sitemap.xml` and `robots.txt` are generated from `content.ts` at build time (see `seo()` in `vite.config.ts`).

## Adding a project

1. Add an object to the `projects` array in `src/content.ts` (copy `plateau`). The `slug` becomes the URL: `/projects/<slug>`.
2. Put screenshots in `public/screenshots/` and list them: `{ src: '/screenshots/foo.png', alt: 'What the image shows', width: 1200, height: 800 }`.
3. Describe the architecture as left-to-right stages: `diagram: [{ label: 'Client', nodes: ['React'] }, ...]`. Leave it empty to show "Diagram coming soon".
4. That's it. The card, detail page and sitemap entry are generated.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. At vercel.com, choose **Add New → Project** and import the repository.
3. Vercel detects Vite. Leave the defaults: build command `npm run build`, output directory `dist`.
4. Click **Deploy**. [vercel.json](vercel.json) rewrites unknown paths to `index.html` so `/projects/plateau` works on refresh.
5. Add your domain under **Settings → Domains**, then set `site.url` in `src/content.ts` to it and redeploy.

## Design notes

- **Direction:** editorial and poster-like. A lime header and hero, ultra-heavy uppercase type with a serif-italic accent word per heading, mono eyebrow labels, hairline rules, square corners, and one dark band for contrast.
- **Palette:** ink `#181A17`, paper `#F4F2E9` and lime `#DCE779`. Lime is only ever a fill with ink text on it (about 14:1 contrast), never text on paper. Dark mode follows the visitor's system setting (no toggle) and swaps paper and ink; the lime blocks stay lime.
- **Type:** Inter (variable, weight up to 900) and Instrument Serif italic, both self-hosted via Fontsource.
- **Motion:** hero fade-up, scroll reveals, count-up stats, a scrolling tech ticker (with a pause button), and a scroll progress bar. No animation library. All of it is off under `prefers-reduced-motion`.
- **Why Tailwind:** styling stays next to the markup, and unused CSS is dropped (about 6 kB gzipped here).
- **Project cards:** each card shows an architecture diagram (`diagram` in `content.ts`) on a lime panel. Screenshots live on the detail pages, recolored to a green duotone with CSS so any screenshot fits the palette.
