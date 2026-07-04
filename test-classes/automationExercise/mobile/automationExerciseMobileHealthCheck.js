import { BaseHealthCheck } from '../../base'

export class AutomationExerciseMobileHealthCheck extends BaseHealthCheck {
  constructor(page) {
    super(page)
    this.layoutLocator = this.page.locator('.login-form')
    this.headerLocator = this.page.locator('#header')
    this.footerLocator = this.page.locator('#footer')
  }
}
