const urls = require('./urls');

module.exports = function () {
    this.Given(/^я захожу на страницу добавления книги под админом$/, function () {
        return browser.url(urls.addBook);
    });
    this.When(/^я выбираю в поле "([^"]*)" значение "([^"]*)"$/, function (element, optionNum) {
        const input = browser.element(`select[name='${element}']`);
        input.selectByIndex(optionNum);
    });

    this.Then(/^появляется плагин "([^"]*)"$/, function (message) {
        const notification = browser.element('.notification-message .message');
        notification.waitForExist(5000);
        const notificationText = browser.element('.notification-message .message').getText();
        console.log(message, "Message");
        console.log(notificationText, "NotificationText");
        return expect(notificationText).toBe(`${message}`);
    });

    this.Then(/^я вижу сообщение с ошибкой "([^"]*)"$/, function (message) {
        const notification = browser.element('.alert-danger');
        notification.waitForExist(5000);
        const notificationText = notification.getText();
        return expect(notificationText).toBe(message);
    });

  this.Given(/^я захожу на страницу выдачи книги библиотекарем$/, function () {
    return browser.url(urls.getBook);
  });

  this.Then(/^я вижу внизу результат в виде списка$/, function () {
    browser.waitForExist('.list-group', 2000);
    return browser.element('.list-group');
  });

    this.Then(/^я ввожу в поле "([^"]*)" дату "([^"]*)"$/, function (fieldName, value) {
      const input = browser.element(`input[name='${fieldName}']`);
      return input.addValue(value);
    });

  this.Given(/^я захожу на страницу принятия книги у читателя$/, function () {
    return browser.url(urls.takeBook);
  });


};
