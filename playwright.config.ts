import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';

dotenv.config({path: 'config/.env.qa'});

export const environment = {baseURL: process.env.BASE_URL || ''};

export default defineConfig({

    testDir: './tests',

    reporter: [['html'], ['allure-playwright']],

    use: {
        baseURL: environment.baseURL,
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }
    ]
});