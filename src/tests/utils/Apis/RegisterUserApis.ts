import { APIRequestContext, request } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { TheUserRemember } from '../TheUserRemember'
const userRemember = TheUserRemember.getInstance();

const BASE_URL='https://api.club-administration.qa.qubika.com'

export async function registerNewUser(): Promise<any> {
  const apiRequest: APIRequestContext = await request.newContext();
  let password=faker.internet.password()

  let response=await apiRequest.post(`${BASE_URL}/api/auth/register`, {
    data: {
      "email": faker.internet.email(),
      "password": password,
      "roles": [
        "ROLE_ADMIN"
      ]
    }
  })
  await userRemember.setVariable("password", password)
  return response
}