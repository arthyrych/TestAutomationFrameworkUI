import { expect } from "@playwright/test"

export class BaseClass {
  constructor(page) {
    this.page = page
  }

  async openStartPageWithoutLoadState(url) {
    await this.page.goto(url)
  }

  async openStartPage(url) {
    // { waituntil: 'load' } is default but added for clarity
    await this.page.goto(url, { waituntil: "load" })
    await this.page.waitForLoadState("networkidle")
  }

  async elementIsVisible(element) {
    await expect(element).toBeVisible({ timeout: 30000 })
  }

  async closeModal(modalCloseButton) {
    if (await modalCloseButton.isVisible()) {
      await modalCloseButton.click()
      await modalCloseButton.waitFor({ state: "hidden" })
    }
  }

  async closeModalWithTimeout(modalCloseButton, timeout = 2000) {
    const interval = 200 // Check every 200ms
    let elapsedTime = 0

    while (elapsedTime < timeout) {
      if (await modalCloseButton.isVisible()) {
        await modalCloseButton.click()
        await modalCloseButton.waitFor({ state: "hidden" })
        return
      }
      await this.page.waitForTimeout(interval)
      elapsedTime += interval
    }
  }
}
