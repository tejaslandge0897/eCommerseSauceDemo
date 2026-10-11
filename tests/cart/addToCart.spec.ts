import { test , expect } from '../../fixtures/testFixtures';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import products from '../../test-data/products.json';

test('user can add a product to cart', async ({ page , productPage , cartPage}) => {

    await page.goto('/inventory.html');

    await productPage.addProductToCart(products.backpack.name);

    await expect(cartPage.cartBadge).toHaveText('1');

    await productPage.openCart();

    await expect(cartPage.cartItems).toContainText(products.backpack.name);
});