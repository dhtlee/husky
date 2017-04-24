import { driver } from './mocha-base';
import GooglePage from '../src/pages/google';

describe('Google search test', function() {
  it('should print out title of page', function() {
    return driver.get('http://www.google.com')
      .then(() => driver.getTitle())
      .then((title) => console.log(title));
  });

  it('should perform google search', function() {
    let googlePage = new GooglePage(driver);
    return googlePage.open()
      .then(() => googlePage.search('illuminati'))
      .then(() => driver.sleep(1000));
  });
});
