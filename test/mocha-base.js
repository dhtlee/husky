import { getDriver, saveScreenshot } from '../src/driver';
import addContext from 'mochawesome/addContext';
import { rootDir } from '../index';

const reportDir = rootDir + '/mochawesome-reports/';

export let driver;

beforeEach(function() {
  return driver = getDriver();
});

afterEach(function() {
  if (this.currentTest.state == 'failed') {
    let screenshotFile = reportDir + Date.now() + '.png';
    return saveScreenshot(driver, screenshotFile)
      .then(() => this.currentTest.context = 'file:///' + screenshotFile)
      .then(() => driver.quit());
  }
  return driver.quit();
});
