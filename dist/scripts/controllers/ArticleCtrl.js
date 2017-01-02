(function() {
    function ArticleCtrl(ArticleManager) {
        this.ArticleManager = ArticleManager;
        this.allArticleCollections = ArticleManager.all;
        this.articleCollectionLimit = 2;  //I had track by $index

        this.title;
        this.url;
        this.summary;
        this.writer;
        this.publication;
        this.openSummaries = false;

        /**
        * @function toggleSummaries
        * @desc Toggles the summary view.
        */
        this.toggleSummaries = function() {
          this.openSummaries = !this.openSummaries;
          console.log(this.openSummaries);
        }

        /**
        * @function addArticle
        * @desc Adds an article to a specific date.
        */
        this.addArticle = function (key, articleCollection) {
            if(this.title.length > 0) {
              var dateId = Date.now();
              var newArticle = {};

              newArticle.ID = this.createArticleID(this.title);
              newArticle.title = this.title;
              newArticle.url = this.url;
              newArticle.summary = this.summary;
              newArticle.writer = this.writer;
              newArticle.publication = this.publication;

              articleCollection.articleList.push(newArticle);
              this.allArticleCollections[key] = articleCollection;

              this.allArticleCollections.$save(key);
            }
        };

        /**
        * @function createArticleID
        * @desc Creates a human-readable article ID.
        */
        this.createArticleID = function (title) {
            if(this.title.length > 0) {
              var wordsInTitle = title.split(" ");
              var newArticleIdentifier = '';

              for(i = 0; i < wordsInTitle.length; i++) {
                newArticleIdentifier += wordsInTitle[i].toLowerCase() + '-';
              }

              //guard against article with the same name
              newArticleIdentifier += new Date().getMilliseconds().toString();

              return newArticleIdentifier;
            }
        };

  }  //function ArticleCtrl

    angular
        .module('news')
        .controller('ArticleCtrl', ['ArticleManager', ArticleCtrl]);
})();
