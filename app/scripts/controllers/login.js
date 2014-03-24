'use strict';

angular.module('myre')
  .controller('LoginCtrl', ['$scope', 'Server', '$cookieStore', '$location', function ($scope, Server, $cookieStore, $location) {
    
  	$scope.name = $location.search().username;

  	if( $location.search().action == 'activated'){
  		$scope.messages = [
			{
				text: "Succussfully activated. You can now login with your temporary password. Don't forget to change it!",
				tags: ['alert-success']
			}
		]
  	}

    $scope.execute_login = function(){

    	if( $scope.login.$valid) {
	  //   	Server.one('oauth2').customPOST({
	  //   		"client_id": "d3bcfa56860b6d2ae29a",
	  //   		"client_secret": "a5374e13dfc95b48858ae030b0f65cd0402efc13",
	  //   		"grant_type":"password",
	  //   		"username": $scope.name,
	  //   		"password": $scope.password
	  //   	}, 'access_token').then(function(d){
			//     // Setup the access_token
			    
			//     Server.setDefaultHeaders("Authorization: Bearer " + d.access_token);
			//     window.location = "#/";
			// });
			// 
			

			$.ajax({
			  	type: "POST",
			  	url: Server.get_base_url() + '/oauth2/access_token/',
			  	data: {
		    		"client_id": "d3bcfa56860b6d2ae29a",
		    		"client_secret": "a5374e13dfc95b48858ae030b0f65cd0402efc13",
		    		"grant_type":"password",
		    		"username": $scope.name,
		    		"password": $scope.password
		    	},
			  	success: function(d){
			  		//console.log(d.access_token, Server)
			  		$cookieStore.put("access_token",  d.access_token);
			  		$cookieStore.put("loggedin",  true);
			    	// $location.path("/");
			    	window.location = "#/"
			    	if(!$scope.$$phase) {
		               $scope.$digest();
		            }
			  	},
			  	error: function(d, a, b){
			  		var e = $.parseJSON(d.responseText);
			  		console.log(e.error)
			  		if(e.error == "invalid_grant"){
			  			e.error = "Invalid username or password";
			  		}
			  		$scope.messages = [
			  			{
			  				text: e.error,
			  				tags: ['alert-danger']
			  			}
			  		]

			  		if(!$scope.$$phase) {
		               $scope.$digest();
		            }
			  	}
			});

	    }
    }
  }]);
