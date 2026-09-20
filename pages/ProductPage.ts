
import { Page, expect } from '@playwright/test';
import { ProductPageLocators } from '../locators/ProductLocators';

export class ProductPage {

    // Locators
    locators: ProductPageLocators;

    // Constructor
    constructor(private page: Page) {

        this.locators = new ProductPageLocators(page);
    }

    // Hammer
    async selectHammer() {

        await this.locators.hammerProduct.click();
    }

    async verifyHammerProduct() {

        await expect(this.locators.productImage).toBeVisible();
    }

    // Combination Pliers
    async selectCombinationPliers() {

        await this.locators.combinationPliers.click();
    }

    async verifyCombinationPliers() {

        await expect(this.locators.productImage).toBeVisible();
    }

    // Fiberglass Hammer
    async selectFiberglassHammer() {

        await expect(this.locators.fiberglassHammer).toBeVisible();

        await this.locators.fiberglassHammer.click();
    }

    async verifyFiberglassHammer() {

        await expect(this.locators.productImage).toBeVisible();
    }

    // Wood Carving Chisels
    async selectWoodCarvingChisels() {

        await expect(this.locators.woodCarvingChisels).toBeVisible();

        await this.locators.woodCarvingChisels.click();
    }

    async verifyWoodCarvingChisels() {

        await expect(this.locators.productImage).toBeVisible();
    }

    // Adjustable Wrench
    async selectAdjustableWrench() {

        await expect(this.locators.adjustableWrench).toBeVisible();

        await this.locators.adjustableWrench.click();
    }

    async verifyAdjustableWrench() {

        await expect(this.locators.productImage).toBeVisible();
    }

    // Safety Goggles
    async selectSafetyGoggles() {

        await expect(this.locators.safetyGoggles).toBeVisible();

        await this.locators.safetyGoggles.click();
    }

    async verifySafetyGoggles() {

        await expect(this.locators.productImage).toBeVisible();
    }

    // Excavator
    async selectExcavator() {

        await expect(this.locators.excavator).toBeVisible();

        await this.locators.excavator.click();
    }

    async verifyExcavator() {

        await expect(this.locators.productImage).toBeVisible();
    }


// Rental Duration
async selectRentalDuration(hours: number) {

    await this.locators.rentalDuration.focus();

    let currentValue = Number(
        await this.locators.rentalDuration.getAttribute('aria-valuenow')
    );

    if (currentValue < hours) {

        for (let i = currentValue; i < hours; i++) {
            await this.locators.rentalDuration.press('ArrowRight');
        }

    } else if (currentValue > hours) {

        for (let i = currentValue; i > hours; i--) {
            await this.locators.rentalDuration.press('ArrowLeft');
        }
    }

    await expect(this.locators.rentalDuration).toHaveAttribute('aria-valuenow', String(hours));

    console.log(`Rental Duration Set: ${hours} hours`);
}

    // Add to Cart
    async addToCart() {

        const count =await this.locators.addToCartButton.count();

        console.log('Add to Cart button count:', count);

        await expect(this.locators.addToCartButton).toHaveCount(1);

        await this.locators.addToCartButton.click();
    }
}

