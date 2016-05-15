var register = require('../../app/controllers/register.server.controller.js');

module.exports = function (app) {
	app.route('/register')
		.post(register.create)
		.get(register.list);
};

//--> http://expressjs.com/pt-br/guide/routing.html