Template.landingPage.helpers({

  content : function() {

    return Letterpress.Collections.Pages.findOne({path: '/'});

  },

  chapters: function() {
    return Letterpress.Collections.Pages.find({template: 'chapter'});
  }

});
