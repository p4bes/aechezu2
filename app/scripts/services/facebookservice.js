'use strict';

/**
 * @ngdoc service
 * @name aechezu2App.Facebookservice
 * @description
 * # Facebookservice
 * Service in the aechezu2App.
 */
angular.module('aechezu2App')
  .service('Facebookservice', function Facebookservice($log) {
    var shit = {};
    var videoCallback;
    var videos = [];

    shit.getAllVideos = function (callback) {
      videoCallback = callback;
      if (videos && videos.length > 0) {
        videoCallback(videos);
      }
    };

    shit.init = function () {
      $.getJSON("http://query.yahooapis.com/v1/public/yql",
        {
          q:      'select * from json where url=\"http://www.facebook.com/feeds/page.php?id=207914732589506&format=json\"',
          format: "json"
        },
        function (data) {
          if (data.query.results && data.query.results.json.entries) {
            var allThisShitUnfiltered = data.query.results.json.entries;
            filterThisShit(allThisShitUnfiltered);
          };
        }
      );
    };

    shit.getInfo = function (videoId, callback) {
      $.getJSON("http://gdata.youtube.com/feeds/api/videos/" + videoId,
        {
          v:      '2',
          alt: "jsonc"
        },
        function (data) {
          callback(data);
        }
      );
    };

    function filterThisShit (allThisShitUnfiltered) {
      for (var i=0; i< allThisShitUnfiltered.length; i++) {
        var currentElem = allThisShitUnfiltered[i];
        var $html = $('<html>').html(currentElem.content);
        var newVideo = {};
        newVideo.title = unescape(currentElem.title);
        newVideo.pubDate = currentElem.published;
        newVideo.metadata = currentElem.content;
        var el = document.createElement( 'div' );
        var cleanUrl = '';
        var lastUrl = '';
        el.innerHTML = currentElem.content;
        var link = el.getElementsByTagName( 'a' )[0];
        var decodedLink = decodeURIComponent(link);
        var re = /https?:\/\/(?:www\.)?(?:m\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌​=]*)?/;
        if (decodedLink.indexOf("youtube") != -1) {
          var index = decodedLink.lastIndexOf("l.php?u=");
          var length = '.l.php?u=';
          cleanUrl = decodedLink.substring(index+length.length-1);
          lastUrl = cleanUrl.match(re);
        } else {
          lastUrl=  cleanUrl;
        }
        var m = re.exec(lastUrl);
        if (m && m[1]) {
          newVideo.ytId = m[1];
          newVideo.url = 'http://youtube.com/embed/' + newVideo.ytId;
          newVideo.picture = 'http://img.youtube.com/vi/' + newVideo.ytId + '/2.jpg';
        }
        if (newVideo && newVideo.url) {
          videos.push(newVideo);
        }
      }
      if (videoCallback) videoCallback(videos);
    }

    return shit;
  });
