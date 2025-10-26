import { test } from '../../../test-utils'
import { product1 } from '../../../test-data'
import { Product1WebLogin, Product1WebDeposit } from '../../../test-classes'

product1.geos.forEach(geo => {
  test.describe(() => {
    let productLogin, productDeposit

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product1WebLogin(page)
      productDeposit = new Product1WebDeposit(page)
    })
 
    test(`Product1 - WEB - Deposit - ${geo.name} : ${geo.locale}`, async () => {
      await productDeposit.openStartPage(product1.url)
      await productLogin.performLogin()
      await productDeposit.enterPaymentInformation()
      await productDeposit.verifyDepositButtonIsActive()
    })
  })
})