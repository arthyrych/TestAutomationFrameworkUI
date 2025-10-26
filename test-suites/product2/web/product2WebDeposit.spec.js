import { test } from '../../../test-utils'
import { product2 } from '../../../test-data'
import { Product2WebLogin, Product2WebDeposit } from '../../../test-classes'

product2.geos.forEach(geo => {
  test.describe(() => {
    let productLogin, productDeposit

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product2WebLogin(page)
      productDeposit = new Product2WebDeposit(page)
    })
 
    test(`Product2 - WEB - Deposit - ${geo.name} : ${geo.locale}`, async () => {
      await productDeposit.openStartPageWithoutLoadState(product2.url)
      await productLogin.performLogin()
      await productDeposit.enterPaymentInformation()
      await productDeposit.verifyDepositButtonIsActive()
    })
  })
})