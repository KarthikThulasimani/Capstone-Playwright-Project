
import { Page, expect } from '@playwright/test';
import { CheckoutPageLocators } from '../locators/CheckoutLocators';

export class CheckoutPage {

    // Locators
    locators: CheckoutPageLocators;

    // Constructor
    constructor(private page: Page) {

        this.locators = new CheckoutPageLocators(page);
    }


    // Proceed to Checkout - Step 1
    async clickProceedStep1() {
        await this.locators.proceedToCheckoutStep1.click();
    }


    // Sign In
    async signIn(email: string, password: string) {
        await this.locators.email.fill(email);
        await this.locators.password.fill(password);
        await this.locators.loginButton.click();
    }


    // Proceed to Checkout - Step 2
    async clickProceedStep2() {
        await this.locators.proceedToCheckoutStep2.click();
    }


    // Enter House Number
    async enterHouseNumber(houseNumber: string) {
        await this.locators.houseNumber.fill(houseNumber);
    }


    // Proceed to Checkout - Step 3
    async clickProceedStep3() {

        await expect(this.locators.proceedToCheckoutStep3).toBeVisible({ timeout: 15000 });

        await expect(this.locators.proceedToCheckoutStep3).toBeEnabled({ timeout: 15000 });

        await this.locators.proceedToCheckoutStep3.click();
    }


    // Cash on Delivery
    async selectCashOnDelivery() {
        await this.locators.paymentMethod.selectOption('cash-on-delivery');
    }


    // Bank Transfer
    async selectBankTransfer() {
        await this.locators.paymentMethod.selectOption('bank-transfer');
    }


    // Enter Bank Details
    async enterBankDetails(
        bankName: string,
        accountName: string,
        accountNumber: string
    ) {

        await this.locators.bankName.fill(bankName);

        await this.locators.accountName.fill(accountName);

        await this.locators.accountNumber.fill(accountNumber);
    }


    // Credit Card
    async selectCreditCard() {
        await this.locators.paymentMethod.selectOption('credit-card');
    }


    // Enter Credit Card Details
    async enterCreditCardDetails(
        creditCardNumber: string,
        expirationDate: string,
        cvv: string,
        cardHolderName: string
    ) {

        await this.locators.creditCardNumber.fill(creditCardNumber);

        await this.locators.expirationDate.fill(expirationDate);

        await this.locators.cvv.fill(cvv);

        await this.locators.cardHolderName.fill(cardHolderName);
    }


    // Buy Now Pay Later
    async selectBuyNowPayLater() {
        await this.locators.paymentMethod.selectOption('buy-now-pay-later');
    }


    // Select Monthly Installment
    async selectTwelveMonthlyInstallment() {
        await this.locators.monthlyInstallments.selectOption('12');
    }


    // Gift Card
    async selectGiftCard() {
        await this.locators.paymentMethod.selectOption('gift-card');
    }


    // Enter Gift Card Details
    async enterGiftCardDetails(
        giftCardNumber: string,
        validationCode: string
    ) {

        await this.locators.giftCardNumber.fill(giftCardNumber);
        await this.locators.validationCode.fill(validationCode);
    }


    // Confirm Payment
    async clickConfirm() {
        await this.locators.confirmButton.click();
    }


    // Verify Payment Success
    async verifyPaymentSuccess() {
        await expect(this.locators.paymentSuccessMessage)
            .toBeVisible({ timeout: 10000 });

        await expect(this.locators.paymentSuccessMessage)
            .toHaveText('Payment was successful');
    }


    // Final Confirm
    async clickFinalConfirm() {
        await this.locators.confirmButton.click();
    }


    // Verify Order Success
    async verifyOrderSuccess() {
        await expect(this.locators.orderConfirmation).toBeVisible({ timeout: 10000 });

        await expect(this.locators.orderConfirmation).toContainText('Thanks for your order!');
    }
}

