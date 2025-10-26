import { test } from '../../../test-utils'
import { product3 } from '../../../test-data'
import { Product3MobileLogin, Product3MobileDeposit } from '../../../test-classes'

product3.geos.forEach(geo => {
  test.describe(() => {
    let productLogin, productDeposit

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product3MobileLogin(page)
      productDeposit = new Product3MobileDeposit(page)
    })
 
    test(`Product3 - MOBILE - Deposit - ${geo.name} : ${geo.locale}`, async () => {
      await productDeposit.openStartPage(product3.url)
      await productLogin.performLogin()
      await productDeposit.enterPaymentInformation()
      await productDeposit.verifyDepositButtonIsActive()
    })
  })
})