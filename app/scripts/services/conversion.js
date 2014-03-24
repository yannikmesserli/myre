'use strict';

angular.module('myre')
  .service('Conversion', function Conversion() {
    return {
    	f: function(currency, callback){
    		$.get("https://bips.me/api/v1/rates", function(data){
    			var i = 0;
    			while(data[i] && data[i].code != currency)
    				i++;
    			callback(data[i].conversion)
    		})
    	}
    }
});
