import { driver } from './mocha-base';
import RbcPage from '../src/pages/rbc';

describe('Browser logs', function() {
  it('should fail from detecting javascript errors on page', function() {
    let rbcPage = new RbcPage(driver);
    return rbcPage.open()
      .then(() => new RbcPage(driver)); // instantiate again to check for errors
  })
});
