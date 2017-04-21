class BasePage {
  constructor(webdriver, url) {
    this.driver = webdriver;
    this.url = url;
  }

  open() {
    return this.driver.get(this.url);
  }
}

export default BasePage;
