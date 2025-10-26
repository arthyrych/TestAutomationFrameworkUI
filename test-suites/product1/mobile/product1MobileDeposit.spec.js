import { test } from '../../../test-utils'
import { product1 } from '../../../test-data'
import { Product1MobileLogin, Product1MobileDeposit } from '../../../test-classes'

product1.geos.forEach(geo => {
  test.describe(() => {
    let productLogin, productDeposit

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product1MobileLogin(page)
      productDeposit = new Product1MobileDeposit(page)
    })
 
    test(`Product1 - MOBILE - Deposit - ${geo.name} : ${geo.locale}`, async () => {
      await productDeposit.openStartPage(product1.url)
      await productLogin.performLogin()
      await productDeposit.enterPaymentInformation()
      await productDeposit.verifyDepositButtonIsActive()
    })
  })
})