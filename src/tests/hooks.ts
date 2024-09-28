import { After, Before, setDefaultTimeout, Status } from '@cucumber/cucumber'
import { chromium, Page, Browser } from '@playwright/test'
import { LoginTasks } from './tasks/LoginTasks';
import { HomeTasks } from './tasks/HomeTasks';
import { CategoryTasks } from './tasks/CategoryTasks';


let page: Page;
let browser: Browser;
export let loginTasks: LoginTasks
export let homeTasks: HomeTasks
export let categoryTasks: CategoryTasks


setDefaultTimeout(60000)

 /**
   * Before represents the step begins the execution
   * is the responsible to instance the classes and return the context and page
   */

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext()
        page = await context.newPage();
        loginTasks = new LoginTasks();
        homeTasks = new HomeTasks()
        categoryTasks = new CategoryTasks();
    } catch (error) {
        console.log(`Chrome natigation site failed due to ${error}`)
        throw new Error(`Chrome natigation site failed due to ${error}`)
    }
    return page;
});

/**
   * After represents last step before finish the execution, 
   * here we are taking a screenshot when the test failed and close the browser
   */
After(async function (Scenario) {
    if (Scenario.result!.status === Status.FAILED) {
        await this.attach(await page.screenshot({ path: `./Screenshots/${Scenario.pickle.name}.png` }), "img/png")
    }
    await browser.close()
})

export { page, browser }