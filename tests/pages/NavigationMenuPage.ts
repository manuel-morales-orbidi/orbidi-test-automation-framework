import { expect, Location, Locator, Page } from "@playwright/test";

export class NavigationMenuPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    private readonly navigationIconImage: Locator
    public readonly navigationHomeOption: Locator
    public readonly navigationAboutOption: Locator
    public readonly navigationServicesOption: Locator
    public readonly navigationContactsOption: Locator
    public readonly navigationLanguagePicker: Locator

    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.navigationIconImage = page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div/div/a/img')
        this.navigationHomeOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[1]/a')
        this.navigationAboutOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[2]/a')
        this.navigationServicesOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[3]/a')
        this.navigationContactsOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[4]/a')    
        this.navigationLanguagePicker = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div')

    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async isDisplayedNavigationIconImage() {
        await this.navigationIconImage.click()
    }
    async clickNavigationHomeOption() {
        await this.navigationHomeOption.getAttribute('')
    }
    async clickNavigationAboutOption() {
        await this.navigationAboutOption.click()
    }
    async clickNavigationServicesOption() {
        await this.navigationServicesOption.click()
    }
    async clickNavigationContactsOption() {
        await this.navigationContactsOption.click()
    }
    async clickNavigationLanguagePicker() {
        await this.navigationLanguagePicker.click()
    }

}