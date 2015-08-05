(function () {

  'use strict';

  module.exports = function () {

    this.Given(/^I have created a landing page$/, function () {
      return this.server.call('fixtures/seedData');
    });

    this.When(/^a visitor navigates to the page$/, function () {
      return this.client.url(process.env.ROOT_URL);
    });

    this.Then(/^they see the cover image from "([^"]*)"$/, function (imageLocation) {
      return this.client.
        getAttribute('img', 'src').should.eventually.contain(imageLocation);
    });

    this.Then(/^they see the tag\-line "([^"]*)"$/, function (tagLine) {
      return this.client.
        getText('p em').should.become(tagLine);
    });

    this.Given(/^I have created a chapter called "([^"]*)" at "([^"]*)" with the description$/, function (title, path, text) {
      return this.server.call(
        'fixtures/page/create', {
          template: 'chapter',
          title: title,
          path: path,
          description: text
      });
    });

    this.Then(/^they see the chapter "([^"]*)" in the table of contents with the description$/, function (title, text) {
      return this.client.
        waitForExist('//*[@class="chapter"]//a[contains(text(), "' + title + '")]').
        waitForExist('//*[@class="chapter"]//p[contains(text(), "' + text + '")]');
    });

    this.Then(/^they can navigate to "([^"]*)" at "([^"]*)"$/, function (title, source) {
      return this.client.
        waitForExist('a[title="' + title + '"]').
        getAttribute('a[title="' + title + '"]', 'href').should.eventually.contain(source);
    });

  };

})(); 
