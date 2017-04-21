import { getDriver } from '../src/driver';
import GooglePage from '../src/pages/google';

describe('Google search test', () => {

  let driver;

  before(() => {
    driver = getDriver();
  });

  after(() => {
    return driver.quit();
  })

  it('should print out title of page', () => {
    return driver.get('http://www.google.com')
      .then(() => driver.getTitle())
      .then((title) => console.log(title));
  });

  it('should perform google search', () => {
    let googlePage = new GooglePage(driver);
    return googlePage.open().then(() => {
      return googlePage.search('illuminati')
    });
    driver.sleep(1000);
  });
});
