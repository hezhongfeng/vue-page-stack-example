import { expect, test } from '@playwright/test';

test('keeps detail input and restores login state after returning', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('quick-start-button').click();
  await page.evaluate(() => {
    window.location.hash = '#/main-detail/0';
  });
  await expect(page).toHaveURL(/main-detail\/0/);

  const detailInput = page.getByTestId('detail-input').locator('input');
  await detailInput.evaluate((element, value) => {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }, 'cached note from e2e');
  await expect(detailInput).toHaveValue('cached note from e2e');
  await page.getByTestId('detail-action-login').click();

  const loginUserName = page.getByTestId('login-username').locator('input');
  await loginUserName.evaluate((element, value) => {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }, 'Codex User');
  await page.getByTestId('login-submit').click();

  await expect(detailInput).toHaveValue('cached note from e2e');
  await expect(page.getByTestId('detail-card-currentUserName')).toContainText('Codex User');
  await expect(page.getByTestId('detail-card-cachedInput')).toContainText('cached note from e2e');
});
