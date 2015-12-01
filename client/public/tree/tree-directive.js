angular.module('directives').directive('treeTemplate', ['repoFactory', 'alertFactory',
    function(repoFactory, alertFactory){
      return {
        restrict: 'E',
        scope: {
          repo: '='
          // callback: drawTree()
        },
        // transclude: true,
        // require: "^tree",
        templateUrl: 'tree/tree.html',
        controller: function($rootScope, $scope){
          $scope.getRepo = function(){
            repoFactory.getRepo($scope.repo.owner, $scope.repo.name)
              .success(function(data){

                $rootScope.repoObj = JSON.stringify(data);

                // $scope.callback();

                console.log('Repo "'+$scope.repo.name+'": ', data);
                // console.log('Repo.children "'+$scope.repo.name+'": ', data.children);
                console.log('rootscope repoObj: '+$rootScope.repoObj);

                repoFactory.getRepoDetails($scope.repo.owner, $scope.repo.name)
                  .success(function (data) {

                    $scope.stars = data.stars;
                    $scope.language = data.language;
                    $scope.size = data.size;

                    console.log('Repo details"'+$scope.repo.name+'": ', data);
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
