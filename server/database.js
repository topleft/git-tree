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

// hash before saving to database
userSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// verify for plain-text and hashed passwords
userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};


var Item = mongoose.model("items", itemSchema);
var User = mongoose.model("users", userSchema);


module.exports = {
	Item: Item,
	User: User
};
