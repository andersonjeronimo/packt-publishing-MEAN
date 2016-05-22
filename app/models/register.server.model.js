var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var RegisterSchema = new Schema({
	nomeCrianca : String,
	nomeResponsavel : String,
	dataNascimento : Date,
	email : String,
	telefone : String,
	operadora : String,
	observacoes : String
	// , created: {
	// 	type: Date,
	// 	default: Date.now
	// }	
});

mongoose.model('Register', RegisterSchema);