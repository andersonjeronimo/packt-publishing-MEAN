var incomes = require('../../app/controllers/receitas.server.controller');

module.exports = function (app) {
	app.route('/receitas')
		.post(incomes.create)
		.get(incomes.list);

	app.route('/receitas/:receitaId')
		.get(incomes.read)
		.put(incomes.update)
		.delete(incomes.delete);

	app.param('receitaId', incomes.incomeByID);
};