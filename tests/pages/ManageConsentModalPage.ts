import { Location, Locator, Page } from "@playwright/test";

export class ManageConsentModalPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly manageConsentTitle: Locator
    private readonly manageConsentCloseButton: Locator
    public readonly manageConsentDescription: Locator
    public readonly manageConsentAgreeButton: Locator
    public readonly manageConsentDenyButton: Locator
    public readonly manageConsentSeePreferenceButton: Locator
    private readonly manageConsentCookiesPolicyButton: Locator
    private readonly manageConsentPrivacyPolicyButton: Locator
    private readonly manageConsentLegalNoticeButton: Locator
    private readonly manageConsentFunctionalPicker: Locator
    private readonly manageConsentStadisticsPicker: Locator
    private readonly manageConsentMarketingPicker: Locator
    private readonly manageConsentSaveChangesButton: Locator
    private readonly manageConsentWhatsappButton: Locator

     //-------------------------------------- Find English Selectors ---------------------------------------//


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.manageConsentTitle = page.locator('xpath=//div[@id="cmplz-header-1-optin"]')
        this.manageConsentCloseButton = page.locator('xpath=//div[@class="cmplz-close"]')
        this.manageConsentDescription = page.locator("xpath=//div[@id='cmplz-message-1-optin']")
        this.manageConsentAgreeButton = page.locator("xpath=//button[@class='cmplz-btn cmplz-accept']")
        this.manageConsentDenyButton = page.locator("xpath=//button[@class='cmplz-btn cmplz-deny']")
        this.manageConsentSeePreferenceButton = page.locator("xpath=//button[@class='cmplz-btn cmplz-view-preferences']")
        this.manageConsentCookiesPolicyButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[1]')
        this.manageConsentPrivacyPolicyButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[2]')
        this.manageConsentPrivacyPolicyButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[2]')
        this.manageConsentLegalNoticeButton = page.locator('xpath=/html/body/div[1]/div/div[7]/a[3]')
        this.manageConsentFunctionalPicker = page.locator('xpath=/html/body/div[1]/div/div[3]/div[2]/details[1]/summary/span/span[3]/svg')
        this.manageConsentStadisticsPicker = page.locator('xpath=/html/body/div[1]/div/div[3]/div[2]/details[3]/summary/span/span[3]/svg')
        this.manageConsentMarketingPicker = page.locator('xpath=/html/body/div[1]/div/div[3]/div[2]/details[4]/summary/span/span[3]/svg')
        this.manageConsentSaveChangesButton = page.locator('xpath=/html/body/div[1]/div/div[6]/button[4]')
        this.manageConsentWhatsappButton = page.locator('xpath=//div[@id="ht-ctc-chat"]')
    }

    //----------------------------------------- Action Methods --------------------------------------------//


    async getTextManageConcentTitle() {
        await this.manageConsentTitle.click()
    }
    async clickManageConcentCloseButton() {
        await this.manageConsentCloseButton.click()
    }
    async getTextManageConcentDescription() {
        await this.manageConsentDescription.click()
    }
    async clickManageConcentAgreeButton() {
        await this.manageConsentAgreeButton.click()
    }
    async getTextManageConcentDenyButton() {
        await this.manageConsentDenyButton.click()
    }
    async clickManageConcentSeeMoreButton() {
        await this.manageConsentSeePreferenceButton.click()
    }
    async clickManageConcentCookiesPolicyButton() {
        await this.manageConsentCookiesPolicyButton.click()
    }
    async clickManageConcentPrivacyPolicyButton() {
        await this.manageConsentPrivacyPolicyButton.click()
    }
    async clickManageConcentLegalNoticeButton() {
        await this.manageConsentLegalNoticeButton.click()
    }
    async clickManageConcentFunctionalPicker() {
        await this.manageConsentFunctionalPicker.click()
    }
    async clickManageConcentStadisticsPicker() {
        await this.manageConsentStadisticsPicker.click()
    }
    async clickManageConcentMarketingPicker() {
        await this.manageConsentMarketingPicker.click()
    }
    async clickManageConcentSaveChangesButton() {
        await this.manageConsentSaveChangesButton.click()
    }
    async clickManageConcentWhatsappButton() {
        await this.manageConsentWhatsappButton.click()
    }

}