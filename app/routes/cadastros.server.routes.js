var registers = require('../../app/controllers/cadastros.server.controller.js');

module.exports = function (app) {
	app.route('/cadastros')
		.post(registers.create)
		.get(registers.list);

	app.route('/cadastros/:cadastroId')		
		.get(registers.read)
		.put(registers.update)		
		.delete(registers.delete);	

	app.param('cadastroId', registers.registerByID);
};

//--> http://expressjs.com/pt-br/guide/routing.html