const urls = require('./urls');

module.exports = function () {

  this.Given(/^я захожу на страницу удаления читателя под библиотекарем$/, function () {
    return browser.url(urls.markReader);
  });

  this.Then(/^я вижу форму с заполненными данными$/, function () {
    return browser.element('.list-group');
  });
};