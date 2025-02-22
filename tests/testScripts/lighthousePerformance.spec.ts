import { test, expect } from '@playwright/test';

test.describe('Lighthouse Audit Performance', () => {
  test('Run Lighthouse audit', async ({ playwright }) => {
    const { playAudit } = await import('playwright-lighthouse');

    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('');

    const thresholds = {
      performance: 80,
      accessibility: 80,
      'best-practices': 80,
      seo: 80,
    };

    try {
      const auditResult = await playAudit({
        page: page,
        thresholds: thresholds,
        port: 9222,
        ignoreError: true,
        reports: {
          formats: {
            json:true,
            html:true,
            csv:true,
        },
          name: `lighthouse-report_${Date.now().toString()}`,
          directory: './lighthouse-reports',
        },
      });

      // Check and log failures
      if (auditResult && auditResult.lhr && auditResult.lhr.categories) {
        Object.entries(thresholds).forEach(([metric, threshold]) => {
          const category = auditResult.lhr.categories[metric];
          if (category && typeof category.score === 'number') {
            const score = category.score * 100;
            if (score < threshold) {
              console.log(
                `FAILURE: ${metric} score (${score.toFixed(
                  2
                )}) is below threshold (${threshold})`
              );
            }
          } else {
            console.log(`WARNING: Unable to retrieve score for ${metric}`);
          }
        });
      } else {
        console.log('WARNING: Audit result strplaywright-lighthousePerformanceucture is not as expected');
      }
    } catch (error) {
      console.error('An error occurred during the audit:', error);
    } finally {
      await page.close();
      await context.close();
      await browser.close();
    }
  });
});