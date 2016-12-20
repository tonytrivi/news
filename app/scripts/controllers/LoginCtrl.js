(function() {
    function LoginCtrl() {
      this.desc = "login page";
    }

    angular
        .module('news')
        .controller('LoginCtrl', LoginCtrl);
})();
