var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var RegisterSchema = new Schema({
	nomeCrianca : String,
	nomeResponsavel : String,
	telefone : String,
	operadora : String	
});

mongoose.model('Register', RegisterSchema);