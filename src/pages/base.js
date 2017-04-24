import { logging } from 'selenium-webdriver';
import TestError from '../errors/test';
import config from '../config';

function ignorableLogLevel(logEntry) {
  return logEntry.level.name === '[WARNING]' || logEntry.level.name === '[INFO]';
}

function ignorableLogMessage(logEntry) {
  return logEntry.message.includes('some ignorable message 1') ||
    logEntry.message.includes('some ignorable message 2');
}

class BasePage {
  constructor(webdriver, url) {
    this.driver = webdriver;
    this.url = url;
    // no log implementation on geckodriver - https://github.com/mozilla/geckodriver/issues/330
    if (config.browser !== 'firefox') {
      this.checkJavascriptErrors();
    }
  }

  open() {
    return this.driver.get(this.url);
  }

  checkJavascriptErrors() {
    return this.driver.manage().logs().get(logging.Type.BROWSER)
      .then((entries) => {
        entries.forEach((entry) => {
          if (!ignorableLogLevel(entry) && !ignorableLogMessage(entry)) {
            throw new TestError(entry.message);
          }
        });
     });
  }
}

export default BasePage;
