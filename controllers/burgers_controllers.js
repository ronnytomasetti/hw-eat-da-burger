var express = require('express');
var router = express.Router();

// =================================================================
// GET API route serving home page
// =================================================================
router.get('/', function(req, res) {
  // res.render('index', { title : 'Friend Finder' });
  res.end("HOMEPAGE");
});

module.exports = router;
