const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления категории под админом$/, function () {
    return browser.url(urls.addCategory);
  });

  this.Then(/^появляется сообщение "([^"]*)"$/, function (arg1) {
    const notification = browser.element('.help-block');
    notification.waitForExist(5000);

    const notificationText = notification.getText();

    return expect(notificationText).toBe(message);
  });
};