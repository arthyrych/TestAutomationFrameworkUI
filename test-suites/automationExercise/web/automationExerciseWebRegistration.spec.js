import { test } from "../../../test-utils"
import { automationExercise } from "../../../test-data"
import { AutomationExerciseWebRegistration } from "../../../test-classes"

automationExercise.geos.forEach(geo => {
  test.describe(() => {
    let productRegistration

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productRegistration = new AutomationExerciseWebRegistration(page, geo)
    })

    test(`AutomationExercise - WEB - Registration - ${geo.name} : ${geo.locale}`, async () => {
      // Ads keep the network busy, so the spec skips waiting for the networkidle state
      await productRegistration.openStartPageWithoutLoadState(automationExercise.url)
      await productRegistration.submitEmailAndPassword()
      await productRegistration.submitPersonalDetails()
      await productRegistration.verifySignUp()
    })
  })
})
