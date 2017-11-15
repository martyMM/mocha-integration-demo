require('chromedriver');
let assert = require('assert');
const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');

describe('Google Search', function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('example', async function() {
    await driver.get('https://www.google.com/ncr');

    await driver.findElement(By.name('q')).sendKeys('webdriver');
    await driver.findElement(By.name('btnK')).click();

    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  });
});

