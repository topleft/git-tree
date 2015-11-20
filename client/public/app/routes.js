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
		templateUrl: '../views/visual.html',
		access: {restricted: true}
	});
}]);

app.config(['$authProvider', function($authProvider){
  $authProvider.github({
    url: '/auth/github',
    clientId: '264120f7c49937010354', // HEROKU
    redirectUri: window.location.origin
  });
  console.log(window.location.origin);
}]);
