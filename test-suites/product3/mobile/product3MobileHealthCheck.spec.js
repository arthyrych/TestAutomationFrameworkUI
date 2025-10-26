import { test } from '../../../test-utils'
import { product3 } from '../../../test-data'
import { Product3MobileHealthCheck } from '../../../test-classes'

product3.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new Product3MobileHealthCheck(page)
    })
 
    test(`Product3 - MOBILE - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(product3.url)
      await productHealth.verifyHealthCheck()
    })
  })
})