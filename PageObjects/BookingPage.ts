import { Page, expect } from "@playwright/test";

export class BookingPage {
  readonly page: Page;
  readonly checkAvailabilityBtn;

  constructor(page: Page) {
    this.page = page;
    this.checkAvailabilityBtn = page.getByRole("button", { name: "Check Availability" });
  
  }

  async checkBookingSection() {
    await expect(this.checkAvailabilityBtn).toBeVisible();
    await expect(this.page.locator("#booking")).toContainText("Check Availability");
  }

  async submitContactForm() {
    const { page } = this;
    await page.getByTestId("ContactName").fill("Test Testers");
    await page.getByTestId("ContactEmail").fill("testers@info.com");
    await page.getByTestId("ContactPhone").fill("0999777666666");
    await page.getByTestId("ContactSubject").fill("Room Booking");
    await page.getByTestId("ContactDescription").fill(
      "Hello,\n\nPlease send me the details of delux room charges.\n\nThanks"
    );
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator("#contact")).toContainText("Thanks for getting in touch Test Testers!");
  }
}
