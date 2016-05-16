var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var PriceSchema = new Schema({
	valorParMeias : Number,
	valorSessao : Number				
});

mongoose.model('Price', PriceSchema);