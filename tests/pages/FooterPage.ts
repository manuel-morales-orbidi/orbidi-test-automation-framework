import { Location, Locator, Page } from "@playwright/test";

export class FooterPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    private readonly footerIconImage: Locator
    private readonly footerDescription: Locator
    public readonly footerMenuTitle: Locator
    public readonly footerMenuHomeButton: Locator
    private readonly footerMenuAboutUsButton: Locator
    public readonly footerMenuServicesButton: Locator
    public readonly footerMenuContactsButton: Locator
    public readonly footerContactInformationTitle: Locator
    private readonly footerContactInformationAddressTitle: Locator
    private readonly footerContactInformationAddressDescription: Locator
    private readonly footerContactInformationTelephoneTitle: Locator
    private readonly footerContactInformationTelephoneDescription: Locator
    private readonly footerContactInformationEmailTitle: Locator
    private readonly footerContactInformationEmailDescription: Locator
    public readonly footerLegalTitle: Locator
    private readonly footerLegalNoticeButton: Locator
    private readonly footerLegalPrivacyPolicyButton: Locator
    private readonly footerLegalAccessibilityButton: Locator
    private readonly footerLegalPolicyCookiesButton: Locator
    private readonly footerKitDigitalRequirement: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.footerIconImage = page.locator('xpath=/html/body/footer/div[2]/div[1]/div[1]/div/a/img')
        this.footerDescription = page.locator('xpath=//div[@data-id="6207998b"]')
        this.footerMenuTitle = page.locator('xpath=//div[@data-id="54bd2702"]')
        this.footerMenuHomeButton = page.locator('xpath=/html/body/footer/div[2]/div[2]/div[2]/div/nav[1]/ul/li[1]/a')
        this.footerMenuAboutUsButton = page.locator('xpath=/html/body/footer/div[2]/div[2]/div[2]/div/nav[1]/ul/li[2]/a')
        this.footerMenuServicesButton = page.locator('xpath=/html/body/footer/div[2]/div[2]/div[2]/div/nav[1]/ul/li[3]/a')
        this.footerMenuContactsButton = page.locator('xpath=/html/body/footer/div[2]/div[2]/div[2]/div/nav[1]/ul/li[4]/a')
        this.footerContactInformationTitle = page.locator('xpath=//div[@data-id="12aa91b7"]')
        this.footerContactInformationAddressTitle = page.locator('xpath=//div[@data-id="40d3783b"]')
        this.footerContactInformationAddressDescription = page.locator('xpath=/html/body/footer/div[2]/div[3]/div[2]/div[2]/div[2]/div/p')
        this.footerContactInformationTelephoneTitle = page.locator('xpath=/html/body/footer/div[2]/div[3]/div[2]/div[3]/div[1]/div/h4')
        this.footerContactInformationTelephoneDescription = page.locator('xpath=/html/body/footer/div[2]/div[3]/div[2]/div[3]/div[2]/div/p/a')
        this.footerContactInformationEmailTitle = page.locator('xpath=/html/body/footer/div[2]/div[3]/div[2]/div[4]/div[1]/div/h4')
        this.footerContactInformationEmailDescription = page.locator('xpath=/html/body/footer/div[2]/div[3]/div[2]/div[4]/div[2]/div/p/a')
        this.footerLegalTitle = page.locator('xpath=/html/body/footer/div[2]/div[4]/div[1]/div/h2')
        this.footerLegalNoticeButton = page.locator('xpath=/html/body/footer/div[2]/div[4]/div[2]/div/nav[1]/ul/li[1]/a')
        this.footerLegalPrivacyPolicyButton = page.locator('xpath=/html/body/footer/div[2]/div[4]/div[2]/div/nav[1]/ul/li[2]/a')
        this.footerLegalAccessibilityButton = page.locator('xpath=/html/body/footer/div[2]/div[4]/div[2]/div/nav[1]/ul/li[3]/a')
        this.footerLegalPolicyCookiesButton = page.locator('xpath=/html/body/footer/div[2]/div[4]/div[2]/div/nav[1]/ul/li[4]/a')
        this.footerKitDigitalRequirement = page.locator('xpath=/html/body/footer/div[3]/div/div/img')
    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async getAttributeFooterIconImage() {
        await this.footerIconImage.click()
    }
    async getTextFooterDescription() {
        await this.footerDescription.click()
    }
    async getTextFooterMenuTitle() {
        await this.footerMenuTitle.click()
    }
    async clickFooterMenuHomeButton() {
        await this.footerMenuHomeButton.click()
    }
    async clickFooterMenuAboutUsButton() {
        await this.footerMenuAboutUsButton.click()
    }
    async clickFooterServicesButton() {
        await this.footerMenuServicesButton.click()
    }
    async clickFooterMenuContactsButton() {
        await this.footerMenuContactsButton.click()
    }
    async getTextFooterContactInformationTitle() {
        await this.footerContactInformationTitle.click()
    }
    async getTextFooterContactInformationAddressTitle() {
        await this.footerContactInformationAddressTitle.click()
    }
    async getTextFooterContactInformationAddressDescriptiont() {
        await this.footerContactInformationAddressDescription.click()
    }
    async getTextFooterContactInformationTelephoneTitle() {
        await this.footerContactInformationTelephoneTitle.click()
    }
    async getTextFooterContactInformationTelephoneDescription() {
        await this.footerContactInformationTelephoneDescription.click()
    }
    async getTextFooterContactInformationEmailTitle() {
        await this.footerContactInformationEmailTitle.click()
    }
    async getTextFooterContactInformationEmailDescription() {
        await this.footerContactInformationEmailDescription.click()
    }
    async getTextFooterLegalTitle() {
        await this.footerLegalTitle.click()
    }
    async clickFooterLegalNoticeButton() {
        await this.footerLegalNoticeButton.click()
    }
    async clickFooterLegalPrivacyPolicyButton() {
        await this.footerLegalPrivacyPolicyButton.click()
    }
    async clickFooterLegalAccessibilityButton() {
        await this.footerLegalAccessibilityButton.click()
    }
    async clickFooterLegalPolicyCookiesButton() {
        await this.footerLegalPolicyCookiesButton.click()
    }
    async getAttributeFooterKitDigitalRequirement() {
        await this.footerKitDigitalRequirement.click()
    }

}