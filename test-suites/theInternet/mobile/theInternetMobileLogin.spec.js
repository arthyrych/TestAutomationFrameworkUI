import { test } from "../../../test-utils"
import { theInternet } from "../../../test-data"
import { TheInternetMobileLogin } from "../../../test-classes"

theInternet.geos.forEach(geo => {
  test.describe(() => {
    let productLogin

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new TheInternetMobileLogin(page)
    })

    test(`TheInternet - MOBILE - Login - ${geo.name} : ${geo.locale}`, async () => {
      await productLogin.openStartPage(theInternet.url)
      await productLogin.enterLogin()
      await productLogin.enterPassword()
      await productLogin.clickSubmitButton()
      await productLogin.verifyLogin()
    })
  })
})
