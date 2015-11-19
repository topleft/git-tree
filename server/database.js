var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema ({
	name: String,
	type: String,
	owner: {type: Schema.Types.ObjectId, ref: 'users'}
});

var userSchema = new Schema({
    username: String,
    password: String
});

var Item = mongoose.model("items", itemSchema);
var User = mongoose.model("users", userSchema);

module.exports = {
	Item: Item,
	User: User
};