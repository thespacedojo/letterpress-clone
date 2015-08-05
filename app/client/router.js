
RouterHelper = {
  currentUrl: function () {
    var currentUrl = Router.current().url;
    if (Router.current().url.indexOf(Meteor.absoluteUrl()) !== -1) {
      currentUrl = Router.current().url.substring(Meteor.absoluteUrl().length - 1);
    }
    if (currentUrl.indexOf('#') === currentUrl.length-1) {
      currentUrl = currentUrl.substring(0, currentUrl.length-1);
    }


    return currentUrl;
  }
};

Router.route('/(.*)', {

  loadingTemplate: 'loading',

  action: function () {

    var currentUrl = RouterHelper.currentUrl();

    var page = Letterpress.Collections.Pages.findOne({path: currentUrl});
    if (page) {
      this.render(page.template, {data: function () {return page;}});
    } else {
      this.render('404');
    }

  }

});