process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var token = process.env.USER_TOKEN;
var githubAPI = 'https://api.github.com';
var should = chai.should();
chai.use(chaiHttp);

describe('git API routes', function () {
  describe('git single user repo', function() {

    it('should return git repo as a json object', function(done) {
      chai.request(server)
        .post('/github/repo')
        .send({
          user: 'topleft',
          repo: 'git-tree',
          token: token
        })
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('children');
          done();
      });    
    });

    xit('should return git repo with javascript as dominant language', function() {

    });

    xit('should return git repo with python as dominant language', function() {

    });

  });

  describe('git all repos for user', function() {

    xit('should return a list of git repos', function(done){
      chai.request(server)
        .post('/github/user/repos')
        .send({
          user: 'topleft',
          token: token,
        })
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body[0].should.have.property('name');
          res.body[0].should.be.a('object');
          done();
      });
    });

    xit('should return a list of git repos', function(done){
      chai.request(server)
        .post('/github/user/repos')
        .send({
          user: 'elvece',
          token: token,
        })
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body[0].should.have.property('name');
          res.body[0].should.be.a('object');
          done();
      }); 
      
    });

    xit('should return list of git repos w/ javascript as dom. language', function(){

    });

    xit('should return list of git repos w/ python as dom. language', function(){

    });

  });

 describe('get details for one repo', function() {

    it('should return a list of git repos', function(done){
      chai.request(server)
        .post('/github/user/repo/details')
        .send({
          user: 'topleft',
          repo: 'git-tree',
          token: token
        })
        .end(function(err, res){
          console.log(res.body)
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('url');
          res.body.should.have.property('size');
          done();
      });
    });

  });

});



