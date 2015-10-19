angular.module('directives').directive('formTemplate', ['crudFactory', 'alertFactory',
		function(crudFactory, alertFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '='
				},
				templateUrl: 'form/form.html',
				controller: function($scope){
					$scope.items = angular.copy($scope.collections);
					
					$scope.addItem = function(){
						var item = crudFactory.isValidItem($scope.collections.newItem.name, $scope.collections.newItem.type, $scope.collections.items);
						
						if (item){
						crudFactory.createItem($scope.collections.newItem.name, $scope.collections.newItem.type).
							success(function(response){
							$scope.collections.items.push(response[0]);
							$scope.collections.newItem = {};
							alertFactory.add("success", "Success! Item ADDED to database.");
							});
						}
						else{
							$scope.collections.newItem = {};
							alertFactory.add("danger", "Error! Item aready in database.");
						}
					};
				}
			};
		}]);
