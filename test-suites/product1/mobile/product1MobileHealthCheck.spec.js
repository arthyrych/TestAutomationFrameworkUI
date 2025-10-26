import { test } from '../../../test-utils'
import { product1 } from '../../../test-data'
import { Product1MobileHealthCheck } from '../../../test-classes'

product1.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new Product1MobileHealthCheck(page)
    })
 
    test(`Product1 - MOBILE - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(product1.url)
      await productHealth.verifyHealthCheck()
    })
  })
})