'use strict';

describe('Directive: convertInput', function () {

  // load the directive's module
  beforeEach(module('blbitClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<convert-input></convert-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the convertInput directive');
  }));
});
