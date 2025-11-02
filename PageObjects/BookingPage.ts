import { Page, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

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
  private readonly bookNowbuttonForDouble;
  private readonly textBookThisRoom;
  private readonly buttonReserveNow;
  private readonly buttonCancel;
  private readonly firstName;
  private readonly lastName;
  private readonly email;
  private readonly phone;
  private readonly bookingConfirmMsg;
  
    

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
    this.bookNowbuttonForDouble = page.getByRole('link', { name: 'Book now' }).nth(2);
    this.textBookThisRoom = page.getByRole('heading', { name: 'Book This Room' });
    this.buttonReserveNow = page.getByRole('button', { name: 'Reserve Now' });
    this.buttonCancel =  page.getByRole('button', { name: 'Cancel' });
    this.firstName = page.getByRole('textbox', { name: 'Firstname' });
    this.lastName = page.getByRole('textbox', { name: 'Lastname' });
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.phone = page.getByRole('textbox', { name: 'Phone' });
    this.bookingConfirmMsg = page.getByRole('heading', { name: 'Booking Confirmed' });
    
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

  async selectRoomType(roomType:string){
    switch(roomType) {
      case 'single' :
        break;
      case 'double' : await this.bookNowbuttonForDouble.click();
        break;
      case 'Suite' :
        break;
    }

    await expect(this.textBookThisRoom).toBeVisible();

  }

  async completeBookingProcess(){
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const phone = faker.phone.number({ style: 'international' });
    await this.buttonReserveNow.click();
    await expect (this.buttonCancel).toBeVisible();
    //this.page.waitForLoadState("networkidle");
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.phone.fill(phone);
    await this.buttonReserveNow.click(); 
    await expect(this.bookingConfirmMsg).toBeVisible({ timeout: 60000 }); // Added explicit wait as its failing sometimes
    //bookingAmountCalculations()
  
    
  }
}
