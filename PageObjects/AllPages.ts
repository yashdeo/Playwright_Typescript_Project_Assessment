import {Page} from "@playwright/test";
import { LandingPage } from "../PageObjects/LandingPage";
import { BookingPage } from "../PageObjects/BookingPage";
import { AdminPage } from "../PageObjects/AdminPage";

export class AllPages{
    readonly landingPage : LandingPage;
    readonly bookingPage : BookingPage;
    readonly adminPage : AdminPage;

    constructor(public page :Page){

    this.landingPage = new LandingPage(page);
    this.bookingPage = new BookingPage(page);
    this.adminPage = new AdminPage(page);
    }

    async openBaseURL(baseURL:string){
        await this.page.goto(baseURL);
    }

}