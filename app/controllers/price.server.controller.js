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
}