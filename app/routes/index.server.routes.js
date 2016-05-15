module.exports = function (app) {
	// var index = require('../../app/controllers/index.server.controller'); como subir níveis de diretório!
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);	
};