'use strict';

describe('Directive: androidInputBugfix', function () {

  // load the directive's module
  beforeEach(module('blbitClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<android-input-bugfix></android-input-bugfix>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the androidInputBugfix directive');
  }));
});
