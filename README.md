# Husky
This is the Javascript ES6 version of boilerplate code for UI test framework WebdriverJS (Selenium), Mocha and Chai. It contains support for
- Chrome and Firefox browser
- Screenshot taking upon failure
- Mochawesome report and stacktrace logging

Framework can be extended according to your needs. Other versions:
- [Labrador](https://github.com/dhtlee/labrador) - Java with Selenium and TestNG

### Resources
- [WebdriverJS](http://seleniumhq.github.io/selenium/docs/api/javascript/)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)

### Pre-requisite
- [Git](https://git-scm.com)
- [Node](https://nodejs.org)

### Setting up environment
1. Clone this repo
<br>`git clone https://github.com/dhtlee/labrador.git`
1. Install dependencies
<br>`npm install`
1. Download latest drivers (Note: drivers will be downloaded to _<project_root_dir>/drivers_)
<br>`mvn clean compile -P download-drivers`
1. Update configuration values in **config.js** where needed

### Running the demo test suite
- Execute the demo test suite: Note: There will be 3 tests that passes and 2 that fails
<br>`npm test` 
- View test report, open _mochawesome-reports/mochawesome.html_ in a browser
