
module.exports = function() {
  this.Given(/^я захожу на страницу поиска$/, function () {
    const link = browser.element('.navbar-brand');
    link.click();
    return browser.url('http://localhost:3010');
  });

  this.When(/^я ввожу в поле ввода слово "([^"]*)"$/, function (value) {
    const input = browser.element('input[name="searchKey"]');
    return input.setValue(value);
  });

  this.When(/^я нажимаю на кнопку "([^"]*)"$/, function (text) {
    const button = browser.element(`button=${text}`);
    return button.click();
  });

  this.Then(/^я вижу внизу результат в виде списка книг$/, function () {
    return browser.element('.list-group');
  });

  this.Then(/^я вижу всплывающее сообщение "([^"]*)"$/, function (message) {
    browser.waitForText('.message', 5000);
    const text = browser.element('.message').getText();
    return expect(text).toBe(`${message}`);
  });

  this.When(/^я не ввожу в поле ввода никакого слова, и оно остается пустым "([^"]*)"$/, function (value) {
    const input = browser.element('input[name="searchKey"]');
    return input.setValue(value);
  });

  this.Given(/^я нахожусь на странице поиска$/, function () {
    return browser.url('http://localhost:3010');
  });

  this.When(/^я нажал на ссылку с названием Расширенный поиск$/, function () {
    const link = browser.element('#full-search');
    return link.click();
  });

  this.Then(/^появилась форма добавления записей для поиска$/, function () {
    return browser.element('.form-horizontal');
  });

};