const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу аутентификации$/, function () {
    return browser.url(urls.loginUrl);
  });

  this.When(/^я ввожу в поле "([^"]*)" не правильное значение "([^"]*)"$/, function (fieldName, value) {
    const input = browser.element(`input[name='${fieldName}']`);
    return input.setValue(value);
  });

  this.When(/^я ввожу в поле "([^"]*)" значение "([^"]*)"$/, function (fieldName, value) {
    const input = browser.element(`input[name='${fieldName}']`);
    return input.setValue(value);
  });

  this.When(/^нажимаю на кнопку "([^"]*)"$/, function (text) {
    const button = browser.element(`button=${text}`);
    return button.click();
  });

  this.Then(/^я вижу сообщение с ошибочной в следстии ввода не верного логина$/, function () {
    const notificationText = browser.element('.alert-danger').getText();

    return expect(notificationText).toBe('Имя пользователя или пароль неправильные!');
  });


  this.Then(/^я вижу сообщение об успешной аутентификации пользователя$/, function () {
    const notification = browser.element('.notification-message .title');
    notification.waitForExist(5000);

    const notificationText = browser.element('.notification-message .title').getText();

    return expect(notificationText).toBe('Пользователь и пароль правильные!');
  });

};