import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.vitalilaser.com/');
    await page.waitForTimeout(2000);
    await page.locator('xpath=/html/body/footer/div[1]/div/div[1]/div/h2').click();
    await page.locator('xpath=//div[@data-id="7acb0767"]').click();
    await page.locator('xpath=//div[@data-id="3dc744cf"]').click();
    //await expect(page.locator('.app_logo')).toHaveText('Swag Labs')
    await page.waitForTimeout(5000);
    await page.close()

});