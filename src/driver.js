import webdriver from 'selenium-webdriver';

export function getDriver() {
  return new webdriver.Builder().forBrowser("chrome").build();
}
