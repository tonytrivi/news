(function() {
    function LoginCtrl(Authentication) {
      this.Authentication = Authentication;
      this.desc = "login page";
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
        console.log(this.Authentication.loggedIn);
      };

    }

    angular
        .module('news')
        .controller('LoginCtrl', ['Authentication', LoginCtrl]);
})();
