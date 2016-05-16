var playSession = require('../../app/controllers/playsession.server.controller.js');

module.exports = function (app) {
	app.route('/playSession')
		.post(playSession.create)
		.get(playSession.list);
};