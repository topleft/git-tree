
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
      expect(result).to.eql(expected);
    });

    it('should find the deepest paths without any duplicate roots', function () {
      var expected = data.deepestPaths.three;
      var result = parse.findDeepestPaths(data.paths.three);
      expect(result).to.eql(expected);
    });

  });



  describe('createChildren', function () {

    it('should create an object with paths as keys(strings) and an array of children files (objects)', function () {

      var expected = {'js': [{ name: "main.js", url: "https://api.github.com/repos/topleft/test/git/blobs/7e5a1f91d9f8531cb94ca839898fca58302a17b4" }]};
      var result = parse.createChildren(data.directory.tree);
      expect(result).to.eql(expected);
    });


  });


  
  it('should grab repo name', function(){
    var expected = data.fileName;
    var result = parse.parse(data.file).name;
    expect(result).to.eql(expected);
  });

  it('should grab repo name', function(){
    var expected = data.smallRepoName;
    var result = parse.parse(data.smallRepo).name;
    expect(result).to.eql(expected);
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