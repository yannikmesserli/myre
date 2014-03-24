'use strict';

describe('Controller: BetaCtrl', function () {

  // load the controller's module
  beforeEach(module('blbitClientApp'));

  var BetaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BetaCtrl = $controller('BetaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
