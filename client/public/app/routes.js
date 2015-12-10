var app = angular.module('routes', ['ngRoute', 'satellizer']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '../views/visual.html',
    access: {restricted: true}
  })
  .when('/login', {
    templateUrl: '../auth/login.html',
    access: {restricted: false}
  })
  .when('/tree', {
    templateUrl: '../views/visual.html',
    access: {restricted: true}
  });
}]);

app.config(['$authProvider', function($authProvider){
  $authProvider.github({
    url: '/auth/github',
    clientId: 'ffc8045c4eabdb9e6328', // LOCAL
    redirectUri: window.location.origin
  });
}]);


