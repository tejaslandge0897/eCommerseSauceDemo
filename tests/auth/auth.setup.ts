import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import users from '../../test-data/users.json';

setup('authenticate', async ({ page }) => {

    await page.goto('/');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});