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

    const WebAboutPage = new AboutPage (page)
    const WebContactPage = new ContactPage (page)
    const WebContactUsSectionPage = new ContactUsSectionPage (page)
    const WebFooterPage = new FooterPage (page)
    const WebHomePage = new HomePage (page)
    const WebManageConcentModalPage = new ManageConcentModalPage (page)
    const WebNavigationMenuPage = new NavigationMenuPage (page)
    const WebServicePage = new ServicePage (page)

    await expect(WebNavigationMenuPage.navigationLanguagePicker).toHaveText('es')
    await expect(WebNavigationMenuPage.navigationHomeOption).toHaveText('Inicio')
    await expect(WebNavigationMenuPage.navigationServicesOption).toHaveText('Servicios')
    await expect(WebNavigationMenuPage.navigationContactsOption).toHaveText('Contacto')
    await expect(WebManageConcentModalPage.manageConcentTitle).toHaveText('Gestionar consentimiento')
    await expect(WebManageConcentModalPage.manageConcentDescription).toContainText('Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies')
    await expect(WebManageConcentModalPage.manageConcentAgreeButton).toHaveText('Aceptar')
    await expect(WebManageConcentModalPage.manageConcentDenyButton).toHaveText('Denegar')
    await expect(WebManageConcentModalPage.manageConcentSeePreferenceButton).toHaveText('Ver preferencias')
    await expect(WebFooterPage.footerMenuHomeButton).toHaveText('Inicio')
    await expect(WebFooterPage.footerMenuServicesButton).toHaveText('Servicios')
    await expect(WebFooterPage.footerMenuContactsButton).toHaveText('Contacto')
    await expect(WebFooterPage.footerContactInformationTitle).toHaveText('Información de contacto')
    await expect(WebFooterPage.footerLegalTitle).toHaveText('Legal')

    await page.waitForTimeout(2000)
    await WebNavigationMenuPage.clickNavigationContactsOption()
    await expect (WebContactPage.contactFormContainerName).toHaveText('')
    await page.waitForTimeout(2000)

    await page.close()

})
