// Context option presets used by playwright.config.js - the engine (browserName) is set separately per project

export const deviceConfigs = {
  // desktop chrome
  dc: {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 720 },
    isMobile: false
  },
  // desktop safari
  ds: {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
    viewport: { width: 1280, height: 720 },
    isMobile: false
  },
  // mobile chrome
  mc: {
    userAgent:
      "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
    viewport: { width: 412, height: 915 },
    isMobile: true,
    deviceScaleFactor: 3,
    hasTouch: true
  },
  // mobile safari
  ms: {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    viewport: { width: 393, height: 852 },
    isMobile: true,
    deviceScaleFactor: 3,
    hasTouch: true
  }
}
