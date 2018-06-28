const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу аутентификации$/, function () {
    return browser.url(urls.loginUrl);
  });

  this.When(/^я ввожу в поле "([^"]*)" значение "([^"]*)"$/, function (fieldName, value) {
    const input = browser.element(`input[name='${fieldName}']`);
    return input.setValue(value);
  });

};