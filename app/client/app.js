Template.landingPage.helpers({

  content : function() {

    return Letterpress.Collections.Pages.findOne({path: '/'});

  }

});