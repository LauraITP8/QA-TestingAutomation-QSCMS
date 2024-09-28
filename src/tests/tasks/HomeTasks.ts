import { expect } from "playwright/test";
import { HomePage } from "../pages/HomePage";

export class HomeTasks extends HomePage {

    public async theUserIsOnTheHomePage() {
        expect(await this.verticalChart).toBeVisible
    }
}