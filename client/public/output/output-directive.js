angular.module('directives')
	.directive('outputTemplate', [ 'crudFactory', 'frontEndDataFactory', 'alertFactory', function(crudFactory, frontEndDataFactory, alertFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=',
					action: '='
				},
				templateUrl: 'output/output.html',
				controller: function($scope, crudFactory, frontEndDataFactory){
					getAllItems();
					function getAllItems (){
						crudFactory.getAllItems()
							.success(function(response){
								$scope.collections.items = response;
							});
					}

					$scope.action.delete=false;

					$scope.doubleCheckDelete = function(id){
						$scope.update = false;
						$scope.action.id = id;
					}

					$scope.deleteItem = function (id){
						crudFactory.deleteItem(id)
							.success(function(){frontEndDataFactory.findAndDelete(id, $scope.collections.items);
								alertFactory.add('success', "Success! Item DELETED from the database")
								$scope.action.id = false;
							});
					};



					$scope.toggleUpdate = function(id) {
						$scope.action.id = false;
						$scope.update = id;

					};

					$scope.updateItem = function(id, name, type) {
						crudFactory.updateItem(id, name, type)
							.success(function(response){
								alertFactory.add('success', "Success! Item UPDATED in the database.");
								$scope.update = false;
							})
					};
				
				}  
			};

	}]);