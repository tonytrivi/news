(function() {
    function ArticleCollectionCtrl(ArticleManager) {
        this.ArticleManager = ArticleManager;

        this.test = "hey tony";


        /**
        * @function addArticleCollection
        * @desc Tells the ArticleManager to add a collection for today's date
        */
        this.addArticleCollection = function () {
              ArticleManager.addArticleCollection();
        };

  }

    angular
        .module('news')
        .controller('ArticleCollectionCtrl', ['ArticleManager', ArticleCollectionCtrl]);
})();
