
module.exports = function() {
  this.Given(/^я захожу на страницу поиска$/, function () {
    const link = browser.element('.navbar-brand');
    link.click();
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



};