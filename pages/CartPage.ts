import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly cartBadge: Locator;

    constructor(private page: Page) {
        this.cartItems = this.page.locator('.cart_item');

        this.checkoutButton = this.page.getByRole('button', {
            name: /Checkout/i
        });

        this.cartBadge = this.page.locator('.shopping_cart_badge'); 
    }

    async removeProduct(productName: string) {
        const product = this.cartItems.filter({ hasText: productName });
        await product.getByRole('button', { name: /Remove/i }).click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}