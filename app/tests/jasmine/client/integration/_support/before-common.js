beforeAll(function () {

  VelocityHelpers.exportGlobals();

  var self = this;

  self.deferAfterFlush = function (callback) {
    Tracker.afterFlush(function () {
      Meteor.defer(callback);
    });
  };

});

// Wait until iron:router has done its initial work
beforeEach(waitForRouter);

// Guarantee that tests don't run in a ongoing flush cycle.
beforeEach(function (done) {
  this.deferAfterFlush(done);
});