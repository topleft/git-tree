var factories = angular.module('factories', []);

	factories.factory('crudFactory', [ '$http', function ($http) {

		return {
			createItem: function(name, type) {
				// console.log(name, type)
				return $http.post('/items/'+name+'/'+type);
			},
			getItem: function(id) {
				return $http.get('/items/'+id);
			},
			getAllItems: function() {
				return $http.get('/items');
			},
			updateItem: function(id, name, type) {
				return $http.put('/items/'+id+'/'+name+'/'+type);
			},
			deleteItem: function(id) {
				return $http.delete('items/'+id);
			},
			isValidItem: function(name, type, items){

				var name = name.toLowerCase();
				var type = type.toLowerCase();

				for (var i = 0; i < items.length; i++) {
					if (items[i].name.toLowerCase() === name && items[i].type.toLowerCase() === type) {
						return false;
					}
				}
				return true;
			}
		};

	}]);

	factories.factory('frontEndDataFactory', [function(){

		return {
			add: function(arr, item){
				arr.push(item);
			},
			findAndDelete: function(id, items) {
				for (var i = 0; i < items.length; i++) {
					if (items[i]._id === id){
						items.splice(i, 1);
					}
		  	}
		  }
		};

	}]);

	factories.factory('d3', [])
  .factory('d3Service', ['$document', '$q', '$rootScope', function($document, $q, $rootScope) {
    var d = $q.defer();
    function onScriptLoad() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve(window.d3); });
    }
    // Create a script tag with d3 as the source
    // and call our onScriptLoad callback when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = '../vendor/bower_components/d3/d3.js';
    scriptTag.onreadystatechange = function () {
    if (this.readyState === 'complete') { onScriptLoad(); }
  };
  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

  return {
    d3: function() { return d.promise; }
  };
}]);


