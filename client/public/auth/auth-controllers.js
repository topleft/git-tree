var app = angular.module('myApp');

app.controller('authController', ['$scope', '$auth', '$rootScope','$window', '$location','authFactory', function($scope, $auth, $rootScope, $window, $location, authFactory){

	//referencce for factory refactor
	// $scope.authenticate = function() {
	// 	authFactory.authenticate();
	//  };

	$scope.authenticate = function(provider) {

    $auth.authenticate(provider)
      .then(function(response) {
        $window.localStorage.currentUser = JSON.stringify(response.data.user);
        $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(response);
        $location.path('/home');
      })
    .catch(function(response) {
      console.log(response);
    });
  };
}]);
