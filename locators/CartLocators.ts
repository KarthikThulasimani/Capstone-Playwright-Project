
import { Page, Locator } from '@playwright/test';

export class CartPageLocators {
    // Cart page
    cartIcon: Locator;
    cartQuantity: Locator;
    proceedToCheckoutButton: Locator;

    constructor(page: Page) {

        // Cart Icon
        this.cartIcon = page.locator('a[href="/checkout"]');

        // Cart Quantity
        this.cartQuantity = page.locator('[data-test="cart-quantity"]');

        // Proceed to Checkout - Step 1
        this.proceedToCheckoutButton = page.locator('[data-test="proceed-1"]');
    }
}

