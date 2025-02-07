import { Location, Locator, Page } from "@playwright/test";

export class AccessibilityPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly accessibilityTitle: Locator
    public readonly accessibilityDescription: Locator
    public readonly accessibilityFirstItemTitle: Locator
    public readonly accessibilityFirstItemDescription: Locator
    public readonly accessibilitySecondItemTitle: Locator
    public readonly accessibilitySecondItemDescription: Locator
    public readonly accessibilityThirdItemTitle: Locator
    public readonly accessibilityThirdItemDescription: Locator
    public readonly accessibilityFourthItemTitle: Locator
    public readonly accessibilityFourthItemDescription: Locator
    public readonly accessibilityFifthItemTitle: Locator
    public readonly accessibilityFifthItemDescription: Locator
    public readonly accessibilitySixthItemTitle: Locator
    public readonly accessibilitySixthItemDescription: Locator
    public readonly accessibilitySeventhItemTitle: Locator
    public readonly accessibilitySeventhItemDescription: Locator


    //-------------------------------------- Find English Selectors ---------------------------------------//

    public readonly accessibilityFirstItemEnglishTitle: Locator
    public readonly accessibilitySecondItemEnglishTitle: Locator
    public readonly accessibilityThirdItemEnglishTitle: Locator
    public readonly accessibilityFourthItemEnglishTitle: Locator
    public readonly accessibilityFifthItemEnglishTitle: Locator
    public readonly accessibilitySixthItemEnglishTitle: Locator
    public readonly accessibilitySeventhItemEnglishTitle: Locator



    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.accessibilityTitle = page.locator("xpath=//div[@data-id='4c032f7d']")
        this.accessibilityDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[1]')
        this.accessibilityFirstItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[1]/strong')
        this.accessibilityFirstItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[3]')
        this.accessibilitySecondItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[2]/strong')
        this.accessibilitySecondItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[4]')
        this.accessibilityThirdItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[3]/strong')
        this.accessibilityThirdItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[5]')
        this.accessibilityFourthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[4]/strong')
        this.accessibilityFourthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[8]')
        this.accessibilityFifthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h3/strong')
        this.accessibilityFifthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[11]')
        this.accessibilitySixthItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[5]/strong')
        this.accessibilitySixthItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[14]')
        this.accessibilitySeventhItemTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/h2[6]/strong')
        this.accessibilitySeventhItemDescription = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/p[17]')


        //-------------------------------------- English Constructor ------------------------------------------//

        this.accessibilityFirstItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[1]/strong/font/font')
        this.accessibilitySecondItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[2]/strong/font/font')
        this.accessibilityThirdItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[3]/strong/font/font')
        this.accessibilityFourthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[4]/strong/font/font')
        this.accessibilityFifthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h3/strong/font/font')
        this.accessibilitySixthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[5]/strong/font/font')
        this.accessibilitySeventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[6]/strong/font/font')

    }

    //----------------------------------------- Action Methods --------------------------------------------//


}