import { test, expect } from "../../fixtures/testFixtures";


test('verify products are displayed', async ({ page , productPage}) => {

    await page.goto('/inventory.html')
   
    await expect(page).toHaveURL(/inventory.html/)
    
    await expect(productPage.productItems).toHaveCount(9)
});