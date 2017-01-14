(function() {
     function Authentication() {
       /**
       * @var loggedIn
       * @desc Indicates if the user has logged in.
       */
       Authentication.loggedIn;

       /**
       * @var admin
       * @desc Indicates if the user has logged in.
       */
       Authentication.admin;

       /**
       * @function logIn
       * @desc Logs a user in
       */
       Authentication.logIn = function (email, password) {
         var authObj = firebase.auth();

         //sign up
         //authObj.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
         //  var errorCode = error.code;
         //  var errorMessage = error.message;
         //});

         authObj.signInWithEmailAndPassword(email, password).catch(function(error) {
           console.log(error.code);
           console.log(error.message);
         });
      };

      /**
      * @function logOut
      * @desc Logs a user out
      */
      Authentication.logOut = function () {
        var authObj = firebase.auth();

        authObj.signOut();
     };

     /**
     * @function onAuthStateChanged
     * @desc Determines if user is logged in
     */
     firebase.auth().onAuthStateChanged(function(user) {
       //the user is null if not logged in
       if (user) {
         Authentication.loggedIn = true;

         console.log('loggedIn changed to: ' + Authentication.loggedIn);

       } else {
         Authentication.loggedIn = false;

         console.log('loggedIn changed to: ' + Authentication.loggedIn);
       }
     });

     return Authentication;
    }

     angular
         .module('news')
         .factory('Authentication', Authentication);
})();
