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
import { CookiesPolicyPage } from '../pages/CookiesPolicyPage';
import { AccessibilityPage } from '../pages/AccessibilityPage';

test('validateSpanishLanguageTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebManageConcentModalPage = new ManageConsentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('es')
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
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerEnglishOption()
    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('en')
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

test('validatePrivacyPolicySpanish', async ({ page }) => {
    await page.goto('')

    const WebPrivacyPolicyPage = new PrivacyPolicyPage(page)
    const WebFooterPage = new FooterPage(page)

    await WebFooterPage.clickFooterLegalPrivacyPolicyButton()
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

test('validatePrivacyPolicyEnglish', async ({ page }) => {
    await page.goto('')

    const WebPrivacyPolicyPage = new PrivacyPolicyPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalPrivacyPolicyButton()
    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerEnglishOption()
    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('en')
    await expect(WebPrivacyPolicyPage.privacyPolicyTitle).toHaveText('Privacy Policy')
    await expect(WebPrivacyPolicyPage.privacyPolicyFirstItemEnglishTitle).toHaveText('1. INFORMATION TO THE USER')
    await expect(WebPrivacyPolicyPage.privacyPolicySecondItemEnglishTitle).toHaveText('2. CONTACT')
    await expect(WebPrivacyPolicyPage.privacyPolicyThirdItemEnglishTitle).toHaveText('3. KEY PRINCIPLES')
    //await expect(WebPrivacyPolicyPage.privacyPolicyFourthItemEnglishTitle).toHaveText('4. COLLECTION AND PROCESSING OF YOUR PERSONAL DATA')

    await page.close()
})

test('validateCookiesPolicySpanish', async ({ page }) => {
    await page.goto('')

    const WebCookiesPolicyPage = new CookiesPolicyPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalPolicyCookiesButton()
    await expect(WebCookiesPolicyPage.cookiesPolicyTitle).toHaveText('Política de cookies (UE)')
    await expect(WebCookiesPolicyPage.cookiesPolicyDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyFirstItemTitle).toHaveText('1. Introducción')
    await expect(WebCookiesPolicyPage.cookiesPolicyFirstItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicySecondItemTitle).toHaveText('2. ¿Qué son las cookies?')
    await expect(WebCookiesPolicyPage.cookiesPolicySecondItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyThirdItemTitle).toHaveText('3. ¿Qué son los scripts?')
    await expect(WebCookiesPolicyPage.cookiesPolicyThirdItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyFourthItemTitle).toHaveText('4. ¿Qué es una baliza web?')
    await expect(WebCookiesPolicyPage.cookiesPolicyFourthItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyFifthItemTitle).toHaveText('5. Cookies')
    await expect(WebCookiesPolicyPage.cookiesPolicyFifthItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicySixthItemTitle).toHaveText('6. Cookies usadas')
    await expect(WebCookiesPolicyPage.cookiesPolicySixthItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicySeventhItemTitle).toHaveText('7. Consentimiento')
    await expect(WebCookiesPolicyPage.cookiesPolicySeventhItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyEighthItemTitle).toHaveText('8. Activación/desactivación y borrado de cookies')
    await expect(WebCookiesPolicyPage.cookiesPolicyEighthItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyNinthItemTitle).toHaveText('9. Tus derechos con respecto a los datos personales')
    await expect(WebCookiesPolicyPage.cookiesPolicyNinthItemDescription).toBeVisible()
    await expect(WebCookiesPolicyPage.cookiesPolicyTenthItemTitle).toHaveText('10. Datos de contacto')
    await expect(WebCookiesPolicyPage.cookiesPolicyTenthItemDescription).toBeVisible()

    await page.close()
})

test('validateCookiesPolicyEnglish', async ({ page }) => {
    await page.goto('')

    const WebCookiesPolicyPage = new CookiesPolicyPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalPolicyCookiesButton()
    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerEnglishOption()
    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('en')
    await expect(WebCookiesPolicyPage.cookiesPolicyEnglishTitle).toHaveText('Cookie Policy (EU)')
    await expect(WebCookiesPolicyPage.cookiesPolicyFirstItemEnglishTitle).toHaveText('1. Introduction')
    await expect(WebCookiesPolicyPage.cookiesPolicySecondItemEnglishTitle).toHaveText('2. What are cookies?')
    await expect(WebCookiesPolicyPage.cookiesPolicyThirdItemEnglishTitle).toHaveText('3. What are scripts?')

    await page.close()
})

test('validateAccessibilitySpanish', async ({ page }) => {
    await page.goto('')

    const WebAccesibilityPage = new AccessibilityPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalAccessibilityButton()
    await expect(WebAccesibilityPage.accessibilityTitle).toHaveText('Accesibilidad')
    await expect(WebAccesibilityPage.accessibilityDescription).toBeVisible()
    await expect(WebAccesibilityPage.accessibilityFirstItemTitle).toHaveText('SITUACIÓN DE CUMPLIMIENTO')
    await expect(WebAccesibilityPage.accessibilityFirstItemDescription).toBeVisible()
    await expect(WebAccesibilityPage.accessibilitySecondItemTitle).toHaveText('CONTENIDO NO ACCESIBLE')
    await expect(WebAccesibilityPage.accessibilitySecondItemDescription).toBeVisible()
    await expect(WebAccesibilityPage.accessibilityThirdItemTitle).toHaveText('PREPARACIÓN DE LA PRESENTE DECLARACIÓN DE ACCESIBILIDAD')
    await expect(WebAccesibilityPage.accessibilityThirdItemDescription).toBeVisible()
    await expect(WebAccesibilityPage.accessibilityFourthItemTitle).toHaveText('OBSERVACIONES Y DATOS DE CONTACTO')
    await expect(WebAccesibilityPage.accessibilityFourthItemDescription).toBeVisible()
    await expect(WebAccesibilityPage.accessibilityFifthItemTitle).toHaveText('Solicitudes de información accesible y quejas')
    await expect(WebAccesibilityPage.accessibilitySixthItemTitle).toHaveText('PROCEDIMIENTO DE APLICACIÓN')
    await expect(WebAccesibilityPage.accessibilitySixthItemDescription).toBeVisible()
    await expect(WebAccesibilityPage.accessibilitySeventhItemTitle).toHaveText('CONTENIDO OPCIONAL')
    await expect(WebAccesibilityPage.accessibilitySeventhItemDescription).toBeVisible()

    await page.close()
})

test('validateAccessibilityEnglish', async ({ page }) => {
    await page.goto('')

    const WebAccesibilityPage = new AccessibilityPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebManageConsentModalPage = new ManageConsentModalPage(page)

    await WebManageConsentModalPage.clickManageConcentCloseButton()
    await WebFooterPage.clickFooterLegalAccessibilityButton()
    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerEnglishOption()
    await expect(WebNavigationMenuPage.navigationLanguageAssertionText).toHaveText('en')
    await expect(WebAccesibilityPage.accessibilityTitle).toHaveText('Accessibility')
    await expect(WebAccesibilityPage.accessibilityFirstItemEnglishTitle).toHaveText('COMPLIANCE STATUS')
    await expect(WebAccesibilityPage.accessibilitySecondItemEnglishTitle).toHaveText('CONTENT NOT ACCESSIBLE')
    await expect(WebAccesibilityPage.accessibilityThirdItemEnglishTitle).toHaveText('PREPARATION OF THIS ACCESSIBILITY STATEMENT')

    await page.close()
})