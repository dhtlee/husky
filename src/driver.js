import webdriver from 'selenium-webdriver';

export const driver = new webdriver.Builder().forBrowser("chrome").build();
