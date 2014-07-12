'use strict';

describe('Service: Watchservice', function () {

  // load the service's module
  beforeEach(module('aechezu2App'));

  // instantiate service
  var Watchservice;
  beforeEach(inject(function (_Watchservice_) {
    Watchservice = _Watchservice_;
  }));

  it('should do something', function () {
    expect(!!Watchservice).toBe(true);
  });

});
