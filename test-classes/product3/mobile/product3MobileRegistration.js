import { BaseRegistration } from '../../base'

const submitPersonalDetailsFlows = {
  UnitedKingdom: ['enterFirstName', 'enterLastName', 'enterDateOfBirth', 'clickSubmitButton'],
  default: ['enterPhone', 'clickSubmitButton'],
}

export class Product3MobileRegistration extends BaseRegistration {
  constructor(page, geo) {
    super(page, geo)

    this.geo = geo

    this.signUpButton = this.page.locator('[class="header__button link-btn--small link-btn link-btn--primary"]')
    this.emailInput = this.page.locator('#registration-dynamic-form__email')
    this.passwordInput = this.page.locator('.registration-dynamic-form__password_input [name="password_single"]')
    this.nextButton = this.page.locator('.registration-dynamic-form__submit-button')

    this.firstNameInput = this.page.locator('input[name="first_name"]')
    this.lastNameInput = this.page.locator('input[name="last_name"]')
    this.dayOfBirthInput = this.page.locator('input[name="date_of_birth_day"]')
    this.dayOfBirthDropdownItem = this.page.locator('#date_of_birth_day-item-0')
    this.monthOfBirthInput = this.page.locator('input[name="date_of_birth_month"]')
    this.monthOfBirthDropdownItem = this.page.locator('#date_of_birth_month-item-0')
    this.yearOfBirthInput = this.page.locator('input[name="date_of_birth_year"]')
    this.yearOfBirthDropdownItem = this.page.locator('#date_of_birth_year-item-0')

    this.phoneInput = this.page.locator('input[name="mobile_phone-number"]')
    this.submitButton = this.page.locator('[type="submit"].registration-dynamic-form__submit-button')

    this.depositButton = this.page.locator('.fast-deposit-modal')
  }

  // Submitting personal details based on geolocation with Configuration-Driven Approach
  async submitPersonalDetails() {
    const steps = submitPersonalDetailsFlows[this.geo.name] || submitPersonalDetailsFlows.default
    for (const step of steps) {
      await this[step]()
    }
  }

  async enterDateOfBirth() {
    await this.dayOfBirthInput.click()
    await this.dayOfBirthDropdownItem.click()
    await this.monthOfBirthInput.click()
    await this.monthOfBirthDropdownItem.click()
    await this.yearOfBirthInput.click()
    await this.yearOfBirthDropdownItem.click()
  }
}