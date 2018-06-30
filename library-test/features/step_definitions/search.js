
module.exports = function() {
  this.Given(/^я захожу на страницу поиска$/, function () {
    const link = browser.element('.navbar-brand');
    link.click();
    browser.url('http://localhost:3000');
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

  this.Then(/^я вижу всплывающее сообщение что по запросу ничего не найдено$/, function () {

    browser.waitForText('.message', 5000);
    const text = browser.element('.message').getText();
    return expect(text).toBe('По вашему запросу ничего не найдено');
  });

};