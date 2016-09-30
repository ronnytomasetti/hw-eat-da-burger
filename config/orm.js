/**
 * Ronny Tomasetti
 * UCF Coding Bootcamp 2016
 * Week 14 - Node Express Handlebars
 *
 * Applications object-relational mapping file.
 */

var connection = require("./connection");

/**
 * Helper function for printing question marks for use
 * in mysql query string.
 *
 * @param  {Integer} num Number of question marks required in string.
 * @return {String}  arr String containing question marks.
 */
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

/**
 * Helper function for transforming object for use in mysql query string.
 *
 * @param  {Object} ob  Object to transform into portion of mysql query string.
 * @return {String} arr String containing the transformed object values for query.
 */
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key))
			arr.push(key + '=' + ob[key]);
	}

	return arr.toString();
}

var orm = {

	/**
	 * Used to retrieve all rows from mysql database table.
	 *
	 * @param  {String}   tableInput Contains table name to query.
	 * @param  {Function} cb		 Callback function to pass back.
	 * @return {Function} cb		 Executes callback function with query results.
	 */
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	/**
	 * Used to create a new entry into mysql database table.
	 *
	 * @param  {String}   tableInput Contains table name to query.
	 * @param  {Array}    cols       Contains table column names to query.
	 * @param  {Array}    vals		 Contains new values to add to the table.
	 * @param  {Function} cb		 Callback function to pass back.
	 * @return {Function} cb		 Executes callback function with query results.
	 */
	create: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	/**
	 * Used to update a given row in mysql database table.
	 *
	 * @param  {String}   table      Contains table name to query.
	 * @param  {Object}   objColVals Object containing columns and values to update in mysql.
	 * @param  {String}   condition  Contains query condition that determines row to change.
	 * @param  {Function} cb		 Callback function to pass back.
	 * @return {Function} cb		 Executes callback function with query results.
	 */
	update: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	/**
	 * Used to remove a row from mysql database table.
	 *
	 * @param  {String}   table     Contains table name to query.
	 * @param  {String}   condition Contains query condition that determines row to remove.
	 * @param  {Function} cb		Callback function to pass back.
	 * @return {Function} cb		Executes callback function with query results.
	 */
	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;

		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;
