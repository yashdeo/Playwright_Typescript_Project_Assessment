import { test, expect } from "@fixtures";

test.describe("Landing Page Tests", () => {

  test.beforeEach(async ({ allPages }) => {
    await allPages.openBaseURL();
  });

  test("Verify landing page loads correctly", async ({ allPages }) => {
    await allPages.landingPage.verifyLandingPage();
  });


});
