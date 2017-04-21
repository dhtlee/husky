import BasePage from './base';

class GithubPage extends BasePage {
  constructor(webdriver) {
    super(webdriver, url);
    this.url = 'http://www.github.com';
  }
}

export default GithubPage;
