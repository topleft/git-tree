var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var config = require('./_config');

var itemSchema = new Schema ({
	name: String,
	type: String,
	owner: {type: Schema.Types.ObjectId, ref: 'users'}
});

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    select: false
  },
  githubProfileID: {
    type: String
  },
});


var Item = mongoose.model("items", itemSchema);
var User = mongoose.model("users", userSchema);


module.exports = {
	Item: Item,
	User: User
};
