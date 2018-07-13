const urls = require('./urls');

this.Given(/^я захожу на страницу удаление книги под админом$/, function () {
    return browser.url(urls.deleteBook);
});