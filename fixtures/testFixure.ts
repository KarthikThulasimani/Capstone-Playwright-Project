
import { test as base } from '@playwright/test';

import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


// Fixture Type
type TestFixture = {

    registerPage: RegisterPage;
    login: LoginPage;
    homePage: HomePage;
    product: ProductPage;
    cart: CartPage;
    checkout: CheckoutPage;

};


// Page Fixtures
export const test = base.extend<TestFixture>({

    // Register Page
    registerPage: async ({ page }, use) => {await use(new RegisterPage(page));

    },

    // Login Page
    login: async ({ page }, use) => {await use(new LoginPage(page));

    },

    // Home Page
    homePage: async ({ page }, use) => {await use(new HomePage(page));

    },

    // Product Page
    product: async ({ page }, use) => {await use(new ProductPage(page));

    },

    // Cart Page
    cart: async ({ page }, use) => {await use(new CartPage(page));

    },

    // Checkout Page
    checkout: async ({ page }, use) => {await use(new CheckoutPage(page));

    },

});


// Before Each Test
test.beforeEach(async ({ page }) => {

    // Open Application
    await page.goto('/');

    // Clear Browser Storage
    await page.evaluate(() => {

        localStorage.clear();
        sessionStorage.clear();

    });

    // Reload Application
    await page.reload();

});

