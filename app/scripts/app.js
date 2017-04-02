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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

