var express = require('express');
var router = express.Router();
var crud = require("../logic/crud.js");
var db = require('../database.js');
// var user = require('../database.js').User;


router.get('/items', function(req, res, next) {
	console.log("route get");
	crud.handleGet(res);
});

router.get('/items/:id', function(req, res, next) {
	crud.handleGetOne(res, req.params.id);
});

router.post('/items/:name/:type', function(req, res, next) {
	crud.handlePost(res, req.params.name, req.params.type);
});

router.put('/items/:id/:name/:type', function(req, res, next) {
	crud.handlePut(res, req.params.id, req.params.name, req.params.type);
});

router.delete('/items/:id', function(req, res, next) {
	console.log("in router delete");
	crud.handleDelete(res, req.params.id);
});



module.exports = router;
