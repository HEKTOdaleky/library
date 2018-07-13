const urls = require('./urls');
module.exports = function () {
    this.Given(/^я захожу на страницу удаление книги под админом$/, function () {
        return browser.url(urls.deleteBook);
    });
    this.Given(/^я захожу повторно на страницу удаление книги под админом$/, function () {
        return browser.url(urls.deleteBook);
    });
    this.Then(/^я вижу сообщение "([^"]*)"$/, function (message) {
        const text = browser.element('.nothing-delete').getText();
        return expect(text).toBe(`${message}`);
    })
};