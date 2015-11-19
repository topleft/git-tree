var Item = require("../database.js").Item;
var mongoose = require('mongoose-q')(require('mongoose'));


console.log("in crud.js");


function handleGet(res) {
	Item.findQ({})
		.then(function(response){ res.json(response);})
		.catch(function(err){ res.json(err);})
		.done();
}

function handleGetOne(res, id) {
	Item.findQ({_id: id})
		.then(function(response){ res.json(response);})
		.catch(function(err){ res.json(err);})
		.done();
}

function handlePost(res, name, type) {
	newItem = new Item({name: name, type: type});
	newItem.saveQ()
		.then(function(response){ res.json(response);})
		.catch(function(err){ res.json(err);})
		.done();
}

function handlePut(res, id, name, type) {
	var query = {_id: id};
	var update = {name: name, type: type};
	var option = {new: true};
	Item.findOneAndUpdateQ(query, update, option)
		.then(function(response){ res.json(response);})
		.catch(function(err){ res.json(err);})
		.done();
}


function handleDelete(res, id) {
	Item.removeQ({_id: id})
		.then(function(response){ res.json({message: "Item Deleted"});})
		.catch(function(err){ res.json(err);})
		.done();
}

module.exports = {
	handleGet: handleGet,
	handleGetOne: handleGetOne,
	handlePost: handlePost,
	handlePut: handlePut,
	handleDelete: handleDelete
};
