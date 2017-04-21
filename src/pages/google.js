import BasePage from './base';
import { By } from 'selenium-webdriver';

class GooglePage extends BasePage {
  constructor(webdriver) {
    super(webdriver, url);
    this.url = 'http://www.google.com';
  }

  search(string) {
    return this.driver.findElement(By.id('lst-ib')).sendKeys(string);
  }
}

export default GooglePage;
