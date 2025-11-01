import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

/**
 * 🔹 Determine environment (default = qa)
 * Pass via CLI or Azure Pipeline, e.g. ENV=staging npx playwright test
 */
const environment = process.env.ENV || 'qa';

/**
 * 🔹 Load the correct .env file dynamically from /envs folder
 * e.g. .envs/.env.qa, .envs/.env.staging, .envs/.env.prod
 */
const envPath = path.resolve(__dirname, `.envs/.env.${environment}`);
dotenv.config({ path: envPath });


export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left in source */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Limit workers on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter */
  reporter: [['html', { open: 'never' }]],

  /* Shared settings for all projects */
  use: {
    baseURL: process.env.BASE_URL, // dynamicenvironbments base URL
    trace: 'on-first-retry',
    //video: 'retain-on-failure',
  },

  /* Major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
     /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Optional: run dev server before tests (disabled) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
