'use strict';

/**
 * @ngdoc overview
 * @name laikaApp
 * @description
 * # laikaApp
 *
 * Main module of the application.
 */
angular
  .module('laikaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngMaterial',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAria',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/nebula', {
        templateUrl: 'views/nebula.html',
        controller: 'NebulaCtrl',
        controllerAs: 'about'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
