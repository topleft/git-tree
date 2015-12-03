

( function () {



  var parse = {

    parse: function (input) {
      var repoName = input.url.split('/')[5];
      var rootArray = input.tree;

      
      var children = this.createChildren(rootArray);
      var siblings = this.groupSiblingDirectories(children);
      var tree = this.convertKeys(siblings);
      var result = { name: repoName, children: [tree] };

      
      // result = JSON.stringify(result);
      // result = JSON.parse(result);
      return result;

    },
    createChildren: function (input) {
      // make arrays of all files
      var files = input.filter(function (item) {
        return item.type === 'blob';
      });
      // make an object that uses the path(string) as key
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
    groupSiblingDirectories: function (childrenObject) {
        // if paths are the same except for the last file then push an object into the parent array
        var paths = Object.keys(childrenObject); 

        // find all the paths that are the same length
        var groupedByLength = paths.reduce(function (data, curr, i, arr) {
          var pathArr = curr.split('/');
          if (data[pathArr.length] !== undefined) {
            data[pathArr.length].push(curr);
          } else {
            data[pathArr.length] = [curr];
          }
          return data; 
        }, {});

        var lengths = Object.keys(groupedByLength);

        // group paths that have same root
        var pathsWithSameRoot = lengths.map(function (num, h, arr) {
          var self = this;
          var layer = groupedByLength[num].reduce(function (data, curr, i, arr) {

            var pathArr = curr.split('/');
            var dir = pathArr.pop();                
            var parent = pathArr.join('/');

            if (data[parent]) {
              var obj = {name: dir, children: childrenObject[curr]}
              data[parent].push(obj)
            } else {
              var obj = {name: dir, children: childrenObject[curr]}
              data[parent] = [obj]
            }

            return data;
          }, {});

          if (this.length === 0) {
            this.push(layer);
          } else {
            self[0][''][0].children.push(layer)          
          }


          return this
        }, []);

        return pathsWithSameRoot[0][0][''][0];
      },
      convertKeys: function (siblings) {
        var children = siblings.children.slice();

        children.forEach(function (item, i, arr) {        
          var keys = Object.keys(item);
          keys.forEach(function (key) {

          if (key.split('/').length > 1) {
            parse.convertPaths(siblings, key, children ,i)
          }


          // need to acount for joined file paths ie client/public         
          else if( key !== 'name' && key !== 'url' ) {
              var obj = {name: key, children: children[i][key]}
              siblings.children.splice(i,1);
              siblings.children.unshift(obj)
            }
          
          })
        });

        return siblings;
      },
      convertPaths: function (siblings, key, children, i) {

          // need to acount for joined file paths ie client/public
              var keyArr = key.split('/');

              var obj = {
                name: keyArr[0], 
                children: [ { name: keyArr[1], children: children[i][key] } ]
              }
              siblings.children.splice(i,1);
              siblings.children.unshift(obj)
              console.log(siblings.children)
      }
  };

  module.exports = parse;

})();

