( function () {

  module.exports = {

    parse: function (input) {    
      var repoName = input.url.split('/')[5];
      var rootArray = input.tree;
      var allChildren = this.createChildren(rootArray);
      var uniquePaths = this.reduceToUnique(Object.keys(allChildren));
      var deepestPaths = this.findDeepestPaths(uniquePaths);
      var result = this.createFinalObject(deepestPaths, allChildren, repoName);
      result = JSON.stringify(result);
      result = JSON.parse(result);
      return result;
    },
    createChildren: function (input) {
      var files = input.filter(function (item) {
        return item.type === 'blob';
      });
      var filesObj = files.reduce( function (obj, item) {
        var path = item.path.slice();
        path = path.split('/');
        var file = path.pop()
        path = path.join('/');
        var child = {name: file, url: item.url}
        
        if (!obj[path]) {
          obj[path] = [child];
        } else {
          obj[path].push(child);
        }
        return obj;
      }, {});
      return filesObj;
    },
    findDeepestPaths: function (directories) {
      return directories.reduce( function (deep, dir, i, arr ) {
        if (!arr[i+1]) {
          deep.push(dir);
          return deep;
        }
        var curr = dir.split('/').shift();
        var next = arr[i+1].split('/').shift();
        if (curr !== next && dir !== '') { deep.push(dir) }
          return deep;
      }, []);
    },
    createFinalObject: function(names, childrenObj, repoName) {
      var repoObject = {'name': repoName, 'children': []};
      repoObject.children.push(childrenObj[''][0]);
      names.forEach( function (path) {
        var splitPath = path.split('/');
        var nestedObj = splitPath.reduceRight(function ( base, name, i, arr ) {
            var j = i;
            if ( Object.keys(base).length === 0 ) {
              base = undefined;
            }
            var nested = { 'name': '', children: [] };
            nested.name = name;
            if (i === 0) { i = 1 }
            var currentPath = arr.slice(0, i+1).join('/');
            if (childrenObj[currentPath]) {
              nested.children = childrenObj[currentPath];
            }
            if (base !== undefined) { nested.children.push(base) }
            return nested;
        }, {});
        repoObject.children.push(nestedObj);
      });
      return repoObject;
    },
    reduceToUnique: function (arr) {
      var seen = {};
      return arr.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
    }
    
  };

})();
