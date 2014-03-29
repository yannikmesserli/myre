'use strict';

describe('Controller: AcademicCtrl', function () {

  // load the controller's module
  beforeEach(module('myreApp'));

  var AcademicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcademicCtrl = $controller('AcademicCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
