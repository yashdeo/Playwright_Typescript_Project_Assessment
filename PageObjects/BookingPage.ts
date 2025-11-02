import { Page, expect } from "@playwright/test";

export class BookingPage {
  private readonly checkAvailabilityBtn;
  private readonly bookingSection;
  private readonly contactSection;
  private readonly contactName;
  private readonly contactEmail;
  private readonly contactPhone;
  private readonly contactSubject;
  private readonly contactDescription;
  private readonly contactSubmitBtn;

  constructor(private page: Page) {
    this.checkAvailabilityBtn = page.getByRole("button", { name: "Check Availability" });
    this.bookingSection = page.locator("#booking");
    this.contactSection = page.locator("#contact");
    this.contactName = page.getByTestId("ContactName");
    this.contactEmail = page.getByTestId("ContactEmail");
    this.contactPhone = page.getByTestId("ContactPhone");
    this.contactSubject = page.getByTestId("ContactSubject");
    this.contactDescription = page.getByTestId("ContactDescription");
    this.contactSubmitBtn = page.getByRole("button", { name: "Submit" });
  }

  async checkBookingSection() {
    await expect(this.checkAvailabilityBtn).toBeVisible();
    await expect(this.bookingSection).toContainText("Check Availability");
  }

  async submitContactForm() {
    await this.contactName.fill("Test Testers");
    await this.contactEmail.fill("testers@info.com");
    await this.contactPhone.fill("0999777666666");
    await this.contactSubject.fill("Room Booking");
    await this.contactDescription.fill(
      "Hello,\n\nPlease send me the details of deluxe room charges.\n\nThanks"
    );

    await this.contactSubmitBtn.click();

    await expect(this.contactSection).toContainText(
      "Thanks for getting in touch Test Testers!"
    );
  }
}
