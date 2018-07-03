const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления категории под админом$/, function () {
    return browser.url(urls.addCategory);
  });


};