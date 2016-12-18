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
            templateUrl: '/templates/article.html'
          })
          .state('summary', {
              url: '/summary',
              templateUrl: '/templates/summary.html'
          });
    }
    angular
        .module('news', ['ui.router'])
        .config(config);
})();
