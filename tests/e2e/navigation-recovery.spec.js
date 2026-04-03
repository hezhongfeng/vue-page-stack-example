import { expect, test } from '@playwright/test';

test('keeps detail input and restores login state after returning', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('quick-start-button').click();
  await page.getByTestId('main-list-item-0').dispatchEvent('click');
  await page.waitForURL(/main-detail\/0/);

  const detailInput = page.getByTestId('detail-input').locator('input');
  await detailInput.click();
  await detailInput.pressSequentially('cached note from e2e');
  await expect(detailInput).toHaveValue('cached note from e2e');
  await page.getByTestId('detail-action-login').click();

  const loginUserName = page.getByTestId('login-username').locator('input');
  await loginUserName.click();
  await loginUserName.pressSequentially('Codex User');
  await page.getByTestId('login-submit').click();

  await expect(detailInput).toHaveValue('cached note from e2e');
  await expect(page.getByTestId('detail-card-currentUserName')).toContainText('Codex User');
  await expect(page.getByTestId('detail-card-cachedInput')).toContainText('cached note from e2e');
});
