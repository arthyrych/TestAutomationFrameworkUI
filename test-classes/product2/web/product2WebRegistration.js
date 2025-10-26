import { BaseRegistration } from '../../base'

export class Product2WebRegistration extends BaseRegistration {
  constructor(page, geo) {
    super(page, geo)

    this.signUpButton = this.page.locator('[data-testid="signup-button"]')
    this.emailInput = this.page.locator('[data-testid="email-input"] input')
    this.passwordInput = this.page.locator('[data-testid="password-input"] input')

    this.firstNameInput = this.page.locator('.t-input__firstname input')
    this.lastNameInput = this.page.locator('.t-input__lastname input')
    this.cityInput = this.page.locator('.t-input__city input')
    this.addressInput = this.page.locator('.t-input__address input')

    this.dateOfBirthDayInput = this.page.locator('[data-testid="day-select"]')
    this.dateOfBirthDayDropdown = this.page.locator('[data-testid="day-select"] .t-dropdown__item').first()
    this.dateOfBirthMonthInput = this.page.locator('[data-testid="month-select"]')
    this.dateOfBirthMonthDropdown = this.page.locator('[data-testid="month-select"] .t-dropdown__item').first()
    this.dateOfBirthYearInput = this.page.locator('[data-testid="year-select"]')
    this.dateOfBirthYearDropdown = this.page.locator('[data-testid="year-select"] .t-dropdown__item').first()
    this.phoneInput = this.page.locator('input[type=tel]')

    this.submitButton = this.page.locator('form button').last()

    this.depositButton = this.page.locator('[data-testid="quick-deposit-button"]')
  }

  async submitEmailAndPassword() {
    await this.clickSignUpButton()
    await this.enterEmail()
    await this.enterPassword()
    await this.clickSubmitButton()
  }

  async submitPersonalDetailsPart1() {
    await this.enterFirstName()
    await this.enterLastName()
    await this.cityInput.fill(this.address.city)
    await this.addressInput.fill(this.address.street)
    await this.clickSubmitButton()
  }

  async submitPersonalDetailsPart2() {
    await this.dateOfBirthDayInput.click()
    await this.dateOfBirthDayDropdown.click()
    await this.dateOfBirthMonthInput.click()
    await this.dateOfBirthMonthDropdown.click()
    await this.dateOfBirthYearInput.click()
    await this.dateOfBirthYearDropdown.click()
    await this.enterPhone()
    await this.clickSubmitButton()
  }

  async submitPersonalDetails() {
    await this.submitPersonalDetailsPart1()
    await this.submitPersonalDetailsPart2()
  }
}