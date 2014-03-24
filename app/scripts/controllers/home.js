'use strict';

angular.module('myre')
.controller('HomeCtrl', [ "$scope", "$location", "$cookieStore",'Server', 'hints',  '$rootScope', function ($scope, $location, $cookieStore, Server, hints, $rootScope) {
	if($cookieStore.get("loggedin")){
		window.location = "#/main"
		if(!$scope.$$phase) {
		   $scope.$digest();
		}

	}
    $scope.f = {
        "currency": "CHF"
    }
	$scope.currencies = hints.currencies;

	 // INVOICES
    var is_generating_invoice = false;
  	$scope.generate_invoice = function(){
        $scope.messages = [];
        if(! is_generating_invoice){
            if($scope.createInvoice.$valid){
                is_generating_invoice = true;
                $rootScope.isViewLoading = true;

                Server.one('demo').post('', $scope.f).then(function(d){
                    //console.log(d);
                    $rootScope.isViewLoading = false;
                    $location.path("invoices/" + d.secure_id);
                    is_generating_invoice = false;

                }, function(response){
                  
                    $rootScope.isViewLoading = false;

                    $.each(response.data, function(k, v){
                      $scope.messages.push({"text": "<b>" + k.charAt(0).toUpperCase() + k.slice(1) + ":</b> " + v});
                    });
                    is_generating_invoice = false;

                })
            }else{
                // Show error
                console.log($scope.createInvoice.$error)
            }
        }else{
            console.log('Already generating, be patient...')
        }
  	}
    var is_requesting_beta = false;
    $scope.create_beta = function(){
        $scope.messages = [];
        if(! is_requesting_beta){
            if($scope.createBeta.$valid){
                is_requesting_beta = true;
                $rootScope.isViewLoading = true;

                Server.one('account/beta').post('', $scope.fbeta).then(function(d){
                    //console.log(d);
                    $rootScope.isViewLoading = false;
                    is_requesting_beta = false;
                    window.location = "#/waitingbeta?email=" + $scope.fbeta.email;
                    if(!$scope.$$phase) {
                       $scope.$digest();
                    }
                }, function(response){
                  
                    $rootScope.isViewLoading = false;

                    $.each(response.data, function(k, v){
                      $scope.messages.push({"text": "<b>" + k.charAt(0).toUpperCase() + k.slice(1) + ":</b> " + v});
                    });
                    is_requesting_beta = false;

                })
            }else{
                // Show error
                console.log($scope.createBeta.$error)
            }
        }else{
            console.log('Already generating, be patient...')
        }
    }


}]);
