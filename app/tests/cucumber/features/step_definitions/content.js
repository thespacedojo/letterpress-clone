(function () {

  'use strict';

  module.exports = function () {

    var url = require('url');

    this.Given(/^I have created a landing page$/, function () {
      return this.server.call('fixtures/seedData');
    });

    this.When(/^a visitor navigates to the page$/, function () {
      return this.client.url(url.resolve(process.env.ROOT_URL, this.thePage));
    });

    this.Then(/^they see the cover image from "([^"]*)"$/, function (imageLocation) {
      return this.client.
        getAttribute('img', 'src').should.eventually.contain(imageLocation);
    });

    this.Then(/^they see the tag\-line "([^"]*)"$/, function (tagLine) {
      return this.client.
        getText('p em').should.become(tagLine);
    });

    this.Given(/^I created a "([^"]*)" called "([^"]*)" at "([^"]*)" with the following markdown$/, function (template, title, path, markdown) {

      this.thePage = path;

      return this.server.call(
        'fixtures/page/create', {
          template: template,
          title: title,
          path: path,
          description: markdown
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


    this.Then(/^they see the heading "([^"]*)"$/, function (heading) {
      return this.client.
        waitForExist('h1=' + heading).
        isVisible('h1=' + heading);
    });

    this.Then(/^they see the content "([^"]*)"$/, function (content) {
      return this.client.
        waitForExist('p=' + content).
        isVisible('p=' + content);
    });


  };

})(); 
