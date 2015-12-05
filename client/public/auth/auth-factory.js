
factories.factory('authFactory', authService);

authService.$inject = ['$rootScope', '$auth','$location', '$window', 'repoFactory'];

  function authService ($rootScope, $auth, $location, $window, repoFactory) {

    var service = {
      authenticateUser: authenticateUser,
      isUserAuthenticated: isUserAuthenticated,
      logoutUser: logoutUser
    };
    return service;

    function authenticateUser(provider){
      $auth.authenticate(provider)
        .then(function(response) {
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          $location.path('/tree');
        })
        .catch(function(response) {
          console.log(response);
        });
      }

    function isUserAuthenticated(){
      return $auth.isAuthenticated();
    }

    function logoutUser(){
      $auth.logout();
      delete $window.localStorage.currentUser;
      $location.path('/login');
    }
  }
