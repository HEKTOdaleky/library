const urls = require('./urls');
module.exports = function () {
    this.Given(/^я захожу на страницу удаление книги под библиотекарем$/, function () {
        return browser.url(urls.removeBook);
    });
    this.When(/^ввожу в поле "([^"]*)" значение "([^"]*)"$/, function (fieldName, value) {
        const notification = browser.element('.reason');
        notification.waitForExist(5000);
        const input = browser.element(`input[name='${fieldName}']`);
        console.log(fieldName, "INPUUUT");
        return input.setValue(value);
    });

};