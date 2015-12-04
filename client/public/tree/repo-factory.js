
factories.factory( 'repoFactory', repoService );

repoService.$inject = ['$http', '$window'];

  function repoService ($http, $window) {

    var service = {
      getRepo: getRepo,
      getRepoDetails: getRepoDetails,
      getAllRepos: getAllRepos
    };
    return service;

      function getRepo (owner, repo){
        var token = JSON.parse($window.localStorage.currentUser).accessToken;
        return $http({
          method: 'POST',
          url: '/github/repo',
          data: {
                  user: owner,
                  repo: repo,
                  token: token
                },
        });
      }

      function getRepoDetails (owner, repo){
        var token = JSON.parse($window.localStorage.currentUser).accessToken;
        return $http({
          method: 'POST',
          url: '/github/user/repo/details',
          data: {
                  user: owner,
                  repo: repo,
                  token: token
                }
        });
      }

      function getAllRepos (owner) {
        var token = JSON.parse($window.localStorage.currentUser).accessToken;
        console.log('token: '+token)
        return $http({
          method: 'POST',
          url: '/github/user/repos',
          data: {
                  user: owner,
                  token: token
                }
        });
      }
  }

