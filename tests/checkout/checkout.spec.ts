import { test, expect } from '../../fixtures/testFixtures';
import products from '../../test-data/products.json';
import checkOut from '../../test-data/checkOut.json';

test('User can proceed to checkout', async ({ page, productPage, cartPage, checkoutPage, checkoutOverviewPage, checkoutCompletePage }) => {

    await page.goto('/inventory.html');

    await productPage.addProductToCart(products.backpack.name);

    await productPage.openCart();

    await expect(cartPage.cartItems).toContainText(
        products.backpack.name
    );

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one.html/);

    await checkoutPage.fillCustomerInformation(
        checkOut.customer.firstName,
        checkOut.customer.lastName,
        checkOut.customer.postalCode
    );

    await checkoutPage.continueToOverview();

    await expect(checkoutOverviewPage.cartItems)
        .toContainText(products.backpack.name);

    await checkoutOverviewPage.finishOrder();

    await expect(checkoutCompletePage.successMessage)
        .toBeVisible();
});