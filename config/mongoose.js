var config = require('./config'),
	mongoose = require('mongoose');
	
module.exports = function () {
	var db = mongoose.connect(config.db);
	
	require('../app/models/playsession.server.model');
	require('../app/models/price.server.model');
	require('../app/models/register.server.model');	
	
	return db;		
}; 