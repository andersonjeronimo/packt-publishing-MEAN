var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session');


module.exports = function () {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.all('*', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		res.header('Access-Control-Allow-Credentials', 'true');
		next();
	});

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// app.set('views', './app/views');
	// app.set('view engine', 'ejs');
	
	//configurando rotas
	//require('../app/routes/index.server.routes')(app);
	require('../app/routes/diversoes.server.routes')(app);
	require('../app/routes/precos.server.routes')(app);
	require('../app/routes/cadastros.server.routes')(app);
	require('../app/routes/receitas.server.routes')(app);
	require('../app/routes/despesas.server.routes')(app);
	
	app.use(express.static('./public'));

	return app;
};

