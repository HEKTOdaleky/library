const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления языка издания$/, function () {
    return browser.url(urls.addLanguage);
  });

  this.Given(/^выхожу с профайла$/, function () {
    return browser.url(urls.logoutUrl);
  });
};