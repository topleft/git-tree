angular.module('myApp', ['routes', 'directives', 'factories'])
  .run(function ($rootScope, $location, $route, $auth, authFactory) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {

      //reference for factory refactor
      // if (next.access.restricted && authFactory.isLoggedIn() === false) {
      //   $location.path('/login');
      //   $route.reload();
      // }

      if (next.access.restricted && !$auth.isAuthenticated()) {
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



