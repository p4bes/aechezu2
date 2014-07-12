'use strict';

describe('Directive: detailDirective', function () {

  // load the directive's module
  beforeEach(module('aechezu2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<detail-directive></detail-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the detailDirective directive');
  }));
});
