import { expect, test } from '@playwright/test';
import { test as frameworkTest } from '../../framework/base/test-base.js';
import { addTestMetadata } from '../../framework/reporting/reporting.js';
import { LoginPage } from '../pages/login.page.js';
import { webCredentials } from '../../test-data/credentials.js';

const validUsername = webCredentials.username;
const validPassword = webCredentials.password;

frameworkTest.describe('Practice Test Login', () => {
  frameworkTest('should display login form', async ({ page }) => {
    addTestMetadata('WEB-001', 'Verify login form is visible on the practice login page', 'normal');
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await expect(loginPage.usernameInput).toBeVisible();
  });

  frameworkTest('should log in with valid credentials', async ({ page }) => {
    addTestMetadata('WEB-002', 'Verify valid user can log in successfully', 'critical');
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(validUsername, validPassword);
    await expect(page).toHaveURL(/logged-in-successfully|login-success/);
  });
});
