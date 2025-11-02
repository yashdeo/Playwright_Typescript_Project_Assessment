import { test, expect } from "@fixtures";

test("Verify Booking and Contact form", async ({ allPages }) => {
  await allPages.openBaseURL();
  await allPages.landingPage.navigateToBooking();
  await allPages.bookingPage.checkBookingSection();
  await allPages.landingPage.navigateToContact();
  await allPages.bookingPage.submitContactForm();
});
