import { expect } from "playwright/test";
import { HomePage } from "../pages/HomePage";

/**
 * Class HomeTasks represents the tasks or methodts that the page can do, 
 * for that we extend from HomePage to access the elements
 * @extends HomePage
 */
export class HomeTasks extends HomePage {
/**
 * Validate the user is logged on the website verifing the element is visible
 * @public
 */
    public async theUserIsOnTheHomePage() {
      await  expect(await this.verticalChart).toBeVisible()
    }
}