const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления категории$/, function () {
    return browser.url(urls.addCategory);
  });

  this.Given(/^я захожу на страницу удаления категорий$/, function() {
    return browser.url(urls.deleteCategory);
  });

  this.When(/^я нажимаю на кнопку "([^"]*)" в модальном окне$/, function (text) {
    const button = browser.element(`button=${text}`);
    return button.click();
  });

};