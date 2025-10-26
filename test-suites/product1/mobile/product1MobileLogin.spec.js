import { test } from '../../../test-utils'
import { product1 } from '../../../test-data'
import { Product1MobileLogin } from '../../../test-classes'

product1.geos.forEach(geo => {
  test.describe(() => {
    let productLogin

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product1MobileLogin(page)
    })
 
    test(`Product1 - MOBILE - Login - ${geo.name} : ${geo.locale}`, async () => {
      await productLogin.openStartPage(product1.url)
      await productLogin.clickLoginButton()
      await productLogin.enterEmail()
      await productLogin.enterPassword()
      await productLogin.clickSubmitButton()
      await productLogin.verifyLogin()
    })
  })
})