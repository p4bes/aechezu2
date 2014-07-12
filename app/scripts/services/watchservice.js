'use strict';

/**
 * @ngdoc service
 * @name aechezu2App.Watchservice
 * @description
 * # Watchservice
 * Service in the aechezu2App.
 */
angular.module('aechezu2App')
  .service('Watchservice', function Watchservice() {
    var watch = {};
    var currentVideo;

    watch.setVideo = function (video) {
      currentVideo = video;
    };

    watch.getVideo = function () {
      return currentVideo;
    };

    return watch;
  });
