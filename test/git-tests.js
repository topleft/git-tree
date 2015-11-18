process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var githubAPI = 'https://api.github.com'; 
var should = chai.should();
chai.use(chaiHttp);

describe('git API routes', function () {

  describe('git branches', function () {

    it('should return git branch for user', function(done){
      chai.request(githubAPI)
        .get('/repos/topleft/git-tree/branches/master')
        .end(function(err, res){
          console.log(res.body);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.commit.should.have.property('sha');
          done();
        });

      });
  });

  describe('git repos', function() {

    xit('should return git repo as a json object', function(done) {
      chai.request('https://')
        .get('/repos/topleft/git-tree/branches/master')
        .end(function(err, res){
          console.log(res.body);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('commit.sha');
          res.body.should.be.a('object');
          done();
      });    
    });

    xit('should return git repo with javascript as dominant language', function() {

    });

    xit('should return git repo with python as dominant language', function() {

    });

  });

  describe('git repos', function() {

    xit('should return a list of git repos', function(){
      
    });

    xit('should return list of git repos w/ javascript as dom. language', function(){

    });

    xit('should return list of git repos w/ python as dom. language', function(){

    });

  });
});

