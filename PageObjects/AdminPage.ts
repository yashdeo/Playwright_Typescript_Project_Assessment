import { Page, expect } from "@playwright/test";

export class AdminPage {
  private readonly usernameField;
  private readonly passwordField;
  private readonly loginBtn;
  private readonly logoutBtn;
  private readonly rootContainer;
  private readonly navbar;

  constructor(private page: Page) {
    this.usernameField = page.getByRole("textbox", { name: "Username" });
    this.passwordField = page.getByRole("textbox", { name: "Password" });
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.logoutBtn = page.getByRole("button", { name: "Logout" });
    this.rootContainer = page.locator("#root-container");
    this.navbar = page.locator("#navbarSupportedContent");
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }

  async verifyInvalidLogin() {
    await expect(this.rootContainer).toContainText("Invalid credentials");
  }

  async verifyLoggedIn() {
    await expect(this.navbar).toContainText("Logout");
  }

  async logout() {
    await this.logoutBtn.click();
    await expect(
      this.page.getByRole("heading", { name: "Welcome to Shady Meadows B&B" })
    ).toBeVisible();
  }
}
