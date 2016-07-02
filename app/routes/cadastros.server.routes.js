var registers = require('../../app/controllers/cadastros.server.controller.js');

module.exports = function (app) {
	app.route('/cadastros')
		.post(registers.create)
		.get(registers.list);

	app.route('/cadastros/:cadastroId')		
		.get(registers.read)
		.put(registers.update)		
		.delete(registers.delete);	

	app.param('cadastroId', registers.registerByID);
};

//--> http://expressjs.com/pt-br/guide/routing.html

/*
app.param([name], callback)

Add callback triggers to route parameters, where name is the name of the parameter or an array of them, and callback is the callback function. 
The parameters of the callback function are the request object, the response object, the next middleware, the value of the parameter and the name 
of the parameter, in that order.
If name is an array, the callback trigger is registered for each parameter declared in it, in the order in which they are declared. 
Furthermore, for each declared parameter except the last one, a call to next inside the callback will call the callback for the next declared parameter.
For the last parameter, a call to next will call the next middleware in place for the route currently being processed, just like it would if name 
were just a string.
For example, when :user is present in a route path, you may map user loading logic to automatically provide req.user to the route, 
or perform validations on the parameter input.
*/