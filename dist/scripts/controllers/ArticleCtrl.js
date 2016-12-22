(function() {
    function ArticleCtrl(ArticleManager) {

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
          //if(this.description.length > 0) {
          //   Tasks.addTask(this.description);
          //   this.description = "";
          //}
          console.log('you called addArticle()');
          ArticleManager.addArticle('title','url');
      };

  }  //function ArticleCtrl

    angular
        .module('news')
        .controller('ArticleCtrl', ['ArticleManager', ArticleCtrl]);
})();
