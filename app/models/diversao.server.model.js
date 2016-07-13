var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DiversionSchema = new Schema({
	//tempo: Schema.Types.Mixed,
	inicio: Date,
	fim: Date,
	iniciada: Boolean,
	finalizada: Boolean,
	paga: Boolean,
	formaDePagamento: String,
	valorPago: Number,
	valorFinal: Number,
	nomeCrianca: String,
	registerID: {
		type: Schema.ObjectId,
		ref: 'Register'
	}
	// ,
	// created: {
	// 	type: Date,
	// 	default: Date.now
	// }
});

mongoose.model('Diversion', DiversionSchema);

/*
	referência ao registro de determinado Cadastro (Register)
	
	var register = new Register();
	register.save(...);
	
	var diversion = new Diversion();
	diversion.registerID = register;	
	diversion.save(...); 
	*/

/*
http://stackoverflow.com/questions/15462635/why-use-model-export-in-separate-model-files

Defining custom static methods
Model static methods give you the liberty to perform model-level operations, such
as adding extra find methods. For instance, let's say you want to search users by
their username. You could of course define this method in your controller, but that
wouldn't be the right place for it. What you're looking for is a static model method.
To add a static method, you will need to declare it as a member of your schema's
statics property. In our case, adding a findOneByUsername() method would look
like the following code snippet:

DiversionSchema.statics.findOneByUsername = function (username,
	callback) {
	this.findOne({ username: new RegExp(username, 'i') }, callback);
};

This method is using the model's findOne() method to retrieve a user's document
that has a certain username. Using the new findOneByUsername() method would be
similar to using a standard static method by calling it directly from the User model
as follows:

Diversion.findOneByUsername('username', function (err, diversion ) {
...
});

You can of course come up with many other static methods; you'll probably need
them when developing your application, so don't be afraid to add them.
*/