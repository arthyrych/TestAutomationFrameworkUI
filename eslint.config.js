import js from "@eslint/js"
import globals from "globals"
import playwright from "eslint-plugin-playwright"
import prettier from "eslint-config-prettier"

export default [
  {
    ignores: [".claude", "node_modules", "allure-results", "allure-report", "playwright-report", "test-results"]
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        // page.evaluate() callbacks execute in the browser context
        ...globals.browser
      }
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
    }
  },
  {
    // Playwright rules apply to spec files only - page-object classes use intentional waitForTimeout() calls
    files: ["test-suites/**/*.spec.js"],
    ...playwright.configs["flat/recommended"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      // Assertions live inside page-object methods, not the test body.
      "playwright/expect-expect": "off",
      // Some products are intentionally skipped with a documented reason.
      "playwright/no-skipped-test": "off"
    }
  },
  prettier
]
