var config = require('./config'),
	mongoose = require('mongoose');
	
module.exports = function () {
	var db = mongoose.connect(config.db);
	
	require('../app/models/diversao.server.model');
	require('../app/models/preco.server.model');
	require('../app/models/cadastro.server.model');	
	require('../app/models/receita.server.model');
	require('../app/models/despesa.server.model');
	
	return db;		
}; 