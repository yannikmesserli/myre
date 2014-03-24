'use strict';

angular.module('myre').factory('Server', ['Restangular', '$location', '$cookieStore', '$rootScope', function(Restangular, $location, $cookieStore, $rootScope) {
    

  var interceptor = function(response, promise) {
      //console.log(response, promise)
      if ( response.status == 401) {
        $location.path('login');
        //window.location = "#/login"
        if(!$rootScope.$$phase) {
          $rootScope.$apply();
        }
        
        return false;
      };
      return '';

    };

    // Server.setDefaultHeaders({"Authorization": "Bearer " + d.access_token});
    var set_access_token = function(element, operation, what, url, headers, params){
      
      if($cookieStore.get("access_token")){
        headers["Authorization"] = "Bearer " + $cookieStore.get("access_token");
        return {
          headers: headers
        }
      }else{
        return {};
      }
    }

    var get_base_url = function(){
      var absurl = "http://";
      switch($location.port()){
        case 9000:
          absurl += $location.host() + ":" + '8000';
          break;
        default:
          absurl += $location.host()
          break;
      }
      return absurl + "/api/v1";
    }
    console.log(get_base_url())
    //console.log($location.host(), $location.port());
    var s = Restangular.withConfig(function(RestangularConfigurer) {

      RestangularConfigurer.setBaseUrl(get_base_url());
    RestangularConfigurer.setRequestSuffix('/?format=json');

  });


  s.get_base_url = get_base_url;
  s.addFullRequestInterceptor(set_access_token)
  s.setErrorInterceptor(interceptor);
  return s;


  }]);


