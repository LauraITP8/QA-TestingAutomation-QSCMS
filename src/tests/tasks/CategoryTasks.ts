import { expect } from "playwright/test";
import { CategoryPage } from "../pages/CategoryPage";
import { page } from "../hooks";

const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))
export class CategoryTasks extends CategoryPage {

    public async theUserCanSeeTheCategoryDisplayed(name: string, pageCategory: string, categoryParentName?: string) {
        delay(3000)
        console.log(pageCategory)
        await page.locator(await this.PAGE(pageCategory)).click()

        await expect(page.locator(this.CATEGORY_NAME(name))).toBeVisible()

        if (categoryParentName != undefined) {
            await expect(page.locator(this.CATEGORY_NAME(categoryParentName))).toBeVisible()
        }
    }

}