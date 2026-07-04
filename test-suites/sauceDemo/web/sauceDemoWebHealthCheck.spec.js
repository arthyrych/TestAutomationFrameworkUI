import { test } from "../../../test-utils"
import { sauceDemo } from "../../../test-data"
import { SauceDemoWebHealthCheck } from "../../../test-classes"

sauceDemo.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new SauceDemoWebHealthCheck(page)
    })

    test(`SauceDemo - WEB - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(sauceDemo.url)
      await productHealth.verifyHealthCheck()
    })
  })
})
