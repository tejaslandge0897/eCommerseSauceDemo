import {test, expect} from "@playwright/test"
import {LoginPage} from '../../pages/LoginPage'
import users from '../../test-data/users.json'

test("User should Login Successfully",async({page})=>{
    const loginPage= new LoginPage(page)
    await page.goto('/')

    await loginPage.login(users.standardUser.username,users.standardUser.password)
    await expect(page).toHaveURL(/inventory.html/)
})