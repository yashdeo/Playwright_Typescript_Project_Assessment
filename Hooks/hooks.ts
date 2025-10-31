import { Page, test } from "@playwright/test";

let page: Page;

test.beforeEach(async({page})=>{

   console.log("Yash Before");
   await page.goto("https://automationintesting.online/");

})