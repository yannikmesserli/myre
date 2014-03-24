'use strict';
angular.module('myre')
  .directive('androidInputBugfix', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, el, attrs) {
        	
		    el.type = "text";
		    el.onfocus = function(){this.type="number";};
		    el.onblur = function(){this.type="text";};
		
      }
    };
  });
