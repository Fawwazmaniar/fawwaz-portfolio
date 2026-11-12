// Generates public/og.png, the text-only social card shown in LinkedIn, Slack and X link previews.
// It is never displayed on the site itself. Run `npm run og` after changing your name, title or colours.
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from '@playwright/test'
import { hero, person, site } from '../src/content.ts'

const LIME = '#7fe876' // keep in sync with --lime and --ink in src/index.css
const INK = '#262182'
const font = (pkg, file) => pathToFileURL(resolve('node_modules', pkg, 'files', file)).href
const words = person.name.split(' ')

const html = `<!doctype html>
<style>
  @font-face { font-family: Inter; font-weight: 100 900; src: url(${font('@fontsource-variable/inter', 'inter-latin-wght-normal.woff2')}); }
  @font-face { font-family: Serif; font-style: italic; src: url(${font('@fontsource/instrument-serif', 'instrument-serif-latin-400-italic.woff2')}); }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; padding: 56px 64px; background: ${LIME}; color: ${INK}; font-family: Inter, sans-serif;
         display: flex; flex-direction: column; justify-content: space-between; }
  .eyebrow { font-size: 21px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
  h1 { font-size: 138px; font-weight: 900; line-height: 0.84; letter-spacing: -0.055em; text-transform: uppercase; }
  .bottom { display: flex; justify-content: space-between; align-items: flex-end; gap: 48px; border-top: 2px solid ${INK}; padding-top: 24px; }
  .tag { font-family: Serif, serif; font-style: italic; font-size: 36px; line-height: 1.1; max-width: 700px; }
  .url { font-size: 26px; font-weight: 700; white-space: nowrap; }
</style>
<p class="eyebrow">${person.jobTitle} · ${person.location}</p>
<h1>${words.map((w, i) => `<div>${w}${i === words.length - 1 ? '.' : ''}</div>`).join('')}</h1>
<div class="bottom">
  <p class="tag">${hero.positioning}</p>
  <p class="url">${new URL(site.url).host}</p>
</div>`

const file = join(mkdtempSync(join(tmpdir(), 'og-')), 'card.html')
writeFileSync(file, html)

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(pathToFileURL(file).href)
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: 'public/og.png' })
await browser.close()
console.log('Wrote public/og.png')
