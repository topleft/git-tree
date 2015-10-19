	angular.module('directives').directive('logoutButton', ['authFactory', '$location', function(authFactory, $location){
		return {
			restrict: 'E',
			scope: {
				logout: '='
			},
			template: '<button class="btn btn-warning btn-sm" ng-click="logout()">Logout</button>',
			controller: function($scope, $location){
				$scope.logout = function(){
						authFactory.logoutUser()
						.then(function(){
							$location.path("/login");
						});			
				};
			}
		};
	}]);