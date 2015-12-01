var express = require('express');
var router = express.Router();
var db = require('../database.js');
var user = require('../database.js').User;
var request = require('request');
var parse = require('../logic/parse.js');
var github = require('../logic/github.js');

// think about adding isAuthenticated
router.post('/github/repo', function(req, res, next) {
  var user = req.body.user;
  var repo = req.body.repo;
  var userToken = req.body.token;
  var options = {
      url: 'https://api.github.com/repos/'+user+'/'+repo+'/branches/master', 
      headers: { 
        Authorization: "token "+ userToken,
        'User-Agent': 'request'
        }
      };      
  request(options, function(error, response, body){
      var obj = JSON.parse(body);
    if (obj.commit) {
      var sha = obj.commit.sha;
      var options = {
        url: 'https://api.github.com/repos/'+user+'/'+repo+'/git/trees/'+sha+'?recursive=1', 
        headers: { 
          Authorization: "token " + userToken,
          'User-Agent': 'request'
          }
        };

      request(options, function(error, response, body){
        var repo = JSON.parse(body);
        var d3Repo = parse.parse(repo);
        res.json(d3Repo);
      });
    } else {
      res.json({
        error: 'Error. No repo called "'+repo+'" and/or user called "'+user+'".', 
        body: body
      });
    }
  });
});

router.post('/github/user/repo/details', function (req, res, next) {
  var user = req.body.user;
  var repo = req.body.repo;
  var userToken = req.body.token;
  var options = {
    url: 'https://api.github.com/repos/'+user+'/'+repo, 
    headers: { 
      Authorization: "token "+ userToken,
      'User-Agent': 'request'
      }
    };
  request(options, function (error, response, body) {
    var repoObj = JSON.parse(body);
    if (repoObj.name) {
      var repoDetails = {
        name: repoObj.name,
        size: repoObj.size,
        stars: repoObj.stargazers_count,
        url: repoObj.html_url,
        language: repoObj.language
      };
      res.json(repoDetails); 
    } else {
      res.json({
        error: 'Error. Can\'t find repo "'+repo+'".', 
        body: body
      });
    }
  });
});


  router.post('/github/user/repos', function (req, res, next) {
    var user = req.body.user;
    var userToken = req.body.token;
    var options = {
      url: 'https://api.github.com/users/'+user+'/repos?per_page=1000', 
      headers: { 
        Authorization: "token "+ userToken,
        'User-Agent': 'request'
        }
      };
    request(options, function (error, response, body) {
      var repos = JSON.parse(body);
      if (repos[0].name) {
        var repoNames = github.grabRepoNames(repos);
        res.json(repoNames); 
      } else {
        res.json({
          error: 'Error. Can\'t find user "'+user+'".', 
          body: body
        });
      }
    });
  });


module.exports = router;


