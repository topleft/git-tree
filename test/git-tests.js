process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var should = chai.should();
chai.use(chaiHttp);

describe('git API routes', function(){

  describe('git repos', function(){

    it('should return git repo as a json object', function(done){
      chai.request(server)
        .get('https://api.github.com/users/topleft/repos')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
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
});

