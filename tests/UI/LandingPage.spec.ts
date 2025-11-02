import { test, expect } from "@fixtures";

test.describe("Landing Page Tests", () => {

  test.beforeEach(async ({ allPages }) => {
    await allPages.openBaseURL();
  });

  test("Verify landing page loads correctly", async ({ allPages }) => {
    await allPages.landingPage.verifyLandingPage();
  });

  test("Navigate to Rooms section", async ({ allPages }) => {
    await allPages.landingPage.navigateToRooms();
  });

  test("Navigate to Booking section", async ({ allPages }) => {
    await allPages.landingPage.navigateToBooking();
  });

  test("Navigate to Location section", async ({ allPages }) => {
    await allPages.landingPage.navigateToLocation();
  });

});
