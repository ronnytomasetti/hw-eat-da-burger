var express = require('express');
var router = express.Router();

var Burger = require('../models/Burger');

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
