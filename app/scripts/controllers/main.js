'use strict';

/**
 * @ngdoc function
 * @name karaokeWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karaokeWebsiteApp
 */
angular.module('karaokeWebsiteApp')
  .controller('MainCtrl', function () {
    this.songs = [
      { 
        title: 'ZAll About That Bass', 
        artist: 'Meghan Trainor', 
        track: 19586, 
        name: 'Trainor, Meghan - All About That Bass - 19586'
      },
      {
        title: 'Hey Soul Sister', 
        artist: 'Train', 
        track: 19585, 
        name: 'Train - Hey Soul Sister - 19585'
      }
    ];

    this.displayedSongs = [].concat(this.songs);
  });
