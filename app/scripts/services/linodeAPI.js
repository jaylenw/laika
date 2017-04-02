
angular.module('laikaApp').service('linodeAPI', ['$http', '$route', function($http, $route){  

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
			console.log(datacenters);
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

	var accountInfo = function(_callback){
		GET('https://api.linode.com/?api_key=' + key + '&api_action=account.info')
		.then(function successCallback(response){
			res = response;

			_callback(response);
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
		return (_status == 0)? "Off" : "Off";
	}

	var getDataCenterList = function(){
		return datacenters;
	}

	var clone = function(_linodeID, _dataCenterID, _planID){
		//console.log('https://api.linode.com/?api_key=' + key + '&api_action=linode.clone' + '&LINODEID='+_linodeID + '&DATACENTERID=' + _dataCenterID + '&PLANID='+_planID);
		
		GET('https://api.linode.com/?api_key=' + key + '&api_action=linode.clone' + '&LINODEID='+_linodeID + '&DATACENTERID=' + _dataCenterID + '&PLANID='+_planID)
		.then(function successCallback(response){
			res = response;
			$route.reload();

		}, function errorCallback(response){

		});
	}


	var service = {
		accountInfo 		: accountInfo,
		getResponse 		: getResponse,
		displayResponse 	: displayResponse,
		getDataCenter		: getDataCenter,
		getDataCenterList 	: getDataCenterList,
		status				: status,
		list 				: linodeList,
		clone				: clone
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
