const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу удаления пользователя$/, function () {
    return browser.url(urls.deleteUser);
  });
};
