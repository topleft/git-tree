angular.module('directives').directive('treeTemplate', ['repoFactory', 'alertFactory',
    function(repoFactory, alertFactory){
      return {
        restrict: 'E',
        scope: {
          repo: '='
        },
        // transclude: true,
        templateUrl: 'tree/tree.html',
        controller: function($scope){
          $scope.repoObj = null;
          // $scope.drawTree = function(){
          // console.log('testing');};
          $scope.getRepo = function(){
            repoFactory.getRepo($scope.repo.owner, $scope.repo.name)
              .success(function(data){
                $scope.repoObj = JSON.stringify(data);
                console.log('Repo "'+$scope.repo.name+'": ', data);
                // console.log('Repo.children "'+$scope.repo.name+'": ', data.children);
                console.log('scope repoObj: '+$scope.repoObj);
                repoFactory.getRepoDetails($scope.repo.owner, $scope.repo.name)
                  .success(function (data) {
                    // console.log('Repo details"'+$scope.repo.name+'": ', data);
                  });
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
