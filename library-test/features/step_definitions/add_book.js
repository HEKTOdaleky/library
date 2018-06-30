const urls = require('./urls');

module.exports = function () {
    this.Given(/^я захожу на страницу добавления книги под админом$/, function () {
        return browser.url(urls.addBook);
    });
    this.When(/^я выбираю в поле "([^"]*)" значение "([^"]*)"$/,
        function (element, optionNum) {
            const input = browser.element(`select[name='${element}']`);
            input.selectByIndex(optionNum);


        });

    // this.When(/^я выбираю в поле "([^"]*)" дату "([^"]*)"$/,
    //     function (element, optionNum) {
    //         const input = browser.element(`input[name='${element}']`);
    //         const dat=dateformat(new Date(optionNum), "yyyy-mm-dd")
    //         console.log(dat);
    //         return input.set();
    //
    //
    //     });

    this.Then(/^появляется плагин "([^"]*)"$/, function (message) {
        const notification = browser.element('.message');
        notification.waitForExist(5000);
        const notificationText = browser.element('.message').getText();

        return expect(notificationText).toBe(`${message}`);
    });

};
