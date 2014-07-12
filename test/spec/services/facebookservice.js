'use strict';

describe('Service: Facebookservice', function () {

  // load the service's module
  beforeEach(module('aechezu2App'));

  // instantiate service
  var Facebookservice;
  beforeEach(inject(function (_Facebookservice_) {
    Facebookservice = _Facebookservice_;
  }));

  it('should do something', function () {
    expect(!!Facebookservice).toBe(true);
  });

});
