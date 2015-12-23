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

    this.isLoading = true;

    this.itemsByPage = 20;

    this.songs = [];

    Song.getAllSongs().query().then(function(result) { 
      ctrl.songs = result;
      ctrl.isLoading = false;
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
