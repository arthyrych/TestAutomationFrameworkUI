import { BaseHealthCheck } from "../../base"

export class ExpandTestingWebHealthCheck extends BaseHealthCheck {
  constructor(page) {
    super(page)
    this.layoutLocator = this.page.locator("#core")
    this.headerLocator = this.page.locator("header.main-navbar")
    this.footerLocator = this.page.locator("footer")
  }
}
