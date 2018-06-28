const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу аутентификации$/, function () {
    return browser.url(urls.loginUrl);
  });

};