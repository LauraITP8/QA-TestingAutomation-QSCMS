import { expect } from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { page } from "../hooks";
import { TheUserRemember } from '../utils/TheUserRemember'
const userRemember = TheUserRemember.getInstance();

const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))


/**
 * Class LoginTasks represents the tasks or methodts that the page can do, 
 * for that we extend from LoginPage to access the elements
 * @extends LoginPage
 */
export class LoginTasks extends LoginPage {


    /**
   * Validate the user are in the Login session page
   * @public
   */
    public async theUserIsOnTheLoginPage() {
        expect(await this.authButton).toBeVisible()
        expect(await this.remember).toBeVisible()
    }

    /**
   * enter credentials in the UI to login, this method has a delay after 
   * login and the save the token to future APIS used
   * @param {string} email
   * @param {string} password
   * @public
   */

    public async enterCredentials(email: string, password: string) {
        await this.inputEmail.fill(email)
        await this.inputPassword.fill(password)
        await this.authButton.click()
        await delay(5000)
        this.saveToken()
    }

     /**
   * save the token from session storage to use then in Apis
   * @public
   */

    public async saveToken() {
        var sessionStorage = JSON.parse(JSON.stringify(await page.context().storageState()));
        var token = JSON.parse(sessionStorage.origins[0].localStorage[0].value)
        userRemember.setVariable("token", token.token)
    }
}