var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PriceSchema = new Schema({
	valorParMeias: { type: Number, default: 2 },
	valorSessao: { type: Number, default: 30 }
});

mongoose.model('Price', PriceSchema);