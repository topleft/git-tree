process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var should = chai.should();
chai.use(chaiHttp);

describe('git API routes', function(){

  describe('git repos', function(){

    xit('should return git repo as a json object', function(){
      
    });

    xit('should return git repo with javascript as dominant language', function(){

    });

    xit('should return git repo with python as dominant language', function(){

    });

  });

  describe('git repos', function(){

    xit('should return a list of git repos', function(){
      
    });

    xit('should return list of git repos w/ javascript as dom. language', function(){

    });

    xit('should return list of git repos w/ python as dom. language', function(){

    });

  });
});