import {test, expect} from "../../fixtures/testFixtures"
import users from '../../test-data/users.json'

test("User should Login Successfully",async({page,loginPage})=>{
    
    await page.goto('/')

    await loginPage.login(users.standardUser.username,users.standardUser.password)
    await expect(page).toHaveURL(/inventory.html/)
})

test("User should not login with invalid credentials", async ({ page, loginPage }) => {

    await page.goto('/');

    await loginPage.login('invalid_user', 'wrong_password');

    await expect(loginPage.errorMsg).toBeVisible();

    await expect(page).not.toHaveURL(/inventory.html/);
});
