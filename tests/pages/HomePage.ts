import { Location, Locator, Page } from "@playwright/test";

export class HomePage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly homeBodyTitle: Locator
    private readonly homeBodyDescription: Locator
    public readonly homeBodyPrincipalBannerImage: Locator
    private readonly homeBodyAboutUsTitleText: Locator
    private readonly homeBodyAboutUsDescriptionText: Locator
    private readonly homeBodyAboutUsButton: Locator
    public readonly homeBodyAboutUsBannerImage: Locator
    private readonly homeBodyServicesTitleText: Locator
    private readonly homeBodyServicesDescriptionText: Locator
    public readonly homeBodyServicesFirstBlockImage: Locator
    private readonly homeBodyServicesFirstBlockTitle: Locator
    private readonly homeBodyServicesFirstBlockDescription: Locator
    public readonly homeBodyServicesSecondBlockImage: Locator
    private readonly homeBodyServicesSecondBlockTitle: Locator
    private readonly homeBodyServicesSecondBlockDescription: Locator
    public readonly homeBodyServicesthirdBlockImage: Locator
    private readonly homeBodyServicesthirdBlockTitle: Locator
    private readonly homeBodyServicesthirdBlockDescription: Locator
    private readonly homeBodyServicesButton: Locator

    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.homeBodyTitle = page.locator('xpath=//div[@data-id="548d1e50"]')
        this.homeBodyDescription = page.locator('xpath=//div[@data-id="266d55eb"]')
        this.homeBodyPrincipalBannerImage = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div/img')
        this.homeBodyAboutUsTitleText = page.locator('xpath=//div[@data-id="1d3c0c3b"]')
        this.homeBodyAboutUsDescriptionText = page.locator('xpath=//div[@data-id="681f2a58"]')
        this.homeBodyAboutUsButton = page.locator('xpath=//div[@data-id="60bd7485"]')
        this.homeBodyAboutUsBannerImage = page.locator('xpath=/html/body/div[3]/div[2]/div/div[2]/div/div/img')
        this.homeBodyServicesTitleText = page.locator('xpath=//div[@data-id="313e271d"]')
        this.homeBodyServicesDescriptionText = page.locator('xpath=//div[@data-id="2d6ac156"]')
        this.homeBodyServicesFirstBlockImage = page.locator('xpath=//div[@data-id="409ade9c"]')
        this.homeBodyServicesFirstBlockTitle = page.locator('xpath=//div[@data-id="313e271d"]')
        this.homeBodyServicesFirstBlockDescription = page.locator('xpath=//div[@data-id="217fa017"]')
        this.homeBodyServicesSecondBlockImage = page.locator('xpath=//div[@data-id="62c5a51b"]')
        this.homeBodyServicesSecondBlockTitle = page.locator('xpath=//div[@data-id="574945c5"]')
        this.homeBodyServicesSecondBlockDescription = page.locator('xpath=//div[@data-id="5af2b051"]')
        this.homeBodyServicesthirdBlockImage = page.locator('xpath=//div[@data-id="215afed"]')
        this.homeBodyServicesthirdBlockTitle = page.locator('xpath=//div[@data-id="1ba3bdab"]')
        this.homeBodyServicesthirdBlockDescription = page.locator('xpath=//div[@data-id="65eea091"]')
        this.homeBodyServicesButton = page.locator('xpath=//div[@data-id="4ac1560b"]')

    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async getTextHomeBodyTitle() {
        await this.homeBodyTitle.click()
    }
    async getTextHomeBodyDescription() {
        await this.homeBodyDescription.click()
    }
    async getTextHomeBodyAboutUsTitleText() {
        await this.homeBodyAboutUsTitleText.click()
    }
    async getTextHomeBodyAboutUsDescriptionText() {
        await this.homeBodyAboutUsDescriptionText.click()
    }
    async clickHomeBodyAboutUsButton() {
        await this.homeBodyAboutUsButton.click()
    }
    async getTextHomeBodyServicesTitleText() {
        await this.homeBodyServicesTitleText.click()
    }
    async getTextHomeBodyServicesDescriptionText() {
        await this.homeBodyServicesDescriptionText.click()
    }
    async getTextHomeBodyServicesFirstBlockImaget() {
        await this.homeBodyServicesFirstBlockImage.click()
    }
    async getTextHomeBodyServicesFirstBlockTitle() {
        await this.homeBodyServicesFirstBlockTitle.click()
    }
    async getTextHomeBodyServicesFirstBlockDescription() {
        await this.homeBodyServicesFirstBlockDescription.click()
    }
    async getTextHomeBodyServicesSecondBlockImage() {
        await this.homeBodyServicesSecondBlockImage.click()
    }
    async getTextHomeBodyServicesSecondBlockTitle() {
        await this.homeBodyServicesSecondBlockTitle.click()
    }
    async getTextHomeBodyServicesSecondBlockDescription() {
        await this.homeBodyServicesSecondBlockDescription.click()
    }
    async getTextHomeBodyServicesthirdBlockImage() {
        await this.homeBodyServicesthirdBlockImage.click()
    }
    async getTextHomeBodyServicesthirdBlockTitle() {
        await this.homeBodyServicesthirdBlockTitle.click()
    }
    async getTextHomeBodyServicesthirdBlockDescriptiont() {
        await this.homeBodyServicesthirdBlockDescription.click()
    }
    async clickHomeBodyServicesButton() {
        await this.homeBodyServicesButton.click()
    }

}