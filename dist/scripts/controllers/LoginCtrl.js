(function() {
    function LoginCtrl(Authentication, $scope) {
      this.Authentication = Authentication;
      this.desc = "login page";
      this.email;
      this.password;
      this.firebaseUser;
      this.error;
      var that = this;

      /**
      * @function signIn
      * @desc log in a user, using $firebaseAuth
      */
      this.signIn = function() {
        that.firebaseUser = null;
        that.error = null;

        //sign up
        //authObj.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        //  var errorCode = error.code;
        //  var errorMessage = error.message;
        //});

        that.Authentication.$signInWithEmailAndPassword(that.email, that.password)
          .then(function(firebaseUser) {
            that.firebaseUser = firebaseUser;
            that.scope.firebaseUser = firebaseUser;
            console.log('signed in: ');
            console.log(that.firebaseUser);
          }).catch(function(error) {
            that.error = error;
            console.log('there was an error: ');
            console.log(that.error);
        });

        this.email = '';
        this.password = '';
      };

      /**
      * @function $onAuthStateChanged
      * @desc track if the user is logged in
      */
      this.Authentication.$onAuthStateChanged(function(firebaseUser) {
        that.firebaseUser = firebaseUser;
        //that.scope.firebaseUser = firebaseUser;
        console.log('firebaseUser: ');
        if(firebaseUser) {
          console.log(that.firebaseUser.email);
        }
        else {
          console.log('user logged out');
        }

      });

      /**
      * @function logOut
      * @desc Logs the user out.
      */
      this.logOut = function() {
        that.Authentication.$signOut();
        console.log('logged out');
      };

    }

    angular
        .module('news')
        .controller('LoginCtrl', ['Authentication','$scope', LoginCtrl]);
})();
