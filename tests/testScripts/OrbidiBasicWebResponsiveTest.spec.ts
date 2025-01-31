import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { ContactUsSectionPage } from '../pages/ContactUsSectionPage';
import { FooterPage } from '../pages/FooterPage';
import { HomePage } from '../pages/HomePage';
import { ManageConsentModalPage } from '../pages/ManageConsentModalPage';
import { NavigationMenuPage } from '../pages/NavigationMenuPage';
import { ServicePage } from '../pages/ServicePage';
import { LegalNoticePage } from '../pages/LegalNoticePage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicy';


test('validateResponsiveHamburgerMenu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('')

    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveHomeMenuOption()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveAboutMenuOption()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveServicesMenuOption()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()

    //await page.close()
})

test('validateResponsiveAboutOption', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('')

    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebAboutPage = new AboutPage(page)

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveAboutMenuOption()
    await expect(WebAboutPage.aboutFirstBlockTitle).toBeVisible()

    await page.close()
})

test('validateResponsiveServicesOption', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('')

    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebServicesPage = new ServicePage(page)

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveServicesMenuOption()
    await expect(WebServicesPage.serviceFirstBlockTitle).toBeVisible()

    await page.close()
})

test('validateResponsiveContactOption', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('')

    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebContactPage = new ContactPage(page)

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()
    await expect(WebContactPage.contactBlockTitle).toBeVisible()

    await page.close()
})

test('validateResponsiveHomeOption', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('')

    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebHomePage = new HomePage(page)

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveHomeMenuOption()
    await expect(WebHomePage.homeBodyTitle).toBeVisible()

    await page.close()
})

test('validateResponsiveImagesTest', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('')

    const WebAboutPage = new AboutPage(page)
    const WebHomePage = new HomePage(page)
    const WebContactPage = new ContactPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebServicePage = new ServicePage(page)

    await expect(WebHomePage.homeBodyPrincipalBannerImage).toBeVisible()
    await expect(WebHomePage.homeBodyAboutUsBannerImage).toBeVisible()
    await expect(WebHomePage.homeBodyServicesFirstBlockImage).toBeVisible()
    await expect(WebHomePage.homeBodyServicesSecondBlockImage).toBeVisible()
    await expect(WebHomePage.homeBodyServicesthirdBlockImage).toBeVisible()

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveAboutMenuOption()
    await expect(WebAboutPage.aboutFirstBlockImage).toBeVisible()
    await expect(WebAboutPage.aboutSecondBlockImage).toBeVisible()

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveServicesMenuOption()
    await expect(WebServicePage.serviceFirstBlockImage).toBeVisible()
    await expect(WebServicePage.serviceSecondBlockImage).toBeVisible()
    await expect(WebServicePage.serviceThirdBlockImage).toBeVisible()
    await expect(WebServicePage.serviceFourthBlockImage).toBeVisible()

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()
    await expect(WebContactPage.contactBlockImage).toBeVisible()
    await page.close()

})

test('validateResponsiveContactFormTest', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()

    await page.waitForTimeout(2000)
    await WebContactPage.fillContactNameFormField('Usuario de pruebas')
    await WebContactPage.fillContactTelephoneFormField('6012345678')
    await WebContactPage.fillContactEmailFormField('usuario.pruebas@orbidi.com')
    await WebContactPage.fillContactMessageFormField('Hola, Este es un mensaje generado automáticamente como parte de nuestras pruebas rutinarias para garantizar que tu sitio funcione correctamente. No es necesario realizar ninguna acción de tu parte, y puedes omitir este mensaje con tranquilidad')
    //await WebContactPage.clickContactFormContainerSendButton()
    //await expect(WebContactPage.contactFormSendSuccessfullyMessage).toHaveText('El envío se ha realizado correctamente.')


    await page.close()

})

