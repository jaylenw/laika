'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('MainCtrl', function ($scope, linodeAPI) {

    $scope.list = [];
    $scope.linode = linodeAPI;
    $scope.res = null;
    // Start up request

    linodeAPI.list(function(res){
      $scope.res = JSON.stringify(res, undefined, 2);
       $scope.list = res.data.DATA;
       console.log($scope.list);
    });


  })
  .config(function($mdIconProvider) {
    $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg',128);
  });
