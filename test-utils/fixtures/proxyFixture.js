import { test as base } from '@playwright/test'
import { proxiesIR } from '../../test-data'

export const test = base.extend({
  // Overwrites the existing 'page' fixture
  page: async ({ geo, browser }, use) => {
    if (!geo) throw new Error('Geo fixture is missing.')

    // Selects a proxy from the list based on the 'geo' in the test
    const proxy = proxiesIR.find(proxy => proxy.name === geo.name)
    if (!proxy) throw new Error(`No proxy found for geo: ${geo.name}`)

    // Creates a new context using the selected proxy and the geo locale
    const context = await browser.newContext({
      proxy: {
        server: `http://${proxy.server}`,
        username: proxy.login,
        password: proxy.password
      },
      locale: geo.locale,
    })

    // Creates a new page based on the context
    const page = await context.newPage()

    // Passes the created page into the test
    await use(page)
  },
  geo: undefined, // Geo fixture is meant to be overridden in the test
})