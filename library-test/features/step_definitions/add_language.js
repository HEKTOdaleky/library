const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления языка издания$/, function () {
    return browser.url(urls.addLanguage);
  });

  this.Then(/^я вижу сообщение об успешном добавлении$/, function () {
    const notification = browser.element('.message');
    notification.waitForExist(5000);

    const notificationText = notification.getText();

    return expect(notificationText).toBe('Успешно!');
  });

  this.Then(/^я вижу сообщение с ошибкой "([^"]*)"$/, function (message) {
    const notification = browser.element('.alert-danger');
    notification.waitForExist(5000);

    const notificationText = notification.getText();

    return expect(notificationText).toBe(message);
  });

  this.Given(/^выхожу с профайла$/, function () {
    return browser.url(urls.logoutUrl);
  });
};