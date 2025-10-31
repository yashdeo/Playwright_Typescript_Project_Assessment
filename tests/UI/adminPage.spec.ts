import { test } from "@playwright/test";
import { LandingPage } from "../../PageObjects/LandingPage.ts"
import { AdminPage } from "../../PageObjects/AdminPage.ts"

test("Admin login and logout flow", async ({ page }) => {
  const landing = new LandingPage(page);
  const admin = new AdminPage(page);

  await landing.open();
  await landing.navigateToAdmin();
  await admin.login("testtester", "Password1");
  await admin.verifyInvalidLogin();
  await admin.verifyLoggedIn();
  await admin.logout();
});
