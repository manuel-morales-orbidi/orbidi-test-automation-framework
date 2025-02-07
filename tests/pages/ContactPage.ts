import { Location, Locator, Page } from "@playwright/test";

export class ContactPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly contactBlockTitle: Locator
    private readonly contactBlockDescription: Locator
    public readonly contactBlockImage: Locator
    private readonly contactDetailsContainerSchedule: Locator
    private readonly contactDetailsContainerCallUs: Locator
    private readonly contactDetailsContainerEmail: Locator
    private readonly contactFormContainerTitle: Locator
    private readonly contactFormContainerDescription: Locator
    public readonly contactFormContainerName: Locator
    private readonly contactFormContainerTelephone: Locator
    private readonly contactFormContainerEmail: Locator
    private readonly contactFormContainerMessage: Locator
    public readonly contactFormValidateStructureEmailMessage: Locator
    public readonly contactFormContainerSendButton: Locator
    public readonly contactFormSendSuccessfullyMessage: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.contactBlockTitle = page.locator('xpath=//div[@data-id="2703ec48"]')
        this.contactBlockDescription = page.locator('xpath=//div[@data-id="41325a92"]')
        this.contactBlockImage = page.locator('xpath=//div[@data-id="c8273a6"]')
        this.contactDetailsContainerSchedule = page.locator('xpath=//a[@data-id="50d6a48e"]')
        this.contactDetailsContainerCallUs = page.locator('xpath=//a[@data-id="13678552"]')
        this.contactDetailsContainerEmail = page.locator('xpath=//a[@data-id="6081dbed"]')
        this.contactFormContainerTitle = page.locator('xpath=//div[@data-id="269ba58e"]')
        this.contactFormContainerDescription = page.locator('xpath=//div[@data-id="228304fd"]')
        this.contactFormContainerName = page.locator('xpath=//input[@id="form-field-name"]')
        this.contactFormContainerTelephone = page.locator('xpath=//input[@id="form-field-field_ff312a8"]')
        this.contactFormContainerEmail = page.locator('xpath=//input[@id="form-field-email"]')
        this.contactFormContainerMessage = page.locator('xpath=//textarea[@id="form-field-message"]')
        this.contactFormValidateStructureEmailMessage = page.locator('xpath=/html/body/div[3]/div[3]/div/div[2]/div/div/form/div[1]/div[3]/span')
        this.contactFormContainerSendButton = page.locator("xpath=//button[@class='elementor-button elementor-size-sm']")
        this.contactFormSendSuccessfullyMessage = page.locator("xpath=/html/body/div[3]/div[3]/div/div[2]/div/div/form/div[2]")

    }

    //----------------------------------------- Action Methods --------------------------------------------//

    async getTextContactBlockTitle() {
        await this.contactBlockTitle.click()
    }
    async getTextContactBlockDescription() {
        await this.contactBlockDescription.click()
    }
    async getTextontactBlockImage() {
        await this.contactBlockImage.click()
    }
    async getTextContactDetailsContainerSchedule() {
        await this.contactDetailsContainerSchedule.click()
    }
    async getTextContactDetailsContainerCallUs() {
        await this.contactDetailsContainerCallUs.click()
    }
    async getTextContactDetailsContainerEmail() {
        await this.contactDetailsContainerEmail.click()
    }
    async getTextContactFormContainerTitle() {
        await this.contactFormContainerTitle.click()
    }
    async getTextContactFormContainerDescription() {
        await this.contactFormContainerDescription.click()
    }
    async fillContactNameFormField(contactName: string) {
        await this.contactFormContainerName.fill(contactName)
    }
    async fillContactTelephoneFormField(contactTelephone: string) {
        await this.contactFormContainerTelephone.fill(contactTelephone)
    }
    async fillContactEmailFormField(contactEmail: string) {
        await this.contactFormContainerEmail.fill(contactEmail)
    }
    async fillContactMessageFormField(contactMessage: string) {
        await this.contactFormContainerMessage.fill(contactMessage)
    }
    async clickContactFormContainerSendButton() {
        await this.contactFormContainerSendButton.click()
    }

}