(function() {
    function ArticleCtrl() {
      this.name = "Louis";
    }

    angular
        .module('news')
        .controller('ArticleCtrl', ArticleCtrl);
})();
