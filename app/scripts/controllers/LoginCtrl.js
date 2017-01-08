(function() {
    function LoginCtrl() {
      this.desc = "login page";
      this.email;
      this.password;

      /**
      * @function logIn
      * @desc Toggles the summary view.
      */
      this.logIn = function() {
        console.log(this.email);
        console.log(this.password);

        var authObj = firebase.auth();
        console.log(authObj);

        //sign up
        //authObj.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        //  var errorCode = error.code;
        //  var errorMessage = error.message;
        //});

        authObj.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
           console.log(user);
           //here you can show elements that the logged in user should see
           //show a log out button
          } else {
            console.log('not logged in');
            //show the login controls
          }
        });

        this.email = '';
        this.password = '';
      };

    }

    angular
        .module('news')
        .controller('LoginCtrl', [LoginCtrl]);
})();
