(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
          .html5Mode({
          enabled: true,
          requireBase: false
        });

        $stateProvider
          .state('articles', {
            url: '/',
            controller: 'ArticleCtrl as article',
            templateUrl: '/templates/article.html'
          })
          .state('details', {
            url: '/details',
            controller: 'ArticleDetailCtrl as articledetail',
            templateUrl: '/templates/articledetail.html'
          });
    }
    angular
        .module('news', ['ui.router','firebase'])
        .config(config);
})();
