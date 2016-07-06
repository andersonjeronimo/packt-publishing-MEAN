var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RegisterSchema = new Schema({
	nomeCrianca: String,
	nomeResponsavel: String,
	dataNascimento: Date,
	dataNascimentoStr: String,
	telefone: String,
	operadora: String,
	observacoes: String,
	brincando: {
		type: Boolean,
		default: false
	}
});

mongoose.model('Register', RegisterSchema);