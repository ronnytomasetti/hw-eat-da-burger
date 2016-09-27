var connection = require("./connection");

exports.orm = {
	selectAll: function() {
		connection.query('SELECT * FROM burgers', function(err, rows, fields) {
				if (err)
					throw err;
			}
		);
	},

	insertOne: function(obj) {

	},

	updateOne: function(obj) {

	},

	endConnection: function() {
		connection.end();
	}
};
