(function() {
     function Authentication() {
       /**
       * @var loggedIn
       * @desc Indicates if the user has logged in.
       */
       Authentication.loggedIn = false;

       /**
       * @var admin
       * @desc Indicates if the user has logged in.
       */
       Authentication.admin = false;

       /**
       * @function onAuthStateChanged
       * @desc Determines if user is logged in
       */
       firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           Authentication.loggedIn = true;
           console.log('loggedIn changed to true: ' + Authentication.loggedIn);
         } else {
           Authentication.loggedIn = false;
           console.log('loggedIn changed to false: ' + Authentication.loggedIn);
         }
       });

       /**
       * @function logIn
       * @desc Logs a user in
       */
       Authentication.logIn = function (email, password) {
         var authObj = firebase.auth();
         console.log('I am about to log the authObj');
         console.log(authObj);

         //sign up
         //authObj.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
         //  var errorCode = error.code;
         //  var errorMessage = error.message;
         //});

         authObj.signInWithEmailAndPassword(email, password).catch(function(error) {
           console.log(error.code);
           console.log(error.message);
         });
      }

       return Authentication;







    }

     angular
         .module('news')
         .factory('Authentication', Authentication);
})();
