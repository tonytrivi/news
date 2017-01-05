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
        };

        /**
        * @function idGenerator
        * @desc Generates a random integer.
        */
        this.idGenerator = function() {
          return this.ArticleManager.idGenerator();
        };

        /**
        * @function incrementSummaryLike
        * @desc Increments the likes for a summary
        */
        this.incrementSummaryLike = function(summaryID, articleCollection) {
          //find the summary and increment its likes
          for (var key in articleCollection.articleList) {
            var article = articleCollection.articleList[key];

            for (var summaryKey in article.summaryList) {
              var summary = article.summaryList[summaryKey];
              if (summary.ID == summaryID) {
                console.log("incrementing likes for: " + summaryID);
                summary.likes++;

                this.allArticleCollections.$save(articleCollection);

                //ArticleManager.updateArticleCollection(articleCollection);
              }
            }
          }
        };

        /**
        * @function incrementArticleLike
        * @desc Increments the likes for an article
        */
        this.incrementArticleLike = function() {
          console.log("you clicked incrementArticleLike");
        };

        /**
        * @function addArticle
        * @desc Adds an article to a specific date.
        */
        this.addArticle = function (key, articleCollection) {
            if(this.title.length > 0) {
              var newArticle = {};

              newArticle.ID = this.createArticleID(this.title);
              newArticle.title = this.title;
              newArticle.url = this.url;
              newArticle.summary = this.summary;
              newArticle.summaryList = [{
                            ID: this.idGenerator(),
                            text: "The leaders traveled.",
                            likes: 0},
                           {
                            ID: this.idGenerator(),
                            text: "They legislated.",
                            likes: 0}];
              newArticle.writer = this.writer;
              newArticle.publication = this.publication;
              newArticle.likes = 0;

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
