import { Page, expect } from "@playwright/test";

export class AdminPage {
  readonly page: Page;
  readonly usernameField;
  readonly passwordField;
  readonly loginBtn;
  readonly logoutBtn;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.getByRole("textbox", { name: "Username" });
    this.passwordField = page.getByRole("textbox", { name: "Password" });
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.logoutBtn = page.getByRole("button", { name: "Logout" });
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }

  async verifyInvalidLogin() {
    await expect(this.page.locator("#root-container")).toContainText("Invalid credentials");
  }

  async verifyLoggedIn() {
    await expect(this.page.locator("#navbarSupportedContent")).toContainText("Logout");
  }

  async logout() {
    await this.logoutBtn.click();
    await expect(this.page.getByRole("heading", { name: "Welcome to Shady Meadows B&B" })).toBeVisible();
  }
}
