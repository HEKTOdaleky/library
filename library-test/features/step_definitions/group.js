const urls = require('./urls');

module.exports = function () {
  this.Given(/^я захожу на страницу добавления группы под админом$/, function () {
    return browser.url(urls.addGroup);
  });

  this.Given(/^я захожу на страницу удаления групп$/, function() {
    return browser.url(urls.deleteGroup);
  });

};