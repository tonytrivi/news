(function() {
    function LoginCtrl(Authentication) {
      this.Authentication = Authentication;
      this.desc = "login page";
      this.email;
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

    }

    angular
        .module('news')
        .controller('LoginCtrl', ['Authentication', LoginCtrl]);
})();
