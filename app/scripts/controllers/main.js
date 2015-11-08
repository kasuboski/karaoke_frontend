'use strict';

/**
 * @ngdoc function
 * @name karaokeWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karaokeWebsiteApp
 */
angular.module('karaokeWebsiteApp')
  .controller('MainCtrl', ['Song', function (Song) {
    var ctrl = this;

    this.songs = [];

    Song.getSongsWithLimit(1000).query().then(function(result) { 
      ctrl.songs = result;
    });

    this.displayedSongs = [].concat(this.songs);
  }])
  .factory('Song', ['railsResourceFactory', function (railsResourceFactory) {
    function getAllSongs() {
      return railsResourceFactory({
        url: '/api/songs',
        name: 'song'
      });
    }

    function getSongsWithLimit(limit) {
      return railsResourceFactory({
        url: '/api/songs?limit=' + limit,
        name: 'song'
      });
    }

    return {
      getAllSongs: getAllSongs,
      getSongsWithLimit: getSongsWithLimit
    };
  }]);
