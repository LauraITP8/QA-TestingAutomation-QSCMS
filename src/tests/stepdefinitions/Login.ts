import { Given, Then, When } from "@cucumber/cucumber";
import { registerNewUser } from "../utils/RegisterUserApis";
import { expect } from "playwright/test";
import { UserModel } from "../models/UserModel";
import { homeTasks, loginTasks, page } from "../hooks";
import { TheUserRemember } from '../utils/TheUserRemember'
const userRemember = TheUserRemember.getInstance();

export let userModel: UserModel;

Given("a new user is registered via API", async function () {

  let response = await registerNewUser()
  expect(response.ok()).toBeTruthy();

  let parsedJson = JSON.parse(JSON.stringify((await response.json())))

  let id = parsedJson.id
  let userName = parsedJson.userName
  let email = parsedJson.email
  let password = userRemember.getVariable("password")
  let roles = parsedJson.roles
  let firstName = parsedJson.firstName
  let lastName = parsedJson.lastName
  let fullName = parsedJson.fullName

  userModel = new UserModel(id, userName, email, password, roles, firstName, lastName, fullName)
});


When('the registered user goes to the website', async function () {
  await page.goto('https://club-administration.qa.qubika.com/#/auth/login')
});

When('the user is presented with the login form', async function () {
  await loginTasks.theUserIsOnTheLoginPage()
});

When('the user enters valid credentials and submits the login form', async function () {
  await loginTasks.enterCredentials(userModel.getEmail(), userModel.getPassword())
});

Then('the user is successfully logged in', async function () {
  await homeTasks.theUserIsOnTheHomePage()
});