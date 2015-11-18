var express = require('express');
var router = express.Router();
var crud = require("../logic/crud.js");
var db = require('../database.js');
// var user = require('../database.js').User;
var passport = require('passport');
var local = require('passport-local');


router.get('/https://api.github.com/users/topleft/repos', function(req, res, next) {
  console.log(res);
  res.json(res);
});

module.exports = router;


// http --json --headers GET https://api.github.com/users/topleft/repos  "Authorization: token 68c9e20980da95e564795fecb186ef729678beef"