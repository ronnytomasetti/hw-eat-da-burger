var orm = require('../config/orm');

var burger = {

	listAllBurgers: function(cb) {
		orm.selectAll(cb);
	},

	saveBurger: function(burgerData) {

	},

	devourBurger: function(burgerData) {

	}
};

module.exports = burger;
