import { getDriver } from '../src/driver';
import GithubPage from '../src/pages/github';
import { expect } from 'chai';

describe('Github repo search test', () => {

  let driver;

  before(() => {
    driver = getDriver();
  });

  after(() => {
    return driver.quit();
  })

  it.only('should be able to search and find Husky Github repo', () => {
    let githubPage = new GithubPage(driver);
    return githubPage.open()
      .then(() => {
        githubPage.search('husky user:dhtlee');
      })
      .then(() => {
        githubPage.getResults()
      .then((results) => {
        expect(results.length).to.equal(1);
      });
    });
    driver.sleep(1000);
  });
});
