'use strict';

describe('Service: Server', function () {

  // load the service's module
  beforeEach(module('blbitClientApp'));

  // instantiate service
  var Server;
  beforeEach(inject(function (_Server_) {
    Server = _Server_;
  }));

  it('should do something', function () {
    expect(!!Server).toBe(true);
  });

});
