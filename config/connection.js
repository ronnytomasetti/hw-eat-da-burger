var mysql = require('../node_modules/mysql');
var keys = require('./keys');

var connection;

if (process.env.JAWSDB_URL)
	connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
	connection = mysql.createConnection({
		host     : keys.db.host,
		user     : keys.db.user,
		password : keys.db.password,
		database : keys.db.database
	});
}

connection.connect();

module.exports = connection;
