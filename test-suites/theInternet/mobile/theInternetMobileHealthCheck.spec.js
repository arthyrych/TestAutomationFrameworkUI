import { test } from "../../../test-utils"
import { theInternet } from "../../../test-data"
import { TheInternetMobileHealthCheck } from "../../../test-classes"

theInternet.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new TheInternetMobileHealthCheck(page)
    })

    test(`TheInternet - MOBILE - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(theInternet.url)
      await productHealth.verifyHealthCheck()
    })
  })
})
