import { test } from '../../../test-utils'
import { sauceDemo } from '../../../test-data'
import { SauceDemoMobileHealthCheck } from '../../../test-classes'

sauceDemo.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new SauceDemoMobileHealthCheck(page)
    })

    test(`SauceDemo - MOBILE - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(sauceDemo.url)
      await productHealth.verifyHealthCheck()
    })
  })
})
