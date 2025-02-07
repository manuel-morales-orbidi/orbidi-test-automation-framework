import { expect, Location, Locator, Page } from "@playwright/test";

export class NavigationMenuPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly navigationIconImage: Locator
    public readonly navigationHomeOption: Locator
    public readonly navigationAboutOption: Locator
    public readonly navigationServicesOption: Locator
    public readonly navigationContactsOption: Locator
    public readonly navigationLanguagePicker: Locator
    public readonly navigationSelectLanguagePickerEnglishOption: Locator
    public readonly navigationSelectLanguagePickerSpanishOption: Locator

    public readonly navigationLanguageAssertionText: Locator

    //-------------------------------------- Find English Menu Selectors ---------------------------------------//

    public readonly navigationEnglishHomeOption: Locator
    public readonly navigationEnglishAboutOption: Locator
    public readonly navigationEnglishServicesOption: Locator
    public readonly navigationEnglishContactsOption: Locator

    //-------------------------------------- Find Responsive Menu Selectors ---------------------------------------//

    private readonly navigationResponsiveHamburgerMenuIcon: Locator
    private readonly navigationResponsiveHomeMenuOption: Locator
    private readonly navigationResponsiveAboutMenuOption: Locator
    private readonly navigationResponsiveServicesMenuOption: Locator
    private readonly navigationResponsiveContactMenuOption: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.navigationIconImage = page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div/div/a/img')
        this.navigationHomeOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[1]')
        this.navigationAboutOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[2]/a')
        this.navigationServicesOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[3]/a')
        this.navigationContactsOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[4]/a')
        this.navigationLanguagePicker = page.locator('.gt_float_switcher-arrow').first()
        this.navigationSelectLanguagePickerEnglishOption = page.getByRole('link', { name: 'en English' })
        this.navigationSelectLanguagePickerSpanishOption = page.getByRole('link', { name: 'en Spanish' })

        this.navigationLanguageAssertionText = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div/span[1]')
       
    //------------------------------------------- English Menu Constructor ---------------------------------------------//  

        this.navigationEnglishHomeOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[1]')
        this.navigationEnglishAboutOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[2]')
        this.navigationEnglishServicesOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[3]')
        this.navigationEnglishContactsOption = page.locator('xpath=/html/body/div[3]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[4]')


    //------------------------------------------- Responsive Menu Constructor ---------------------------------------------//  

        this.navigationResponsiveHamburgerMenuIcon = page.locator("xpath=html/body/div[2]/div[1]/div[2]/div[1]/div/div")
        this.navigationResponsiveHomeMenuOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[2]/ul/li[1]/a')
        this.navigationResponsiveAboutMenuOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[2]/ul/li[2]/a')
        this.navigationResponsiveServicesMenuOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[2]/ul/li[3]/a')
        this.navigationResponsiveContactMenuOption = page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[2]/ul/li[4]/a')

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
    async clickNavigationLanguagePicker() {
        await this.navigationLanguagePicker.click()
    }
    async clickNavigationSelectLanguagePickerEnglishOption() {
        await this.navigationSelectLanguagePickerEnglishOption.click()
    }

    //------------------------------------- English Action Methods ----------------------------------------//

    async clickNavigationEnglishHomeOption() {
        await this.navigationEnglishHomeOption.click()
    }
    async clickNavigationEnglishAboutOption() {
        await this.navigationEnglishAboutOption.click()
    }
    async clickNavigationEnglishServicesOption() {
        await this.navigationEnglishServicesOption.click()
    }
    async clickNavigationEnglishContactsOption() {
        await this.navigationEnglishContactsOption.click()
    }

    //------------------------------------- Responsive Action Methods ----------------------------------------//

    async clickNavigationResponsiveHamburgerMenuIcon() {
        await this.navigationResponsiveHamburgerMenuIcon.click()
    }
    async clickNavigationResponsiveHomeMenuOption() {
        await this.navigationResponsiveHomeMenuOption.click()
    }
    async clickNavigationResponsiveAboutMenuOption() {
        await this.navigationResponsiveAboutMenuOption.click()
    }
    async clickNavigationResponsiveServicesMenuOption() {
        await this.navigationResponsiveServicesMenuOption.click()
    }
    async clickNavigationResponsiveContactMenuOption() {
        await this.navigationResponsiveContactMenuOption.click()
    }

}