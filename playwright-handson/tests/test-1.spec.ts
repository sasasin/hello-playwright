import { test, expect } from '@playwright/test';

test('フォームの表示のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: '入力フォーム' }).click();
  await expect(page.getByRole('heading')).toContainText('入力フォーム');
  await expect(page).toHaveURL('http://localhost:3000/form')
});
