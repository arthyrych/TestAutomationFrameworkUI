import { test } from '../../../test-utils'
import { product2 } from '../../../test-data'
import { Product2MobileRegistration } from '../../../test-classes'

product2.geos.forEach(geo => {
  test.describe(() => {
    let productRegistration

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productRegistration = new Product2MobileRegistration(page, geo)
    })
 
    test(`Product2 - MOBILE - Registration - ${geo.name} : ${geo.locale}`, async () => {
      await productRegistration.openStartPageWithoutLoadState(product2.url)
      await productRegistration.submitEmailAndPassword()
      await productRegistration.submitPersonalDetails()
      await productRegistration.verifySignUp()
    })
  })
})