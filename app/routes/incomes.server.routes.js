var incomes = require('../../app/controllers/incomes.server.controller');

module.exports = function (app) {
	app.route('/incomes')
		.post(incomes.create)
		.get(incomes.list);

	app.route('/incomes/:incomeId')
		.get(incomes.read)
		.put(incomes.update)
		.delete(incomes.delete);

	app.param('incomeId', incomes.incomeByID);
};