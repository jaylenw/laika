'use strict';

/**
 * @ngdoc function
 * @name laikaApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the laikaApp
 */
angular.module('laikaApp')
  .controller('TestCtrl', function (linodeAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;


    this.linode = linodeAPI;
/*
    this.get = function(_action, _param){
    	console.log(_action);	
    	httpService.get(key, _action, _param).then(function successCallback(response){
            console.log(JSON.stringify(response));
            self.res = JSON.stringify(response);
            self.res = JSON.stringify(response, undefined, 2)
        }, function errorCallback(response){

        });
    }

*/
  });
