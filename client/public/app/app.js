angular.module('myApp', ['routes', 'directives', 'factories'])
	.run(function ($rootScope, $location, $route, $auth, authFactory) {
	  $rootScope.$on('$routeChangeStart', function (event, next, current) {

      //reference for factory refactor
      // if (next.access.restricted && authFactory.isLoggedIn() === false) {
      //   $location.path('/login');
      //   $route.reload();
      // }

      //with satellizer, but error with next.access in console
	    // if (next.access.restricted && !$auth.isAuthenticated()) {
	    //   $location.path('/login');
	    //   $route.reload();
	    // }
	  });
	});


