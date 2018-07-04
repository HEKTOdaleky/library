const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления категории$/, function () {
    return browser.url(urls.addCategory);
  });


};