var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var PlaySessionSchema = new Schema({
	inicio : Date,
	fim : Date,
	iniciada : Boolean,
	finalizada : Boolean,
	paga : Boolean,
	formaPagto : String,
	valor : Number,
	registerID : String	//referência ao registro de determinado Cadastro (Register) 		
});

mongoose.model('PlaySession', PlaySessionSchema);

//http://stackoverflow.com/questions/15462635/why-use-model-export-in-separate-model-files