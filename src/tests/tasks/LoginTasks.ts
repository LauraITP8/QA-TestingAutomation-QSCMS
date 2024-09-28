import { expect } from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { page } from "../hooks";
import { TheUserRemember } from '../utils/TheUserRemember'
const userRemember = TheUserRemember.getInstance();

const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))

export class LoginTasks extends LoginPage {

    public async theUserIsOnTheLoginPage() {
        expect(await this.authButton).toBeVisible
        expect(await this.remember).toBeVisible
    }

    public async enterCredentials(email:string,password:string){
        await delay(3000)
        await this.inputEmail.fill(email)
        await this.inputPassword.fill(password)
        await this.authButton.click()
        await delay(5000)
        this.saveToken()
    }

    public async saveToken(){
        var sessionStorage=JSON.parse(JSON.stringify(await page.context().storageState()));
        var token=JSON.parse(sessionStorage.origins[0].localStorage[0].value)
        userRemember.setVariable("token",token.token)
    }
}