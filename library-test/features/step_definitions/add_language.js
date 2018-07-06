const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления языка издания$/, function () {
    return browser.url(urls.addLanguage);
  });



};