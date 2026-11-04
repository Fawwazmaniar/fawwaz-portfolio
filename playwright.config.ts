import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  // Test the production build, which is what Vercel serves.
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  use: { baseURL: 'http://localhost:4173' },
})
