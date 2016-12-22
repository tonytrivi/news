(function() {
     function ArticleManager() {
         //var dbRef = firebase.database().ref();

         /**
         * @desc Array of dates with their articles.
         * @type {Object}
         */
         //var dates = $firebaseArray(dbRef);

         return {
           //all: dates,
           addArticle: function (title, url) {
               console.log('we are in addArticle on the ArticleManager');
               //TODO: add a new date
          //     todaysDate = new Date();
          //     var newDate = {
          //       "title": todaysDate,
          //       "articles": []
          //     };
          //     var newArticle = { "title": title,
          //                        "url": url };
          //     newDate.articles.push(newArticle);

          //     dates.$add(newDate);
           }
         };
}

     angular
         .module('news')
         .factory('ArticleManager', ArticleManager);
})();
