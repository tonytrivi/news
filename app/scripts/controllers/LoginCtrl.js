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
      };

    }

    angular
        .module('news')
        .controller('LoginCtrl', LoginCtrl);
})();
