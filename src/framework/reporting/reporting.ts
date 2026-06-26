import fs from 'fs';
import { allure } from 'allure-playwright';
import type { Page, TestInfo } from '@playwright/test';

export type Severity = 'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';

export function addTestMetadata(testId: string, description: string, severity: Severity) {
  allure.label('testId', testId);
  allure.description(description);
  allure.severity(severity);
}

export async function attachScreenshot(page: Page, testInfo: TestInfo, name = 'screenshot') {
  const screenshot = await page.screenshot({ fullPage: true });
  await testInfo.attach(name, {
    body: screenshot,
    contentType: 'image/png'
  });
}

export async function attachVideo(testInfo: TestInfo, name = 'video') {
  const videoPath = testInfo.outputPath('video.mp4');
  if (fs.existsSync(videoPath)) {
    await testInfo.attach(name, {
      path: videoPath,
      contentType: 'video/mp4'
    });
  }
}

export async function attachTrace(testInfo: TestInfo, name = 'trace') {
  const tracePath = testInfo.outputPath('trace.zip');
  if (fs.existsSync(tracePath)) {
    await testInfo.attach(name, {
      path: tracePath,
      contentType: 'application/zip'
    });
  }
}

export async function attachFailureArtifacts(page: Page, testInfo: TestInfo) {
  await attachScreenshot(page, testInfo);
  await attachVideo(testInfo);
  await attachTrace(testInfo);
}
