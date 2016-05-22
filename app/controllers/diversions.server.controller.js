var Diversion = require('mongoose').model('Diversion');

exports.create = function (req, res, next) {
	var diversion = new Diversion(req.body);
	diversion.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(diversion)
		}
	});
};

exports.list = function (req, res, next) {
	Diversion.find({}, function (err, diversions) {
		if (err) {
			return next(err);
		} else {
			res.json(diversions);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.diversion);
};

exports.diversionByID = function (req, res, id, next) {
	Diversion.findOne({ _id: id }, function (err, diversion) {
		if (err) {
			return next(err);
		} else {
			req.diversion = diversion;
			next();
		}
	});
};

exports.update = function (req, res, next) {
	Diversion.findByIdAndUpdate(req.diversion.id, req.body, function (err, diversion) {
		if (err) {
			return next(err);
		} else {
			res.json(diversion);
		}
	});
};

exports.delete = function (req, res, next) {
	req.diversion.remove(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.diversion);
		}
	});
};