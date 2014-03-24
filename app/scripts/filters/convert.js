'use strict';

// NOT USED ---> blockchain doesnt allow CORS

var rates = {};

$.get("https://blockchain.info/ticker", function(data){
	
	rates = data;
	console.log(rates)
});

angular.module('blbitClientApp')
.filter('convert', function () {
  	return function (btc_value, currency) {
  	    if(!currency){
  	    	currency = "BTC";
  	    }

  	    console.log(rates)
	
  	    return btc_value * rates[currency]["24h"];
  	    
   };
});
