import { test } from "../../../test-utils"
import { automationExercise } from "../../../test-data"
import { AutomationExerciseWebHealthCheck } from "../../../test-classes"

automationExercise.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new AutomationExerciseWebHealthCheck(page)
    })

    test(`AutomationExercise - WEB - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      // Ads keep the network busy, so the spec skips waiting for the networkidle state
      await productHealth.openStartPageWithoutLoadState(automationExercise.url)
      await productHealth.verifyHealthCheck()
    })
  })
})
