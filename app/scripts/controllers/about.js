'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('AboutCtrl', function ($scope) {

  	$scope.key = "cXR8BW5fCqXvqBOfoPYzHIicfck8LcEy2Qs2o8p7m9oQPoHMtefbu4pJsesjkLQE";

  	JSON.parse($scope.response, (key, value) => {
  		console.log(key);
  		if(key == "DATA"){
  			JSON.parse(value, (k, v) => {
  				if(k == "LOCATION") {
  					$scope.locate.append(v);
  				}
  			})
  		}
  	})

  });
