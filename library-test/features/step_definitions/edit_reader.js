const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу редактирования пользователя$/, function () {
    return browser.url(urls.editReader);
  });

  this.Then(/^я вижу форму редактирования данных пользователя$/, function () {
    const form = browser.element('.collapse.in.well');
    form.waitForExist(5000);

    return form;
  });
};