angular.module('directives').directive('treeTemplate', ['alertFactory', 'd3Factory', '$window', 'repoFactory', 'authFactory',
    function(repoFactory, alertFactory, d3Factory, authFactory){
      return {
        restrict: 'E',
        scope: {
          repo: '='
        },
        templateUrl: 'tree/tree.html',
        controller: function($rootScope, $scope, $window, d3Factory, repoFactory, authFactory){

          // *** DROPDOWN MENU *** //
          $scope.username = JSON.parse($window.localStorage.currentUser).username;

           repoFactory.getAllRepos($scope.username).success(function(data){
             $scope.allRepos = data;
          });

          // *** RECENT SERACHES *** //
          $scope.recentSearches = [];
          function moveIndex(array, fromIndex, toIndex) {
            var placeholder = {};
            var objectToMove = array.splice(fromIndex, 1, placeholder)[0];
            array.splice(toIndex, 0, objectToMove);
            array.splice(array.indexOf(placeholder), 1);
          }

          $scope.setRecent = function(tree, stars, language, size, url, name) {
            var newItem = {
              owner: $scope.repo.owner || $scope.username,
              repo: $scope.repo.name || $scope.oneRepo.name,
              tree: tree,
              stars: stars,
              language: language,
              size: size,
              url: url,
              name: name
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

          $scope.getParams = function(id){
            console.log(id);
          };

          //sets up functions for expanding and collapsing tree
          $scope.expandAll = function(tree){
            tree.expandAll();
          };

          $scope.collapseAll = function(tree) {
            tree.collapseAll();
          };

          // *** GET REPO and TREE *** //
          $scope.getRepo = function(username, repoName){
            repoFactory.getRepo(username, repoName)
              .success(function(data){

                $rootScope.repoObj = JSON.stringify(data);
                // console.log($rootScope.repoObj)

                d3.select("svg").remove();
                $scope.repoTree = new d3Factory.DrawTree($rootScope.repoObj);

                repoFactory.getRepoDetails(username, repoName)
                  .success(function (data) {
                    $scope.stars = data.stars;
                    $scope.language = data.language;
                    $scope.size = data.size;
                    $scope.url = data.url;
                    $scope.name = data.name;
                    // console.log('Repo details"'+$scope.repo.name+'": ', data);
                  }).then(function(){

                      //sets information for recent searches
                      $scope.setRecent($rootScope.repoObj, $scope.stars, $scope.language, $scope.size, $scope.url, $scope.name);
                      $scope.getRecentRepo = function(repoName){
                        for (var i = 0; i < $scope.recentSearches.length; i++) {
                          if ($scope.recentSearches[i].repo === repoName){
                            d3.select("svg").remove();
                            $scope.stars = $scope.recentSearches[i].stars;
                            $scope.language = $scope.recentSearches[i].language;
                            $scope.size = $scope.recentSearches[i].size;
                            $scope.url = $scope.recentSearches[i].url;
                            $scope.name = $scope.recentSearches[i].name;
                            $scope.repoTree = new d3Factory.DrawTree($scope.recentSearches[i].tree);
                          }
                        }
                      };
                  //clears input fields
                  $scope.repo.name = "";
                  $scope.repo.owner = "";
                  });
                // make success message appear on the screen
              });
              //error message
          };
        }
      };
    }]);
