import { test } from '../../../test-utils'
import { product1 } from '../../../test-data'
import { Product1WebRegistration } from '../../../test-classes'

product1.geos.forEach(geo => {
  test.describe(() => {
    let productRegistration

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productRegistration = new Product1WebRegistration(page, geo)
    })
 
    test(`Product1 - WEB - Registration - ${geo.name} : ${geo.locale}`, async () => {
      await productRegistration.openStartPage(product1.url)
      await productRegistration.submitEmailAndPassword()
      await productRegistration.submitPersonalDetails()
      await productRegistration.verifySignUp()
    })
  })
})