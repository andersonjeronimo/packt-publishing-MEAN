var prices = require('../../app/controllers/precos.server.controller.js');

module.exports = function (app) {
	app.route('/precos')
		.post(prices.create)
		.get(prices.list);

	app.route('/precos/:precoId')
		.get(prices.read)
		.put(prices.update)
		.delete(prices.delete);

	app.param('precoId', prices.priceByID);
};