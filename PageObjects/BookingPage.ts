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
  private readonly messageSentConfirmation;

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
    this.messageSentConfirmation = page.getByRole('heading', { name: 'Thanks for getting in touch' });
  }

  async checkBookingSection() {
  if (await this.messageSentConfirmation.isVisible()){
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
    }
    await expect(this.checkAvailabilityBtn).toBeVisible();
    await expect(this.bookingSection).toContainText("Check Availability");
  }

  /*async submitContactForm() {
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
*/

async submitContactForm(data:any) {
  await Promise.all([
    this.contactName.fill(data.name),
    this.contactEmail.fill(data.email),
    this.contactPhone.fill(data.phone),
    this.contactSubject.fill(data.subject),
    this.contactDescription.fill(data.message),
  ]);
}

async selectDates(checkinDate: string, checkoutDate: string) {
    await this.page.getByRole('textbox').first().click();
    await this.page.getByRole('option', { name: `Choose ${checkinDate}` }).click();
    await this.page.getByRole('textbox').nth(1).click();
    await this.page.getByRole('option', { name: `Choose ${checkoutDate}` }).click();
    await this.page.getByRole('button', { name: 'Check Availability' }).click();
  }

}
