'use strict';

describe('Service: Conversion', function () {

  // load the service's module
  beforeEach(module('blbitClientApp'));

  // instantiate service
  var Conversion;
  beforeEach(inject(function (_Conversion_) {
    Conversion = _Conversion_;
  }));

  it('should do something', function () {
    expect(!!Conversion).toBe(true);
  });

});
