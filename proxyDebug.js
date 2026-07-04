// ONLY FOR PROXY DEBUGGING
// Run the script in terminal `node proxyDebug.js <platform> <proxy_provider> <country_id>`

import { chromium, webkit } from "playwright"

// CLI ARGUMENTS: platform, provider and country ID
const args = process.argv.slice(2)
if (args.length < 3) {
  console.error("Usage: node proxyDebug.js <platform: dc|mc|ds|ms> <provider: io|bd|ir> <countryId: de|at|ch|...>")
  process.exit(1)
}

const platformArg = args[0].toLowerCase() // 'dc', 'mc', 'ds', 'ms'
const proxyProvider = args[1].toUpperCase() // 'IO' or 'BD' or 'IR'
const countryId = args[2].toUpperCase() // e.g., 'DE', 'AT', 'CH'

// Platform validation and mapping
const platformMap = {
  dc: "desktop chrome",
  mc: "mobile chrome",
  ds: "desktop safari",
  ms: "mobile safari"
}

if (!platformMap[platformArg]) {
  console.error(
    'Invalid platform. Use "dc" (desktop chrome), "mc" (mobile chrome), "ds" (desktop safari), or "ms" (mobile safari).'
  )
  process.exit(1)
}

let proxies, selectedProxy, proxyOptions

if (proxyProvider === "IO") {
  proxies = (await import("./test-data/proxiesIO.js")).proxiesIO
  selectedProxy = proxies.list.find(proxy => proxy.id === countryId)
  if (!selectedProxy) {
    console.error(`No proxy found for country ID '${countryId}' in IO provider.`)
    process.exit(1)
  }
  proxyOptions = {
    server: `http://${selectedProxy.server}`,
    username: proxies.login,
    password: proxies.password
  }
} else if (proxyProvider === "BD") {
  proxies = (await import("./test-data/proxiesBD.js")).proxiesBD
  selectedProxy = proxies.list.find(proxy => proxy.id === countryId)
  if (!selectedProxy) {
    console.error(`No proxy found for country ID '${countryId}' in BD provider.`)
    process.exit(1)
  }
  proxyOptions = {
    server: `http://${proxies.server}:${proxies.port}`,
    username: selectedProxy.login,
    password: selectedProxy.password
  }
} else if (proxyProvider === "IR") {
  proxies = (await import("./test-data/proxiesIR.js")).proxiesIR
  selectedProxy = proxies.find(proxy => proxy.id === countryId)
  if (!selectedProxy) {
    console.error(`No proxy found for country ID '${countryId}' in IR provider.`)
    process.exit(1)
  }
  proxyOptions = {
    server: `http://${selectedProxy.server}`,
    username: selectedProxy.login,
    password: selectedProxy.password
  }
} else {
  console.error('Invalid proxyProvider. Use "io" or "bd" or "ir".')
  process.exit(1)
}

;(async () => {
  const targetUrl = "https://ip.me" // target url
  const browserConfig = platformMap[platformArg]

  const browserLaunchOptions = {
    proxy: proxyOptions,
    headless: false
  }

  const configs = {
    "desktop chrome": {
      browser: chromium,
      options: {
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.198 Safari/537.36",
        viewport: { width: 1280, height: 720 },
        isMobile: false
      }
    },
    "desktop safari": {
      browser: webkit,
      options: {
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Version/14.0 Safari/537.36",
        viewport: { width: 1280, height: 720 },
        isMobile: false
      }
    },
    "mobile chrome": {
      browser: chromium,
      options: {
        userAgent:
          "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.198 Mobile Safari/537.36",
        viewport: { width: 412, height: 915 },
        isMobile: true,
        deviceScaleFactor: 3,
        hasTouch: true
      }
    },
    "mobile safari": {
      browser: webkit,
      options: {
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/537.36",
        viewport: { width: 375, height: 667 },
        isMobile: true,
        deviceScaleFactor: 2,
        hasTouch: true
      }
    }
  }

  const config = configs[browserConfig]
  if (!config) {
    console.error("Invalid browser configuration")
    return
  }

  const browser = await config.browser.launch(browserLaunchOptions)
  const context = await browser.newContext(config.options)
  const page = await context.newPage()
  await page.goto(targetUrl, { timeout: 60000 })
})()
