import { test } from '../../../test-utils'
import { product2 } from '../../../test-data'
import { Product2MobileHealthCheck } from '../../../test-classes'

product2.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new Product2MobileHealthCheck(page)
    })
 
    test(`Product2 - MOBILE - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPageWithoutLoadState(product2.url)
      await productHealth.verifyHealthCheck()
    })
  })
})