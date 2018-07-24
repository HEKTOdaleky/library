const urls = require('./urls');

module.exports = function () {

  this.Given(/^я захожу на страницу редактировать книгу$/, function () {
    return browser.url(urls.editBook);
  });

  this.Then(/^я меняю в поле "([^"]*)" значение на "([^"]*)"$/, function (name, value) {
    const input = browser.element(`input[name=${name}]`);
    return input.setValue(value);
  });
};