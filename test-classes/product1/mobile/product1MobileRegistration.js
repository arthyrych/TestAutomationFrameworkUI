import { BaseRegistration } from '../../base'

export class Product1MobileRegistration extends BaseRegistration {
  constructor(page, geo) {
    super(page, geo)

    this.signUpButton = this.page.locator('[data-testid="signup-button"]')
    this.emailInput = this.page.locator('[data-testid="email-input"] input')
    this.passwordInput = this.page.locator('[data-testid="password-input"] input')
    this.submitButton = this.page.locator('[data-testid="register-button"]')

    this.depositButton = this.page.locator('[data-testid="quick-deposit-button"]')
  }

  async submitEmailAndPassword() {
    await this.clickSignUpButton()
    await this.enterEmail()
    await this.enterPassword()
  }

  async submitPersonalDetails() {
    await this.clickSubmitButton()
  }
}