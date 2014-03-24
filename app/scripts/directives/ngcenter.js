'use strict';

angular.module('myre')
  .directive('ngCenter', ['$document', '$rootScope', function ($document, $rootScope) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
          var el = attrs["ngCenter"] == "relative"? $(element).parent() : $document;
          
          var test_width = function(){
             return attrs["ngCenter"] == "relative" || (el.width() > 450 && attrs["ngCenter"] != "relative")
          }

          var height_corr = function(){
             return attrs["ngCenter"] == "relative"? 0: 150;
          }
          var refreshCenterPosition = function(){
            
            // default value;
            var h = 0;
            // if enough large, then 
            if(  test_width() ){
              var he = element.height(),
              hd = el.height();
              h = Math.max(hd - he - height_corr(), 0) / 2;
            }
            
            if(h == 0 && test_width() )
              h = element.css('margin-top');
  
            element.css({
              'margin-top': h
            });

            
          }
  
          refreshCenterPosition();
  
          var refreshCenterPosition_with_delay = function(delay){
            return function() {
              refreshCenterPosition()
              setTimeout(refreshCenterPosition, delay);
            }
            
          }
  
          $(el).resize(refreshCenterPosition);
          $(window).resize(refreshCenterPosition);
  
          $rootScope.$on('$routeChangeSuccess', refreshCenterPosition_with_delay(100));
          $rootScope.$on('$routeChangeStart', refreshCenterPosition_with_delay(300));
          
        }
      };
    }]);
