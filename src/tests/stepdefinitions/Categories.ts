import { Given, Then, When } from '@cucumber/cucumber'
import { categoryTasks, homeTasks, page } from '../hooks';
import { expect } from 'playwright/test';
import { createANewCategory, getCategoryPage } from '../utils/CategoryApis';
import { TheUserRemember } from '../utils/TheUserRemember'
const userRemember = TheUserRemember.getInstance();


Given('the user is on the category page', async function () {
  await homeTasks.categoryPageBtn.click()
  await expect(categoryTasks.tittleCategory).toBeVisible()
});

When('a new category is created via API with name {string}', async (name: string) => {
  let response = await createANewCategory(name)
  expect(response.ok()).toBeTruthy();

  let parsedJson = JSON.parse(JSON.stringify((await response.json())))
  userRemember.setVariable("parentId", parsedJson.id)
  userRemember.setVariable("categoryName", parsedJson.name)

});

Then('the user is seeing the newly created category in the list', async function () {
  let response = await getCategoryPage()
  expect(response.ok()).toBeTruthy();
  let parsedJson = JSON.parse(JSON.stringify((await response.json())))
  userRemember.setVariable("page", parsedJson.totalPages)
  await categoryTasks.theUserCanSeeTheCategoryDisplayed( userRemember.getVariable("categoryName"),  userRemember.getVariable("page"))
});

When('the user creates a new subcategory named {string}', async (name: string) => {
  let response = await createANewCategory(name, userRemember.getVariable('parentId'))
  expect(response.ok()).toBeTruthy();

  userRemember.setVariable("categoryParentName", userRemember.getVariable("categoryName"))
  let parsedJson = JSON.parse(JSON.stringify((await response.json())))
  userRemember.setVariable("categoryName", parsedJson.name)
  await page.reload()

});

Then('the subcategory is successfully added to the category list and displayed', async function () {
  await categoryTasks.theUserCanSeeTheCategoryDisplayed(userRemember.getVariable("categoryName"), userRemember.getVariable('page'), userRemember.getVariable('categoryParentName'))
});



