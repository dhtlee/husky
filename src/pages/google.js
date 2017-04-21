import BasePage from './base';
import { By } from 'selenium-webdriver';

const url = 'http://www.google.com';

class GooglePage extends BasePage {
  constructor(webdriver) {
    super(webdriver, url);
  }

  search(string) {
    return this.driver.findElement(By.id('lst-ib')).sendKeys(string);
  }
}

export default GooglePage;
