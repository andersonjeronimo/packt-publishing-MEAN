var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var RegisterSchema = new Schema({
	nomeCrianca : String,
	nomeResponsavel : String,
	dataNascimento : Date,
	telefone : String,
	operadora : String
	// , created: {
	// 	type: Date,
	// 	default: Date.now
	// }	
});

mongoose.model('Register', RegisterSchema);