const { chromium, firefox, errors } = require('playwright');

test('expect no logs', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  // Create pages, interact with UI elements, assert values
  const page = await browser.newPage();

  let errors = []

  // Listen for all console logs
  page.on("console", msg => errors.push(msg.text()));

  await page.goto('http://localhost:1313');
  await page.screenshot({ path: `example.png` });
  
  expect(errors.length == 0).toBeTruthy();


  //const errors = page.evaluate(() => c)


  await browser.close();
})