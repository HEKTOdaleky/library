const urls = require('./urls');

module.exports = function () {

  this.Given(/^я захожу на страницу добавления читателя под админом$/, function () {
    return browser.url(urls.addReader);
  });

  this.Given(/^я захожу на страницу удаления читателя под админом$/, function () {
    return browser.url(urls.deleteReader);
  });

  this.When(/^я отмечаю читателя на удаление нажатием на элемент "([^"]*)"$/, function (name) {
    const checkbox = browser.element(`input[name='${name}']`);
    return checkbox.click();
  });

  this.When(/^я отмечаю еще одного читателя нажатием на элемент "([^"]*)"$/, function (name) {
    const checkbox = browser.element(`input[name='${name}']`);
    return checkbox.click();
  });

};