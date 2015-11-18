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


