var expenses = require('../../app/controllers/expenses.server.controller');

module.exports = function (app) {
	app.route('/expenses')
		.post(expenses.create)
		.get(expenses.list);

	app.route('/expenses/:expenseId')
		.get(expenses.read)
		.put(expenses.updade)
		.delete(expenses.delete);
	
	app.param('expenseId', expenses.expenseByID);

};