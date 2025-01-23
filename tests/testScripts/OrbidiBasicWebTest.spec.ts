import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { ContactUsSectionPage } from '../pages/ContactUsSectionPage';
import { FooterPage } from '../pages/FooterPage';
import { HomePage } from '../pages/HomePage';
import { ManageConcentModalPage } from '../pages/ManageConsentModalPage';
import { NavigationMenuPage } from '../pages/NavigationMenuPage';
import { ServicePage } from '../pages/ServicePage';

test('validateSpanishLanguageTest', async ({ page }) => {
    await page.goto('')

    const WebContactPage = new ContactPage(page)
    const WebFooterPage = new FooterPage(page)
    const WebManageConcentModalPage = new ManageConcentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await expect(WebNavigationMenuPage.navigationLanguagePicker).toHaveText('es')
    await expect(WebNavigationMenuPage.navigationHomeOption).toHaveText('Inicio')
    await expect(WebNavigationMenuPage.navigationServicesOption).toHaveText('Servicios')
    await expect(WebNavigationMenuPage.navigationContactsOption).toHaveText('Contacto')
    await expect(WebManageConcentModalPage.manageConcentTitle).toHaveText('Gestionar consentimiento')
    await expect(WebManageConcentModalPage.manageConcentDescription).toContainText('Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies')
    await expect(WebManageConcentModalPage.manageConcentAgreeButton).toHaveText('Aceptar')
    await expect(WebManageConcentModalPage.manageConcentDenyButton).toHaveText('Denegar')
    await expect(WebManageConcentModalPage.manageConcentSeePreferenceButton).toHaveText('Ver preferencias')
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
    const WebManageConcentModalPage = new ManageConcentModalPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)

    await WebNavigationMenuPage.clickNavigationLanguagePicker()
    await WebNavigationMenuPage.clickNavigationSelectLanguagePickerOption()
    await expect(WebNavigationMenuPage.navigationLanguagePicker).toHaveText('en')
    await expect(WebNavigationMenuPage.navigationEnglishHomeOption).toHaveText('Start')
    await expect(WebNavigationMenuPage.navigationEnglishServicesOption).toHaveText('Services')
    await expect(WebNavigationMenuPage.navigationEnglishContactsOption).toHaveText('Contact')
    await expect(WebManageConcentModalPage.manageConcentTitle).toHaveText('Manage consent')
    await expect(WebManageConcentModalPage.manageConcentDescription).toContainText('To deliver the best experiences, we use technologies such as cookies to store')
    await expect(WebManageConcentModalPage.manageConcentAgreeButton).toHaveText('Accept')
    await expect(WebManageConcentModalPage.manageConcentDenyButton).toHaveText('Deny')
    await expect(WebManageConcentModalPage.manageConcentSeePreferenceButton).toHaveText('View preferences')
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

    const WebAboutPage = new AboutPage (page)
    const WebHomePage = new HomePage (page)
    const WebContactPage = new ContactPage(page)
    const WebNavigationMenuPage = new NavigationMenuPage(page)
    const WebServicePage = new ServicePage (page)

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