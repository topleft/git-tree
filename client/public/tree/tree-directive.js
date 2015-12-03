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

                $scope.expandAll = function(){
                  d3Factory.expandAll($rootScope.repoObj);
                };

                $scope.collapseAll = function(){
                  d3Factory.collapseAll($rootScope.repoObj);
                };

                d3Factory.drawTree($rootScope.repoObj);

                // console.log('Repo "'+$scope.repo.name+'": ', data);
                // console.log('Repo.children "'+$scope.repo.name+'": ', data.children);
                // console.log('rootscope repoObj: '+$rootScope.repoObj);

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
