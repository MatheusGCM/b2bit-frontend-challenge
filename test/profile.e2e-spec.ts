import { expect, test } from '@playwright/test'

test('display profile data', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('@gmail.com').fill('cliente@youdrive.com')
  await page.getByPlaceholder('****************').fill('password')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForLoadState('networkidle')

  await page.waitForURL('**/')

  await expect(page.getByText('Profile picture')).toBeVisible()
  await expect(page.getByText('Your Name')).toBeVisible()
  await expect(page.getByText('Your E-mail')).toBeVisible()
  await expect(page.getByText('cliente@youdrive.com')).toBeVisible()
})

test('logout', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('@gmail.com').fill('cliente@youdrive.com')
  await page.getByPlaceholder('****************').fill('password')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForLoadState('networkidle')

  await page.waitForURL('**/')

  await page.getByRole('button', { name: 'Logout' }).click()

  expect(page.url()).toContain('/sign-in')
})
