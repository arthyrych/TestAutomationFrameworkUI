import { BaseHealthCheck } from '../../base'

export class SauceDemoWebHealthCheck extends BaseHealthCheck {
  constructor(page) {
    super(page)
    this.layoutLocator = this.page.locator('[data-test="login-container"]')
    this.headerLocator = this.page.locator('.login_logo')
    this.footerLocator = this.page.locator('[data-test="login-credentials"]')
  }
}
