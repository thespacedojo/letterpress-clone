(function () {

  'use strict';

  module.exports = function () {

    this.Before(function () {

      var self = this;

      return this.server.call('fixtures/reset').then(function () {
          return self.client.timeoutsImplicitWait(3000);
        }
      );

    });

  }

})();