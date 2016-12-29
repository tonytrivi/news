describe('App Tests', function() {
  describe('Testing angularjs controllers', function (){
    var scope;

    beforeEach(angular.mock.module('news','firebase'));
    beforeEach(angular.mock.inject(function($controller,$rootScope,$firebase){
        scope = $rootScope.$new();
        var config = {
          apiKey: "AIzaSyDOwaiOKq9q-SH-VJ6nK0ZFVTT2kxnPlxM",
          authDomain: "statecraft-dcbc6.firebaseapp.com",
          databaseURL: "https://statecraft-dcbc6.firebaseio.com",
          storageBucket: "statecraft-dcbc6.appspot.com",
          messagingSenderId: "5208094240"
        };
        firebase.initializeApp(config);

        $controller('ArticleCtrl as article', {$scope: scope});
    }));
    
    it('should be 2', function(){
        expect(scope.article).toBeDefined();
        expect(scope.article.articleCollectionLimit).toBe(2);

    });

  });

});
