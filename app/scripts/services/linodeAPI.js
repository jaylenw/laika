
angular.module('laikaApp').service('linodeAPI', ['$http', function($http){

	var key = "cXR8BW5fCqXvqBOfoPYzHIicfck8LcEy2Qs2o8p7m9oQPoHMtefbu4pJsesjkLQE";

	var res = null;

	var GET = function(_url){

		return $http({
			method: 'GET',
			url: _url
		});
	}
	var datacenters = {};
	GET('https://api.linode.com/?api_key=' + key + '&api_action=avail.datacenters')
		.then(function successCallback(response){
			//console.log(response);
			var locations = response.data.DATA;
			//datacenters = response.data.DATA;
			for (var index in locations) {
				datacenters[locations[index].DATACENTERID] = locations[index].LOCATION
			}
		}, function errorCallback(response){

		})

	var linodeList = function(_callback){

		GET('https://api.linode.com/?api_key=' + key + '&api_action=linode.list')
		.then(function successCallback(response){
			//console.log(response);
			res = response;

			_callback(response);
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

	var getDataCenter = function(_id){
		return datacenters[_id];
	}

	var status = function(_status){
		return (_status == 0)? "On" : "Off";
	}


	var service = {
		accountInfo 	: accountInfo,
		getResponse 	: getResponse,
		displayResponse : displayResponse,
		getDataCenter	: getDataCenter,
		status			: status,
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