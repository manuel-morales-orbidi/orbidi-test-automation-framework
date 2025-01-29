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

test('validateSpanishLanguageTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebManageConcentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await expect(WebNavigationMenuPage.navigationLanguagePicker).toHaveText('es')
    await expect(WebNavigationMenuPage.navigationHomeOption).toHaveText('Inicio')
    await expect(WebNavigationMenuPage.navigationServicesOption).toHaveText('Servicios')
    await expect(WebNavigationMenuPage.navigationContactsOption).toHaveText('Contacto')
    await expect(WebManageConcentModalPage.manageConsentTitle).toHaveText('Gestionar consentimiento')
    await expect(WebManageConcentModalPage.manageConsentDescription).toContainText('Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies')
    await expect(WebManageConcentModalPage.manageConsentAgreeButton).toHaveText('Aceptar')
    await expect(WebManageConcentModalPage.manageConsentDenyButton).toHaveText('Denegar')
    await expect(WebManageConcentModalPage.manageConsentSeePreferenceButton).toHaveText('Ver preferencias')
    await expect(WebFooterPage.footerMenuTitle).toHaveText('Menú')
    await expect(WebFooterPage.footerMenuHomeButton).toHaveText('Inicio')
    await expect(WebFooterPage.footerMenuServicesButton).toHaveText('Servicios')
    await expect(WebFooterPage.footerMenuContactsButton).toHaveText('Contacto')
    await expect(WebFooterPage.footerContactInformationTitle).toHaveText('Información de contacto')
    await expect(WebFooterPage.footerLegalTitle).toHaveText('Legal')

    await WebNavigationMenuPage.clickNavigationContactsOption()
    await expect(WebContactPage.contactFormContainerSendButton).toHaveText('Enviar')
    await page.close()

})

test('validateEnglishLanguageTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebManageConcentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerOption()
    await expect(WebNavigationMenuPage.navigationLanguagePicker).toHaveText('en')
    await expect(WebNavigationMenuPage.navigationEnglishHomeOption).toHaveText('Start')
    await expect(WebNavigationMenuPage.navigationEnglishServicesOption).toHaveText('Services')
    await expect(WebNavigationMenuPage.navigationEnglishContactsOption).toHaveText('Contact')
    await expect(WebManageConcentModalPage.manageConsentTitle).toHaveText('Manage consent')
    await expect(WebManageConcentModalPage.manageConsentDescription).toContainText('To deliver the best experiences, we use technologies such as cookies to store')
    await expect(WebManageConcentModalPage.manageConsentAgreeButton).toHaveText('Accept')
    await expect(WebManageConcentModalPage.manageConsentDenyButton).toHaveText('Deny')
    await expect(WebManageConcentModalPage.manageConsentSeePreferenceButton).toHaveText('View preferences')
    await expect(WebFooterPage.footerMenuTitle).toHaveText('Menu')
    await expect(WebFooterPage.footerMenuHomeButton).toHaveText('Start')
    await expect(WebFooterPage.footerMenuServicesButton).toHaveText('Services')
    await expect(WebFooterPage.footerMenuContactsButton).toHaveText('Contact')
    await expect(WebFooterPage.footerContactInformationTitle).toHaveText('Contact information')
    await expect(WebFooterPage.footerLegalTitle).toHaveText('Legal')

    await WebNavigationMenuPage.clickNavigationEnglishContactsOption()
    await expect(WebContactPage.contactFormContainerSendButton).toHaveText('Send')
    await page.close()

})

test('validateImagesTest', async ({ page }) => {
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

    await WebNavigationMenuPage.clickNavigationAboutOption()
    await expect(WebAboutPage.aboutFirstBlockImage).toBeVisible()
    await expect(WebAboutPage.aboutSecondBlockImage).toBeVisible()

    await WebNavigationMenuPage.clickNavigationServicesOption()
    await expect(WebServicePage.serviceFirstBlockImage).toBeVisible()
    await expect(WebServicePage.serviceSecondBlockImage).toBeVisible()
    await expect(WebServicePage.serviceThirdBlockImage).toBeVisible()
    await expect(WebServicePage.serviceFourthBlockImage).toBeVisible()

    await WebNavigationMenuPage.clickNavigationContactsOption()
    await expect(WebContactPage.contactBlockImage).toBeVisible()
    await page.close()

})

