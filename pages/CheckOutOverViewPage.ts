import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {

    readonly cartItems: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;
    readonly finishButton: Locator;

    constructor(private page: Page) {

        this.cartItems = this.page.locator('.cart_item');
        this.itemTotal = this.page.locator('.summary_subtotal');
        this.tax = this.page.locator('.summary_tax');
        this.total = this.page.locator('.summary_total_label');
        this.finishButton = this.page.getByRole('button', { name: /Finish/i });

    }

    async finishOrder() {

        await this.finishButton.click();

    }

}