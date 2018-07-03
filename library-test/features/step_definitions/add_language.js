const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления языка издания под админом$/, function () {
    return browser.url(urls.addLanguage);
  });

  this.Then(/^появится ошибка "([^"]*)"$/, function (message) {
    const notification = browser.element('.alert-danger');
    notification.waitForExist(5000);

    const notificationText = notification.getText();

    return expect(notificationText).toBe(message);
  });

  this.Given(/^выхожу с профайла$/, function () {
    return browser.url(urls.logoutUrl);
  });
};