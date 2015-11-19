var app = angular.module('routes', ['ngRoute', 'satellizer']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '../views/index.html',
		access: {restricted: true}
	})
	.when('/login', {
		templateUrl: '../auth/login.html',
		controller: 'authController',
		access: {restricted: false}
	})
	.when('/tree', {
		templateUrl: '../tree/tree.html',
		access: {restricted: false}
	});
}]);

app.config(['$authProvider', function($authProvider){
  $authProvider.github({
    url: '/auth/github',
    clientId: 'fd295bc933e7acfe855d',// local
    redirectUri: window.location.origin
  });
  console.log(window.location.origin);
}]);
