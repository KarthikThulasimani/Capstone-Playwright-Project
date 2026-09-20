import { Page, Locator } from '@playwright/test';

export class RegisterLocators {

    firstName: Locator;
    lastName: Locator;
    dateOfBirth: Locator;
    country: Locator;
    postalCode: Locator;
    houseNumber: Locator;
    street: Locator;
    city: Locator;
    state: Locator;
    phone: Locator;
    email: Locator;
    password: Locator;
    registerButton: Locator;

    constructor(page: Page) {

        // First Name
        this.firstName = page.locator('#first_name');

        // Last Name
        this.lastName = page.locator('#last_name');

        // Date of Birth
        this.dateOfBirth = page.locator('#dob');

        // Country
        this.country = page.locator('#country');

        // Postal Code
        this.postalCode = page.locator('#postal_code');

        // House Number
        this.houseNumber = page.locator('#house_number');

        // Street
        this.street = page.locator('#street');

        // City
        this.city = page.locator('#city');

        // State
        this.state = page.locator('#state');

        // Phone
        this.phone = page.locator('#phone');

        // Email
        this.email = page.locator('#email');

        // Password
        this.password = page.locator('#password');

        // Register Button
        this.registerButton = page.getByRole('button',{ name: 'Register' });
    }
}

