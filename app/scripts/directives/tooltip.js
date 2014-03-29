'use strict';

angular.module('myre')
  .directive('tooltip', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $(element).tooltip({
        	placement: attrs.tooltip || 'top'
        });
        console.log(attrs.tooltip)
      }
    };
  });
