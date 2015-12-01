//starting factory refactor
angular.module('factories').factory('authFactory', [ '$scope','$window','$auth','$location', function($scope, $window, $auth, $location) {

		return {
			isAuthenticated: function(){
				return $auth.isAuthenticated();
			},
			authenticate: function(provider){
		    $auth.authenticate(provider)
		      .then(function(response) {
		        $window.localStorage.currentUser = JSON.stringify(response.data.user);
		        $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		        console.log(response);
		        $location.path('/home');
		      })
		    .catch(function(response) {
					console.log(response);
		    });
			},
			logoutUser: function(){
		    $auth.logout();
		    delete $window.localStorage.currentUser;
		    $location.path('/');
			}
		};

	}]);


//old factory for reference
// angular.module('factories').factory('authFactory', [ '$http','$q', function($http, $q) {
// 			var user = null;

// 		return {
// 			isLoggedIn: function(){
// 				if (user){
// 					return true;
// 				}
// 				else {
// 					return false;
// 				}
// 			},
// 			getUserStatus: function(){
// 				return user;
// 			},
// 			registerUser: function(username, password){
// 				var q = $q.defer();
// 				$http.post('/register', {username: username, password: password})
// 					.success(function(data, status) {
// 						if (status === 200 && data.status) {
// 							user = true;
// 							q.resolve();
// 						}
// 						else {
// 							q.reject();
// 						}
// 					})
// 					.error(function(data){
// 						q.reject();
// 					});
// 					return q.promise;
// 			},
// 			loginUser: function(username, password){
// 				var q = $q.defer();
// 				$http.post('/login', {username: username, password: password})
// 					.success(function(data, status){
// 						if (status === 200 && data.status){
// 							user = true;
// 							q.resolve();
// 						}
// 						else{
// 							user = false;
// 							q.reject();
// 						}
// 					})
// 					.error(function(){
// 						user = false;
// 						q.reject();
// 					});
// 					return q.promise;
// 			},
// 			logoutUser: function(){
// 				var q = $q.defer();
// 				$http.get('/logout')
// 				.success(function(data){
// 					user = false;
// 					q.resolve();
// 				})
// 				.error(function(data){
// 					user = false;
// 					q.reject();
// 				});
// 				return q.promise;
// 			}
// 		};

// 	}]);
