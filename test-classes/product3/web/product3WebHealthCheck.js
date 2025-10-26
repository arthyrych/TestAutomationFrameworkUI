import { BaseHealthCheck } from '../../base'

export class Product3WebHealthCheck extends BaseHealthCheck {
  constructor(page) {
    super(page)
    this.layoutLocator = this.page.locator('.layout')
    this.headerLocator = this.page.locator('.header')
    this.footerLocator = this.page.locator('.footer')
  }
}