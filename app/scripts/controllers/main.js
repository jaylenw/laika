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

    this.niceDate = function(date){
      console.log(moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a"));
      return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");

    }

  })
  .config(function($mdIconProvider) {
    $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg',128);
  });
