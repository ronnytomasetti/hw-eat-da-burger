var orm = require('../config/orm');

var burger = {
	table : 'burgers',

	/**
	 * Calls orm.all function with table and given values from controller.
	 *
	 * @param  {Function} cb Callback function to pass back.
	 * @return {Function} cb Executes callback function with query results.
	 */
	allBurgers: function(cb) {
		orm.all(this.table, function(res) {
			cb(res);
		});
	},

	/**
	 * Calls orm.create function with table and given values from controller.
	 *
	 * @param  {Array}    cols Contains table column names to query.
	 * @param  {Array}    vals Contains new values to add to the table.
	 * @param  {Function} cb   Callback function to pass back.
	 * @return {Function} cb   Executes callback function with query results.
	 */
	saveBurger: function(cols, vals, cb) {
		orm.create(this.table, cols, vals, function(res) {
			cb(res);
		});
	},

	/**
	 * Calls orm.update with table and given values from controller.
	 *
	 * @param  {Object}   objColVals Object containing columns and values to update in mysql.
	 * @param  {String}   condition  Contains query condition that determines row to change.
	 * @param  {Function} cb		 Callback function to pass back.
	 * @return {Function} cb		 Executes callback function with query results.
	 */
	devourBurger: function(objColVals, condition, cb) {
		orm.update(this.table, objColVals, condition, function(res) {
			cb(res);
		});
	},

	/**
	 * Calls orm.delete with table and given values from controller.
	 *
	 * @param  {String}   condition Contains query condition that determines row to remove.
	 * @param  {Function} cb		Callback function to pass back.
	 * @return {Function} cb		Executes callback function with query results.
	 */
	trashBurger: function(condition, cb) {
		orm.delete(this.table, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;
