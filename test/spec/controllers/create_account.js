'use strict';

describe('Controller: CreateAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('blbitClientApp'));

  var CreateAccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateAccountCtrl = $controller('CreateAccountCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
