import { BaseHealthCheck } from '../../base'

export class Product2MobileHealthCheck extends BaseHealthCheck {
  constructor(page) {
    super(page)
    this.layoutLocator = this.page.locator('#__layout')
    this.headerLocator = this.page.locator('.t-header')
    this.footerLocator = this.page.locator('.t-footer')
  }
}