test('validateContactFormTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebNavigationMenuPage.clickNavigationContactsOption()

    await page.waitForTimeout(2000)
    await WebContactPage.fillContactNameFormField('Usuario de pruebas')
    await WebContactPage.fillContactTelephoneFormField('6012345678')
    await WebContactPage.fillContactEmailFormField('usuario.pruebas@orbidi.com')
    await WebContactPage.fillContactMessageFormField('Hola, Este es un mensaje generado automáticamente como parte de nuestras pruebas rutinarias para garantizar que tu sitio funcione correctamente. No es necesario realizar ninguna acción de tu parte, y puedes omitir este mensaje con tranquilidad')
    //await WebContactPage.clickContactFormContainerSendButton()
    //await expect(WebContactPage.contactFormSendSuccessfullyMessage).toHaveText('El envío se ha realizado correctamente.')


    await page.close()

})

test('validateContactEstructureEmailFormTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebNavigationMenuPage.clickNavigationContactsOption()
    await page.waitForTimeout(2000)
    await WebContactPage.fillContactNameFormField('Usuario de pruebas')
    await WebContactPage.fillContactTelephoneFormField('6012345678')
    await WebContactPage.fillContactEmailFormField('usuario')
    await WebContactPage.fillContactMessageFormField('Hola, Este es un mensaje generado automáticamente como parte de nuestras pruebas rutinarias para garantizar que tu sitio funcione correctamente. No es necesario realizar ninguna acción de tu parte, y puedes omitir este mensaje con tranquilidad')
    await WebContactPage.clickContactFormContainerSendButton()

    await expect(WebContactPage.contactFormValidateStructureEmailMessage).toHaveText('Este campo es obligatorio.')
    await page.close()

})

test('validateContactEmptyFormTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebNavigationMenuPage.clickNavigationContactsOption()

    await page.waitForTimeout(2000)
    await WebContactPage.clickContactFormContainerSendButton()

    await expect(WebContactPage.contactFormValidateStructureEmailMessage).toHaveText('Este campo es obligatorio.')
    await page.close()

})

test('validateAllButtonsTest', async ({ page }) => {
    await page.goto('')

    const WebManageConsentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebContactUsSectionPage = new ContactUsSectionPage(page)
    const WebHomePage = new HomePage(page)
    const WebFooterPage = new FooterPage(page)

    await WebNavigationMenuPage.clickNavigationAboutOption()
    await WebContactUsSectionPage.clickContactUsSectionButton()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebNavigationMenuPage.clickNavigationServicesOption()
    await WebContactUsSectionPage.clickContactUsSectionButton()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebNavigationMenuPage.clickNavigationContactsOption()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebHomePage.clickHomeBodyServicesButton()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebManageConsentModalPage.clickManageConcentAgreeButton()
    await WebFooterPage.clickFooterMenuAboutUsButton()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebFooterPage.clickFooterServicesButton()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebFooterPage.clickFooterMenuContactsButton()
    await WebNavigationMenuPage.clickNavigationHomeOption()
    await WebHomePage.clickHomeBodyServicesButton()
    await WebFooterPage.clickFooterLegalNoticeButton()
    await WebFooterPage.clickFooterLegalPrivacyPolicyButton()
    await WebFooterPage.clickFooterLegalPolicyCookiesButton()
    await WebFooterPage.clickFooterLegalAccessibilityButton()
    
    await page.close()

})

test('validateLegalNoticeSpanish', async ({ page }) => {
    await page.goto('')

    const WebLegalNoticePage = new LegalNoticePage(page)
    const WebFooterPage = new FooterPage(page)

    await WebFooterPage.clickFooterLegalNoticeButton()
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

test('validateLegalNoticeEnglish', async ({ page }) => {
    await page.goto('')

    const WebLegalNoticePage = new LegalNoticePage(page)
    const WebFooterPage = new FooterPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebFooterPage.clickFooterLegalNoticeButton()
    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerOption()
    await expect(WebNavigationMenuPage.navigationLanguagePicker).toHaveText('en')
    await expect(WebLegalNoticePage.legalNoticeTitle).toHaveText('Legal notice')
    await expect(WebLegalNoticePage.legalNoticeEnglishSubtitle).toHaveText('INFORMATION SOCIETY SERVICES LAW (LSSI)')
    await expect(WebLegalNoticePage.legalNoticeFirstItemEnglishTitle).toHaveText('1. IDENTIFICATION DATA')
    await expect(WebLegalNoticePage.legalNoticeSecondItemEnglishTitle).toHaveText('2. OBJECT')
    await expect(WebLegalNoticePage.legalNoticeThirdItemEnglishTitle).toHaveText('3. PRIVACY AND DATA PROCESSING')
    await expect(WebLegalNoticePage.legalNoticeFourthItemEnglishTitle).toHaveText('4. INDUSTRIAL AND INTELLECTUAL PROPERTY')

    await page.close()
})