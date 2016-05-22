var Price = require('mongoose').model('Price');

exports.create = function (req, res, next) {
	var price = new Price(req.body);
	price.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(price)
		}
	});
};

exports.list = function (req, res, next) {
	Price.find({}, function (err, prices) {
		if (err) {
			return next(err);
		} else {
			res.json(prices);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.price);
};

exports.priceByID = function (req, res, id, next) {
	Price.findOne({ _id: id }, function (err, price) {
		if (err) {
			return next(err);
		} else {
			req.price = price;
			next();
		}
	});
};

exports.update = function (req, res, next) {
	Price.findByIdAndUpdate(req.price.id, req.body, function (err, price) {
		if (err) {
			return next(err);
		} else {
			res.json(price)
		}
	});
};

exports.delete = function (req, res, next) {
	req.price.remove(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.price);
		}
	});
};