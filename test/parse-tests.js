
process.env.NODE_ENV = 'test';

var parse = require('../server/logic/parse.js');
var data = require('./test-helper-data/helper-data.js');
var chai = require("chai");
var chaiHttp = require('chai-http');
var githubAPI = 'https://api.github.com';
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);


describe('tree parser', function () {


  describe('findDeepestPaths', function () {

    it('should find the deepest paths in a list of paths', function () {       
      var expected = data.deepestPaths.one;
      var result = parse.findDeepestPaths(data.paths.one);
      console.log("One",expected, result)
      expect(result).to.eql(expected);
    });

    it('should find the deepest paths without any duplicate roots', function () {
      var expected = data.deepestPaths.three;
      var result = parse.findDeepestPaths(data.paths.three);
      console.log(expected, result)
      expect(result).to.eql(expected);
    });

  });

  describe('reduceToUnique', function () {

    xit('should create a list of all unique paths', function () {       
      var expected = data.paths.one ;
      var result = parse.reduceToUnique(data.duplicatePaths.one);
      expect(result).toEqual(expected);
    });

    xit('should include similar paths', function () {
      var expected = data.paths.two ;
      var result = parse.reduceToUnique(data.duplicatePaths.two);
      expect(result).toEqual(expected);    
    });

    xit('should include similar paths', function () {
      var expected = data.paths.three ;
      var result = parse.reduceToUnique(data.duplicatePaths.three);
      expect(result).toEqual(expected);    
    });

  });

  describe('createChildren', function () {

    xit('should create an object with paths as keys(strings) and an array of children files (objects)', function () {

      var expected = {'js': [{ name: "js/main.js", url: "https://api.github.com/repos/topleft/test/git/blobs/7e5a1f91d9f8531cb94ca839898fca58302a17b4" }]};
      var result = parse.createChildren(data.directory.tree);
      expect(result).toEqual(expected);
    });

    xit('should create an object with paths as keys(strings) and an array of children files (objects)', function () {
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