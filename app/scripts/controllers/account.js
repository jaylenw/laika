'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('AccountCtrl', function ($scope, linodeAPI) {

  /*
  $scope.accountDATA = {
      "BILLING_METHOD": "metered",
      "ACTIVE_SINCE": "2017-04-01 08:34:15.0",
      "TRANSFER_POOL": 968,
      "TRANSFER_USED": 0,
      "TRANSFER_BILLABLE": 0,
      "MANAGED": false,
      "BALANCE": -40
  }
  */

  $scope.accountDATA = {};

  linodeAPI.accountInfo(function(res){
    console.log(res.data.DATA);
    $scope.accountDATA = res.data.DATA;
    console.log($scope.accountDATA.BALANCE);
  })

  function PositiveBalance() {
    console.log($scope.accountDATA.BALANCE)
    var b = parseInt($scope.accountDATA.BALANCE)
    return -1*b
  }

  $scope.balance = PositiveBalance;

  this.niceDate = function(date){
    console.log(moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a"));
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");

  }


  });
