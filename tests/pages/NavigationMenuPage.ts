import { expect, Location, Locator, Page } from "@playwright/test";

export class NavigationMenuPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    private readonly navigationIconImage: Locator
    public readonly navigationHomeOption: Locator
    public readonly navigationAboutOption: Locator
    public readonly navigationServicesOption: Locator
    public readonly navigationContactsOption: Locator
    public readonly navigationLanguagePicker: Locator
    public readonly navigationSelectLanguagePickerOption: Locator

    //-------------------------------------- Find English Selectors ---------------------------------------//

    public readonly navigationEnglishHomeOption: Locator
    public readonly navigationEnglishServicesOption: Locator
    public readonly navigationEnglishContactsOption: Locator

    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.navigationIconImage = page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div/div/a/img')
        this.navigationHomeOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[1]')
        this.navigationAboutOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[2]/a')
        this.navigationServicesOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[3]/a')
        this.navigationContactsOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[4]/a')
        this.navigationLanguagePicker = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div')
        this.navigationSelectLanguagePickerOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[2]/a[1]')
        this.navigationEnglishHomeOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[1]')
        this.navigationEnglishServicesOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[3]')
        this.navigationEnglishContactsOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[4]')

    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async isDisplayedNavigationIconImage() {
        await this.navigationIconImage.click()
    }
    async clickNavigationHomeOption() {
        await this.navigationHomeOption.click()
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
    async clickNavigationEnglishContactsOption() {
        await this.navigationEnglishContactsOption.click()
    }
    async clickNavigationLanguagePicker() {
        await this.navigationLanguagePicker.click()
    }
    async clickNavigationSelectLanguagePickerOption() {
        await this.navigationSelectLanguagePickerOption.click()
    }

}