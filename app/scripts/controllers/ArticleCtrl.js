(function() {
    function ArticleCtrl(ArticleManager) {
        this.ArticleManager = ArticleManager;
        this.allArticleCollections = ArticleManager.all;
        this.title;
        this.url;
        this.writer;
        this.publication;

        /**
        * @function addArticle
        * @desc Adds an article to a specific date.
        */
        this.addArticle = function (key, articleCollection) {
            if(this.title.length > 0) {
              var newArticle = {};
              newArticle.title = this.title;
              //TODO: validate that it's a URL
              newArticle.url = this.url;
              newArticle.summary = '';
              newArticle.writer = this.writer;
              newArticle.publication = this.publication;

              articleCollection.articleList.push(newArticle);
              this.allArticleCollections[key] = articleCollection;

              //console.log(this.allArticleCollections[key]);
              this.allArticleCollections.$save(key);
            }
        };

  }  //function ArticleCtrl

    angular
        .module('news')
        .controller('ArticleCtrl', ['ArticleManager', ArticleCtrl]);
})();
