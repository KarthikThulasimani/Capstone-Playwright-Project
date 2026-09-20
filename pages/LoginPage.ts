
import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../locators/LoginLocators';

export class LoginPage {

    // Locators
    locators: LoginLocators;

    // Constructor
    constructor(private page: Page) {

        this.locators = new LoginLocators(page);
    }

    // Open Login
    async openLoginPage() {

        await this.page.goto('/auth/login');
    }

    // Login
    async login(email: string, password: string) {

        await this.locators.email.fill(email);

        await this.locators.password.fill(password);

        await this.locators.loginButton.click();
    }

    // Verify Login
    async verifyLoginSuccess() {

        await this.page.waitForURL('**/account',{timeout: 5000});

        await expect(this.locators.pageTitle).toHaveText('My account');
    }

    // Sign Out
    async signOut() {

        await this.locators.userDropdown.click();

        await this.locators.signOut.click();

        await this.page.waitForLoadState('networkidle');

        console.log('URL after Sign Out:', this.page.url());
    }
}

