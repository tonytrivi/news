(function() {
     function ArticleManager() {
         var ArticleManager = {};

         /**
         * @desc article list
         * @type Object
         */
         ArticleManager.articleList = null;

         /**
         * @desc returns articles
         * @type object
         */
         ArticleManager.getArticles = function() {
             return 'here are the current articles';
         };

        return ArticleManager;
}

     angular
         .module('news')
         .factory('ArticleManager', ArticleManager);
})();
