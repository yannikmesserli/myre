'use strict';

describe('Controller: PageAboutusCtrl', function () {

  // load the controller's module
  beforeEach(module('blbitClientApp'));

  var PageAboutusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageAboutusCtrl = $controller('PageAboutusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
