var app = angular.module('routes', ['ngRoute', 'satellizer']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '../views/index.html',
		access: {restricted: true}
	})
	.when('/login', {
		templateUrl: '../auth/login.html',
		controller: 'loginController',
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
    clientId: 'ffc8045c4eabdb9e6328',//will need to update per user
    redirectUri: window.location.origin
  });
}]);
