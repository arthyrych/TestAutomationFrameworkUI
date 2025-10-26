import { defineConfig, devices } from '@playwright/test'
import { generateReportFolder } from './test-utils'

export default defineConfig({
  retries: 2,
  fullyParallel: true,
  workers: process.env.CI ? 2 : 2,
  timeout: 90000,
  reporter: [
    ['list', { open: 'never' }], // console report
    ['html', { open: 'never', outputFolder: generateReportFolder() }], // HTML report
    ['allure-playwright'], // allure report
  ],
  projects: [
    {
      name: 'Desktop Chrome',
      grep: /WEB/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Safari',
      grep: /WEB/,
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      grep: /MOBILE/,
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'Mobile Safari',
      grep: /MOBILE/,
      use: { ...devices['iPhone 12'] },
    },
  ]
})