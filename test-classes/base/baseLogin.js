import { BaseClass } from './baseClass'
import { users } from '../../test-data'

export class BaseLogin extends BaseClass {
  constructor(page) {
    super(page)

    this.login = users.regular.login
    this.email = users.regular.email
    this.password = users.regular.password
  }

  async clickLoginButton() {
    await this.loginButton.click()
  }

  async enterLogin() {
    await this.loginInput.fill(this.login)
  }

  async enterEmail() {
    await this.emailInput.fill(this.email)
  }
  
  async enterPassword() {
    await this.passwordInput.fill(this.password)
  }

  async clickSubmitButton() {
    await this.submitButton.click()
  }

  async verifyLogin() {
    await this.elementIsVisible(this.depositButton)
  }

  async performLogin() {
    await this.clickLoginButton()
    await this.enterEmail()
    await this.enterPassword()
    await this.clickSubmitButton()
    await this.verifyLogin()
  }
}