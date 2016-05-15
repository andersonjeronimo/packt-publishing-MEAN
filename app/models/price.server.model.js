var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var PricesSchema = new Schema({
	valorParMeias : Number,
	valorSessao : Number				
});

mongoose.model('Prices', PricesSchema);