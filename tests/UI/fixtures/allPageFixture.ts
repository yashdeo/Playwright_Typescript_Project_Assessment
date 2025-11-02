import { AllPages } from "../../../PageObjects/AllPages";
import { test as base,expect } from "@playwright/test";

type AllFixtures = {
    allPages : AllPages; 
}

export const test = base.extend<AllFixtures>({
  allPages: async ({ page }, use) => {
    const allPages = new AllPages(page);
    await use(allPages);
  }

});

export {expect};