import { BaseLogin } from '../../base'

export class Product3WebLogin extends BaseLogin {
  constructor(page) {
    super(page)

    this.loginButton = this.page.locator('[data-testid="Link__button"]').first()
    this.emailInput = this.page.locator('.login-form__input [name="email"]')
    this.passwordInput = this.page.locator('.login-form__input [name="password"]')
    this.submitButton = this.page.locator('[type="submit"]')
    this.depositButton = this.page.locator('.fast-deposit-modal')
  }
}