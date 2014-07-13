'use strict';

/**
 * @ngdoc function
 * @name aechezu2App.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the aechezu2App
 */
angular.module('aechezu2App')
  .controller('VideosCtrl', function ($scope, Facebookservice, Watchservice, $log, $location, $timeout) {

    $scope.startIndex = 0;
    $scope.endIndex = 10;

    Facebookservice.getAllVideos(function (videos) {
      $timeout(function() {
        $scope.videos = videos;
      },0);
    });

    $scope.watch = function (video) {
      Watchservice.setVideo(video);
      $location.path('/detail/');
    };

    $scope.newer = function () {
      var length = $scope.videos.length;
      if ( 0 <= ($scope.startIndex - 10)) {
        $scope.startIndex -= 10;
        $scope.endIndex = $scope.startIndex + 10;
      } else {
        $scope.startIndex = 0;
        $scope.endIndex = 10;
      }


    };

    $scope.older = function () {
      var length = $scope.videos.length;
      if ($scope.videos.length >= ($scope.endIndex + 10)) {
        $scope.startIndex += 10;
        $scope.endIndex += 10;
      } else {
        $scope.startIndex += 10;
        $scope.endIndex = $scope.videos.length-1;
      }



    };
  });
