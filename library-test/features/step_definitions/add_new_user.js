const urls = require('./urls');

module.exports = function () {
    this.Given(/^я захожу на страницу добавления новой учетной записи$/, function () {
        return browser.url(urls.createNewUser);

    });
};