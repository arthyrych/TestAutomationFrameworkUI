import { expect } from '@playwright/test'
import { BaseClass } from './baseClass'
import { users } from '../../test-data'

export class BaseDeposit extends BaseClass {
  constructor(page) {
    super(page)

    this.name = users.regular.firstName
    this.creditCardNumber = users.regular.creditCard.number
    this.creditCardExpiryDate = users.regular.creditCard.expiryDate
    this.creditCardCVV = users.regular.creditCard.CVV

    this.depositModalDepositButton = null
  }

  async enterPaymentInformation() {
    throw new Error("Method 'enterPaymentInformation' must be implemented in subclass")
  }

  async verifyDepositButtonIsActive() {
    const button = this.depositModalDepositButton
    await expect(button).toBeEnabled()
  }
}