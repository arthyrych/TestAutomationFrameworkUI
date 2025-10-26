import { BaseDeposit } from '../../base'

export class Product3MobileDeposit extends BaseDeposit {
  constructor(page) {
    super(page)

    this.depositModalSelectPaymentMethodOptionButton = this.page.locator('[class="fast-deposit-modal__list-methods payment-methods"]')
    this.depositModalCreditCardPaymentMethodOption = this.page.locator('[data-method-id="devcode_devcode-creditcard-17_creditcard"]')
    this.depositModalCreditCardNumberInput = this.page.locator('#encCreditcardNumber')
    this.depositModalCreditCardNameInput = this.page.locator('#cardHolder')
    this.depositModalCreditCardExpiryDateInput = this.page.locator('#expiry_date')
    this.depositModalCreditCardCVVInput = this.page.locator('#encCvv')
    this.depositModalDepositButton = this.page.locator('.fast-deposit-modal__submit button')
  }

  async enterPaymentInformation() {
    await this.depositModalSelectPaymentMethodOptionButton.click()
    await this.depositModalCreditCardPaymentMethodOption.click()
    await this.depositModalCreditCardNumberInput.fill(this.creditCardNumber)
    await this.depositModalCreditCardNameInput.fill(this.name)
    await this.depositModalCreditCardExpiryDateInput.fill(this.creditCardExpiryDate)
    await this.depositModalCreditCardCVVInput.fill(this.creditCardCVV)
  }
}