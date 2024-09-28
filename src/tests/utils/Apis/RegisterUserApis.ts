import { APIRequestContext, request } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { TheUserRemember } from '../TheUserRemember'
const userRemember = TheUserRemember.getInstance();

const BASE_URL = 'https://api.club-administration.qa.qubika.com'

/**
  * Async function to export in the stepdefinions or tasks needed
  * this fuction is responsible the register new users
  * 
  * The faker library is used to create random emails and passwords and don't repeat it.
  * @return {Promise<any>}
  */

export async function registerNewUser(): Promise<any> {
  const apiRequest: APIRequestContext = await request.newContext();
  let password = faker.internet.password()

  let response = await apiRequest.post(`${BASE_URL}/api/auth/register`, {
    data: {
      "email": faker.internet.email(),
      "password": password,
      "roles": [
        "ROLE_ADMIN"
      ]
    }
  })

  userRemember.setVariable("password", password)
  return response
}