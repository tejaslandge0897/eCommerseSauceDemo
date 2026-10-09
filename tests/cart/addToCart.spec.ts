import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import products from '../../test-data/products.json';

test('user can add a product to cart', async ({ page }) => {

    await page.goto('/inventory.html');

    const productsPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProductToCart(products.backpack.name);

    await expect(cartPage.cartBadge).toHaveText('1');

    await productsPage.openCart();

    await expect(cartPage.cartItems).toContainText(products.backpack.name);
});