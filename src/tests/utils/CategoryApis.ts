import { APIRequestContext, request } from "@playwright/test";
import { TheUserRemember } from '../utils/TheUserRemember'
const userRemember = TheUserRemember.getInstance();


export async function createANewCategory(name: string, parentId?: string): Promise<any> {
    const apiRequest: APIRequestContext = await request.newContext();
    var parentIdData = (parentId == undefined) ? null : parentId
    let response = await apiRequest.post('https://api.club-administration.qa.qubika.com/api/category-type/create',
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
    let response = await apiRequest.get('https://api.club-administration.qa.qubika.com/api/category-type/filter?size=9',
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + userRemember.getVariable("token"),
            },
        })
    return response
}