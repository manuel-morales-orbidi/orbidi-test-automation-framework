import { Location, Locator, Page } from "@playwright/test";

export class ManageConcentModalPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly manageConcentTitle: Locator
    private readonly manageConcentCloseButton: Locator
    public readonly manageConcentDescription: Locator
    public readonly manageConcentAgreeButton: Locator
    public readonly manageConcentDenyButton: Locator
    public readonly manageConcentSeePreferenceButton: Locator
    private readonly manageConcentCookiesPolicyButton: Locator
    private readonly manageConcentPrivacyPolicyButton: Locator
    private readonly manageConcentLegalNoticeButton: Locator
    private readonly manageConcentFunctionalPicker: Locator
    private readonly manageConcentStadisticsPicker: Locator
    private readonly manageConcentMarketingPicker: Locator
    private readonly manageConcentSaveChangesButton: Locator
    private readonly manageConcentWhatsappButton: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.manageConcentTitle = page.locator('xpath=//div[@id="cmplz-header-1-optin"]')
        this.manageConcentCloseButton = page.locator('xpath=/html/body/div[1]/div/div[1]/div[3]/svg')
        this.manageConcentDescription = page.locator("xpath=//div[@id='cmplz-message-1-optin']")
        this.manageConcentAgreeButton = page.locator('xpath=/html/body/div[1]/div/div[6]/button[1]')
        this.manageConcentDenyButton = page.locator('xpath=/html/body/div[1]/div/div[6]/button[2]')
        this.manageConcentSeePreferenceButton = page.locator('xpath=/html/body/div[1]/div/div[6]/button[3]')
        this.manageConcentCookiesPolicyButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[1]')
        this.manageConcentPrivacyPolicyButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[2]')
        this.manageConcentPrivacyPolicyButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[2]')
        this.manageConcentLegalNoticeButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[3]')
        this.manageConcentFunctionalPicker = page.locator('xpath=/html/body/div[1]/div/div[3]/div[2]/details[1]/summary/span/span[3]/svg')
        this.manageConcentStadisticsPicker = page.locator('xpath=/html/body/div[1]/div/div[3]/div[2]/details[3]/summary/span/span[3]/svg')
        this.manageConcentMarketingPicker = page.locator('xpath=/html/body/div[1]/div/div[3]/div[2]/details[4]/summary/span/span[3]/svg')
        this.manageConcentSaveChangesButton = page.locator('xpath=/html/body/div[1]/div/div[6]/button[4]')
        this.manageConcentWhatsappButton = page.locator('xpath=//div[@id="ht-ctc-chat"]')
    }

    //----------------------------------------- Action Methods --------------------------------------------//


    async getTextManageConcentTitle() {
        await this.manageConcentTitle.click()
    }
    async clickManageConcentCloseButton() {
        await this.manageConcentCloseButton.click()
    }
    async getTextManageConcentDescription() {
        await this.manageConcentDescription.click()
    }
    async clickManageConcentAgreeButton() {
        await this.manageConcentAgreeButton.click()
    }
    async getTextManageConcentDenyButton() {
        await this.manageConcentDenyButton.click()
    }
    async clickManageConcentSeeMoreButton() {
        await this.manageConcentSeePreferenceButton.click()
    }
    async clickManageConcentCookiesPolicyButton() {
        await this.manageConcentCookiesPolicyButton.click()
    }
    async clickManageConcentPrivacyPolicyButton() {
        await this.manageConcentPrivacyPolicyButton.click()
    }
    async clickManageConcentLegalNoticeButton() {
        await this.manageConcentLegalNoticeButton.click()
    }
    async clickManageConcentFunctionalPicker() {
        await this.manageConcentFunctionalPicker.click()
    }
    async clickManageConcentStadisticsPicker() {
        await this.manageConcentStadisticsPicker.click()
    }
    async clickManageConcentMarketingPicker() {
        await this.manageConcentMarketingPicker.click()
    }
    async clickManageConcentSaveChangesButton() {
        await this.manageConcentSaveChangesButton.click()
    }
    async clickManageConcentWhatsappButton() {
        await this.manageConcentWhatsappButton.click()
    }

}