import driver from '../src/driver';
import GithubPage from '../src/pages/github';

describe('Github page test', () => {
  it.only('should be able to search and find Husky Github repo', () => {
    let githubPage = new GithubPage(driver);
    return githubPage.open();
  })
})
