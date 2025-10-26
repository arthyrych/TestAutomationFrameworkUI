import { BaseDeposit } from '../../base'

export class Product1WebDeposit extends BaseDeposit {
  constructor(page) {
    super(page)

    this.depositButton = this.page.locator('[data-testid="quick-deposit-button"]')

    this.depositModalDepositButton = this.page.locator('[data-testid="deposit-modal"] button')
  }

  async enterPaymentInformation() {
    await this.depositButton.click()
  }
}