import { Page, Locator } from '@playwright/test';

export class CheckoutPageLocators {

    // Cart → Sign In
    proceedToCheckoutStep1: Locator;

    // Checkout Login
    email: Locator;
    password: Locator;
    loginButton: Locator;

    // Sign In → Billing Address
    proceedToCheckoutStep2: Locator;
    houseNumber: Locator;

    // Billing → Payment
    proceedToCheckoutStep3: Locator;

    // Payment Method
    paymentMethod: Locator;

    // Bank Transfer
    bankName: Locator;
    accountName: Locator;
    accountNumber: Locator;

    // Credit Card
    creditCardNumber: Locator;
    expirationDate: Locator;
    cvv: Locator;
    cardHolderName: Locator;

    // Buy Now Pay Later
    monthlyInstallments: Locator;

    // Gift Card
    giftCardNumber: Locator;
    validationCode: Locator;

    // Confirm
    confirmButton: Locator;

    // Payment Success
    paymentSuccessMessage: Locator;

    // Order Confirmation
    orderConfirmation: Locator;

    constructor(page: Page) {

        // Cart → Sign In
        this.proceedToCheckoutStep1 = page.locator('[data-test="proceed-1"]');

        // Checkout Login
        this.email = page.locator('[data-test="email"]');

        this.password = page.locator('[data-test="password"]');

        this.loginButton = page.locator('[data-test="login-submit"]');

        // Sign In → Billing Address
        this.proceedToCheckoutStep2 = page.locator('[data-test="proceed-2"]');

        // Billing Address
        this.houseNumber = page.locator('[data-test="house_number"]');

        // Billing → Payment
        this.proceedToCheckoutStep3 = page.locator('[data-test="proceed-3"]');

        // Payment Method
        this.paymentMethod = page.locator('[data-test="payment-method"]');

        // Bank Transfer Details
        this.bankName = page.locator('[data-test="bank_name"]');

        this.accountName = page.locator('[data-test="account_name"]');

        this.accountNumber = page.locator('[data-test="account_number"]');

        // Credit Card Details
        this.creditCardNumber = page.locator('[data-test="credit_card_number"]');

        this.expirationDate = page.locator('[data-test="expiration_date"]');

        this.cvv = page.locator('[data-test="cvv"]');

        this.cardHolderName = page.locator('[data-test="card_holder_name"]');

        // Buy Now Pay Later
        this.monthlyInstallments = page.locator('[data-test="monthly_installments"]');

        // Gift Card Details
        this.giftCardNumber = page.locator('[data-test="gift_card_number"]');

        this.validationCode = page.locator('[data-test="validation_code"]');

        // Confirm
        this.confirmButton = page.locator('[data-test="finish"]');

        // Payment Success
        this.paymentSuccessMessage = page.locator('[data-test="payment-success-message"]');

        // Order Confirmation
        this.orderConfirmation = page.locator('#order-confirmation');
    }
}

