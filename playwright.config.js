import { defineConfig } from "@playwright/test"
import { generateReportFolder } from "./test-utils"
import { deviceConfigs } from "./test-data"

export default defineConfig({
  retries: 2,
  fullyParallel: true,
  workers: process.env.CI ? 2 : 2,
  timeout: 90000,
  use: { trace: "retain-on-failure" },
  reporter: [
    ["list", { open: "never" }], // console report
    ["html", { open: "never", outputFolder: generateReportFolder() }], // HTML report
    ["allure-playwright"] // allure report
  ],
  projects: [
    {
      name: "Desktop Chrome",
      grep: /WEB/,
      use: { ...deviceConfigs.dc, browserName: "chromium" }
    },
    {
      name: "Desktop Safari",
      grep: /WEB/,
      use: { ...deviceConfigs.ds, browserName: "webkit" }
    },
    {
      name: "Mobile Chrome",
      grep: /MOBILE/,
      use: { ...deviceConfigs.mc, browserName: "chromium" }
    },
    {
      name: "Mobile Safari",
      grep: /MOBILE/,
      use: { ...deviceConfigs.ms, browserName: "webkit" }
    }
  ]
})
