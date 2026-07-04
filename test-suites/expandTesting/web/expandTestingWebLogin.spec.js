import { test } from '../../../test-utils'
import { expandTesting } from '../../../test-data'
import { ExpandTestingWebLogin } from '../../../test-classes'

expandTesting.geos.forEach(geo => {
  test.describe(() => {
    let productLogin

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productLogin = new ExpandTestingWebLogin(page)
    })

    test(`ExpandTesting - WEB - Login - ${geo.name} : ${geo.locale}`, async () => {
      // Ads keep the network busy, so the spec skips waiting for the networkidle state
      await productLogin.openStartPageWithoutLoadState(expandTesting.url)
      await productLogin.enterLogin()
      await productLogin.enterPassword()
      await productLogin.clickSubmitButton()
      await productLogin.verifyLogin()
    })
  })
})
