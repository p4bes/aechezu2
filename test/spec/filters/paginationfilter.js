'use strict';

describe('Filter: paginationFilter', function () {

  // load the filter's module
  beforeEach(module('aechezu2App'));

  // initialize a new instance of the filter before each test
  var paginationFilter;
  beforeEach(inject(function ($filter) {
    paginationFilter = $filter('paginationFilter');
  }));

  it('should return the input prefixed with "paginationFilter filter:"', function () {
    var text = 'angularjs';
    expect(paginationFilter(text)).toBe('paginationFilter filter: ' + text);
  });

});
