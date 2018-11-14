require("utils");


module.exports = {
	bootstrap: function () {
		new Router();
		Backbone.history.start();
	}
};

var Router = require('router');
