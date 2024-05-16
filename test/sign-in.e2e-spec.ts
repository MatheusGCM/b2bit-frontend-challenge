import { expect, test } from '@playwright/test'

test('sign in with unfilled fields', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Sign In' }).click()

  const messageError = page.getByText('Este campo não pode ser em branco.')

  await expect(messageError).toHaveCount(2)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('@gmail.com').fill('wrong@gmail.com')
  await page.getByPlaceholder('****************').fill('wrong')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Usuário e/ou senha incorreto(s)')

  await expect(toast).toBeVisible()
})

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('@gmail.com').fill('cliente@youdrive.com')
  await page.getByPlaceholder('****************').fill('password')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForLoadState('networkidle')

  expect(page.url()).toContain('/')
})
