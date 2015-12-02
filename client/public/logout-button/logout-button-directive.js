//logout directive for reference
	angular.module('directives').directive('logoutButton', ['authFactory', '$location', function(authFactory, $location){
		return {
			restrict: 'E',
			scope: {},
			template: '<a ng-click="logout()">Logout</a>',
			controller: function($scope, $location){
				$scope.logout = function(){
					authFactory.logoutUser();
				};
			}
		};
	}]);
