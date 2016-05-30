var Expense = require('mongoose').model('Expense');

exports.create = function (req, res, next) {
	var expense = new Expense(req.body);
	expense.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(expense);
		}
	});
};

exports.list = function (req, res, next) {
	Expense.find({}, function (err, expenses) {
		if (err) {
			return next(err);
		} else {
			res.json(expenses);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.expense);
};

exports.expenseByID = function (req, res, next, id) {
	Expense.findOne({ _id: id }, function (err, expense) {
		if (err) {
			return next(err);
		} else {
			req.expense = expense;
			next();
		}
	});
};

exports.updade = function (req, res, next) {
	Expense.findByIdAndUpdate(req.expense.id, req.body, function (err, expense) {
		if (err) {
			return next(err);
		} else {
			res.json(expense);
		}
	});
};

exports.delete = function (req, res, next) {
	req.expense.remove(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.expense);
		}
	});
};

