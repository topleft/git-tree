angular.module("myApp", ['routes', 'directives', 'factories'])
	.run(function ($rootScope, $location, $route, $auth, authFactory) {
	  $rootScope.$on('$routeChangeStart', function (event, next, current) {
	    if (next.access.restricted && !$auth.isAuthenticated()) {
	      $location.path('/login');
	      $route.reload();
	    }
	  });
	});


