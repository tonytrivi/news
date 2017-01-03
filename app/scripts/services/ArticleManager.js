(function() {
     function ArticleManager($firebaseArray) {
         const firebaseRefObject = firebase.database().ref().child('dates');

         /**
         * @desc Array of dates with their articles.
         * @type {Object}
         */
         var dbDatesCollection = $firebaseArray(firebaseRefObject);

         /**
         * @desc Generates pseudo-random integers
         * @return integer
         */
         var idGenerator = function() {
           var myDate = new Date();
           var year        = myDate.getYear().toString();
           var month       = myDate.getMonth().toString();
           var day         = myDate.getDay().toString();
           var millisecond = myDate.getMilliseconds().toString();

           var delayedMillisecond = setTimeout(function(){ return new Date().getMilliseconds().toString(); }, 35);
           return year + month + day + millisecond + delayedMillisecond;
         };

         return {
           all: dbDatesCollection,
           idGenerator: idGenerator,
           addArticle: function (article) {
               console.log('we are in addArticle on the ArticleManager');
               dbDatesCollection[0].$add(article);
           },
           addArticleCollection: function () {
              theDate = new Date();

              var articleContainer = {
              ID: idGenerator(),
              articleList: [{
                ID: idGenerator(),
                title: "Congress Meets",
                url: "http://www.msn.com",
                summary: "The initial summary.",
                summaryList: [{
                              ID: idGenerator(),
                              text: "The leaders traveled.",
                              likes: 2},
                             {
                              ID: idGenerator(),
                              text: "They legislated.",
                              likes: 4}],
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
