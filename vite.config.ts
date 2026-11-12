import { defineConfig } from 'vitest/config'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { hero, person, projects, site } from './src/content.ts'

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Plain-HTML copy of the hero for crawlers and visitors without JavaScript. The page itself is
 * rendered by React, so without this the HTML the server sends would be an empty shell.
 */
const noscript = `<noscript>
      <h1>${escapeHtml(person.name)}</h1>
      <p>${escapeHtml(person.jobTitle)} · ${escapeHtml(person.location)}</p>
      <p>${escapeHtml(hero.intro)}</p>
      <ul>
        ${hero.stats.map((s) => `<li>${s.value.toLocaleString('en-US')}${s.suffix} ${escapeHtml(s.label)}</li>`).join('\n        ')}
      </ul>
      <p><a href="${person.resumeUrl}">Download resume</a> · <a href="mailto:${person.email}">${escapeHtml(person.email)}</a></p>
    </noscript>`

/**
 * Fills the {{TOKENS}} in index.html and emits sitemap.xml and robots.txt,
 * all from src/content.ts, so the SEO data never drifts from the page copy.
 */
function seo(): Plugin {
  const urls = ['/', ...projects.map((p) => `/projects/${p.slug}`)]
  const sameAs = [person.github, person.linkedin].filter(Boolean)
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    url: site.url,
    email: `mailto:${person.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Markham', addressRegion: 'ON', addressCountry: 'CA' },
    ...(sameAs.length > 0 && { sameAs }),
  }).replace(/</g, '\\u003c')

  const tokens: Record<string, string> = {
    TITLE: site.title,
    DESCRIPTION: site.description,
    SITE_URL: site.url,
    JSON_LD: jsonLd,
    NOSCRIPT: noscript,
  }

  return {
    name: 'seo',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/\{\{(\w+)\}\}/g, (match, key: string) => tokens[key] ?? match),
    },
    generateBundle() {
      const entries = urls.map((u) => `  <url><loc>${site.url}${u === '/' ? '' : u}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
