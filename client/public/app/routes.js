angular.module('routes', ['ngRoute']);

angular.module('routes').config(['$routeProvider', function($routeProvider){
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
	.when('/register', {
		templateUrl: '../auth/register.html',
		controller: 'registerController',
		access: {restricted: false}
	});

}]);
