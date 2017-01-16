(function() {
    function ArticleCollectionCtrl(ArticleManager, Authentication) {
        this.ArticleManager = ArticleManager;
        this.Authentication = Authentication;
        this.firebaseUser;
        var that = this;

        /**
        * @function addArticleCollection
        * @desc Tells the ArticleManager to add a collection for today's date
        */
        this.addArticleCollection = function () {
              ArticleManager.addArticleCollection();
        };

        /**
        * @function $onAuthStateChanged
        * @desc track if the user is logged in
        */
        this.Authentication.$onAuthStateChanged(function(firebaseUser) {
          that.firebaseUser = firebaseUser;
          console.log('firebaseUser: ');
          if(firebaseUser) {
            console.log('in ArticleCollection firebaseUser');
            console.log(that.firebaseUser.email);
          }
          else {
            console.log('article collection user logged out');
          }

        });

  }

    angular
        .module('news')
        .controller('ArticleCollectionCtrl', ['ArticleManager','Authentication', ArticleCollectionCtrl]);
})();
