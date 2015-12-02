angular.module('directives')
  .directive('navTemplate', ['authFactory', function(){
    return {
      restrict: 'A',
      templateUrl: 'nav/nav.html',
      controller: function($scope, authFactory){

        $scope.isAuthenticated = function(){
          authFactory.isUserAuthenticated();
        };

        $scope.authenticate = function(provider) {
          authFactory.authenticateUser(provider);
        };
      }
    };
  }]);

