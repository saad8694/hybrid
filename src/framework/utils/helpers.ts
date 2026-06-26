import { Page } from '@playwright/test';

export async function waitForNavigationAndLoad(page: Page): Promise<void> {
  await Promise.all([
    page.waitForLoadState('load'),
    page.waitForLoadState('networkidle')
  ]);
}

export function buildUrl(path: string): string {
  return `${process.env.BASE_URL || 'https://practicetestautomation.com'}${path}`;
}
