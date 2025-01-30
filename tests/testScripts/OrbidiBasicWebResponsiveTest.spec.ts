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

    await page.close()
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