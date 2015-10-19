	angular.module("directives").directive('alertTemplate', [ 'alertFactory', function(alertFactory){
		return {
			restrict: 'E',
			templateUrl: 'alert/alert.html',
			scope: {
				alerts:   '='
			},
			controller: function($scope){
				console.log('alerts');
				$scope.alerts = alertFactory.get();
				}
			};
	}]);