'use strict';

angular.module('myre')
  .directive('preventDefault', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, el, attrs) {
        	
		    el.click(function(e) {
		    	e.preventDefault();
		    });
      }
    };
  });
