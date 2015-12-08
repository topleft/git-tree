var express = require('express');
var router = express.Router();
var request = require('request');
var qs = require('querystring');
var User = require('../database').User;
var config = require('../_config');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');

var helper = require('../logic/auth');

// *** github auth *** //
router.post('/github', function(req, res) {
  var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  var userApiUrl = 'https://api.github.com/user';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    redirect_uri: req.body.redirectUri,
    client_secret: config.GITHUB_SECRET
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params }, function(err, response, accessToken) {
    accessToken = qs.parse(accessToken);
    var headers = { 'User-Agent': 'Satellizer' };
    // Step 2. Retrieve profile information about the current user.
    request.get({ url: userApiUrl, qs: accessToken, headers: headers, json: true }, function(err, response, profile) {
      // Step 3a. Link user accounts.
      if (req.headers.authorization) {
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a GitHub account that belongs to you' });
          }
          var token = req.headers.authorization.split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          User.findById(payload.sub, function(err, user) {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.accessToken = accessToken.access_token;
            user.email = profile.email;
            user.githubProfileID = profile.id;
            user.save(function() {
              var token = helper.createToken(user);
              res.send({
                token: token,
                user: user
              });
            });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ githubProfileID: profile.id }, function(err, existingUser) {
          if (existingUser) {
            var token = helper.createToken(existingUser);
            return res.send({
              token: token,
              user: existingUser
            });
          }
          var user = new User();
          user.accessToken = accessToken.access_token;
          user.email = profile.email;
          user.githubProfileID = profile.id;
          user.username = profile.login;
          user.save(function() {
            var token = helper.createToken(user);
            res.send({
              token: token,
              user: user
            });
          });
        });
      }
    });
  });
});


module.exports = router;
