var registers = require('../../app/controllers/registers.server.controller.js');

module.exports = function (app) {
	app.route('/registers')
		.post(registers.create)
		.get(registers.list);

	app.route('/registers/:registerId')		
		.get(registers.read)
		.put(registers.update)		
		.delete(registers.delete);	

	app.param('registerId', registers.registerByID);
};

//--> http://expressjs.com/pt-br/guide/routing.html