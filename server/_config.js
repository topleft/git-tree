var config = {};

config.mongoURI = {
	test: 'mongodb://localhost/crud-test-mocha',
	development: 'mongodb://localhost/crud-testing',
	production: proccess.env.MONGOLAB_URI 
};

module.exports = config;