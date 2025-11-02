import { Page } from "@playwright/test";
import { LandingPage } from "./LandingPage";
import { BookingPage } from "./BookingPage";
import { AdminPage } from "./AdminPage";

export class AllPages{
    readonly landingPage : LandingPage;
    readonly bookingPage : BookingPage;
    readonly adminPage : AdminPage;

    constructor(private page :Page){

    this.landingPage = new LandingPage(page);
    this.bookingPage = new BookingPage(page);
    this.adminPage = new AdminPage(page);
    }


async openBaseURL(path: string = "/") {
  const baseURL = process.env.BASE_URL;

  if (!baseURL) {
    throw new Error(
      "BASE URL is not found. Please set it in your .env or playwright.config.ts."
    );
  }

  await this.page.goto(`${baseURL}${path}`, { waitUntil: "load" });
}

}