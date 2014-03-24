'use strict';

var get_rate = function(currency, success) {
    $.get('https://blockchain.info/tobtc?value=1&currency=' + currency, function(data){
        success(parseFloat(data))
    });
}


angular.module('blbitClientApp')
  .directive('convertIn', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var element.text('this is the convertInput directive');
      }
    };
  });

angular.module('blbitClientApp')
  .directive('convertFrom', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
