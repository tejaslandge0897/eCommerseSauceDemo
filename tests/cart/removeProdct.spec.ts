import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import products from '../../test-data/products.json';

test('Remove Product from Cart', async ({ page }) => {

    await page.goto('/inventory.html');

    const productsPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProductToCart(products.backpack.name);

    await productsPage.openCart();

    await expect(cartPage.cartItems)
        .toContainText(products.backpack.name);

    await cartPage.removeProduct(products.backpack.name);

    await expect(cartPage.cartItems).toHaveCount(0);
});