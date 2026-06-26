import { test as base, expect, Page, TestInfo } from '@playwright/test';
import { attachFailureArtifacts } from '../reporting/reporting.js';

export const test = base.extend<{ page: Page }>({
  page: async ({ page }, use) => {
    await use(page);
  }
});

test.afterEach(async ({ page }, testInfo: TestInfo) => {
  if (testInfo.status !== 'passed') {
    await attachFailureArtifacts(page, testInfo);
  }
});

export { expect };
