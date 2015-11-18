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

// router.post('/register', function(req, res) {
//   db.User.register(new db.User({ username: req.body.username }), req.body.password, function(err, account) {
//     if (err) {
//       return res.status(500).json({err: err});
//     }
//     passport.authenticate('local')(req, res, function () {
//       return res.status(200).json({status: 'Registration successful!'});
//     });
//   });
// });

// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     console.log(user);
//     if (err) {
//       return res.status(500).json({err: err});
//     }
//     if (!user) {
//       return res.status(401).json({err: info});
//     }
//     req.logIn(user, function(err) {
//       if (err) {
//         return res.status(500).json({err: 'Could not log in user'});
//       }
// 	    return res.status(200).json({status: 'Login succesful!'});
//     });
//   })(req, res, next);
// });

// router.get('/logout', function(req, res) {
//   req.logout();
//   res.status(200).json({status: 'Bye!'});
// });

module.exports = router;
