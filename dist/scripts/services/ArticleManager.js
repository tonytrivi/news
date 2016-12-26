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
           addArticleContainer: function () {
               theDate = new Date();
               var articleContainer = {
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
