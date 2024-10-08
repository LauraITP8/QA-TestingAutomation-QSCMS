import { APIRequestContext, request } from "@playwright/test";
import { TheUserRemember } from '../TheUserRemember'
const userRemember = TheUserRemember.getInstance();

const BASE_URL = 'https://api.club-administration.qa.qubika.com'

/**
  * Async function to export in the stepdefinions or tasks needed
  * this fuction is responsible for create a new category or subcategory depending the optional param
  * @param {string} name : Category name created
  * @param {string} parentId: optional
  * @return {Promise<any>}
  */

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

/**
  * Async function to export in the stepdefinions or tasks needed
  * this fuction is responsible to get the page where the category was created in the UI table
  * @return {Promise<any>}
  */
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