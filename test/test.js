describe('App Tests', function() {
  describe('Testing article controller', function (){
    var scope;
    var firebaseApp;

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
        firebaseApp = firebase.initializeApp(config);

        //console.log(firebaseApp);

        $controller('ArticleCtrl as article', {$scope: scope});
    }));

    it('should be defined', function(){
      expect(scope.article).toBeDefined();
    });

    it('should be 2', function(){
      expect(scope.article.articleCollectionLimit).toBe(2);
    });

    afterEach(function() {
            firebaseApp.delete();
    });
  });

});
