import { test } from '../../../test-utils'
import { product2 } from '../../../test-data'
import { Product2MobileLogin, Product2MobileDeposit } from '../../../test-classes'

product2.geos.forEach(geo => {
  test.describe(() => {
    let productLogin, productDeposit

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product2MobileLogin(page)
      productDeposit = new Product2MobileDeposit(page)
    })
 
    test(`Product2 - MOBILE - Deposit - ${geo.name} : ${geo.locale}`, async () => {
      await productDeposit.openStartPageWithoutLoadState(product2.url)
      await productLogin.performLogin()
      await productDeposit.enterPaymentInformation()
      await productDeposit.verifyDepositButtonIsActive()
    })
  })
})