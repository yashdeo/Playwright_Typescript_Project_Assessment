import { test, expect } from "./fixtures/allPageFixture"; // ✅ use your fixture version

test.only("Admin login and logout flow", async ({ allPages }) => {
   const { landingPage, adminPage } = allPages;

  await landingPage.open();
  await landingPage.navigateToAdmin();

  await adminPage.login("testtester", "Password1");
  await adminPage.verifyInvalidLogin(); // if invalid credentials are expected
  await adminPage.verifyLoggedIn();     // or skip this if only testing invalid login
  await adminPage.logout();
});

