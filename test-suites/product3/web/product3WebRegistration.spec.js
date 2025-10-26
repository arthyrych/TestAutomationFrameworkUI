import { test } from '../../../test-utils'
import { product3 } from '../../../test-data'
import { Product3WebRegistration } from '../../../test-classes'

product3.geos.forEach(geo => {
  test.describe(() => {
    let productRegistration

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productRegistration = new Product3WebRegistration(page, geo)
    })
 
    test(`Product3 - WEB - Registration - ${geo.name} : ${geo.locale}`, async () => {
      await productRegistration.openStartPage(product3.url)
      await productRegistration.submitEmailAndPassword()
      await productRegistration.submitPersonalDetails()
      await productRegistration.verifySignUp()
    })
  })
})