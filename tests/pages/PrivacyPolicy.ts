import { Location, Locator, Page } from "@playwright/test";

export class PrivacyPolicyPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly privacyPolicyTitle: Locator
    public readonly privacyPolicyFirstItemTitle: Locator
    public readonly privacyPolicyFirstItemDescription: Locator
    public readonly privacyPolicySecondItemTitle: Locator
    public readonly privacyPolicySecondItemDescription: Locator
    public readonly privacyPolicyThirdItemTitle: Locator
    public readonly privacyPolicyThirdItemDescription: Locator
    public readonly privacyPolicyFourthItemTitle: Locator
    public readonly privacyPolicyFourthItemDescription: Locator
    public readonly privacyPolicyFifthItemTitle: Locator
    public readonly privacyPolicyFifthItemDescription: Locator
    public readonly privacyPolicySixthItemTitle: Locator
    public readonly privacyPolicySixthItemDescription: Locator
    public readonly privacyPolicySeventhItemTitle: Locator
    public readonly privacyPolicySeventhItemDescription: Locator
    public readonly privacyPolicyEighthItemTitle: Locator
    public readonly privacyPolicyEighthItemDescription: Locator


    //-------------------------------------- Find English Selectors ---------------------------------------//

    public readonly privacyPolicyEnglishSubtitle: Locator
    public readonly privacyPolicyFirstItemEnglishTitle: Locator
    public readonly privacyPolicySecondItemEnglishTitle: Locator
    public readonly privacyPolicyThirdItemEnglishTitle: Locator
    public readonly privacyPolicyFourthItemEnglishTitle: Locator
    public readonly privacyPolicyFifthItemEnglishTitle: Locator
    public readonly privacyPolicySixthItemEnglishTitle: Locator
    public readonly privacyPolicySeventhItemEnglishTitle: Locator
    public readonly privacyPolicyEighthItemEnglishTitle: Locator
    public readonly privacyPolicyNinthItemEnglishTitle: Locator
    public readonly privacyPolicyTenthItemEnglishTitle: Locator
    public readonly privacyPolicyEleventhItemEnglishTitle: Locator
    public readonly privacyPolicyTwelfthItemEnglishTitle: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.privacyPolicyTitle = page.locator("xpath=//div[@data-id='4c032f7d']")
        this.privacyPolicyFirstItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[1]/strong')
        this.privacyPolicyFirstItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[1]')
        this.privacyPolicyFirstItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[1]/strong/font/font')
        this.privacyPolicySecondItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[2]/strong')
        this.privacyPolicySecondItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[4]')
        this.privacyPolicyThirdItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[3]/strong')
        this.privacyPolicyThirdItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[9]')
        this.privacyPolicyFourthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[4]/strong')
        this.privacyPolicyFourthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[10]')
        this.privacyPolicyFifthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[5]/strong')
        this.privacyPolicyFifthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[13]')
        this.privacyPolicySixthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[6]/strong')
        this.privacyPolicySixthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[14]')
        this.privacyPolicySeventhItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[7]/strong')
        this.privacyPolicySeventhItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[15]')
        this.privacyPolicyEighthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[8]/strong')
        this.privacyPolicyEighthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[19]')

 
     //-------------------------------------- English Constructor ------------------------------------------//

        this.privacyPolicyFirstItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[1]/strong/font/font')
        this.privacyPolicySecondItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[2]/strong/font/font')
        this.privacyPolicyThirdItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[3]/strong/font/font')
        this.privacyPolicyFourthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[4]/strong/font/font')
        this.privacyPolicyFifthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[6]/strong')
        this.privacyPolicySixthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[7]/strong')
        this.privacyPolicySeventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[8]/strong/font/font')
        this.privacyPolicyEighthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[9]/strong/font/font')
        this.privacyPolicyNinthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[10]/strong/font/font')
        this.privacyPolicyTenthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[11]/strong/font/font')
        this.privacyPolicyEleventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[12]/strong/font/font')
        this.privacyPolicyTwelfthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[13]/strong/font/font')
 
    }

    //----------------------------------------- Action Methods --------------------------------------------//


}