process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var token = require('../_keys.js').token;
var githubAPI = 'https://api.github.com';
var should = chai.should();
chai.use(chaiHttp);

describe('git API routes', function () {
  describe('git repos', function() {

    it('should return git repo as a json object', function(done) {
      chai.request(server)
        .post('/github/repo')
        .send({
          user: 'topleft',
          repo: 'git-tree',
          token: token,
        })
        .end(function(err, res){
          // console.log("TOKEN", token)

          console.log('_______________________');
            res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('sha');
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



