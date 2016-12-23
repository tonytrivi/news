(function() {
    function ArticleCtrl(ArticleManager) {
        this.title;
        this.url;
        this.writer;
        this.publication;

        //TODO: add logic to check for an existing article collection
        this.articleCollectionDate = {
          date: new Date(),
          articleCollection: []
        };

        this.articles = {
          description: "article collection",
          batch: [{
            date: new Date(2016, 12, 07),
            articleList: [{
              title: "The Joy of Legislating",
              url: "http://www.microsoft.com",
              summary: "Congress got together",
              photo: "",
              writer: "Joey Reporter",
              publication: "L.A. Times"
              }, {
              title: "Big Time on Capitol Hill",
              url: "http://www.apple.com",
              summary: "We had an interview",
              photo: "",
              writer: "Sally Writer",
              publication: "O.C. Register"
              }]
          }]
        };

        /**
        * @function addArticle
        * @desc Adds an article to a specific date.
        */
        this.addArticle = function () {
            if(this.title.length > 0) {
              var newArticle = {};
              newArticle.title = this.title;
              //TODO: validate that it's a URL
              newArticle.url = this.url;
              newArticle.writer = this.writer;
              newArticle.publication = this.publication;

              console.log(newArticle);
              ArticleManager.addArticle(newArticle);
            }
        };

  }  //function ArticleCtrl

    angular
        .module('news')
        .controller('ArticleCtrl', ['ArticleManager', ArticleCtrl]);
})();
