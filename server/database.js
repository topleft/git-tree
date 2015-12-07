var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var config = require('./_config');

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    select: false
  },
  githubProfileID: {
    type: String
  },
  accessToken: {
    type: String
  }
});

var User = mongoose.model("users", userSchema);

module.exports = {
  User: User
};
