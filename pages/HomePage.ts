
import { Page, expect } from '@playwright/test';
import { HomeLocators } from '../locators/HomeLocators';

export class HomePage {

    // Locators
    locators: HomeLocators;

    // Constructor
    constructor(private page: Page) {

        this.locators = new HomeLocators(page);
    }

    // Open Home
    async clickHome() {

        await this.page.goto('/');

        await expect(this.locators.searchInput).toBeVisible();
    }

    // Search Product
    async searchProduct(productName: string) {

        await expect(this.locators.searchInput).toBeVisible();

        await this.locators.searchInput.fill(productName);

        await this.locators.searchButton.click();
    }

    // Sort Price
    async sortByPriceHighToLow() {

        await expect(this.locators.sortDropdown).toBeVisible();

        await this.locators.sortDropdown.selectOption({
            label: 'Price (High - Low)'
        });
    }

    // Price Range
    async setPriceRange(min: number, max: number) {

        await this.locators.priceRangeMin.focus();

        let currentMin = Number(
            await this.locators.priceRangeMin.getAttribute('aria-valuenow')
        );

        if (currentMin < min) {

            for (let i = currentMin; i < min; i++) {

                await this.locators.priceRangeMin.press('ArrowRight');
            }

        } else if (currentMin > min) {

            for (let i = currentMin; i > min; i--) {

                await this.locators.priceRangeMin.press('ArrowLeft');
            }
        }

        await this.locators.priceRangeMax.focus();

        let currentMax = Number(
            await this.locators.priceRangeMax.getAttribute('aria-valuenow')
        );

        if (currentMax < max) {

            for (let i = currentMax; i < max; i++) {

                await this.locators.priceRangeMax.press('ArrowRight');
            }

        } else if (currentMax > max) {

            for (let i = currentMax; i > max; i--) {

                await this.locators.priceRangeMax.press('ArrowLeft');
            }
        }

        await expect(this.locators.priceRangeMin)
            .toHaveAttribute('aria-valuenow', String(min));

        await expect(this.locators.priceRangeMax)
            .toHaveAttribute('aria-valuenow', String(max));

        console.log(`Price Range Set: ${min}-${max}`);
    }

    // Chisels
    async selectChiselsCategory() {

        await expect(this.locators.categoryChisels).toBeVisible();

        await this.locators.categoryChisels.check();

        await expect(this.locators.categoryChisels).toBeChecked();
    }

    // ForgeFlex Tools
    async selectForgeFlexToolsBrand() {

        await expect(this.locators.brandForgeFlexTools).toBeVisible();

        await this.locators.brandForgeFlexTools.check();

        await expect(this.locators.brandForgeFlexTools).toBeChecked();
    }

    // Sustainability
    async selectSustainability() {

        await expect(this.locators.sustainabilityFilter).toBeVisible();

        await this.locators.sustainabilityFilter.check();

        await expect(this.locators.sustainabilityFilter).toBeChecked();
    }

    // Rental
    async selectRentalCategory() {

        await expect(this.locators.categoriesDropdown).toBeVisible();

        await this.locators.categoriesDropdown.click();

        await expect(this.locators.rentalOption).toBeVisible();

        await this.locators.rentalOption.click();
    }
}

