// ===============================================================================
// Burger model
// ===============================================================================

// require the ORM
var orm = require('../config/orm.js');

// create a burger object that incorporates the orm functions
var burger = {
	selectAll: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

// export burger
module.exports = burger;
