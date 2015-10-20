var app = angular.module('myApp');

app.controller("loginController", ['$scope', '$location', 'authFactory', function($scope, $location,authFactory){

	// $scope.login = {};
	// $scope.register = {};

	$scope.login = function(){
		$scope.error = false;
		$scope.disable = true;
		authFactory.loginUser($scope.login.username, $scope.login.password)
			.then(function(){
				$scope.disabled = false;
				$scope.login = {};
				$location.path('/');
			})
			.catch(function(){
				$scope.error = true;
				$scope.errorMessage = "Invalid user name and/or password.";
				$scope.disabled = true;
			});

	}
}]);

app.controller("registerController", ['$scope', '$location', 'authFactory', function($scope, $location,authFactory){

	$scope.register = function(){
		$scope.error = false;
		$scope.disable = true;
		authFactory.registerUser($scope.register.username, $scope.register.password)
			.then(function(){
				$location.path('/');
				$scope.diabled = false;
				$scope.register = {};
			})
			.catch(function(){
				$scope.error = true;
					$scope.errorMessage = "Oops. Something went wrong!";
					$scope.disabled= false;
					$scope.register = {};
			});

	}
}]);