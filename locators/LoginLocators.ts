import { Page, Locator } from '@playwright/test';

export class LoginLocators {

    email: Locator;
    password: Locator;
    loginButton: Locator;
    pageTitle: Locator;
    userDropdown: Locator;
    signOut: Locator;

    constructor(page: Page) {

        // Login Email
        this.email = page.locator('[data-test="email"]');

        // Login Password
        this.password = page.locator('[data-test="password"]');

        // Login Button
        this.loginButton = page.locator('[data-test="login-submit"]');

        // Page Title
        this.pageTitle = page.locator('[data-test="page-title"]');

        // User Dropdown
        this.userDropdown = page.locator('[data-test="nav-menu"]');

        // Sign Out
        this.signOut = page.locator('[data-test="nav-sign-out"]');
    }
}

