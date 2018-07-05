const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу удаления категорий$/, function () {
    return browser.url(urls.deleteCategory);
  });


};