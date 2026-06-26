import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../framework/patterns/base-page.js';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    super(page);
    this.loginForm = page.locator('form');
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
  }

  async navigate(): Promise<void> {
    await super.navigate('/practice-test-login/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.submitButton);
  }

  async isFormVisible(): Promise<boolean> {
    return this.isVisible(this.loginForm);
  }
}
