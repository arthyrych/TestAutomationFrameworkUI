import { expect } from '@playwright/test'
import { BaseClass } from './baseClass'

export class BaseHealthCheck extends BaseClass {
  constructor(page) {
    super(page)
    this.layoutLocator = null
    this.headerLocator = null
    this.footerLocator = null
  }
  
  async verifyHealthCheck(visibilityTimeout = 10000) {
    await expect(this.layoutLocator).toBeVisible({ timeout: visibilityTimeout })
    await expect(this.headerLocator).toBeVisible({ timeout: visibilityTimeout })
    await expect(this.footerLocator).toBeVisible({ timeout: visibilityTimeout })
  }  
}