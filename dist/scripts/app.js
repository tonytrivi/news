(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
          .html5Mode({
          enabled: true,
          requireBase: false
        });

        $stateProvider
          .state('article', {
            url: '/',
            controller: 'ArticleCtrl as article',
            templateUrl: '/templates/article.html'
          })
          .state('summary', {
              url: '/summary',
              templateUrl: '/templates/summary.html'
          });
    }
    angular
        .module('news', ['ui.router','firebase'])
        .config(config);
})();
