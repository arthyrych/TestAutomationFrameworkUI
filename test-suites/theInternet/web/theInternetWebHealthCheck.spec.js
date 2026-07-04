import { test } from "../../../test-utils"
import { theInternet } from "../../../test-data"
import { TheInternetWebHealthCheck } from "../../../test-classes"

theInternet.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new TheInternetWebHealthCheck(page)
    })

    test(`TheInternet - WEB - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(theInternet.url)
      await productHealth.verifyHealthCheck()
    })
  })
})
