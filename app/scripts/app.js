'use strict';

/**
 * @ngdoc overview
 * @name karaokeWebsiteApp
 * @description
 * # karaokeWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('karaokeWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table',
    'rails'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
