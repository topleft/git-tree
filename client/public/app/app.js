angular.module('myApp', ['routes', 'directives', 'factories'])
  .run(function ($rootScope, $location, $route, $auth, authFactory) {

    $rootScope.repoObj = null;

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

      if (next.access.restricted && !authFactory.isAuthenticated()) {
        $location.path('/login');
        $route.reload();
      }
    });
  })
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode({
      enabled: false,
      requirebase: false
    });
  }]);



