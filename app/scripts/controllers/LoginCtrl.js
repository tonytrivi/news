(function() {
    function LoginCtrl(Authentication) {
      this.Authentication = Authentication;
      this.desc = "login page";
      this.password;
      var that = this;

      /**
      * @function logIn
      * @desc Logs the user in.
      */
      this.logIn = function() {
        this.Authentication.logIn(this.email, this.password);
        console.log('logged in');


        this.email = '';
        this.password = '';
      };

      /**
      * @function logOut
      * @desc Logs the user out.
      */
      this.logOut = function() {
        this.Authentication.logOut();
        console.log('logged out');
      };

      /**
      * @function getLoginStatus
      * @desc Determines if user is logged in
      */
      this.getLoginStatus = function() {
        console.log(that.Authentication.loggedIn);
      };

    }

    angular
        .module('news')
        .controller('LoginCtrl', ['Authentication', LoginCtrl]);
})();
