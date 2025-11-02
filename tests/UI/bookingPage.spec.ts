import { test, expect } from "@fixtures";
import {contactDetails}  from "@testdata/ContactFormData"


test("Verify Booking and Contact form", async ({ allPages }) => {
  await allPages.openBaseURL();

// Traversing through all the records
for (const record of contactDetails) {
  await allPages.landingPage.navigateToBooking();
  await allPages.bookingPage.checkBookingSection();
  await allPages.landingPage.navigateToContact();
  await allPages.bookingPage.submitContactForm(record);
}

});
