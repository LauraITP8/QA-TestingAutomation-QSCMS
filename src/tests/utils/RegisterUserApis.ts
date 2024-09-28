import { APIRequestContext, request } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { TheUserRemember } from '../utils/TheUserRemember'
const userRemember = TheUserRemember.getInstance();


export async function registerNewUser(): Promise<any> {
  const apiRequest: APIRequestContext = await request.newContext();
  let password=faker.internet.password()

  let response=await apiRequest.post('https://api.club-administration.qa.qubika.com/api/auth/register', {
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