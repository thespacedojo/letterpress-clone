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

  };

})(); 