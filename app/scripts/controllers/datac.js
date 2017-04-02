'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('DatacCtrl', function ($scope, linodeAPI) {

  	$scope.key = "cXR8BW5fCqXvqBOfoPYzHIicfck8LcEy2Qs2o8p7m9oQPoHMtefbu4pJsesjkLQE";

    $scope.datacent = linodeAPI.getDataCenterList();

    console.log($scope.datacent);

  	// JSON.parse($scope.response, (key, value) => {
  	// 	console.log(key);
  	// 	if(key == "DATA"){
  	// 		JSON.parse(value, (k, v) => {
  	// 			if(k == "DATACENTERID"){
  	// 				$scope.datacenter.append(v);
  	// 			}
  	// 			if(k == "LOCATION") {
  	// 				$scope.locate.append(v);
  	// 			}
  	// 		})
  	// 	}
  	// })

  });
