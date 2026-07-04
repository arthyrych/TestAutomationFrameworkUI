import { BaseLogin } from "../../base"
import { users } from "../../../test-data"

export class TheInternetMobileLogin extends BaseLogin {
  constructor(page) {
    super(page)
    this.login = users.demo.theInternet.login
    this.password = users.demo.theInternet.password

    this.loginInput = this.page.locator("#username")
    this.passwordInput = this.page.locator("#password")
    this.submitButton = this.page.locator('button[type="submit"]')
    this.successFlash = this.page.locator("#flash.success")
  }

  // The start page is the login form itself, so there is no login button to click
  async verifyLogin() {
    await this.elementIsVisible(this.successFlash)
  }
}
