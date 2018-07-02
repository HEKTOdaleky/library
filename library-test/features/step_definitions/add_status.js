const urls = require('./urls');

module.exports = function () {
    this.Given(/^я захожу на страницу добавления статуса под админом$/, function () {
        return browser.url(urls.addStatus);
    });

    this.Then(/^я появится ошибка "([^"]*)"$/, function (message) {
        const notification = browser.element('.help-block');
        notification.waitForExist(5000);

        const notificationText = notification.getText();

        return expect(notificationText).toBe(message);
    });
};