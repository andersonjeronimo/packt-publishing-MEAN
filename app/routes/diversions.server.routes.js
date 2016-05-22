var diversions = require('../../app/controllers/diversions.server.controller.js');

module.exports = function (app) {
	app.route('/diversions')
		.post(diversions.create)
		.get(diversions.list);

	app.route('/diversions/:diversionId')
		.get(diversions.read)
		.put(diversions.update)
		.delete(diversions.delete);

	app.param('diversionId', diversions.diversionByID);
};