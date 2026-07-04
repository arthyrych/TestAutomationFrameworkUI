import { test } from '../../../test-utils'
import { sauceDemo } from '../../../test-data'
import { SauceDemoWebLogin } from '../../../test-classes'

sauceDemo.geos.forEach(geo => {
  test.describe(() => {
    let productLogin

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new SauceDemoWebLogin(page)
    })

    test(`SauceDemo - WEB - Login - ${geo.name} : ${geo.locale}`, async () => {
      await productLogin.openStartPage(sauceDemo.url)
      await productLogin.enterLogin()
      await productLogin.enterPassword()
      await productLogin.clickSubmitButton()
      await productLogin.verifyLogin()
    })
  })
})
