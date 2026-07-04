import { BaseHealthCheck } from '../../base'

export class TheInternetWebHealthCheck extends BaseHealthCheck {
  constructor(page) {
    super(page)
    this.layoutLocator = this.page.locator('#content')
    this.headerLocator = this.page.locator('h2')
    this.footerLocator = this.page.locator('#page-footer')
  }
}
