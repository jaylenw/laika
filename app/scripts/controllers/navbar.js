'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('AppCtrl', function ($scope) {
    $scope.currentNavItem = 'page1';
  })
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': 'A200' // use shade 200 for default, and keep all other shades the same
    })
    .accentPalette('red');
});