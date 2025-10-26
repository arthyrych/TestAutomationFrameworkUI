import { BaseLogin } from '../../base'

export class Product1WebLogin extends BaseLogin {
  constructor(page) {
    super(page)

    this.loginButton = this.page.locator('[data-testid="login-button"]')
    this.emailInput = this.page.locator('[data-testid="email-input"] input')
    this.passwordInput = this.page.locator('[data-testid="password-input"] input')
    this.submitButton = this.page.locator('[data-testid="signin-button"]')
    this.depositButton = this.page.locator('[data-testid="quick-deposit-button"]')
  }
}