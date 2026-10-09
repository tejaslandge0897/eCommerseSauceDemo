import { test, expect } from "@playwright/test";
import { ProductPage } from "../../pages/ProductPage";

test('verify products are displayed', async ({ page }) => {

    await page.goto('/inventory.html')

    await expect(page).toHaveURL(/inventory.html/)

    const productsPage = new ProductPage(page)

    await expect(productsPage.productItems).toHaveCount(6)
});