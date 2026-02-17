import { test, expect} from '@playwright/test';

// test('First_test', async({page})=>{

//   await page.goto("https://www.wikipedia.org/");
//   await expect(page).toHaveTitle(/wikipedia/);
// });

// test('page fixture', async({page})=>{

//   await page.goto("https://www.wikipedia.org/");
//   await expect(page.getByRole('button', {name : 'Who is hiding in the globe?'})).toBeVisible();
// });

// test('browser fixtures', async({browser})=>{
//   const context = await browser.newContext();
//   const page =  await context.newPage();
//   await page.goto('https://playwright.dev/');
//   await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
// });

test ('timeout examples', async({page})=>{

  // -------------------------------
  // 1️⃣ Navigation timeout per page.goto
  // -------------------------------
  await page.goto('https://playwright.dev/', { timeout: 40000 }); 
  // Waits up to 40s for the page to load

  // -------------------------------
  // 2️⃣ Action timeout per click
  // -------------------------------
  await page.getByRole('link', { name: 'Get started' }).click({ timeout: 15000 });
  // Waits up to 15s for this click to succeed

  // -------------------------------
  // 3️⃣ Expect timeout per assertion
  // -------------------------------
  await expect(
    page.getByRole('heading', { name: 'Installing PlaywrightDirect' })
  ).toBeVisible({ timeout: 10000 }); // Waits up to 10s for the heading

});