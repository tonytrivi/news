(function() {
     function Authentication($firebaseAuth) {
     //the $firebaseAuth factory/service contains methods that
     //handle all authentication scenarios
     return $firebaseAuth();
    }

     angular
         .module('news')
         .factory('Authentication', ['$firebaseAuth', Authentication]);
})();
