import { Page, Locator } from '@playwright/test';

export class HomeLocators {
    // Home page 
    homeLink: Locator;
    searchInput: Locator;
    searchButton: Locator;
    sortDropdown: Locator;

    // Price Range
    priceRangeMin: Locator;
    priceRangeMax: Locator;

    // Category
    categoryChisels: Locator;

    // Brand
    brandForgeFlexTools: Locator;

    // Sustainability
    sustainabilityFilter: Locator;

    // Categories / Rentals
    categoriesDropdown: Locator;
    rentalOption: Locator;

    constructor(page: Page) {

        // Home
        this.homeLink = page.locator('[data-test="nav-home"]');

        // Search
        this.searchInput = page.locator('#search-query');

        this.searchButton = page.locator('button[type="submit"]');

        // Sort
        this.sortDropdown = page.locator('[data-test="sort"]');

        // Price Range - Minimum
        this.priceRangeMin = page.locator('[role="slider"][aria-label="ngx-slider"]');

        // Price Range - Maximum
        this.priceRangeMax = page.locator('[role="slider"][aria-label="ngx-slider-max"]');

        // Category - Chisels
        this.categoryChisels = page.locator('[data-test="category-01M311YPA40KWVD4FAF26C9D0C"]');

        // Brand - ForgeFlex Tools
        this.brandForgeFlexTools = page.locator('[data-test="brand-01M311YNYZH5Q9K4J4P05NCS3S"]');

        // Sustainability - Eco Friendly Products
        this.sustainabilityFilter = page.locator('[data-test="eco-friendly-filter"]');

        // Categories
        this.categoriesDropdown = page.locator('[data-test="nav-categories"]');

        // Rentals
        this.rentalOption = page.locator('[data-test="nav-rentals"]');
    }
}

