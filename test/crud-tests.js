process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var Item = require("../server/database.js").Item;
var should = chai.should();
chai.use(chaiHttp);

describe("Whole Hog Crud", function(){
	Item.collection.drop();
	var id = "";

// setup and teardown ------------------- //

	beforeEach(function(done){
		var newItem = new Item({name: "thing", type: "stuff"});
		id = newItem._id;
		newItem.save(function(err){			
			// done();
		});
		var newItem2 = new Item({name: "boat", type: "vehicle"});
		newItem2.save(function(err){			
			done();
		});
	});

	afterEach(function(done){
		Item.collection.drop();
		done();
	});

// it shoulds ------------------- //

	it("should get all items from DB", function(done){
		chai.request(server)
			.get('/items')
			.end(function(err, res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				res.body.length.should.equal(2);
				res.body[0].should.be.a('object');
				res.body[0].name.should.be.a('string');
				res.body[0].name.should.equal('thing');
				res.body[0].type.should.be.a('string');
				res.body[0].type.should.equal('stuff');
				done();
			});
	});

	it("should get one item from DB", function(done){
		chai.request(server)
			.get('/items/'+id)
			.end(function(err, res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				res.body.length.should.equal(1);
				res.body[0].should.be.a('object');
				res.body[0].name.should.be.a('string');
				res.body[0].name.should.equal('thing');
				res.body[0].type.should.be.a('string');
				res.body[0].type.should.equal('stuff');
				done();
			});	
	});
	it("should post item to DB", function(done){
		chai.request(server)
			.post('/items/'+"new thing/"+"more stuff")
			.end(function(err, res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.name.should.be.a('string');
				res.body.name.should.equal('new thing');
				res.body.type.should.be.a('string');
				res.body.type.should.equal('more stuff');
				done();		
			});
	});
	it("should update an item in the DB", function(done){
		chai.request(server)
			.put('/items/'+id+"/new thing/"+"more stuff")
			.end(function(err, res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.be.a('object');
				res.body.name.should.be.a('string');
				res.body.name.should.equal('new thing');
				res.body.type.should.be.a('string');
				res.body.type.should.equal('more stuff');
				done();
			});		
	});
	it("should delete an item from DB", function(done){
		chai.request(server)
			.delete('/items/'+id)
			.end(function(err, res){
				console.log(res.body);
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.message.should.equal("Item Deleted");
				done();
			});	
	});




//close describe
});