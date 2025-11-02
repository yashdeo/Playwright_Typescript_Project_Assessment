import { test, expect } from "@fixtures";
import {datesGenerator} from "@utils/dateGenearator";

test.only("Book the Rooms", async ({ allPages }) => {

  const { landingPage,bookingPage } = allPages;
 
  // Created Utility to enter the date as per the user input 
  const checkin = datesGenerator(3);  // 3 days from today
  const checkout = datesGenerator(6); // 6 days from today
  await allPages.openBaseURL();
  await landingPage.navigateToRooms();
  await bookingPage.selectDates(checkin, checkout);
  await bookingPage.selectRoomType('double');
  await bookingPage.completeBookingProcess();


  /*
  await landingPage.page
    .locator('div')
    .filter({ hasText: 'DoubleVestibulum sollicitudin' })
    .nth(5)
    .click();

  await landingPage.page.getByRole('link', { name: 'Book now' }).nth(2).click();
  await expect(landingPage.page.getByRole('heading', { name: 'Double Room' })).toBeVisible();
  await landingPage.page.getByText('Selected').click(); */
});
