angular.module('directives').directive('treeTemplate', ['repoFactory', 'alertFactory',
    function(repoFactory, alertFactory){
      return {
        restrict: 'E',
        scope: {
          repo: '='
        },
        templateUrl: 'tree/tree.html',
        controller: function($scope){
          
          $scope.getRepo = function(){
            repoFactory.getRepo($scope.repo.owner, $scope.repo.name)
              .success(function(data){
                console.log('Repo "'+$scope.repo.name+'": ', data);
                repoFactory.getRepoDetails($scope.repo.owner, $scope.repo.name)
                  .success(function (data) {
                    console.log('Repo details"'+$scope.repo.name+'": ', data);
                  })
                // make data appear on the screen
                // make success message appear on the screen
              });

            // if(){

            // }
            
            // else{
            //   $scope.collections.newItem = {};
            //   alertFactory.add("danger", "Error! Item aready in database.");
            // }
          };
        }
      };
    }]);
