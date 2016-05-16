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

exports.read = function (req, res) {
	res.json(req.register);
};

exports.registerByID = function (req, res, next, id) {
	Register.findOne({
		_id: id
	}, function (err, register) {
		if (err) {
			return next(err);
		} else {
			req.register = register;
			next();
		}
	});
};

//para paginação: http://mongoosejs.com/docs/api.html#model_Model.count