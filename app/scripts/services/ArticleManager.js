(function() {
     function ArticleManager($firebaseArray) {
         const firebaseRefObject = firebase.database().ref().child('dates');

         /**
         * @desc Array of dates with their articles.
         * @type {Object}
         */
         var dbDatesCollection = $firebaseArray(firebaseRefObject);

         return {
           all: dbDatesCollection,
           addArticle: function (article) {
               console.log('we are in addArticle on the ArticleManager');
               dbDatesCollection[0].$add(article);
           },
           addArticleCollection: function () {
               theDate = new Date();
               var articleContainer = {
                 ID: Date.now(),
                 articleList: [{
                   ID: Date.now(),
                   title: "Congress Meets",
                   url: "http://www.msn.com",
                   summary: "the one-off summary.",
                   summaryList: [{summary: "The leaders traveled.", likes: 2},
                               {summary: "They legislated.", likes: 4}],
                   writer: "Jane Doe",
                   publication: "New York Times",
                   likes: 3
                 }],
                 dateAdded: theDate.toISOString()
               };

               dbDatesCollection.$add(articleContainer);
           }

         };
    }

     angular
         .module('news')
         .factory('ArticleManager', ['$firebaseArray',ArticleManager]);
})();
