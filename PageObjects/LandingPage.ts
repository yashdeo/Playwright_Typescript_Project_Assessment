import { Page, expect } from "@playwright/test";

export class LandingPage {
  private readonly logoLink;
  private readonly navRooms;
  private readonly navBooking;
  private readonly navAmenities;
  private readonly navLocation;
  private readonly navContact;
  private readonly navAdmin;
  private readonly checkInInput;
  private readonly checkOutInput;
  private readonly checkAvailibilityButton;
  private readonly roomsSection;
  

  constructor(private page: Page) {
    this.logoLink = page.getByRole("link", { name: "Shady Meadows B&B" });
    this.navRooms = page.locator("#navbarNav").getByRole("link", { name: "Rooms" });
    this.navBooking = page.locator("#navbarNav").getByRole("link", { name: "Booking" });
    this.navAmenities = page.getByRole("link", { name: "Amenities" });
    this.navLocation = page.getByRole("link", { name: "Location" });
    this.navContact = page.locator("#navbarNav").getByRole("link", { name: "Contact" });
    this.navAdmin = page.getByRole("link", { name: "Admin", exact: true });
    this.checkInInput = page.locator('div:has(label:text("Check In")) input');
    this.checkOutInput = page.locator('div:has(label:text("Check Out")) input');
    this.checkAvailibilityButton= page.getByRole('button', { name: 'Check Availability' });
    this.roomsSection =  page.getByText('Comfortable beds and delightful breakfast from locally sourced ingredients');

  }

  async open() {
    await this.page.goto("/", { waitUntil: "load" });
  }

  async verifyLandingPage() {
    await expect(this.logoLink).toBeVisible();
    await expect(this.navRooms).toBeVisible();
    await expect(this.navBooking).toBeVisible();
    await expect(this.navAmenities).toBeVisible();
    await expect(this.navLocation).toBeVisible();
  }

  async navigateToRooms() {
    await this.navRooms.click();
    await expect(this.page.getByRole("heading", { name: "Our Rooms" })).toBeVisible();
  }

  async navigateToBooking() {
    await this.navBooking.click();
    await expect(this.page.getByRole("button", { name: "Check Availability" })).toBeVisible();
  }

  async navigateToLocation() {
    await this.navLocation.click();
    await expect(this.page.getByRole("heading", { name: "Our Location" })).toBeVisible();
  }

  async navigateToContact() {
    await this.navContact.click();
    await expect(this.page.locator("#contact")).toBeVisible();
  }

  async navigateToAdmin() {
    await this.navAdmin.click();
    await expect(this.page.getByRole("heading")).toContainText("Login");
  }
}
