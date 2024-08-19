const puppeteer = require('puppeteer');

(async () => {
  const url = process.argv[2]; // コマンドライン引数からURLを取得

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 800 });
  await page.goto(url);

  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
})();