import { Location, Locator, Page } from "@playwright/test";

export class ContactUsSectionPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    private readonly contactUsSectionTitle: Locator
    private readonly contactUsSectionDescription: Locator
    private readonly contactUsSectionButton: Locator

    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.contactUsSectionTitle = page.locator('xpath=//div[@data-id="6abbe1df"]')
        this.contactUsSectionDescription = page.locator('xpath=//div[@data-id="7acb0767"]')
        this.contactUsSectionButton = page.locator('xpath=//div[@data-id="3dc744cf"]')
    }

    //----------------------------------------- Action Methods --------------------------------------------//


    async getTextContactUsSectionTitle() {
        await this.contactUsSectionTitle.click()
    }
    async getTextContactUsSectionDescription() {
        await this.contactUsSectionDescription.click()
    }
    async clickContactUsSectionButton() {
        await this.contactUsSectionButton.click()
    }

}
