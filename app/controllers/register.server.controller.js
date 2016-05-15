var Register = require('mongoose').model('Register');

exports.create = function (req, res, next) {
	var register = new Register(req.body);
	register.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(register)
		}
	});
};

exports.list = function (req, res, next) {
	Register.find({}, function (err, registers) {
		if (err) {
			return next(err);			
		} else {
			res.json(registers);
		}
	});
}