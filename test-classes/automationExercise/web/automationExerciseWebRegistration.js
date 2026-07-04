import { BaseRegistration } from "../../base"

export class AutomationExerciseWebRegistration extends BaseRegistration {
  constructor(page, geo) {
    super(page, geo)

    this.nameInput = this.page.locator('[data-qa="signup-name"]')
    this.emailInput = this.page.locator('[data-qa="signup-email"]')
    this.signUpButton = this.page.locator('[data-qa="signup-button"]')

    this.passwordInput = this.page.locator('[data-qa="password"]')
    this.firstNameInput = this.page.locator('[data-qa="first_name"]')
    this.lastNameInput = this.page.locator('[data-qa="last_name"]')
    this.addressInput = this.page.locator('[data-qa="address"]')
    this.stateInput = this.page.locator('[data-qa="state"]')
    this.cityInput = this.page.locator('[data-qa="city"]')
    this.zipCodeInput = this.page.locator('[data-qa="zipcode"]')
    this.phoneInput = this.page.locator('[data-qa="mobile_number"]')
    this.submitButton = this.page.locator('[data-qa="create-account"]')
    this.accountCreatedMessage = this.page.locator('[data-qa="account-created"]')
  }

  // Signup starts with name + email; the password is entered on the account details form
  async submitEmailAndPassword() {
    await this.nameInput.fill(this.firstName)
    await this.enterEmail()
    await this.clickSignUpButton()
    await this.enterPassword()
  }

  // The account details form also requires the address fields
  async submitPersonalDetails() {
    await this.enterFirstName()
    await this.enterLastName()
    await this.addressInput.fill(this.address.street)
    await this.stateInput.fill(this.address.city)
    await this.cityInput.fill(this.address.city)
    await this.zipCodeInput.fill(this.address.postCode)
    await this.enterPhone()
    await this.clickSubmitButton()
  }

  async verifySignUp() {
    await this.elementIsVisible(this.accountCreatedMessage)
  }
}
