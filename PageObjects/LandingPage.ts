import { Page, expect } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  readonly logoLink;
  readonly navRooms;
  readonly navBooking;
  readonly navAmenities;
  readonly navLocation;
  readonly navContact;
  readonly navAdmin;

  constructor(page: Page) {
    this.page = page;
    this.logoLink = page.getByRole("link", { name: "Shady Meadows B&B" });
    this.navRooms = page.locator("#navbarNav").getByRole("link", { name: "Rooms" });
    this.navBooking = page.locator("#navbarNav").getByRole("link", { name: "Booking" });
    this.navAmenities = page.getByRole("link", { name: "Amenities" });
    this.navLocation = page.getByRole("link", { name: "Location" });
    this.navContact = page.locator("#navbarNav").getByRole("link", { name: "Contact" });
    this.navAdmin = page.getByRole("link", { name: "Admin", exact: true });
  }

  async open() {
    await this.page.goto("https://automationintesting.online/", { waitUntil: "load" });
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
