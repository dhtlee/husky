import BasePage from './base';
import { By, Key } from 'selenium-webdriver';

const url = 'http://www.github.com';

class GithubPage extends BasePage {
  constructor(webdriver) {
    super(webdriver, url);
  }

  search(string) {
    return this.driver.findElement(By.css('input[class*="search-input"]'))
      .sendKeys(string + Key.ENTER);
  }

  getResults() {
    return this.driver.findElements(By.css('ul[class*="repo-list"]'));
  }
}

export default GithubPage;
