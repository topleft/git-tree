var app = angular.module('myApp');

app.controller('authController', ['$scope', '$auth', '$rootScope','$window', '$location','authFactory', function($scope, $auth, $rootScope, $window, $location, authFactory){

	//referencce for factory refactor
	// $scope.authenticate = function() {
	// 	authFactory.authenticate();
	//  };

//setting user
	$scope.authenticate = function(provider) {

    $auth.authenticate(provider)
      .then(function(response) {
        $window.localStorage.currentUser = JSON.stringify(response.data.user);
        $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(response);
        $location.path('/');
      })
    .catch(function(response) {
      console.log(response);
    });
  };

  $scope.logout = function() {
    $auth.logout();
    delete $window.localStorage.currentUser;
  };

}]);
