(function() {
     function Authentication() {
       /**
       * @var loggedIn
       * @desc Indicates if the user has logged in.
       */
       this.loggedIn;

       /**
       * @var admin
       * @desc Indicates if the user has logged in.
       */
       var admin = false;

       return {
         isLoggedIn: this.loggedIn,
         logIn: function (email, password) {
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


      };
    }

     angular
         .module('news')
         .factory('Authentication', Authentication);
})();