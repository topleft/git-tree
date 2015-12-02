var app = angular.module('myApp');

app.controller('authController', ['$scope', '$auth', '$rootScope','$window', '$location','authFactory', function($scope, $auth, $rootScope, $window, $location, authFactory){

//setting user
  $scope.authenticate = function(provider) {
    authFactory.authenticateUser(provider);
  };
}]);
