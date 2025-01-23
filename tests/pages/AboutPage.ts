import { Location, Locator, Page } from "@playwright/test";

export class AboutPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    private readonly aboutFirstBlockTitle: Locator
    private readonly aboutFirstBlockDescription: Locator
    public readonly aboutFirstBlockImage: Locator
    private readonly aboutSecondBlockTitle: Locator
    private readonly aboutSecondBlockDescription: Locator
    public readonly aboutSecondBlockImage: Locator
    private readonly aboutTrustUsTitle: Locator
    private readonly aboutTrustUsDescription: Locator
    private readonly aboutFirstFrameTitle: Locator
    private readonly aboutFirstFrameDescription: Locator
    private readonly aboutSecondFrameTitle: Locator
    private readonly aboutSecondFrameDescription: Locator
    private readonly aboutThirdFrameTitle: Locator
    private readonly aboutThirdFrameDescription: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.aboutFirstBlockTitle = page.locator('xpath=//div[@data-id="3ee7cbab"]')
        this.aboutFirstBlockDescription = page.locator('xpath=//div[@data-id="5484d62a"]')
        this.aboutFirstBlockImage = page.locator('xpath=//div[@data-id="a8c805d"]')
        this.aboutSecondBlockTitle = page.locator('xpath=//div[@data-id="1ca5faed"]')
        this.aboutSecondBlockDescription = page.locator('xpath=//div[@data-id="216e579c"]')
        this.aboutSecondBlockImage = page.locator('xpath=//div[@data-id="16793673"]')
        this.aboutTrustUsTitle = page.locator('xpath=//div[@data-id="7d67a31f"]')
        this.aboutTrustUsDescription = page.locator('xpath=//div[@data-id="608f77b1"]')
        this.aboutFirstFrameTitle = page.locator('xpath=//div[@data-id="1db235ac"]')
        this.aboutFirstFrameDescription = page.locator('xpath=//div[@data-id="d7e4d99"]')
        this.aboutSecondFrameTitle = page.locator('xpath=//div[@data-id="4e47e1f7"]')
        this.aboutSecondFrameDescription = page.locator('xpath=//div[@data-id="7082b943"]')
        this.aboutThirdFrameTitle = page.locator('xpath=//div[@data-id="212b7a15"]')
        this.aboutThirdFrameDescription = page.locator('xpath=//div[@data-id="2e96986c"]')
    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async getTextAboutFirstBlockTitle() {
        await this.aboutFirstBlockTitle.click()
    }
    async getTextAboutFirstBlockDescription() {
        await this.aboutFirstBlockDescription.click()
    }
    async getAttributeAboutFirstBlockImage() {
        await this.aboutFirstBlockImage.click()
    }
    async getTextAboutSecondBlockTitle() {
        await this.aboutSecondBlockTitle.click()
    }
    async getTextAboutSecondBlockDescription() {
        await this.aboutSecondBlockDescription.click()
    }
    async getAttributeAboutSecondBlockImage() {
        await this.aboutSecondBlockImage.click()
    }
    async getTextAboutTrustUsTitle() {
        await this.aboutTrustUsTitle.click()
    }
    async getTextAboutTrustUsDescription() {
        await this.aboutTrustUsDescription.click()
    }
    async getTextAboutFirstFrameTitle() {
        await this.aboutFirstFrameTitle.click()
    }
    async getTextAboutFirstFrameDescription() {
        await this.aboutFirstFrameDescription.click()
    }
    async getTextAboutSecondFrameTitle() {
        await this.aboutSecondFrameTitle.click()
    }
    async getTextAboutSecondFrameDescription() {
        await this.aboutSecondFrameDescription.click()
    }
    async getTextAboutThirdFrameTitle() {
        await this.aboutThirdFrameTitle.click()
    }
    async getTextAboutThirdFrameDescription() {
        await this.aboutThirdFrameDescription.click()
    }

}