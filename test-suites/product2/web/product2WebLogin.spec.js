import { test } from '../../../test-utils'
import { product2 } from '../../../test-data'
import { Product2WebLogin } from '../../../test-classes'

product2.geos.forEach(geo => {
  test.describe(() => {
    let productLogin

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product2WebLogin(page)
    })
 
    test(`Product2 - WEB - Login - ${geo.name} : ${geo.locale}`, async () => {
      await productLogin.openStartPageWithoutLoadState(product2.url)
      await productLogin.clickLoginButton()
      await productLogin.enterEmail()
      await productLogin.enterPassword()
      await productLogin.clickSubmitButton()
      await productLogin.verifyLogin()
    })
  })
})