test('validateResponsiveContactEstructureEmailFormTest', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()
    await page.waitForTimeout(2000)
    await WebContactPage.fillContactNameFormField('Usuario de pruebas')
    await WebContactPage.fillContactTelephoneFormField('6012345678')
    await WebContactPage.fillContactEmailFormField('usuario')
    await WebContactPage.fillContactMessageFormField('Hola, Este es un mensaje generado automáticamente como parte de nuestras pruebas rutinarias para garantizar que tu sitio funcione correctamente. No es necesario realizar ninguna acción de tu parte, y puedes omitir este mensaje con tranquilidad')
    await WebContactPage.clickContactFormContainerSendButton()

    await expect(WebContactPage.contactFormValidateStructureEmailMessage).toHaveText('Este campo es obligatorio.')
    await page.close()

})

test('validateResponsiveContactEmptyFormTest', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()
    await page.waitForTimeout(2000)
    await WebContactPage.clickContactFormContainerSendButton()

    await expect(WebContactPage.contactFormValidateStructureEmailMessage).toHaveText('Este campo es obligatorio.')
    await page.close()

})

test('validateResponsiveAllButtonsTest', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebContactUsSectionPage = new ContactUsSectionPage(page)
    const WebHomePage = new HomePage(page)
    const WebFooterPage = new FooterPage(page)

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveAboutMenuOption()
    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebContactUsSectionPage.clickContactUsSectionButton()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveHomeMenuOption()

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveServicesMenuOption()
    await WebContactUsSectionPage.clickContactUsSectionButton()

    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveHomeMenuOption()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveContactMenuOption()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveHomeMenuOption()
    await WebHomePage.clickHomeBodyServicesButton()
    await WebNavigationMenuPage.clickNavigationResponsiveHamburgerMenuIcon()
    await WebNavigationMenuPage.clickNavigationResponsiveHomeMenuOption()
 
    await page.close()

})

test('validateLegalNoticeSpanish', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebLegalNoticePage = new LegalNoticePage(page)
    const WebFooterPage = new FooterPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalNoticeResponsiveButton()
    await expect(WebLegalNoticePage.legalNoticeTitle).toHaveText('Aviso legal')
    await expect(WebLegalNoticePage.legalNoticeSubtitle).toHaveText('LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)')
    await expect(WebLegalNoticePage.legalNoticeDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeFirstItemTitle).toHaveText('1. DATOS IDENTIFICATIVOS')
    await expect(WebLegalNoticePage.legalNoticeFirstItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeSecondItemTitle).toHaveText('2. OBJETO')
    await expect(WebLegalNoticePage.legalNoticeSecondItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeThirdItemTitle).toHaveText('3. PRIVACIDAD Y TRATAMIENTO DE DATOS')
    await expect(WebLegalNoticePage.legalNoticeThirdItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeFourthItemTitle).toHaveText('4. PROPIEDAD INDUSTRIAL E INTELECTUAL')
    await expect(WebLegalNoticePage.legalNoticeFourthItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeFifthItemTitle).toHaveText('5. OBLIGACIONES Y RESPONSABILIDADES DEL USUARIO DEL ESPACIO WEB')
    await expect(WebLegalNoticePage.legalNoticeFifthItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeSixthItemTitle).toHaveText('6. RESPONSABILIDADES')
    await expect(WebLegalNoticePage.legalNoticeSixthItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeSeventhItemTitle).toHaveText('7. HIPERVÍNCULOS')
    await expect(WebLegalNoticePage.legalNoticeSeventhItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeEighthItemTitle).toHaveText('8. PROTECCIÓN DE DATOS')
    await expect(WebLegalNoticePage.legalNoticeEighthItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeNinthItemTitle).toHaveText('9. COOKIES')
    await expect(WebLegalNoticePage.legalNoticeNinthItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeTenthItemTitle).toHaveText('10. DECLARACIONES Y GARANTÍAS')
    await expect(WebLegalNoticePage.legalNoticeTenthItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeEleventhItemTitle).toHaveText('11. FUERZA MAYOR')
    await expect(WebLegalNoticePage.legalNoticeEleventhItemDescription).toBeVisible()
    await expect(WebLegalNoticePage.legalNoticeTwelfthItemTitle).toHaveText('12. RESOLUCIÓN DE CONTROVERSIAS. LEY APLICABLE Y JURISDICCIÓN')
    await expect(WebLegalNoticePage.legalNoticeTwelfthItemDescription).toBeVisible()

    await page.close()
})

