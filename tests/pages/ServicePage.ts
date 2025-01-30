import { Location, Locator, Page } from "@playwright/test";

export class ServicePage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly serviceFirstBlockTitle: Locator
    private readonly serviceFirstBlockDescription: Locator
    public readonly serviceFirstBlockImage: Locator
    private readonly serviceSecondBlockTitle: Locator
    private readonly serviceSecondBlockDescription: Locator
    public readonly serviceSecondBlockImage: Locator
    private readonly serviceThirdBlockTitle: Locator
    private readonly serviceThirdBlockDescription: Locator
    public readonly serviceThirdBlockImage: Locator
    private readonly serviceFourthBlockTitle: Locator
    private readonly serviceFourthBlockDescription: Locator
    public readonly serviceFourthBlockImage: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.serviceFirstBlockTitle = page.locator("xpath=//div[@data-id='4778097e']")
        this.serviceFirstBlockDescription = page.locator('xpath=//div[@data-id="6d47739c"]')
        this.serviceFirstBlockImage = page.locator('xpath=//div[@data-id="617ca5e7"]')
        this.serviceSecondBlockTitle = page.locator('xpath=//div[@data-id="4218d1ba"]')
        this.serviceSecondBlockDescription = page.locator('xpath=//div[@data-id="42d308ca"]')
        this.serviceSecondBlockImage = page.locator('xpath=//div[@data-id="27f8a4d8"]')
        this.serviceThirdBlockTitle = page.locator('xpath=//div[@data-id="42857104"]')
        this.serviceThirdBlockDescription = page.locator('xpath=//div[@data-id="5465d02b"]')
        this.serviceThirdBlockImage = page.locator('xpath=//div[@data-id="177ffaa2"]')
        this.serviceFourthBlockTitle = page.locator('xpath=//div[@data-id="7262d5fe"]')
        this.serviceFourthBlockDescription = page.locator('xpath=//div[@data-id="20c22bfa"]')
        this.serviceFourthBlockImage = page.locator('xpath=//div[@data-id="10774a73"]')

    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async getTextServiceFirstBlockTitle() {
        await this.serviceFirstBlockTitle.click()
    }
    async getTextServiceFirstBlockDescription() {
        await this.serviceFirstBlockDescription.click()
    }
    async getTextServiceFirstBlockImage() {
        await this.serviceFirstBlockImage.click()
    }
    async getTextServiceSecondBlockTitle() {
        await this.serviceSecondBlockTitle.click()
    }
    async getTextServiceSecondBlockDescription() {
        await this.serviceSecondBlockDescription.click()
    }
    async getTextServiceSecondBlockImage() {
        await this.serviceSecondBlockImage.click()
    }
    async getTextServiceThirdBlockTitle() {
        await this.serviceThirdBlockTitle.click()
    }
    async getTextServiceThirdBlockDescription() {
        await this.serviceThirdBlockDescription.click()
    }
    async getTextServiceThirdBlockImage() {
        await this.serviceThirdBlockImage.click()
    }
    async getTextServiceFourthBlockTitle() {
        await this.serviceFourthBlockTitle.click()
    }
    async getTextServiceFourthBlockDescription() {
        await this.serviceFourthBlockDescription.click()
    }
    async getTextServiceFourthBlockImage() {
        await this.serviceFourthBlockImage.click()
    }

}