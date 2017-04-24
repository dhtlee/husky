import { getDriver, saveScreenshot } from '../src/driver';
import { rootDir } from '../index';

const reportDir = rootDir + '/mochawesome-reports/';

export let driver;

beforeEach(function() {
  driver = getDriver();
});

afterEach(function() {
  if (this.currentTest.state === 'failed') {
    let screenshotFile = reportDir + Date.now() + '.png';
    this.currentTest.context = 'file:///' + screenshotFile;
    return saveScreenshot(driver, screenshotFile)
      .then(() => driver.quit());
  }
  return driver.quit();
});
