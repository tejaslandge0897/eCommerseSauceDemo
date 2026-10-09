import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;

    constructor(private page: Page) {

        this.firstNameInput = this.page.getByPlaceholder('First Name');

        this.lastNameInput = this.page.getByPlaceholder('Last Name');

        this.postalCodeInput = this.page.getByPlaceholder('Zip/Postal Code');

        this.continueButton = this.page.getByRole('button', { name: /Continue/i });

    }

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);

    }

    async continueToOverview() {

        await this.continueButton.click();

    }

}