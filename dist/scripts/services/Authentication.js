(function() {
     function Authentication() {
       /**
       * @var loggedIn
       * @desc Indicates if the user has logged in.
       */
       var loggedIn = false;

       /**
       * @var admin
       * @desc Indicates if the user has logged in.
       */
       var admin = false;


       firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           loggedIn = true;
           admin = true;
         } else {
           loggedIn = false;
           admin = false;
         }
       });

       return {
         isLoggedIn: loggedIn,
         isAdmin: admin,
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
