import { BaseClass } from './baseClass'
import { users, generateUniquePhone } from '../../test-data'

export class BaseRegistration extends BaseClass {
  constructor(page, geo) {
    super(page)

    this.email = users.generateRandom("email")
    this.login = users.generateRandom("login")
    this.password = users.regular.password

    this.firstName = users.generateRandom("firstName")
    this.lastName = users.generateRandom("middleName") // Use middle name to avoid hyphens
    this.dateOfBirth = users.regular.dateOfBirth
    this.address = users.regular.address
    this.phone = generateUniquePhone(geo.name, "phone")
    this.fullPhone = generateUniquePhone(geo.name, "fullPhone")

    this.depositButton = null
  }

  async clickSignUpButton() {
    await this.signUpButton.click()
  }

  async enterEmail() {
    await this.emailInput.fill(this.email)
  }
  
  async enterPassword() {
    await this.passwordInput.fill(this.password)
  }

  async clickAgeTermsCheckbox() {
    await this.ageTermsCheckbox.click()
  }

  async clickNextButton() {
    await this.nextButton.click()
  }

  async submitEmailAndPassword() {
    await this.clickSignUpButton()
    await this.enterEmail()
    await this.enterPassword()
    await this.clickNextButton()
  }

  async enterFirstName() {
    await this.firstNameInput.fill(this.firstName)
  }

  async enterLastName() {
    await this.lastNameInput.fill(this.lastName)
  }

  async enterPhone() {
    await this.phoneInput.fill(this.phone)
  }

  async enterFullPhone() {
    await this.phoneInput.fill('') // Clears input
    await this.phoneInput.fill(this.fullPhone)
  }

  async clickSubmitButton() {
    await this.submitButton.click()
  }

  async submitPersonalDetails() {
    await this.enterFirstName()
    await this.enterLastName()
    await this.enterPhone()
    await this.clickSubmitButton()
  }

  async verifySignUp() {
    await this.elementIsVisible(this.depositButton)
  }
}