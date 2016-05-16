var price = require('../../app/controllers/price.server.controller.js');

module.exports = function (app) {
	app.route('/price')
		.post(price.create)
		.get(price.list);
};