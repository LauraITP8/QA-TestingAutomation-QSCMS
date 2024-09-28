import { expect } from "playwright/test";
import { CategoryPage } from "../pages/CategoryPage";
import { page } from "../hooks";

/**
 * Class  CategoryTasks represents the tasks or methodts that the page can do, 
 * for that we extend from CategoryPage to access the elements
 * @extends CategoryPage
 */
export class CategoryTasks extends CategoryPage {

/**
  * Validate the category list in UI, cheking for some specificts fields
  * @param {string} name : Category name created
  * @param {string} pageCategory: the page where the category are
  * @param {string} categoryParentName: this params is optional and represents the parent category
  * @public
  */
    public async theUserCanSeeTheCategoryDisplayed(name: string, pageCategory: string, categoryParentName?: string) {
        await page.locator(await this.PAGE(pageCategory)).click()

        await expect(page.locator(this.CATEGORY_NAME(name))).toBeVisible()

        if (categoryParentName != undefined) {
            await expect(page.locator(this.CATEGORY_NAME(categoryParentName))).toBeVisible()
        }
    }

}