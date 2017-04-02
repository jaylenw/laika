
angular.module('laikaApp').service('linodeAPI', ['$http', function($http){

	var key = "";

	var res = null;

	var GET = function(_url){

		return $http({
			method: 'GET',
			url: _url
		});
	}

	var linodeList = function(){

		GET('https://api.linode.com/?api_key=' + key + '&api_action=linode.list')
		.then(function successCallback(response){
			console.log(response);
			res = response;
		}, function errorCallback(response){

		})
	}

	var accountInfo = function(){
		GET('https://api.linode.com/?api_key=' + key + '&api_action=account.info')
		.then(function successCallback(response){
			console.log(response);
			res = response;
		}, function errorCallback(response){

		});
	}

	var getResponse = function(){
		return res;
	}

	var displayResponse = function(){
		return JSON.stringify(res, undefined, 2);
	}


	var service = {
		accountInfo 	: accountInfo,
		getResponse 	: getResponse,
		displayResponse : displayResponse,
		list 			: linodeList
	};

	return service;
}]);



/*
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
*/