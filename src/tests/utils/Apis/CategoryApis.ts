import { APIRequestContext, request } from "@playwright/test";
import { TheUserRemember } from '../TheUserRemember'
const userRemember = TheUserRemember.getInstance();

const BASE_URL='https://api.club-administration.qa.qubika.com'

export async function createANewCategory(name: string, parentId?: string): Promise<any> {
    const apiRequest: APIRequestContext = await request.newContext();
    var parentIdData = (parentId == undefined) ? null : parentId
    let response = await apiRequest.post(`${BASE_URL}/api/category-type/create`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + userRemember.getVariable("token"),
            },
            data: {
                "name": name,
                "parentId": parentIdData,
                "root": true
            }
        })
    return response
}

export async function getCategoryPage(): Promise<any> {
    const apiRequest: APIRequestContext = await request.newContext();
    let response = await apiRequest.get(`${BASE_URL}/api/category-type/filter?size=9`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + userRemember.getVariable("token"),
            },
        })
    return response
}