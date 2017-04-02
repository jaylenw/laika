'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('MainCtrl', function ($scope, linodeAPI, $mdDialog) {

    $scope.list = [];
    $scope.linode = linodeAPI;
    $scope.res = null;
    // Start up request

    linodeAPI.list(function(res){
      $scope.res = JSON.stringify(res, undefined, 2);
       $scope.list = res.data.DATA;
       //console.log($scope.list);
    });

    this.niceDate = function(date){
      //console.log(moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a"));
      return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");

    }

    var showPlanID = function(ev, _linodeID, _dataCenter){
      var confirm = $mdDialog.prompt()
        .title('Cloning ' + _linodeID)
        .textContent('Plan ID ')
        .placeholder('1')
        .ariaLabel('Datacenter')
        .initialValue('1')
        .targetEvent(ev)
        .ok('Select Plan ID')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function(result) {
        linodeAPI.clone(_linodeID, _dataCenter, result);
      }, function() {
        // Something
      });
    }
    $scope.showPrompt = function(ev, _linodeID) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.prompt()
        .title('Cloning ' + _linodeID)
        .textContent('Datacenter ID ')
        .placeholder('0')
        .ariaLabel('Datacenter')
        .initialValue('2')
        .targetEvent(ev)
        .ok('Select Datacenter')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function(result) {
        showPlanID(ev, _linodeID, result)
      }, function() {
        // something
      });
  };

  })
  .config(function($mdIconProvider) {
    $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg',128);
  });
