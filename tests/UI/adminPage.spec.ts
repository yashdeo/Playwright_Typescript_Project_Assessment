import { test, expect } from "../UI/fixtures/allPageFixture"; // ✅ use your fixture version

test("Admin login and logout flow", async ({ landingPage, adminPage }) => {
  await landingPage.open();
  await landingPage.navigateToAdmin();

  await adminPage.login("testtester", "Password1");
  await adminPage.verifyInvalidLogin(); // if invalid credentials are expected
  await adminPage.verifyLoggedIn();     // or skip this if only testing invalid login
  await adminPage.logout();
});

