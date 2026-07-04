// Demo products point at public practice sites; noProxy: true skips the proxy lookup in the page fixture
// Geo names must be keys of phones.js - BaseRegistration generates a phone from geo.name
// Geos are demo-only (no real geo-targeting), reused from the former real products just to exercise multiple locales

export const sauceDemo = {
  url: "https://www.saucedemo.com",
  nativeUrl: "https://www.saucedemo.com",
  geos: [
    { name: "UnitedKingdom", locale: "en", noProxy: true },
    { name: "Germany", locale: "de", noProxy: true },
    { name: "Poland", locale: "pl", noProxy: true }
  ]
}

export const theInternet = {
  url: "https://the-internet.herokuapp.com/login",
  nativeUrl: "https://the-internet.herokuapp.com",
  geos: [
    { name: "UnitedKingdom", locale: "en", noProxy: true },
    { name: "Canada", locale: "en-CA", noProxy: true },
    { name: "Netherlands", locale: "en", noProxy: true }
  ]
}

export const automationExercise = {
  url: "https://automationexercise.com/login",
  nativeUrl: "https://automationexercise.com",
  geos: [
    // Fewer geos: each run creates a real throwaway account on the site
    { name: "UnitedKingdom", locale: "en", noProxy: true },
    { name: "Germany", locale: "de", noProxy: true }
  ]
}

export const expandTesting = {
  url: "https://practice.expandtesting.com/login",
  nativeUrl: "https://practice.expandtesting.com",
  geos: [
    { name: "UnitedKingdom", locale: "en", noProxy: true },
    { name: "Switzerland", locale: "de", noProxy: true },
    { name: "Austria", locale: "de", noProxy: true }
  ]
}
