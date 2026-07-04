import { faker } from '@faker-js/faker'

export const users = {
  regular: {
    email: "test-email@gmail.com",
    login: "testlogin",
    password: "TestPassQwer1234!",
    firstName: "TestFirstname",
    lastName: "TestLastname",
    dateOfBirth: {
      day: "15",
      month: "3",
      year: "1990"
    },
    address: {
      city: "Testcity",
      street: "Teststreet",
      postCode: "69006"
    },
    creditCard: {
      number: "Test number", // TBD
      expiryDate: "Test expiry date", // TBD
      CVV: "Test CVV" // TBD
    }
  },
  // Public credentials of the demo practice sites - not secrets
  demo: {
    sauceDemo: { login: "standard_user", password: "secret_sauce" },
    theInternet: { login: "tomsmith", password: "SuperSecretPassword!" },
    expandTesting: { login: "practice", password: "SuperSecretPassword!" },
  },
  generateRandom(entity) {
    const UNIX_TIMESTAMP = Date.now()
    switch (entity) {
      case "email":
        return `test-email-${UNIX_TIMESTAMP}@google.com`
      case "login":
        return `Log${UNIX_TIMESTAMP}`
      case "firstName":
        return faker.person.firstName()
      case "middleName":
        return faker.person.middleName()
      case "lastName":
        return faker.person.lastName()
      case "creditCardNumber":
        return faker.finance.creditCardNumber()
      default:
        throw new Error(`Unsupported entity type: ${entity}`)
    }
  }
}