define('app', ['require', 'exports', 'module', "static/lib/utils/utils", 'router'], function(require, exports, module) {

  require("static/lib/utils/utils");
  
  module.exports = {
  	bootstrap: function () {
  		new Router();
  		Backbone.history.start();
  	}
  };
  
  var Router = require('router');

});