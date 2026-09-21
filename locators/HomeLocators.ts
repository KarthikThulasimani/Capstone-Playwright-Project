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
        this.categoryChisels = page.locator('label', { hasText: 'Chisels' }).locator('input[type="checkbox"]');



    
        // Brand - ForgeFlex Tools
        this.brandForgeFlexTools = page.locator('label', { hasText: 'ForgeFlex Tools' }).locator('input[type="checkbox"]');


      
        // Sustainability
        this.sustainabilityFilter = page.locator('label', { hasText: 'Show only eco-friendly products' });



        // Categories
        this.categoriesDropdown = page.locator('[data-test="nav-categories"]');

        // Rentals
        this.rentalOption = page.locator('[data-test="nav-rentals"]');
    }
}

