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
