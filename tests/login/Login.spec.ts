import {test, expect} from "../../fixtures/testFixtures"
import users from '../../test-data/users.json'

test("User should Login Successfully",async({page,loginPage})=>{
    
    await page.goto('/')

    await loginPage.login(users.standardUser.username,users.standardUser.password)
    await expect(page).toHaveURL(/inventory.html/)
})