import { test as base } from "@playwright/test"

export const test = base.extend({
  // Overwrites the existing 'page' fixture
  page: async ({ geo, browser }, use) => {
    if (!geo) throw new Error("Geo fixture is missing.")

    const contextOptions = { locale: geo.locale }

    // Demo geos (noProxy: true) run without a proxy, so demo products work on a clean clone without the proxy files
    if (!geo.noProxy) {
      let proxiesIR
      try {
        // Lazy import: the credential file only has to exist when a proxied geo runs
        proxiesIR = (await import("../../test-data/proxiesIR.js")).proxiesIR
      } catch {
        throw new Error("test-data/proxiesIR.js is missing - it is required to run non-demo products (see CLAUDE.md).")
      }

      // Selects a proxy from the list based on the 'geo' in the test
      const proxy = proxiesIR.find(proxy => proxy.name === geo.name)
      if (!proxy) throw new Error(`No proxy found for geo: ${geo.name}`)

      contextOptions.proxy = {
        server: `http://${proxy.server}`,
        username: proxy.login,
        password: proxy.password
      }
    }

    // Creates a new context using the selected proxy (if any) and the geo locale
    const context = await browser.newContext(contextOptions)

    // Creates a new page based on the context
    const page = await context.newPage()

    // Passes the created page into the test
    await use(page)
  },
  geo: undefined // Geo fixture is meant to be overridden in the test
})
