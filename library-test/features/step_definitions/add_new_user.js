const urls = require('./urls');

module.exports = function () {
    this.Given(/^я захожу на страницу добавления новой учетной записи$/, function () {
        return browser.url(urls.createNewUser);

    });
    this.Given(/^я захожу на страницу смены пароля пользователю$/, function () {
        console.log("HELLO I'M CHANGE PASSWORD");
        return browser.url(urls.changePassword);

    });
};
