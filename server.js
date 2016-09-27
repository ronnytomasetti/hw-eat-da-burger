// =================================================================
// Dependency declarations
// =================================================================
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var logger = require('morgan');
var controller = require('./controllers/burgers_controllers');

// =================================================================
// Initialize new Express app
// =================================================================
var app = express();

// =================================================================
// View engine setup
// =================================================================
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// =================================================================
// Configure app
// =================================================================
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', controller);

// Catch 404 errors, forward to error handlers below.
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// =================================================================
// Error handler - development error handler will print stacktrace
// =================================================================
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
	  		message: err.message,
	  		error: err
		});
	});
}

// =================================================================
// Error handler - production handler not leaking stacktrace to user
// =================================================================
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
