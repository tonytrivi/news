(function() {
    function LoginCtrl(Authentication) {
      this.Authentication = Authentication;
      this.loggedIn;
      var that = this;
      this.desc = "login page";
      this.email = "tony@trivison.com";
      this.password;

      /**
      * @function logIn
      * @desc Toggles the summary view.
      */
      this.logIn = function() {
        this.Authentication.logIn(this.email, this.password);

        this.email = '';
        this.password = '';
      };

      /**
      * @function getLoginStatus
      * @desc Determines if user is logged in
      */
      this.getLoginStatus = function() {
        console.log(this.loggedIn);
      };

      /**
      * @function onAuthStateChanged
      * @desc Determines if user is logged in
      */
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          that.loggedIn = true;
          console.log('loggedIn changed to true: ' + that.loggedIn);
        } else {
          that.loggedIn = false;
          console.log('loggedIn changed to false: ' + that.loggedIn);
        }
      });

    }

    angular
        .module('news')
        .controller('LoginCtrl', ['Authentication', LoginCtrl]);
})();
