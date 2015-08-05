describe('the router', function () {


  describe('action', function () {

    it('should render the template as defined in the page at the current path', function () {

      // SETUP (stub / create data / etc)
      spyOn(Letterpress.Collections.Pages, 'findOne').and.returnValue({
        template: 'myTemplate'
      });
      // making sure we're not affected by currentUrl
      spyOn(RouterHelper, 'currentUrl');

      // EXECUTE  call the method inside iron router
      var actionMethod = Router._isolator._routes['/(.*)'].action;
      actionMethod.apply({
        render: function (template) {
          // VERIFY
          expect(template).toBe('myTemplate');
        }
      });


    })

  });

  describe('router helper', function () {

    it('should strip the # off the end of the path', function () {

      // SETUP
      spyOn(Router, 'current').and.returnValue({
        url: 'http://localhost:1234/something#'
      });
      spyOn(Meteor, 'absoluteUrl').and.returnValue('http://localhost:1234/');

      // EXECUTE
      var currentUrl = RouterHelper.currentUrl();

      // VERIFY
      expect(currentUrl).toBe('/something');

    });

  });

});



