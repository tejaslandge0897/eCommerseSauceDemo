import { Page, Locator } from "@playwright/test";

export class LoginPage {

    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginBtn: Locator
    readonly errorMsg:Locator

    constructor(private page: Page) {
        this.usernameInput = this.page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = this.page.getByPlaceholder("Password")
        this.loginBtn = this.page.getByRole('button', { name: 'Login' })
        this.errorMsg = this.page.locator('[data-test="error"]');
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }
}