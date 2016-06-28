var expenses = require('../../app/controllers/despesas.server.controller');

module.exports = function (app) {
	app.route('/despesas')
		.post(expenses.create)
		.get(expenses.list);

	app.route('/despesas/:despesaId')
		.get(expenses.read)
		.put(expenses.updade)
		.delete(expenses.delete);
	
	app.param('despesaId', expenses.expenseByID);

};