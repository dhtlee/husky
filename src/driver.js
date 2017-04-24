import webdriver from 'selenium-webdriver';
import fs from 'fs';
import config from './config';

export function getDriver() {
  return new webdriver.Builder().forBrowser(config.browser).build();
}

export function saveScreenshot(webdriver, filename) {
  return webdriver.takeScreenshot().then((data) => {
    fs.writeFile(filename, data, 'base64', (err) => {
      if (err) ; // continue without taking screenshot
    });
  });
}
