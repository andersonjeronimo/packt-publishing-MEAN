var config = require('./config'),
	mongoose = require('mongoose');
	
module.exports = function () {
	var db = mongoose.connect(config.db);
	
	require('../app/models/diversion.server.model');
	require('../app/models/price.server.model');
	require('../app/models/register.server.model');	
	require('../app/models/income.server.model');
	require('../app/models/expense.server.model');
	
	return db;		
}; 