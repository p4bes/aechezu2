'use strict';

/**
 * @ngdoc function
 * @name aechezu2App.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the aechezu2App
 */
angular.module('aechezu2App')
  .controller('DetailCtrl', function ($scope, Watchservice, $sce) {
    $scope.video = Watchservice.getVideo();
  });
