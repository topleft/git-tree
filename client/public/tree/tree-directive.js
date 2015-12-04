angular.module('directives').directive('treeTemplate', ['repoFactory', 'alertFactory', 'd3Factory',
    function(repoFactory, alertFactory, d3Factory){
      return {
        restrict: 'E',
        scope: {
          repo: '='
        },
        templateUrl: 'tree/tree.html',
        controller: function($rootScope, $scope){

          $scope.recentSearches = [];

          function moveIndex(array, fromIndex, toIndex) {
            var placeholder = {};
            var objectToMove = array.splice(fromIndex, 1, placeholder)[0];
            array.splice(toIndex, 0, objectToMove);
            array.splice(array.indexOf(placeholder), 1);
          }

          $scope.setRecent = function() {
            var newItem = {
                  owner: $scope.repo.owner,
                  repo: $scope.repo.name
                };

            if ($scope.recentSearches.length === 3){
              moveIndex($scope.recentSearches, 1, 0);
              moveIndex($scope.recentSearches, 2, 1);
              $scope.recentSearches.pop();
              $scope.recentSearches.push(newItem);

            } else {
              $scope.recentSearches.push(newItem);
            }
            return $scope.recentSearches;
          };

          $scope.getIndex = function(){

          }
          $scope.getRepo = function(){
            repoFactory.getRepo($scope.repo.owner, $scope.repo.name)
              .success(function(data){

                $scope.setRecent();

                $rootScope.repoObj = JSON.stringify(data);
                // console.log($rootScope.repoObj)

                d3.select("svg").remove();
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
                // make success message appear on the screen
              });
              //error message
          };
        }
      };
    }]);
