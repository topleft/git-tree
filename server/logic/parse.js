
( function () {


  module.exports = {

    parse: function (input) {
      var repoName = input.url.split('/')[5];
      var rootArray = input.tree;
      var allChildren = this.createChildren(rootArray);
      var deepestPaths = this.findDeepestPaths(Object.keys(allChildren));
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
        //make a copy
        var path = item.path.slice();
        path = path.split('/');
        //file name is last one
        var file = path.pop();
        path = path.join('/');
        var child = {name: file, url: item.url};
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
        //if there is not one after
        if (!arr[i+1]) {
          deep.push(dir);
          return deep;
        }
        //if the next path isn't one file deeper, then push
        if (arr[i+1].split('/').length - arr[i].split('/').length !== 1 ) {
          deep.push(dir);
          return deep;
        }
        return deep;
      }, []);
    },
    createFinalObject: function(names, childrenObj, repoName) {
      var repoObject = {'name': repoName, 'children': []};
      if ( childrenObj[''] ) {
        childrenObj[''].forEach(function(child){
          repoObject.children.push(child);
        });
        delete childrenObj[''];
      }

      names.forEach( function (path) {

        var splitPath = path.split('/');
        var nestedObj = splitPath.reduceRight(function ( base, name, i, arr ) {
            var j = i;
            //if one last one, don't put another object in there (base is setting you up for next round)
            if ( Object.keys(base).length === 0 ) {
              base = undefined;
            }
            var nested = { 'name': '', children: [] };
            nested.name = name;
            if (i === 0) { i = 1 }
            //joining path from beginning to wherever at - match to children objects
            var currentPath = arr.slice(0, i+1).join('/');
            //if path is there, set files to children - currentPath is array of files
            if (childrenObj[currentPath]) {
              nested.children = childrenObj[currentPath];
              delete childrenObj[currentPath];
            }
            //if base is undefined, done; otherwise, push children into base
            if (base !== undefined) { nested.children.push(base); }
            return nested;
        }, {});
<<<<<<< HEAD
        // if (nestedObj.name !== '') { repoObject.children.push(nestedObj); }
=======
        //something is going on to avoid duplicates and it helps
        if (nestedObj.name !== '') { repoObject.children.push(nestedObj); }
>>>>>>> 8b9d9e06e20e0daa352a0484e38c34b8bc684eba
      });
      return repoObject;
    }

  };



})();
