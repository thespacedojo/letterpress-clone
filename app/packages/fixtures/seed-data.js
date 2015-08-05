Letterpress.Utils.seedData = function () {

  Letterpress.Collections.Pages.insert({
    path: '/',
    description: '' +
    '![Cover](/cover.jpg "Cover")' +
    '\n\n' +
    '*Learn how to do something*'
  });

};

Meteor.startup(function() {

  if (Letterpress.Collections.Pages.find().count() === 0) {
    Letterpress.Utils.seedData();
  }


});