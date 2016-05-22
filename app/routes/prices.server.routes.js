var prices = require('../../app/controllers/prices.server.controller.js');

module.exports = function (app) {
	app.route('/prices')
		.post(prices.create)
		.get(prices.list);

	app.route('/prices/:priceId')
		.get(prices.read)
		.put(prices.update)
		.delete(prices.delete);

	app.param('priceId', prices.priceByID);
};