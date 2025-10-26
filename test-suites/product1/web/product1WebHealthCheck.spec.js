import { test } from '../../../test-utils'
import { product1 } from '../../../test-data'
import { Product1WebHealthCheck } from '../../../test-classes'

product1.geos.forEach(geo => {
  test.describe(() => {
    let productHealth

    test.use({ geo })

    test.beforeEach(({ page }) => {
      productHealth = new Product1WebHealthCheck(page)
    })
 
    test(`Product1 - WEB - HealthCheck - ${geo.name} : ${geo.locale}`, async () => {
      await productHealth.openStartPage(product1.url)
      await productHealth.verifyHealthCheck()
    })
  })
})