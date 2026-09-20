
import { Page, expect } from '@playwright/test';
import { CartPageLocators } from '../locators/CartLocators';

export class CartPage {

    locators: CartPageLocators;

    constructor(private page: Page) {

        this.locators = new CartPageLocators(page);
    }

    // Open Cart
    async openCart() {

        await expect(this.locators.cartIcon).toBeVisible();

        await this.locators.cartIcon.click();

        await this.page.waitForLoadState('networkidle');
    }

    // Verify Cart Quantity
    async verifyCartQuantity(quantity: string) {

        await expect(this.locators.cartQuantity).toBeVisible();

        await expect(this.locators.cartQuantity).toHaveText(quantity);
    }

    // Proceed to Checkout
    async clickProceedToCheckout() {

        await expect(this.locators.proceedToCheckoutButton).toBeVisible();

        await this.locators.proceedToCheckoutButton.click();
    }
}

