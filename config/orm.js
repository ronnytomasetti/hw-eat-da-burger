/**
 * Ronny Tomasetti
 * UCF Coding Bootcamp 2016
 * Week 14 - Node Express Handlebars
 *
 * Applications burger object-relational mapping file.
 */

var connection = require("./connection");

var orm = {

	/**
	 * Selects all rows from burgers table.
	 *
	 * @return {function} cb Executes given callback function with results.
	 */
	selectAll: function(cb) {
		connection.query('SELECT * FROM burgers', function(err, results) {
				if (err)
					throw err;
				cb(results);
			}
		);
	},

	/**
	 * [insertOne description]
	 *
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	insertOne: function(burgerName) {
		connection.query('INSERT INTO burgers VALUES ?', burgerName, function(err, result) {
			if (err)
		  		throw err;

		});
	},

	/**
	 * [updateOne description]
	 *
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	updateOne: function(obj) {
		// connection.query('UPDATE movies SET movie = ? WHERE id = ?', [req.body.movie, req.body.id], function(err, result) {
		//   if (err) throw err;
			// REDIRECT AFTER EXECUTING
		// });
	},

	/**
	 * Ends the connection to MySQL database.
	 *
	 * @return {}
	 */
	endConnection: function() {
		connection.end();
	}
};

module.exports = orm;

/* =====================================================
connection.query('DELETE FROM movies WHERE id = ?', [req.body.id], function(err, result) {
  if (err) throw err;
  // REDIRECT AFTER EXECUTING
});
===================================================== */
