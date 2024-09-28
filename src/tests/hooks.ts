import { After, Before, setDefaultTimeout } from '@cucumber/cucumber'
import { chromium, Page, Browser } from '@playwright/test'
import { LoginTasks } from './tasks/LoginTasks';
import { HomeTasks } from './tasks/HomeTasks';
import { CategoryTasks } from './tasks/CategoryTasks';


let page: Page;
let browser: Browser;
export let loginTasks:LoginTasks
export let homeTasks:HomeTasks
export let categoryTasks:CategoryTasks


setDefaultTimeout(60000)

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext()
        page = await context.newPage();
        loginTasks=new LoginTasks();
        homeTasks=new HomeTasks()
        categoryTasks=new CategoryTasks();
    } catch (error) {
        console.log(`Chrome natigation site failed due to ${error}`)
        throw new Error(`Chrome natigation site failed due to ${error}`)
    }
    return page;
});

After (async()=>{
   await browser.close()
})

export { page, browser }