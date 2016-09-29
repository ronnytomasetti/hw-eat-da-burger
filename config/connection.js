/**
 * Ronny Tomasetti
 * UCF Coding Bootcamp 2016
 * Week 14 - Node Express Handlebars
 *
 * Creates connection between Node app and MySQL database.
 */

var mysql = require('../node_modules/mysql');

if (process.env.JAWSDB_URL)
	connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
	var keys = require('./keys');

	connection = mysql.createConnection({
		host     : keys.db.host,
		user     : keys.db.user,
		password : keys.db.password,
		database : keys.db.database
	});
}

connection.connect(function(err) {
    if (err) {
        console.error('Connection error: ' + err.stack);
        return;
    }
    console.log('Connection threadId: ' + connection.threadId);
});

module.exports = connection;
