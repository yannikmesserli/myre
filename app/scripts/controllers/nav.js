'use strict';

angular.module('myre')
  .controller('NavCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
      $scope.path = $location.path();
      $rootScope.$on('$routeChangeSuccess', function(){
      	 $scope.path = $location.path();
      	 console.log($scope.path)
      });
    }]);
