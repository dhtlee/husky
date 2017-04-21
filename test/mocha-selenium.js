import { driver } from '../src/driver';
import GooglePage from '../src/pages/google';

describe('selenium test with mocha (es6)', () => {

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
    return googlePage.open()
    .then(() => {
      googlePage.search('illuminati')
      return driver.sleep(5000); // sleeping to allow visual confirmation of search on page
    });
  })
});
