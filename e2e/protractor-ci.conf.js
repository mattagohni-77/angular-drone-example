const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  'chromeOptions': {
    args: ['--headless', '--no-sandbox']
  }
};

config.seleniumAddress = 'http://chrome:4444/wd/hub';
config.directConnect = false;
exports.config = config;
