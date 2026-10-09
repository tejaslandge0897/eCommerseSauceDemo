import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckOutPage';
import { CheckoutOverviewPage } from '../../pages/CheckOutOverViewPage';
import { CheckoutCompletePage } from '../../pages/CheckOutCompletePage';
import products from '../../test-data/products.json';
import checkOut from '../../test-data/checkOut.json';

test('User can proceed to checkout', async ({ page }) => {

    await page.goto('/inventory.html');

    const productsPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkPage = new CheckoutPage(page);
    const overViewPage = new CheckoutOverviewPage(page);
    const checkCompletePage = new CheckoutCompletePage(page);

    await productsPage.addProductToCart(products.backpack.name);

    await productsPage.openCart();

    await expect(cartPage.cartItems).toContainText(
        products.backpack.name
    );

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one.html/);

    await checkPage.fillCustomerInformation(
        checkOut.customer.firstName,
        checkOut.customer.lastName,
        checkOut.customer.postalCode
    );

    await checkPage.continueToOverview();

    await expect(overViewPage.cartItems)
        .toContainText(products.backpack.name);

    await overViewPage.finishOrder();

    await expect(checkCompletePage.successMessage)
        .toBeVisible();
});