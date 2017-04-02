'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('NebulaCtrl', function ($scope, linodeAPI, $mdDialog) {

  	$scope.key = "cXR8BW5fCqXvqBOfoPYzHIicfck8LcEy2Qs2o8p7m9oQPoHMtefbu4pJsesjkLQE";

    $scope.datacent = linodeAPI.getDataCenterList();

    //console.log($scope.datacent);

    $scope.linode = linodeAPI;
  });
