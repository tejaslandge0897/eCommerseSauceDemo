import { Page, Locator } from "@playwright/test";

export class ProductPage {

    readonly productItems: Locator;
    readonly cartButton: Locator;

    constructor(private page: Page) {
        this.productItems = this.page.locator('.inventory_item');

        this.cartButton = this.page.locator('.shopping_cart_link');
    }

    async addProductToCart(productName: string) {
        const product = this.productItems.filter({
            hasText: productName
        });

        await product.getByRole('button', {
            name: /Add to cart/i
        }).click();
    }

    async openCart() {
        await this.cartButton.click();
    }
}