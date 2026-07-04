import { BaseLogin } from "../../base"
import { users } from "../../../test-data"

export class SauceDemoWebLogin extends BaseLogin {
  constructor(page) {
    super(page)
    this.login = users.demo.sauceDemo.login
    this.password = users.demo.sauceDemo.password

    this.loginInput = this.page.locator('[data-test="username"]')
    this.passwordInput = this.page.locator('[data-test="password"]')
    this.submitButton = this.page.locator('[data-test="login-button"]')
    this.inventoryList = this.page.locator('[data-test="inventory-list"]')
  }

  // The start page is the login form itself, so there is no login button to click
  async verifyLogin() {
    await this.elementIsVisible(this.inventoryList)
  }
}
