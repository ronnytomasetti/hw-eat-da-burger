// =================================================================
// Dependencies
// =================================================================
var express = require('express');
var router = express.Router();
var burger = require('../models/Burger');

// =================================================================
// Routes
// =================================================================
/**
 * GET - home page route rendering index.handlebars
 */
router.get('/', function(req, res) {
	burger.allBurgers(function(data) {
		res.render('index', { burgers : data });
	});
});

/**
 * GET - Redirects traffic from /burgers to home page route.
 */
router.get('/burgers', function(req, res) {
	res.redirect('/');
});

/**
 * POST - Used to create new burger entry.
 * Requires valid burger and devoured values.
 * Redirects to home page routes upon completion.
 */
router.post('/burgers', function(req, res) {
	var cols = ['burger_name', 'devoured'];
	var vals = [req.body.burger, req.body.devoured];

	burger.saveBurger(cols, vals, function(result) {
		res.redirect('/');
	});
});

/**
 * PUT - Using method-override, updates burger data entry.
 * Requires valid burger_id and devoured values.
 * Redirects to home page routes upon completion.
 */
router.put('/burgers/update/:id', function(req, res) {
	var condition = 'burger_id = ' + req.params.id;
	var objColVals = { devoured : req.body.devoured };

	burger.devourBurger(objColVals, condition, function() {
		res.redirect('/');
	});
});

/**
 * DELETE - Using method-override, deletes burger data entry.
 * Requires valid burger_id value.
 * Redirects to home page routes upon completion.
 */
router.delete('/burgers/update/:id', function(req, res) {
	var condition = 'burger_id = ' + req.params.id;

	burger.trashBurger(condition, function() {
		res.redirect('/');
	});
});

module.exports = router;
