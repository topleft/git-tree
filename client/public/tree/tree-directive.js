angular.module('directives').directive('treeTemplate', ['repoFactory', 'alertFactory', 'd3Factory',
    function(repoFactory, alertFactory, d3Factory){
      return {
        restrict: 'E',
        scope: {
          repo: '='
        },
        templateUrl: 'tree/tree.html',
        controller: function($rootScope, $scope){

          $scope.getRepo = function(){
            repoFactory.getRepo($scope.repo.owner, $scope.repo.name)
              .success(function(data){

                $rootScope.repoObj = JSON.stringify(data);
                // console.log($rootScope.repoObj)

                var repoTree = new d3Factory.DrawTree($rootScope.repoObj);

                $scope.expandAll = function(){
                  repoTree.expandAll();
                };

                $scope.collapseAll = function() {
                  repoTree.collapseAll();
                };

                repoFactory.getRepoDetails($scope.repo.owner, $scope.repo.name)
                  .success(function (data) {

                    $scope.stars = data.stars;
                    $scope.language = data.language;
                    $scope.size = data.size;
                    $scope.url = data.url;
                    $scope.name = data.name;

                    // console.log('Repo details"'+$scope.repo.name+'": ', data);
                  });
                  $rootScope.repoObj = JSON.stringify(data);
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
