import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {

    readonly successMessage: Locator;
    readonly backHomeButton: Locator;

    constructor(private page: Page) {
        this.successMessage = this.page.getByText('Thank you for your order!');
        this.backHomeButton = this.page.getByRole('button', { name: 'Back Home' });
    }

    async verifyOrderSuccess() {

        await this.successMessage.waitFor();

    }

    async backToHome() {

        await this.backHomeButton.click();

    }

}