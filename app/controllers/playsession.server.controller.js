var PlaySession = require('mongoose').model('PlaySession');

exports.create = function (req, res, next) {
	var playSession = new PlaySession(req.body);
	playSession.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(playSession)
		}
	});
};

exports.list = function (req, res, next) {
	PlaySession.find({}, function (err, playSessions) {
		if (err) {
			return next(err);			
		} else {
			res.json(playSessions);
		}
	});
}