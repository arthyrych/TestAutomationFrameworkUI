import { test } from '../../../test-utils'
import { product2 } from '../../../test-data'
import { Product2WebRegistration } from '../../../test-classes'

product2.geos.forEach(geo => {
  test.describe(() => {
    let productRegistration

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productRegistration = new Product2WebRegistration(page, geo)
    })
 
    test(`Product2 - WEB - Registration - ${geo.name} : ${geo.locale}`, async () => {
      await productRegistration.openStartPageWithoutLoadState(product2.url)
      await productRegistration.submitEmailAndPassword()
      await productRegistration.submitPersonalDetails()
      await productRegistration.verifySignUp()
    })
  })
})