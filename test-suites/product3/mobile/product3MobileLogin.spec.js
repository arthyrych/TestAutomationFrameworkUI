import { test } from '../../../test-utils'
import { product3 } from '../../../test-data'
import { Product3MobileLogin } from '../../../test-classes'

product3.geos.forEach(geo => {
  test.describe(() => {
    let productLogin

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new Product3MobileLogin(page)
    })
 
    test(`Product3 - MOBILE - Login - ${geo.name} : ${geo.locale}`, async () => {
      await productLogin.openStartPage(product3.url)
      await productLogin.clickLoginButton()
      await productLogin.enterEmail()
      await productLogin.enterPassword()
      await productLogin.clickSubmitButton()
      await productLogin.verifyLogin()
    })
  })
})