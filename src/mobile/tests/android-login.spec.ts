import { test, expect } from '@playwright/test';
import { AndroidLoginPage } from '../pages/android-login.page.js';
import { webCredentials } from '../../test-data/credentials.js';

const validUsername = webCredentials.username;
const validPassword = webCredentials.password;

test.describe('Android mobile login', () => {
  test('should log in using Android emulator profile', async ({ page }) => {
    const loginPage = new AndroidLoginPage(page);
    await loginPage.navigate();
    await loginPage.login(validUsername, validPassword);
    await expect(page).toHaveURL(/logged-in-successfully|login-success/);
  });
});
