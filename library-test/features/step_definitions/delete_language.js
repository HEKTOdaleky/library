const urls = require('./urls');

module.exports = function () {

  this.Given(/^я захожу на страницу удаления языка под админом$/, function() {
    return browser.url(urls.deleteLang);
  });


};