var diversions = require('../../app/controllers/diversoes.server.controller.js');

module.exports = function (app) {
	app.route('/diversoes')
		.post(diversions.create)
		.get(diversions.list);

	app.route('/diversoes/:diversaoId')
		.get(diversions.read)
		.put(diversions.update)
		.delete(diversions.delete);

	app.param('diversaoId', diversions.diversionByID);
};