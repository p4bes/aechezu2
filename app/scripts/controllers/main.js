'use strict';

/**
 * @ngdoc function
 * @name aechezu2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aechezu2App
 */
angular.module('aechezu2App')
  .controller('MainCtrl', function ($scope, $location, Facebookservice) {

    Facebookservice.init();

    $scope.getPath = function () {
      return $location.path();
    };
  });
