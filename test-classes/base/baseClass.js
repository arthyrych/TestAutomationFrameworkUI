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

  async elementIsVisible(element, timeout = 30000) {
    await expect(element).toBeVisible({ timeout })
  }

  async closeModal(modalCloseButton) {
    if (await modalCloseButton.isVisible()) {
      await modalCloseButton.click()
      await modalCloseButton.waitFor({ state: "hidden" })
    }
  }

  async closeModalWithTimeout(modalCloseButton, timeout = 2000) {
    // The modal is optional - if it does not appear or close within the timeout, continue silently
    const appeared = await modalCloseButton
      .waitFor({ state: "visible", timeout })
      .then(() => true)
      .catch(() => false)
    if (!appeared) return

    // Best-effort close - a visible button can still be covered mid-animation, so bound the click
    await modalCloseButton.click({ timeout }).catch(() => {})
    await modalCloseButton.waitFor({ state: "hidden", timeout }).catch(() => {})
  }
}
