var factories = angular.module('factories');

factories.factory( 'repoFactory', repoService );

repoService.$inject = ['$http', '$window'];

  function repoService ($http, $window) {
    var token = JSON.parse($window.localStorage.currentUser).accessToken;
    
    var service = {getRepo: getRepo};
    return service; 

      function getRepo (owner, repo){
        console.log('token ',token);
        return $http({
          method: 'POST',
          url: '/github/repo',
          data: {
                  user: owner,
                  repo: repo,
                  token: token
                }
        });
      };
  }

