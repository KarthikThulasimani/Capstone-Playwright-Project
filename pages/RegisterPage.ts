import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/RegisterLocators';

export class RegisterPage {

    // Locators
    locators: RegisterLocators;

    // Constructor
    constructor(private page: Page) {

        this.locators = new RegisterLocators(page);
    }

    // Register
    async register(
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        country: string,
        postalCode: string,
        houseNumber: number,
        street: string,
        city: string,
        state: string,
        phone: string,
        emailAddress: string,
        password: string
    ) {

        await this.page.goto('/auth/register');

        await this.locators.firstName.fill(firstName);

        await this.locators.lastName.fill(lastName);

        await this.locators.dateOfBirth.fill(dateOfBirth);

        await this.locators.country.selectOption(country);

        await this.locators.postalCode.fill(postalCode);

        await this.locators.houseNumber.fill(houseNumber.toString());

        await this.locators.street.fill(street);

        await this.locators.city.fill(city);

        await this.locators.state.fill(state);

        await this.locators.phone.fill(phone);

        await this.locators.email.fill(emailAddress);

        await this.locators.password.fill(password);

        await this.locators.registerButton.click();

        await this.page.waitForTimeout(2000);

        // console.log('REGISTER EMAIL:', emailAddress);

        // console.log('REGISTER URL:', this.page.url());

        // console.log('REGISTER TITLE:', await this.page.title());

        // console.log('REGISTER PAGE MESSAGE:');

        // console.log(await this.page.locator('body').innerText());
    }
}

