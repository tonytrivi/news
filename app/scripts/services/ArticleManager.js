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

               theDate = new Date();
               var dateWithArticles = {
                 dateAdded: theDate.toISOString(),
                 articleList: []
               };


               dateWithArticles.articleList.push(article);
               console.log(dateWithArticles);

               dbDatesCollection.$add(dateWithArticles);
           }
         };
    }

     angular
         .module('news')
         .factory('ArticleManager', ['$firebaseArray',ArticleManager]);
})();
