'use strict';

/**
 * @ngdoc function
 * @name aechezu2App.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the aechezu2App
 */
angular.module('aechezu2App')
  .controller('DetailCtrl', function ($scope, Watchservice,Facebookservice, $timeout) {
    $scope.video = Watchservice.getVideo();

    if ($scope.video) {
      Facebookservice.getInfo($scope.video.ytId, function (success) {
        $timeout(function () {
          $scope.info = success.data;
        },0);
      });
    }

  });
