import { Location, Locator, Page } from "@playwright/test";

export class CookiesPolicyPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    public readonly cookiesPolicyTitle: Locator
    public readonly cookiesPolicyDescription: Locator
    public readonly cookiesPolicyFirstItemTitle: Locator
    public readonly cookiesPolicyFirstItemDescription: Locator
    public readonly cookiesPolicySecondItemTitle: Locator
    public readonly cookiesPolicySecondItemDescription: Locator
    public readonly cookiesPolicyThirdItemTitle: Locator
    public readonly cookiesPolicyThirdItemDescription: Locator
    public readonly cookiesPolicyFourthItemTitle: Locator
    public readonly cookiesPolicyFourthItemDescription: Locator
    public readonly cookiesPolicyFifthItemTitle: Locator
    public readonly cookiesPolicyFifthItemDescription: Locator
    public readonly cookiesPolicySixthItemTitle: Locator
    public readonly cookiesPolicySixthItemDescription: Locator
    public readonly cookiesPolicySeventhItemTitle: Locator
    public readonly cookiesPolicySeventhItemDescription: Locator
    public readonly cookiesPolicyEighthItemTitle: Locator
    public readonly cookiesPolicyEighthItemDescription: Locator
    public readonly cookiesPolicyNinthItemTitle: Locator
    public readonly cookiesPolicyNinthItemDescription: Locator
    public readonly cookiesPolicyTenthItemTitle: Locator
    public readonly cookiesPolicyTenthItemDescription: Locator

    


    //-------------------------------------- Find English Selectors ---------------------------------------//

    public readonly cookiesPolicyEnglishTitle: Locator
    public readonly cookiesPolicyEnglishSubtitle: Locator
    public readonly cookiesPolicyFirstItemEnglishTitle: Locator
    public readonly cookiesPolicySecondItemEnglishTitle: Locator
    public readonly cookiesPolicyThirdItemEnglishTitle: Locator
    public readonly cookiesPolicyFourthItemEnglishTitle: Locator
    public readonly cookiesPolicyFifthItemEnglishTitle: Locator
    public readonly cookiesPolicySixthItemEnglishTitle: Locator
    public readonly cookiesPolicySeventhItemEnglishTitle: Locator
    public readonly cookiesPolicyEighthItemEnglishTitle: Locator
    public readonly cookiesPolicyNinthItemEnglishTitle: Locator
    public readonly cookiesPolicyTenthItemEnglishTitle: Locator
    public readonly cookiesPolicyEleventhItemEnglishTitle: Locator
    public readonly cookiesPolicyTwelfthItemEnglishTitle: Locator


    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {

        this.cookiesPolicyTitle = page.getByRole('heading', { name: 'Política de cookies (UE)' })
        this.cookiesPolicyDescription = page.locator("xpath=/html/body/div[2]/div/div/div[3]/div/div/p[1]")
        this.cookiesPolicyFirstItemTitle = page.getByRole('heading', { name: '1. Introducción' })
        this.cookiesPolicyFirstItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[2]')
        this.cookiesPolicySecondItemTitle = page.getByRole('heading', { name: '2. ¿Qué son las cookies?' })
        this.cookiesPolicySecondItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[3]')
        this.cookiesPolicyThirdItemTitle = page.getByRole('heading', { name: '3. ¿Qué son los scripts?' })
        this.cookiesPolicyThirdItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[4]')
        this.cookiesPolicyFourthItemTitle = page.getByRole('heading', { name: '4. ¿Qué es una baliza web?' })
        this.cookiesPolicyFourthItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[5]')
        this.cookiesPolicyFifthItemTitle = page.getByRole('heading', { name: '5. Cookies' })
        this.cookiesPolicyFifthItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[6]')
        this.cookiesPolicySixthItemTitle = page.getByRole('heading', { name: '6. Cookies usadas' })
        this.cookiesPolicySixthItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/div[1]/details[1]/summary/div/h3')
        this.cookiesPolicySeventhItemTitle = page.getByRole('heading', { name: '7. Consentimiento' })
        this.cookiesPolicySeventhItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[15]')
        this.cookiesPolicyEighthItemTitle = page.getByRole('heading', { name: '8. Activación/desactivación y borrado de cookies' })
        this.cookiesPolicyEighthItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[17]')
        this.cookiesPolicyNinthItemTitle = page.getByRole('heading', { name: '9. Tus derechos con respecto a los datos personales' })
        this.cookiesPolicyNinthItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[19]')
        this.cookiesPolicyTenthItemTitle = page.getByRole('heading', { name: '10. Datos de contacto' })
        this.cookiesPolicyTenthItemDescription = page.locator('xpath=/html/body/div[2]/div/div/div[3]/div/div/p[21]')
        

 
     //-------------------------------------- English Constructor ------------------------------------------//

        this.cookiesPolicyEnglishTitle = page.locator("xpath=//div[@data-id='4c032f7d']")
        this.cookiesPolicyFirstItemEnglishTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/div/h2[1]/font/font')
        this.cookiesPolicySecondItemEnglishTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/div/h2[2]/font/font')
        this.cookiesPolicyThirdItemEnglishTitle = page.locator('xpath=/html/body/div[3]/div/div/div[3]/div/div/h2[3]/font/font')
        this.cookiesPolicyFourthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[4]/strong/font/font')
        this.cookiesPolicyFifthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[6]/strong')
        this.cookiesPolicySixthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[7]/strong')
        this.cookiesPolicySeventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[8]/strong/font/font')
        this.cookiesPolicyEighthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[9]/strong/font/font')
        this.cookiesPolicyNinthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[10]/strong/font/font')
        this.cookiesPolicyTenthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[11]/strong/font/font')
        this.cookiesPolicyEleventhItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[12]/strong/font/font')
        this.cookiesPolicyTwelfthItemEnglishTitle = page.locator('xpath=/html/body/div[4]/div/div/div[3]/div/h2[13]/strong/font/font')
 
    }

    //----------------------------------------- Action Methods --------------------------------------------//


}