test('validateResponsiveLegalNoticeEnglish', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebLegalNoticePage = new LegalNoticePage(page)
    const WebFooterPage = new FooterPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalNoticeResponsiveButton()
    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerEnglishOption()
    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('en')
    await expect(WebLegalNoticePage.legalNoticeTitle).toHaveText('Legal notice')
    await expect(WebLegalNoticePage.legalNoticeEnglishSubtitle).toHaveText('INFORMATION SOCIETY SERVICES LAW (LSSI)')
    await expect(WebLegalNoticePage.legalNoticeFirstItemEnglishTitle).toHaveText('1. IDENTIFICATION DATA')
    await expect(WebLegalNoticePage.legalNoticeSecondItemEnglishTitle).toHaveText('2. OBJECT')
    await expect(WebLegalNoticePage.legalNoticeThirdItemEnglishTitle).toHaveText('3. PRIVACY AND DATA PROCESSING')
    await expect(WebLegalNoticePage.legalNoticeFourthItemEnglishTitle).toHaveText('4. INDUSTRIAL AND INTELLECTUAL PROPERTY')

    await page.close()
})

test('validateResponsivePrivacyPolicy', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebPrivacyPolicyPage = new PrivacyPolicyPage(page)
    const WebFooterPage = new FooterPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalPrivacyPolicyResponsiveButton()
    await expect(WebPrivacyPolicyPage.privacyPolicyTitle).toHaveText('Política de privacidad')
    await expect(WebPrivacyPolicyPage.privacyPolicyFirstItemTitle).toHaveText('1. INFORMACIÓN AL USUARIO')
    await expect(WebPrivacyPolicyPage.privacyPolicyFirstItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicySecondItemTitle).toHaveText('2. CONTACTO')
    await expect(WebPrivacyPolicyPage.privacyPolicySecondItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicyThirdItemTitle).toHaveText('3. PRINCIPIOS CLAVE')
    await expect(WebPrivacyPolicyPage.privacyPolicyThirdItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicyFourthItemTitle).toHaveText('4. RECOGIDA Y TRATAMIENTO DE SUS DATOS PERSONALES')
    await expect(WebPrivacyPolicyPage.privacyPolicyFourthItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicyFifthItemTitle).toHaveText('5. LEGITIMIDAD')
    await expect(WebPrivacyPolicyPage.privacyPolicyFifthItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicySixthItemTitle).toHaveText('6. COMUNICACIÓN DE DATOS PERSONALES')
    await expect(WebPrivacyPolicyPage.privacyPolicySixthItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicySeventhItemTitle).toHaveText('7. SUS DERECHOS')
    await expect(WebPrivacyPolicyPage.privacyPolicySeventhItemDescription).toBeVisible()
    await expect(WebPrivacyPolicyPage.privacyPolicyEighthItemTitle).toHaveText('8. INFORMACIÓN LEGAL')
    await expect(WebPrivacyPolicyPage.privacyPolicyEighthItemDescription).toBeVisible()


    await page.close()
})

test('validateResponsivePrivacyPolicyEnglish', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('')

    const WebPrivacyPolicyPage = new PrivacyPolicyPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalPrivacyPolicyResponsiveButton()
    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerEnglishOption()
    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('en')
    await expect(WebPrivacyPolicyPage.privacyPolicyTitle).toHaveText('Privacy Policy')
    await expect(WebPrivacyPolicyPage.privacyPolicyFirstItemEnglishTitle).toHaveText('1. INFORMATION TO THE USER')
    await expect(WebPrivacyPolicyPage.privacyPolicySecondItemEnglishTitle).toHaveText('2. CONTACT')
    await expect(WebPrivacyPolicyPage.privacyPolicyThirdItemEnglishTitle).toHaveText('3. KEY PRINCIPLES')

    await page.close()
})