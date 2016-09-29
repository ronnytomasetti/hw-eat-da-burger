var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

/**
 *
 */
router.get('/', function(req, res) {

	burger.listAllBurgers(function(data) {
		res.render('index', { burgers : data } );
	});

});

/**
 *
 */
router.post('/burgers', function(req, res) {
	burger.saveBurger(function() {
		res.redirect('/');
	});
});

/**
 *
 */
router.put('/burgers/update', function(req, res) {
	burger.devourBurger(function() {
		res.redirect('/');
	});
});

/**
 * router.delete('/burgers/delete', function(req, res) { });
 */

module.exports = router;
