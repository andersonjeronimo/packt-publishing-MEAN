var register = require('../../app/controllers/register.server.controller.js');

module.exports = function (app) {
	app.route('/register')
		.post(register.create)
		.get(register.list);

	app.route('/register/:registerId')
		.get(register.read);

	app.param('registerId', register.registerByID);
};

//--> http://expressjs.com/pt-br/guide/routing.html