import { expect, test } from '@playwright/test'
import { nav, person } from '../src/content.ts'

// Smoke test: the built site loads and every main section is on the page.
test('home page shows all main sections', async ({ page }) => {
  await page.goto('/')

  // The h1 is the name; CSS uppercases it, but the DOM text keeps its case.
  await expect(page.getByRole('heading', { level: 1 })).toContainText(person.name)

  // One landmark per section, found by the ids defined in content.ts.
  for (const { id } of nav) {
    await expect(page.locator(`section#${id}`)).toBeAttached()
    await expect(page.locator(`section#${id} h2`)).toHaveCount(1)
  }
  await expect(page.getByRole('contentinfo')).toContainText('Built with React and TypeScript')
})

test('a project card opens its detail view', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Plateau' }).click()

  await expect(page).toHaveURL(/\/projects\/plateau$/)
  await expect(page.getByRole('heading', { level: 1, name: 'Plateau' })).toBeVisible()
})

// Project pages are lazy-loaded, so opening one directly must still work.
test('a project page opens directly from its URL', async ({ page }) => {
  await page.goto('/projects/aethr')
  await expect(page.getByRole('heading', { level: 1, name: 'Aethr' })).toBeVisible()
})

// Nav links on a project page use "/#section", which must lead back to the home page section.
test('nav links return from a project page to a home section', async ({ page }) => {
  await page.goto('/projects/plateau')
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' }).click()

  await expect(page).toHaveURL(/\/#contact$/)
  await expect(page.locator('section#contact')).toBeInViewport()
})

// The skip link is the first stop for keyboard users and moves focus past the header.
test('the skip link is first in the tab order and jumps to the main content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')

  const skipLink = page.getByRole('link', { name: 'Skip to main content' })
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toBeVisible()

  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
})

// With reduced motion on, the counters show their final values straight away.
test('counters show real values with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const counters = page.getByRole('region', { name: 'At a glance' }).locator('dd')
  await expect(counters).toHaveText(['9+', '13,000+', '2'])
})
