'use strict';

/**
 * @ngdoc filter
 * @name aechezu2App.filter:paginationFilter
 * @function
 * @description
 * # paginationFilter
 * Filter in the aechezu2App.
 */
angular.module('aechezu2App')
  .filter('paginationFilter', function () {
    return function (arr, start, end) {
      return (arr || []).slice(start, end);
    };
  });
