Meteor.methods({

  'fixtures/reset': function () {
    Letterpress.Collections.Pages.remove({});
  },

  'fixtures/seedData': Letterpress.Utils.seedData

});