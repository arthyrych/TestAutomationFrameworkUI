import { BaseDeposit } from '../../base'

export class Product2WebDeposit extends BaseDeposit {
  constructor(page) {
    super(page)

    this.depositButton = this.page.locator('[data-testid="quick-deposit-button"]')
    this.depositModalCreditCardPaymentMethodOption = this.page.locator('[data-testid="deposit-method-4"]')
    this.depositModalDepositButton = this.page.locator('[data-testid="deposit-confirm-button"]')
  }

  async enterPaymentInformation() {
    await this.depositButton.click()
    await this.depositModalCreditCardPaymentMethodOption.click()
  }
}