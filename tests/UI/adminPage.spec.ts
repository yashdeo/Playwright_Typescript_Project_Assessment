import { test, expect } from "@fixtures";

test.describe("Admin Page Tests", () => {

  test.beforeEach(async ({ allPages }) => {
    await allPages.openBaseURL();
    await allPages.landingPage.navigateToAdmin();
  });

  test("Admin login and logout flow", async ({ allPages }) => {
    const { adminPage } = allPages;

    await adminPage.login("testtester", "Password1");
    await adminPage.verifyInvalidLogin(); // for invalid creds scenario
    await adminPage.verifyLoggedIn();     // or skip if invalid only
    await adminPage.logout();
  });
});
