import { test } from "../../../test-utils"
import { expandTesting } from "../../../test-data"
import { ExpandTestingMobileHealthCheck } from "../../../test-classes"

expandTesting.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new ExpandTestingMobileHealthCheck(page)
    })

    test(`ExpandTesting - MOBILE - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      // Ads keep the network busy, so the spec skips waiting for the networkidle state
      await productHealth.openStartPageWithoutLoadState(expandTesting.url)
      await productHealth.verifyHealthCheck()
    })
  })
})
