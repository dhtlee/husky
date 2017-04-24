import BasePage from './base';

const url = 'http://rbc.com';

class Rbc extends BasePage {
  constructor(webdriver) {
    super(webdriver, url);
  }
}

export default Rbc;
