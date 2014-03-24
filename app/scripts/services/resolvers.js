'use strict';
 

var resolvers= {
     

    get_invoices_list: ['Server', function(Server){
             
            var promise = Server.all('invoices').getList();
            // promise.then(function(d){
            //     console.log("ok");
            // });
            return promise;
        }],



    get_hints: ['Server', function(Server){
    
            var promise = Server.one('hints').get();
            // promise.then(function(d){
            //   console.log("ok1");
            // });
              return promise;
        }],



     get_invoice: ['Server', '$route', function(Server, $route){
                
              var promise = Server.one('invoices', $route.current.params.id).get();
              // promise.then(function(d){
                  
              // });
              return promise;
          }],

      test_wait: ["$q", "$timeout", function($q, $timeout){
              var deferred = $q.defer();
      
              $timeout(function() {
                deferred.resolve(['Hello', 'world!']);
              }, 5000);
      
              return deferred.promise;
          }],

      get_checkouts_list: ['Server', function(Server){
             
            var promise = Server.all('checkouts').getList();
            // promise.then(function(d){
            //     console.log("ok");
            // });
            return promise;
        }],


      get_account: ['Server', function(Server){
             
            var promise = Server.one('account').get();
            // promise.then(function(d){
            //     console.log("ok");
            // });
            return promise;
        }],


      get_settings: ['Server', function(Server){
           
          var promise = Server.one('settings').get();
          // promise.then(function(d){
          //     console.log("ok");
          // });
          return promise;
      }]
}
