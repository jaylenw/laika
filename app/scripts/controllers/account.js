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

  $scope.key = true;

  $scope.accountDATA = {
      "BILLING_METHOD": "metered",
      "ACTIVE_SINCE": "2017-04-01 08:34:15.0",
      "TRANSFER_POOL": 968,
      "TRANSFER_USED": 0,
      "TRANSFER_BILLABLE": 0,
      "MANAGED": false,
      "BALANCE": -40
  }

  function PositiveBalance() {
    return -1*$scope.accountDATA.BALANCE
  }

  $scope.balance = PositiveBalance();
  });
