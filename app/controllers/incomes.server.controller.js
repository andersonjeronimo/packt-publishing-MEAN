var Income = require('mongoose').model('Income');

exports.create = function (req, res, next) {
	var income = new Income(req.body);
	income.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(income);
		}
	});
};

exports.list = function (req, res, next) {
	Income.find({}, function (err, incomes) {
		if (err) {
			return next(err);
		} else {
			res.json(incomes);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.income);
};

exports.incomeByID = function (req, res, next, id) {
	Income.findOne({ _id: id }, function (err, income) {
		if (err) {
			return next(err);			
		} else {
			req.income = income;
			next();
		}
	});
};

exports.update = function (req, res, next) {
	Income.findByIdAndUpdate(req.income.id, req.body, function (err, income) {
		if (err) {
			return next(err);
		} else {
			res.json(income);
		}
	});
};

exports.delete = function (req, res, next) {
	req.income.remove(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.income);
		}
	});
};
