import { test } from "@playwright/test";
import { LandingPage } from "../../PageObjects/LandingPage.ts"
import { BookingPage } from "../../PageObjects/BookingPage.ts";

test("Verify Booking and Contact form", async ({ page }) => {
  const landing = new LandingPage(page);
  const booking = new BookingPage(page);
  await landing.open();
  await landing.navigateToBooking();
  await booking.checkBookingSection();
  await landing.navigateToContact();
  await booking.submitContactForm();
});
