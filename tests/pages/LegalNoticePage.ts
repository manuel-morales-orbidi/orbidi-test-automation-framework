import { Location, Locator, Page } from "@playwright/test";

export class LegalNoticePage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly legalNoticeTitle: Locator
    public readonly legalNoticeSubtitle: Locator
    public readonly legalNoticeDescription: Locator
    public readonly legalNoticeFirstItemTitle: Locator
    public readonly legalNoticeFirstItemDescription: Locator
    public readonly legalNoticeSecondItemTitle: Locator
    public readonly legalNoticeSecondItemDescription: Locator
    public readonly legalNoticeThirdItemTitle: Locator
    public readonly legalNoticeThirdItemDescription: Locator
    public readonly legalNoticeFourthItemTitle: Locator
    public readonly legalNoticeFourthItemDescription: Locator
    public readonly legalNoticeFifthItemTitle: Locator
    public readonly legalNoticeFifthItemDescription: Locator
    public readonly legalNoticeSixthItemTitle: Locator
    public readonly legalNoticeSixthItemDescription: Locator
    public readonly legalNoticeSeventhItemTitle: Locator
    public readonly legalNoticeSeventhItemDescription: Locator
    public readonly legalNoticeEighthItemTitle: Locator
    public readonly legalNoticeEighthItemDescription: Locator
    public readonly legalNoticeNinthItemTitle: Locator
    public readonly legalNoticeNinthItemDescription: Locator
    public readonly legalNoticeTenthItemTitle: Locator
    public readonly legalNoticeTenthItemDescription: Locator
    public readonly legalNoticeEleventhItemTitle: Locator
    public readonly legalNoticeEleventhItemDescription: Locator
    public readonly legalNoticeTwelfthItemTitle: Locator
    public readonly legalNoticeTwelfthItemDescription: Locator

    //-------------------------------------- Find English Selectors ---------------------------------------//

    public readonly legalNoticeEnglishSubtitle: Locator
    public readonly legalNoticeFirstItemEnglishTitle: Locator
    public readonly legalNoticeSecondItemEnglishTitle: Locator
    public readonly legalNoticeThirdItemEnglishTitle: Locator
    public readonly legalNoticeFourthItemEnglishTitle: Locator
    public readonly legalNoticeFifthItemEnglishTitle: Locator
    public readonly legalNoticeSixthItemEnglishTitle: Locator
    public readonly legalNoticeSeventhItemEnglishTitle: Locator
    public readonly legalNoticeEighthItemEnglishTitle: Locator
    public readonly legalNoticeNinthItemEnglishTitle: Locator
    public readonly legalNoticeTenthItemEnglishTitle: Locator
    public readonly legalNoticeEleventhItemEnglishTitle: Locator
    public readonly legalNoticeTwelfthItemEnglishTitle: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.legalNoticeTitle = page.locator("//div[@data-id='4c032f7d']")
        this.legalNoticeSubtitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[1]/strong')
        this.legalNoticeDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[1]')
        this.legalNoticeFirstItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[2]/strong')
        this.legalNoticeFirstItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[4]')
        this.legalNoticeFirstItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[1]/strong/font/font')
        this.legalNoticeSecondItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[3]/strong')
        this.legalNoticeSecondItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[9]')
        this.legalNoticeThirdItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[4]/strong')
        this.legalNoticeThirdItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[10]')
        this.legalNoticeFourthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[5]/strong')
        this.legalNoticeFourthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[11]')
        this.legalNoticeFifthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[6]/strong')
        this.legalNoticeFifthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[12]')
        this.legalNoticeSixthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[7]/strong')
        this.legalNoticeSixthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[13]')
        this.legalNoticeSeventhItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[8]/strong')
        this.legalNoticeSeventhItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[14]')
        this.legalNoticeEighthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[9]/strong')
        this.legalNoticeEighthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[15]')
        this.legalNoticeNinthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[10]/strong')
        this.legalNoticeNinthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[16]')
        this.legalNoticeTenthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[11]/strong')
        this.legalNoticeTenthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[17]')
        this.legalNoticeEleventhItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[12]/strong')
        this.legalNoticeEleventhItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[18]')
        this.legalNoticeTwelfthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[13]/strong')
        this.legalNoticeTwelfthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[19]')
 
     //-------------------------------------- English Constructor ------------------------------------------//

        this.legalNoticeEnglishSubtitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[1]/strong/font/font')
        this.legalNoticeFirstItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[2]/strong/font/font')
        this.legalNoticeSecondItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[3]/strong/font/font')
        this.legalNoticeThirdItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[4]/strong/font/font')
        this.legalNoticeFourthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[5]/strong/font/font')
        this.legalNoticeFifthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[6]/strong')
        this.legalNoticeSixthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[7]/strong')
        this.legalNoticeSeventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[8]/strong/font/font')
        this.legalNoticeEighthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[9]/strong/font/font')
        this.legalNoticeNinthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[10]/strong/font/font')
        this.legalNoticeTenthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[11]/strong/font/font')
        this.legalNoticeEleventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[12]/strong/font/font')
        this.legalNoticeTwelfthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[13]/strong/font/font')
 
    }



    //----------------------------------------- Action Methods --------------------------------------------//


}
