//logout directive for reference
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

	//attempt at refactor
	// 	angular.module('directives').directive('logoutButton', [ '$scope', '$window', '$auth', '$location', 'authFactory', function($scope, $window, $auth, $location, authFactory){
	// 	return {
	// 		restrict: 'E',
	// 		scope: {
	// 			logout: '='
	// 		},
	// 		template: '<button class="btn btn-warning btn-sm" ng-click="logout()">Logout</button>',
	// 		controller: function($scope, $window, $auth, $location){

	// 			//reference for factory refactor
	// 			$scope.logout = function(){
	// 					authFactory.logoutUser()
	// 					.then(function(){
	// 						$location.path("/login");
	// 					});
	// 			};

	// 			//satellizer logout
	// 			// $scope.logout = function() {
	// 		 //    $auth.logout();
	// 		 //    delete $window.localStorage.currentUser;
	// 		 //    $location.path('/');
	// 		 //  };
	// 		}
	// 	};
	// }]);
