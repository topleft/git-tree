
var app = angular.module('myApp');

app.controller('myController', ['$scope', function($scope){

		$scope.title = "Open Tree";
	  $scope.action = {};
	  $scope.action.bootstrap = "";
		$scope.action.message = "";
		$scope.collections = {};
		$scope.collections.newItem = {};
		$scope.update = false;
}]);











