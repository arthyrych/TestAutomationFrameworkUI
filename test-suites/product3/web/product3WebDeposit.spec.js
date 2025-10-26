import { test } from '../../../test-utils'
import { product3 } from '../../../test-data'
import { Product3WebLogin, Product3WebDeposit } from '../../../test-classes'

product3.geos.forEach(geo => {
  test.describe(() => {
    let productLogin, productDeposit

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product3WebLogin(page)
      productDeposit = new Product3WebDeposit(page)
    })
 
    test(`Product3 - WEB - Deposit - ${geo.name} : ${geo.locale}`, async () => {
      await productDeposit.openStartPage(product3.url)
      await productLogin.performLogin()
      await productDeposit.enterPaymentInformation()
      await productDeposit.verifyDepositButtonIsActive()
    })
  })
})