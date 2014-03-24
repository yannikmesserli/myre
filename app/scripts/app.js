'use strict';


/**
 * Application for BlBit
 *
 *
 * 
 */


var app = angular.module('myre', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'filters'
])

/**
 * Configuration of the application
 *
 *
 * 
 */



.config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
    
    var access = {
      private: 1,
      public: 2
    };

    $routeProvider.when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      access: access.public
    })
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}])


/**
 * Attach so event and common task
 *
 *
 * 
 */
.run(['$rootScope', '$location', '$route', '$cookieStore', function ($rootScope, $location, $route, $cookieStore) {

    //////////////////////////////
    // EVENT BINDING
    //////////////////////////////
    
    // First, loading is false
    $rootScope.isViewLoading = false;

    // When we start to change a route, first display a loader over the content
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        
        // var loader = $('<div id="loader"></div>').prependTo($('#main_view'));  
        // //$('#main_view').append(loader);
        $('#loader').height($('#site').height());
        $('#loader').width($('#site').width());
        

        $rootScope.isViewLoading = true;
    });

    // Function to stop loading:
    var stopViewLoading = function(event, currRoute, prevRoute){
        $('#loader').height($('#site').height());
        $('#loader').width($('#site').width());
        $rootScope.isViewLoading = false;
    }

    // When the loading is complete, remove the loader
    $rootScope.$on('$routeChangeSuccess', stopViewLoading);

    // When the loading of the page failed, remove the loader too
    $rootScope.$on('$routeChangeError', stopViewLoading);

    // Watch for $rootScope.isViewLoading and update the ui
    // $rootScope.$watch('isViewLoading', function(isViewLoading) {});

    $rootScope.isLoggedIn = function(){
      return $cookieStore.get("loggedin") || false;
    }

    $rootScope.logout = function(){
        $cookieStore.remove("access_token");
        $cookieStore.remove("loggedin");
        window.location = "#/"

    }


    $rootScope.copy= function(el){
      console.log($('' + el).attr("value"));
      // var Copied =  '' + $(el).attr("value");
      // Copied.execCommand("Copy");
    }

}]);