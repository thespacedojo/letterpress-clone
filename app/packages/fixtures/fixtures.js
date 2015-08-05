Meteor.methods({

  'fixtures/reset': function () {
    Letterpress.Collections.Pages.remove({});
  },

  'fixtures/seedData': Letterpress.Utils.seedData,

  'fixtures/page/create': function(pages) {
    pages = [].concat(pages);

    for (var i = 0; i < pages.length; i++) {
      Letterpress.Collections.Pages.insert(pages[i]);
    }
  }

});
