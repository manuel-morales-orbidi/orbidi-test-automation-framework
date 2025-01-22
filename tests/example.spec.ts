import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('orbidi', async ({ page }) => {
  await page.goto('https://jorgearturobelliniserrano.com/');

  // Click the get started link.
  await page.waitForTimeout(2000);
  //await page.getByRole('link', { name: 'Mis Compras' }).click();
  //await page.locator('//*[@id="nav-header-menu"]/ul/li/a[3]').click();
  await page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div[1]/div/nav[1]/ul/li[1]/a').click();
  

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});