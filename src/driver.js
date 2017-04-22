import webdriver from 'selenium-webdriver';
import fs from 'fs';

export function getDriver() {
  return new webdriver.Builder().forBrowser('chrome').build();
}

export function saveScreenshot(webdriver, filename) {
  return webdriver.takeScreenshot().then((data) => {
    fs.writeFile(filename, data, 'base64', (err) => {
      if(err) ; // continue without taking screenshot
    });
  });
  return filename;
}
