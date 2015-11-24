var express = require('express');
var router = express.Router();
var db = require('../database.js');
var user = require('../database.js').User;
var request = require('request');

// think about adding isAuthenticated
router.post('/github/repo', function(req, res, next) {
  console.log(req.body);
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
      res.json(repo);
    });
  });
});



module.exports = router;


