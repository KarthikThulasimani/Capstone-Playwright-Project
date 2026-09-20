import { Page, Locator } from '@playwright/test';

export class ProductPageLocators {

    // Hammer
    hammerProduct: Locator;

    // Combination Pliers
    combinationPliers: Locator;

    // Fiberglass Hammer
    fiberglassHammer: Locator;

    // Wood Carving Chisels
    woodCarvingChisels: Locator;

    // Adjustable Wrench
    adjustableWrench: Locator;

    // Safety Goggles
    safetyGoggles: Locator;

    // Excavator
    excavator: Locator;

    // Rental Duration
    rentalDuration: Locator;

    // Product Detail Image
    productImage: Locator;

    // Add to Cart
    addToCartButton: Locator;

    constructor(page: Page) {

        // Hammer
        this.hammerProduct = page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]');

        // Combination Pliers
        this.combinationPliers = page.locator('img[alt="Combination Pliers"]');

        // Fiberglass Hammer
        this.fiberglassHammer = page.getByText('Claw Hammer with Fiberglass Handle',{ exact: true });

        // Wood Carving Chisels
        this.woodCarvingChisels = page.locator('[data-test="product-name"]',{hasText: 'Wood Carving Chisels'});

        // Adjustable Wrench
        this.adjustableWrench = page.locator('[data-test="product-name"]',{hasText: 'Adjustable Wrench'});

        // Safety Goggles
        this.safetyGoggles = page.locator('[data-test="product-name"]',{hasText: 'Safety Goggles'});

        // Excavator
        this.excavator = page.getByText('Excavator',{exact: true});

        // Rental Duration
        this.rentalDuration = page.locator('[role="slider"][aria-label="ngx-slider"]');

        // Product Detail Image
        this.productImage = page.locator('img.figure-img');

        // Add to Cart
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    }
}

