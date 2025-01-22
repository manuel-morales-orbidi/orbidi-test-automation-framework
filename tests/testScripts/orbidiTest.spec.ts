import { test, expect } from '@playwright/test';
import { NavigationMenuPage } from '../pages/NavigationMenuPage';

test('validateMenu', async ({ page }) => {

    await page.goto('https://www.vitalilaser.com/')

    const navigationMenuPage = new NavigationMenuPage (page)

    await page.waitForTimeout(2000)
    await navigationMenuPage.isDisplayedNavigationIconImage()
    await page.waitForTimeout(2000)
    await navigationMenuPage.clickNavigationHomeOption()
    await page.waitForTimeout(2000)
    await navigationMenuPage.clickNavigationAboutOption()
    await page.waitForTimeout(2000)
    await navigationMenuPage.clickNavigationServicesOption()
    await page.waitForTimeout(2000)
    await navigationMenuPage.clickNavigationContactsOption()
    await page.waitForTimeout(2000)
    await navigationMenuPage.clickNavigationLanguagePicker()

    //await expect(page.locator('.app_logo')).toHaveText('Swag Labs')
    await page.close()

})