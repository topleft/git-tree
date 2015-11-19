var config = {};

config.mongoURI = {
	test: 'mongodb://localhost/tree-test',
	development: 'mongodb://localhost/tree',
	production: process.env.MONGOLAB_URI 
};


module.exports = config;