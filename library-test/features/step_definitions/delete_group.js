const urls = require('./urls');

module.exports = function () {

  this.Given(/^я захожу на страницу удаления групп$/, function() {
    return browser.url(urls.deleteGroup);
  });


};