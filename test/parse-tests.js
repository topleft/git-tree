
var parse = require('./parse.js');
var data = require('./data.js');
var expected = require('./expected.js')

describe('tree parser', function () {


  describe('findDeepestPaths', function () {

    xit('should find the deepest paths in a list of paths', function () {       
      var expected = data.deepestPaths.one;
      var result = parse.findDeepestPaths(data.paths.one);
      expect(result).toEqual(expected);
    });

    xit('should find the deepest paths without any duplicate roots', function () {
      var expected = data.deepestPaths.three;
      var result = parse.findDeepestPaths(data.paths.three);
      expect(result).toEqual(expected);
    });

  });

  describe('reduceToUnique', function () {

    xit('should create a list of all unique paths', function () {       
      var expected = '';
      var result = parse.reduceToUnique();
      expect(result).toEqual(expected);
    });

    xit('should include similar paths', function () {
      var expected = '';
      var result = parse.reduceToUnique();
      expect(result).toEqual(expected);
    });

  });

  describe('createChildren', function () {

    xit('should create an object with paths as keys(strings) and an array of children files (objects)', function () {       
      var expected = '';
      var result = parse.createChildren(data.repo);
      expect(result).toEqual(expected);
    });

    xit('it should include similar paths', function () {
      var expected = '';
      var result = parse.createChildren(data.paths.three);
      expect(result).toEqual(expected);
    });

  });


  
  xit('should grab repo name', function(){
    var expected = 'git-tree';
    var result = parse(data.file).name;
    expect(result).toEqual(expected);
  });

  xit('should parse a single file', function(){
    var expected = parse(data.repo);
    var result = 'test';
    expect(result).toEqual(expected);
  });


  xit('should parse a single directory', function(){
    var expected = '';
    var result = '';
    expect(result).toEqual(expected);
  });

  xit('should parse both directories and files', function(){
    var expected = '';
    var result = '';
    expect(result).toEqual(expected);
  });

  xit('should parse a repo', function(){
    var expected = '';
    var result = '';
    expect(result).toEqual(expected);
  });

});