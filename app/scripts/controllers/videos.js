'use strict';

/**
 * @ngdoc function
 * @name aechezu2App.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the aechezu2App
 */
angular.module('aechezu2App')
  .controller('VideosCtrl', function ($scope, Facebookservice, Watchservice, $log, $location) {

    Facebookservice.get(function (videos) {
      $scope.videos = videos;
      $scope.$apply();
    });

    $scope.watch = function (video){
      Watchservice.setVideo(video);
      $location.path('/detail/');
    }
  });
