const puppeteer = require('puppeteer');

(async () => {
  // スクリーンショットを撮るURL
  const url = 'https://example.com/';

  // ヘッドレスブラウザを起動
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // ビューポートの設定
  await page.setViewport({ width: 1200, height: 800 });

  // 指定したURLに移動
  await page.goto(url);

  // スクリーンショットを撮影
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  // ブラウザを閉じる
  await browser.close();
})();