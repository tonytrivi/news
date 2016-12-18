(function() {
    function ArticleCtrl() {
      this.desc = "Article Page";
      this.articles = {
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
      };
    }

    angular
        .module('news')
        .controller('ArticleCtrl', ArticleCtrl);
})();
