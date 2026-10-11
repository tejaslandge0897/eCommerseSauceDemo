import { test, expect } from '../../fixtures/testFixtures';
import products from '../../test-data/products.json';

test('Remove Product from Cart', async ({ page,productPage,cartPage }) => {

    await page.goto('/inventory.html');

    await productPage.addProductToCart(products.backpack.name);

    await productPage.openCart();

    await expect(cartPage.cartItems)
        .toContainText(products.backpack.name);

    await cartPage.removeProduct(products.backpack.name);

    await expect(cartPage.cartItems).toHaveCount(0);
});