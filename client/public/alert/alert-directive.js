	angular.module("directives").directive('alertTemplate', [ 'alertFactory', function(alertFactory){
		return {
			restrict: 'E',
			templateUrl: 'alert/alert.html',
			scope: {
				alerts:   '='
			},
			controller: function($scope){
				$scope.alerts = alertFactory.get();
				}
			};
	}]);