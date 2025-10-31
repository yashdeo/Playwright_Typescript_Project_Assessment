import { test } from "@playwright/test";
import { LandingPage } from "../../PageObjects/LandingPage";

test.describe("Landing Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.open();
  });

  test("Verify landing page loads correctly", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.verifyLandingPage();
  });

  test("Navigate to Rooms section", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.navigateToRooms();
  });

  test("Navigate to Booking section", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.navigateToBooking();
  });

  test("Navigate to Location section", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.navigateToLocation();
  });
});
